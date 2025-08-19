# Who Is the Spy — Single-Device Mode

## Screen Flow & Functionality (Step-by-Step), Diagram, and QC Plan

> Scope: **single device** (pass-the-phone).
> Goal: a precise, testable spec covering **screens, elements, actions, conditions, and transitions**, plus a **flow diagram** and **QC/acceptance plan**.

---

## 0) Global Concepts

### Core Roles

* **Host**: starts/configures game, advances phases, confirms results.
* **Player i**: when holding device, privately enters name + sees their word.

### Key Rules (MVP)

* 1 spy; civilians share a common word; spy gets a different/blank word.
* **No “You are the spy” label** — spy only sees *a word* like others.
* After each vote:

  * If spy eliminated → **Civilians win**.
  * If non-spy eliminated → continue with remaining players.
  * If only **2 players remain and spy still alive** → **Spy wins**.

### State Variables (persisted so refresh can resume)

* `players[]`: `{ id, name, alive: bool, peekUsed: bool }`
* `order[]`: player id order
* `commonWord`, `spyWord`, `spyId`
* `phase`: `"setup" | "onboarding" | "speak" | "vote" | "result" | "end"`
* `currentIndex`: speaking index pointer (optional guidance)
* `voteMode`: `"public"` (MVP) | `"private"` (optional)
* `tally`: `{ targetPlayerId: count }` (public voting)
* `privateVotes[]`: `{ voterId, targetId }` (private voting)
* `eliminatedId`, `winner: "civilians" | "spy" | null`

---

## 1) Screen-by-Screen Specification

> Notation: **Action → Transition/Effect**. Conditions listed where applicable.

### S1. Game Setup (Host)

**Purpose:** Configure game and enter single-device flow.

**Contents / Elements**

* Title: “Who Is the Spy — Single Device”
* Controls:

  * `Number of players` (2–12, default 6)
  * `Spy count` (fixed 1 in MVP; disabled select)
  * `Word set` (dropdown: *Random*, *Food*, *Jobs*, …)
  * `Voting style` (radio): **Public (MVP default)** / Private (optional)
  * `Timer` toggle (disabled/ignored in MVP)
* Primary button: **Start Onboarding**

**Actions & Transitions**

* **Start Onboarding** →

  * Generate `spyId` (random among 1..N)
  * Select (`commonWord`, `spyWord`) based on `Word set`
  * Initialize `players[]` with placeholders; `order[]` (1..N)
  * Set `phase="onboarding"`, `currentIndex=0`
  * → **S2**

---

### S2. Player Card (Name Entry + Word Reveal) — repeated for each player in `order[]`

**Purpose:** Combine name entry and private reveal **in one pass**.

**Contents / Elements**

* Header: “Pass to Player {index+1}”
* Panel:

  * Label: “Enter your name”
  * `Text input`: placeholder “Your name”
  * `Confirm` button (disabled until non-empty)
* (After Confirm) **Reveal zone** replaces the input:

  * Text: “Hold to reveal your word (keep it secret)”
  * **Hold-to-Reveal** button (press & hold ≥ 800 ms)
  * On reveal: big word for 5s, **Hide now** (optional)
  * After hide: “You may peek once more.”

    * Buttons: **Peek again** (only once) • **I’m done**
* Footer: subtle instruction “Hand device back to host when done.”

**Conditions**

* `peekUsed` initially false per player.
* **Hold detection:** require ≥ 800 ms continuous press before reveal.

**Actions & Transitions**

* **Confirm (name non-empty)** → save `players[i].name` → show **Hold-to-Reveal**.
* **Hold-to-Reveal ≥ 800ms** → show word:

  * If `player.id == spyId` → show `spyWord`.
  * Else → show `commonWord`.
  * Start 5s auto-hide timer.
* **Hide now** → immediately hide; go to post-reveal screen.
* **Auto-hide after 5s** → post-reveal screen.
* **Peek again** (if `!peekUsed`) → show word for 2s → set `peekUsed=true` → return to post-reveal (button removed).
* **I’m done** →

  * If last player (`index == N-1`) → set `phase="speak"` → **S3**.
  * Else `currentIndex++` → loop **S2** for next player.

---

### S3. Speaking Round (Group Description)

**Purpose:** Facilitate the describing phase; allow **guided** turns or **free-form**.

**Contents / Elements**

* Instruction text: “Each player says **one sentence** about their word.”
* Optional guidance strip (collapsible):

  * “Current speaker: {order\[currentSpeakerIndex].name}”
  * Buttons: **Next speaker** (advances pointer)
* **End Round** (primary): skip guidance, go to voting anytime.
* Footer: small hint “Host may use Next speaker or press End Round to vote.”

**Actions & Transitions**

* **Next speaker** → `currentSpeakerIndex = (currentSpeakerIndex+1) % aliveCount` (ignores eliminated) — stays on **S3**.
* **End Round** → set `phase="vote"` → **S4** (or **S4b** if private voting chosen).

---

### S4. Voting — Public (MVP default)

**Purpose:** Host tallies spoken votes quickly.

**Contents / Elements**

* Title: “Vote: who is most suspicious?”
* For each **alive** player: a name button with small counter badge.
* Buttons: **Undo last**, **Finalize vote**
* Live display: “Total votes cast: X / N\_alive”

**Actions & Transitions**

* **Tap a name** → increment that player’s count in `tally`, push to **history stack** for undo.
* **Undo last** (if history not empty) → pop and decrement corresponding count.
* **Finalize vote**:

  * If no votes → show toast: “Cast at least one vote.”
  * Else compute highest count:

    * **If single highest** → `eliminatedId = thatPlayer`.
    * **If tie** → show **Tie dialog** (see below).
  * → **S5**.

**Tie Dialog (Public Voting)**

* Title: “Tie detected. Eliminate which player?”
* List of tied names (buttons)
* **Select one** → set `eliminatedId` → **S5**.

---

### (Optional) S4b. Voting — Private (Pass-the-Phone)

> If `voteMode="private"` selected in S1.

**Contents / Elements (loop per alive player)**

* Header: “Private Vote — {Player i}”
* Prompt: “Choose the most suspicious.”
* Name buttons (alive players only; **cannot vote self**)
* **Confirm** button

**Actions & Transitions**

* **Tap a name** → mark `targetId`.
* **Confirm** (requires `targetId`) → push to `privateVotes[]` and proceed to next alive player.
* After last vote:

  * Compute counts from `privateVotes[]`.
  * Tie handling same as public (tie dialog).
  * Set `eliminatedId`.
  * → **S5**.

---

### S5. Elimination & Outcome Check

**Purpose:** Confirm elimination, determine next step.

**Contents / Elements**

* Summary:

  * “Eliminated: **{playerName}**”
  * (Optional) small chart of votes (tallies or anonymized counts)

* Outcome logic:

  * If `eliminatedId == spyId` → “Spy eliminated — **Civilians win!**”
  * Else if `aliveCountAfterElimination == 2` → “Only 2 left — **Spy wins!**”
  * Else → “Continue — the spy is still hidden.”

* Buttons:

  * If civilians win OR spy wins:

    * **Show words** (reveals `commonWord` & `spyWord`)
    * **New round** (keep players, reshuffle, go to **S2** fresh)
    * **Exit to Home**
  * If continue:

    * **Proceed** (returns to **S3**, speaking round continues with remaining players)

**Actions & Transitions**

* **Proceed** (continue case) →

  * Mark `players[eliminatedId].alive=false`
  * Reset `tally` / `privateVotes[]`
  * Set `phase="speak"` → **S3**
* **Show words** → modal displays both words (no player mapping during mid-game).
* **New round** → reassign `spyId`, words; set all `alive=true`, `peekUsed=false`, `currentIndex=0`, `phase="onboarding"` → **S2**
* **Exit to Home** → end session.

---

### S6. End Game (Win Screen)

**Purpose:** Closure, reveal, replay.

**Contents / Elements**

* Big banner: “Civilians win!” or “Spy wins!”
* Reveal list:

  * For each player: `name — (CIVILIAN | SPY)`
* Words panel:

  * `Common word: _______`
  * `Spy word: _______` (or “Blank”)
* Buttons: **New round** • **Exit to Home**

**Actions & Transitions**

* **New round** → same as in S5.
* **Exit to Home** → terminate session.

---

## 2) Flow Diagram (Mermaid)

```mermaid
flowchart TD
  A[Setup (S1)] -->|Start Onboarding| B[Player Card (S2) i=1..N]
  B -->|All players done| C[Speaking (S3)]
  C -->|End Round| D{Voting Mode?}
  C -->|Optional Next speaker| C
  D -->|Public| E[Public Vote (S4)]
  D -->|Private| E2[Private Vote (S4b)]

  E --> F[Elimination & Outcome (S5)]
  E2 --> F

  F -->|Spy eliminated| G[End Game (S6)]
  F -->|2 alive & spy alive| G
  F -->|Continue| C

  G -->|New round| B
  G -->|Exit| H[Home]
```

---

## 3) Event & Transition Table (for devs & testers)

| Event                  | Pre-conditions      | Effects                          | Next Screen      |
| ---------------------- | ------------------- | -------------------------------- | ---------------- |
| Start Onboarding       | S1 configured       | init state, assign spy/words     | S2(i=1)          |
| Confirm Name           | input non-empty     | save name; show hold-to-reveal   | S2 (same i)      |
| Hold-to-Reveal >=800ms | not revealed yet    | show word 5s; allow Hide now     | S2 (reveal view) |
| Hide now / Auto-hide   | revealed            | show post-reveal actions         | S2 (post-reveal) |
| Peek again             | !peekUsed           | show word 2s; set peekUsed       | S2 (post-reveal) |
| I’m done               | post-reveal         | next player or finish onboarding | S2(i+1) or S3    |
| Next speaker           | S3                  | advance pointer                  | S3               |
| End Round              | S3                  | set phase vote                   | S4/S4b           |
| Public tap name        | S4                  | increment tally; push history    | S4               |
| Public undo            | S4 & history>0      | pop history; dec tally           | S4               |
| Public finalize        | S4 & ≥1 vote        | resolve tie → eliminatedId       | S5               |
| Private confirm        | S4b & target chosen | record vote; next voter or tally | S4b or S5        |
| Proceed (continue)     | S5 & continue case  | mark eliminated; reset tallies   | S3               |
| Show words             | S5/S6               | modal open                       | same             |
| New round              | S5/S6               | reset state; new spy/words       | S2               |
| Exit                   | S5/S6               | end session                      | Home             |

---

## 4) Edge Cases & Guards

* **Accidental back/refresh**: restore from persisted `phase`, `players`, `alive`, `order`, `currentIndex`, and per-player `peekUsed`.
* **Name typo**: allow host to edit names **only during S3** via small “Edit names” modal; prohibit once voting starts.
* **Self-vote in private**: disabled; UI prevents selecting self.
* **Tie in public/private**: explicit tie-break dialog for host.
* **Accessibility**: large tap targets; long-press threshold 800–1200ms; haptic feedback if available.

---

## 5) QC / Acceptance Plan

### A. Happy-Path Scenarios

1. **Civilians Win First Vote**

   * Configure 6 players, public vote.
   * Onboard all players; spy gets spyWord.
   * S3 → End Round (no guidance).
   * S4: cast majority on spy → Finalize → S5 shows civilians win → S6.
   * **Verify:** no “spy” label shown before S5; only word views.

2. **Wrong Elimination Then Civilians Win**

   * First vote eliminates civilian → S5 “Continue”.
   * Back to S3 → discuss → next vote eliminates spy → S5/S6.
   * **Verify:** alive counts update; previously eliminated hidden from all lists.

3. **Spy Win by Reduction**

   * Repeatedly eliminate civilians until 2 remain and spy alive → S5 declares spy win.
   * **Verify:** correct winner logic triggers exactly at 2 alive.

4. **Private Voting Flow**

   * Enable private votes, pass device through all alive players.
   * Ensure self-vote blocked; confirm tie resolution dialog appears if needed.

### B. Edge-Case Tests

* **Hold-to-Reveal timing**

  * Tap quickly (no reveal).
  * Hold 500ms (no reveal).
  * Hold 900ms (reveal).
* **Peek again limit**

  * Use once → second attempt disabled.
* **Undo in public voting**

  * Tap A, B, A → Undo → removes last A correctly.
* **Tie resolution**

  * Force a tie; choose tiebreak target → elimination recorded properly.
* **Refresh during S2/S3/S4**

  * Reload page → returns to correct screen with correct data.
* **Name edit window**

  * Edit allowed during S3; blocked in S4+.

### C. Visual/Content Checks

* **Spy concealment**

  * Reveal screen **identical** for spy/civilian (fonts, colors, icons).
* **Word secrecy**

  * No word persists on screen after hide; no residual previews in task switcher (consider blanking screen on background if feasible).

### D. Instrumentation & Logs (for audit)

Log events with timestamp + minimal payload:

* `setup_started`, `onboarding_started`
* `name_confirmed` `{playerId}`
* `word_revealed` `{playerId}` (no word in payload)
* `peek_used` `{playerId}`
* `speaking_started`, `next_speaker` `{playerId}`
* `vote_opened` `{mode}`
* `vote_cast_public` `{targetId}` or `vote_cast_private` `{voterId,targetId}` (consider hashing IDs if privacy required)
* `vote_undone`
* `eliminated` `{playerId}`
* `round_outcome` `{winner}`
* `new_round`, `exit`

Use these to reconstruct the flow and validate transitions post-hoc.

### E. Acceptance Criteria (must-pass)

* **No explicit spy labeling before S5/S6.**
* **Peek again** allowed **max once** per player.
* **Voting lists** always exclude eliminated players and (in private) exclude self.
* **Winner logic** matches rules on every run (unit tests for: spy eliminated, 2 alive & spy alive).
* **All transitions** in the Event Table reachable and reversible where specified (e.g., Undo).

---

## 6) Minimal Test Data & Configs

* Word pairs for QA:

  * `("MANGO", "PAPAYA")`, `("DOCTOR", "NURSE")`, `("CAR", "MOTORBIKE")`
* Player sets:

  * 4 names (fast), 6 names (default), 10 names (stress)
* Voting modes: **Public (default)** and Private (optional)

---

## 7) Implementation Hints (non-blocking)

* **Long-press**: capture `pointerdown` / `pointerup` with a timer; ignore scroll/drag.
* **Auto-hide**: clear word from DOM after hide (not just CSS).
* **Persistence**: localStorage or backend session (even single device) to survive refresh.
* **Atomic guard**: during reveal, lock navigation to prevent accidental transitions.

---

This document gives you a **clear, testable blueprint** for single-device mode: every screen’s **elements, actions, conditions**, the **flow diagram**, and a **QC plan** you can hand straight to dev & QA.
