Alright — here’s the **Multiple Device Mode Interaction Document** for “Who Is the Spy?” tailored for your requirements, with full turn-by-turn detail, both **physical** and **digital** interactions, and design considerations to avoid accidental information leaks.

---

# **Multiple Device Mode — Interaction & Gameplay Flow**

## **Purpose**

Enable players in the same physical location to play "Who Is the Spy?" using their own devices, with a **shared game session** hosted by one player (the Host).
Goals:

* Reduce crowding around a single screen
* Ensure secrecy of words
* Allow smooth coordination between **physical talking/voting** and **digital input**.

---

## **Game Rules Recap**

* **Players**: 4–12 people.
* **Roles**: 1 spy, remaining are normal players.
* **Words**:

  * Non-spies share the same word.
  * Spy gets a similar but different word (but the spy will *not* be told they are the spy in the digital interface — they just see their own word and must guess others’).
* Rounds:

  * **Description**: Each player describes their word in turn.
  * **Voting**: Players vote for who they think is the spy.
  * Continue until spy is found, or spy survives until 2 players remain (spy wins).

---

## **Flow Overview**

We split into **phases**, and for each, describe:

1. **Physical Interaction** – what happens IRL
2. **Digital Interaction** – screen content, elements, actions, and effects

---

### **Phase A — Game Creation & Join**

**Host**:

* Opens website → Chooses “Who Is the Spy?” → Selects “Multiple Devices”
* Sets:

  * Player count (optional; can be determined from joins)
  * Word pairs (either from pre-set list or custom)
* Clicks **Create Game** → Server generates **Game Code** (e.g., 6 letters) and sets them as Host.

**Players**:

* Open site on their own phones → Click **Join Game**
* Enter **Game Code** → Enter Name → Wait in lobby screen.

**Digital Screens**:

* Host sees lobby list: Names of joined players + “Start Game” button
* Players see “Waiting for host to start…” screen

**Conditions**:

* Host can start only if **min. 4 players** joined
* If player leaves before start, they’re removed from the list instantly.

---

### **Phase B — Role Assignment & Word Reveal**

When Host clicks **Start Game**:

* Server randomly assigns spy role to 1 player
* Assigns word:

  * Non-spies → Word A
  * Spy → Word B (different word, but spy isn’t told they’re spy)
* Each player’s device shows:

  * “Your word is: \[WORD]”
  * Button: **Ready**
* Players **do not show screen** to others.
* After clicking **Ready**, screen changes to “Waiting for others…”

**Physical**: Players quietly check word → Hide screen.

**Conditions**:

* Game proceeds to description phase only after all players clicked Ready.

---

### **Phase C — Description Round**

**Physical**:

* Players take turns **describing their word** without revealing it.
* Turn order can be decided physically by players or auto-suggested on Host screen.

**Digital**:

* All devices display:

  * Round number
  * List of players (greyed if already spoken)
  * If turn-suggestion mode is ON → current speaker’s name highlighted.
* Host has **“Next Speaker”** button → highlights next player.
* All devices update instantly when Host advances.

**Additional Host Option**:

* **End Descriptions & Go to Voting** button — useful when players handle turn order themselves.

---

### **Phase D — Voting**

Triggered by Host → “Go to Voting”:

* Each player’s device shows:

  * Player list (tap to select who you think is the spy)
  * Confirm Vote button
* Once a player votes, they cannot change.
* Host screen shows real-time vote tally.

**Physical**:

* Players may discuss openly before voting.

**Conditions**:

* If tie → Host chooses tie-break method:

  * Re-vote among tied players
  * Eliminate all tied players (less common)

---

### **Phase E — Elimination & Continuation**

* Server determines eliminated player → All devices show result:

  * “X was eliminated.”
  * “They were \[Spy/Not Spy].”
* If Spy → game ends → Spy loses.
* If not Spy → new description round begins (remaining players continue).

**End Condition**:

* Game ends when:

  * Spy is eliminated → Non-spies win
  * Only 2 players remain → Spy wins

---

## **Screen Differentiation Between Roles**

* **Spy**: Sees their assigned word — no explicit “You are the spy” message.
* **Non-spy**: Sees their word — no role label either.
* **Host**: Has all standard player screens + control buttons for:

  * Start Game
  * Next Speaker
  * End Descriptions → Go to Voting
  * Tie-break decision

---

## **Technical Considerations**

* Backend: Go + Redis (game state + pub/sub updates)
* Communication: WebSocket or short polling (2–3s interval — enough for text-based updates)
* Security:

  * Word assignment only sent to the right player
  * Voting results sent to Host, then summary to all players
  * Prevent mid-game joining unless Host allows

---

If you want, I can now **draw the full multi-device flow diagram** with **every screen and action path**, so you can use it for both **frontend dev** and **QC testing**.
Would you like me to prepare that next?
