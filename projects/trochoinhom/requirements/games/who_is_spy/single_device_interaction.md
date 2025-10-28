# Who Is the Spy – Single Device Mode (Detailed Interaction Flow)

_Last updated: September 30, 2025_

## Purpose
This mode is designed for **groups playing physically together** using a single device (e.g., one phone or tablet). It balances **secrecy** (only the current player sees their word) with **speed** (fast name entry + word reveal in one step). The host coordinates gameplay outside the device, while the device mainly handles word assignment, voting, and game state tracking.

---

## Game Flow – Step by Step

### **A. Game Setup**
1. Host selects the game on the homepage → chooses **Single Device Mode**.
2. Host sets the number of players, number of spies (usually 1), and picks the topic/word list (predefined or random).
3. A **Continue with previous group** button appears beneath the selectors. Options:
   - **Not used**: host continues with blank inputs (same as the original flow).
   - **Used**: tapping opens a review modal showing the cached names in the saved order with checkboxes. The host deselects anyone missing. Confirming the modal:
     * Locks the player/spy counts to match the confirmed list.
     * Preloads the name-entry queue for Phase B.
4. Game generates one spy word and one non-spy word, then assigns roles randomly. (Role assignment happens after the roster is finalized so removed names never receive roles.)

### **B. Name Entry + Word Reveal (Combined Step)**
- The device is passed to each player in turn. The active screen keeps the full display private so previous players cannot see upcoming words.
- For each player:
  1. Screen shows `Enter your name → [Text input] + [Confirm]`.
     * If Phase A preloaded a name, it appears as the input value; the player can edit it before confirming.
  2. Pressing **Confirm** shows the assigned word on a full-screen card:
     * Spy sees the spy word.
     * Non-spy sees the normal word.
     * The screen never states “You are the spy”; different words alone create the tension.
  3. Player taps `[Got it]`. The screen clears back to a “Pass the device to the next player” prompt before the next name field is shown.
- Repeat until every active player has viewed their word.

### **C. Description / Speaking Round**
- Host instructs players to describe their word in one sentence without revealing it.
- Device displays:
  * Reminder text for the host.
  * Optional “Next Turn” button (for groups that want device-guided order) which now follows the filtered roster from Phase A/Phase E.
  * “End Round” button to jump to voting whenever the host is satisfied.
- Players talk in person; the device only serves as a pacing aid.

### **D. Voting Round**
1. Device lists the current active players (respecting any removals).
2. Group discusses aloud and picks one person to eliminate (no private ballots in MVP).
3. Host taps the chosen name and confirms the elimination.

### **E. Elimination, Removal & Continuation**
- Standard elimination outcomes:
  * If the eliminated player is the spy → non-spies win.
  * If the eliminated player is not the spy → return to the Description round with the remaining players.
  * If only two players remain after an elimination/removal → spy wins automatically.
- **Remove player control**: if someone leaves mid-game, the host can tap “Remove player” from the voting/elimination view. Confirming the removal:
  * Immediately prunes the player from the active roster and optional turn prompts.
  * Re-runs win-condition checks using the updated roster (e.g., spy leaving triggers non-spy victory).
  * Does not reveal the player’s word at any time.

### **F. End Game Screen**
- Shows outcome (Spy Win / Non-Spy Win) and reveals each player’s role & word.
- Offers **Play Again** with the same topic or return to the homepage.
- On completion, writes `{ playerOrder: string[], savedAt: ISO timestamp }` to `localStorage['who-is-spy:lastGroup']` for the next session. The cache is overwritten each time a session finishes.

---

## Group Retention & Dropout Handling
- Cached rosters only live on the local device/browser; no multi-group management is provided.
- Players must always confirm their own name before seeing a word, even when names are pre-filled.
- Any mid-game removal keeps secrecy intact by never surfacing the removed player’s word and by keeping the pass-the-device flow consistent (the next player simply sees their prompt when the device reaches them).

---

## Screen Summary (Single Device)

| Phase       | Screen Elements                                                        | Physical Action                                   |
| ----------- | ---------------------------------------------------------------------- | ------------------------------------------------- |
| Setup       | Player/spy selectors; Optional Continue modal; topic picker            | Host configures game, optionally loads roster     |
| Name+Word   | Name input (prefilled if cached) → word reveal → Got it                | Player confirms name, sees word privately         |
| Description | Instruction text + optional Next Turn + End Round                      | Players describe verbally                         |
| Voting      | Active player list (filtered) + Remove player control                  | Host records group vote or removes a dropout      |
| Elimination | Result, continue/finish                                                | Host continues or ends game                       |
| End Game    | Winner announcement + full role reveal                                 | Group reacts; device caches roster for next game  |

---

## Suggested Improvements for Gameplay Psychology
- No explicit spy indicator keeps tension high; spies infer their status from differing words.
- Combined name/word step maintains pace while protecting secrecy.
- Continue-with-previous-group reduces setup friction for recurring players.
- End Round button allows hosts to keep momentum during lively debates.
- Removal control keeps the game fair when people drop without breaking hidden-role secrecy.

---

If you need matching documentation for multiple-device mode or wireframes for the new modal and removal flows, note it below.
