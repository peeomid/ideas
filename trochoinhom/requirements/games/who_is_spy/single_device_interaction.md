Got it — here’s the updated **Single Device Mode** interaction doc for *Who is the Spy*, with your changes, plus my suggestion on when to end the game if the spy is not eliminated.

---

# Who Is the Spy – Single Device Mode (Detailed Interaction Flow)

## Purpose

This mode is designed for **groups playing physically together** using a single device (e.g., one phone or tablet).
It balances **secrecy** (only the current player sees their word) with **speed** (fast name entry + word reveal in one step).
The host coordinates gameplay outside the device, while the device mainly handles word assignment, voting, and game state tracking.

---

## Game Flow – Step by Step

### **A. Game Setup**

1. **Host selects game on homepage** → chooses **Single Device Mode**.
2. **Host configures:**

   * Number of players.
   * Number of spies (usually 1, but could be configurable later).
   * Topic/word list (either predefined or random from system).
3. **Game generates:**

   * One spy word (e.g., “orange”).
   * One non-spy word (e.g., “apple”).
   * Assigns spy role randomly.

---

### **B. Name Entry + Word Reveal (Combined Step)**

* The device is **passed to each player in turn**.
* For **each player**:

  1. Screen shows:
     `Enter your name → [Text input] + [Confirm]`
  2. Upon pressing **Confirm**, the **assigned word** is shown:

     * If spy → show spy’s word.
     * If non-spy → show normal word.
     * **Important:** The screen does **not** say “You are the spy” — the spy only suspects they might be different.
  3. Screen shows:
     `[Got it]` button → clears word and returns to "Pass device to next player" screen.
* Repeat until all players have seen their word.

---

### **C. Description / Speaking Round**

* Host announces:
  “Everyone describes their word in one sentence. Be careful not to reveal it directly.”
* The device shows:

  * Instructions: “Players describe their word, one by one.”
  * Optional “Next Turn” button (to guide turn order if group wants to keep track via device).
  * **New feature:** “End Round” button → Host presses to skip turn tracking and go directly to voting.
* **Outside device:**
  Players speak in physical space, listen to others, and try to spot the spy.

---

### **D. Voting Round**

1. Device shows list of player names.
2. All players (in physical space) discuss and agree on **one person to eliminate** (group vote, no private voting in MVP).
3. Host taps the voted player → Confirm elimination.

---

### **E. Elimination & Game Continuation Logic**

* If eliminated **player is the spy** → game ends, **non-spies win**.
* If eliminated **player is not the spy**:

  * Continue to **Description Round** with the remaining players.
  * Repeat voting until:

    1. **Spy is eliminated** → non-spies win.
    2. **Only 2 players remain** → spy wins (because spy can blend in easily at this stage).

---

### **F. End Game Screen**

* Show outcome (Spy Win / Non-Spy Win).
* Show role & word for each player.
* Option to **Play Again** with same settings or go to homepage.

---

## Suggested Improvements for Gameplay Psychology

* **No explicit spy indicator**: keeps tension high; spy has to bluff.
* **Combined name & word step**: speeds up setup and keeps energy high.
* **Host “End Round” button**: allows flexible pacing, avoids device slowing down lively in-person debates.
* **Continue after wrong elimination**: makes games longer and gives spy more chance to manipulate, increasing fun.
* **Reveal at the end**: Big “aha!” moment when players see who fooled them.

---

## Screen Summary (Single Device)

| Phase       | Screen Elements                                      | Physical Action                         |
| ----------- | ---------------------------------------------------- | --------------------------------------- |
| Setup       | Game config, word assignment                         | Host sets up game                       |
| Name+Word   | Name input → word reveal → Got it                    | Player enters name, sees word privately |
| Description | Instruction text + optional turn buttons + End Round | Players describe verbally               |
| Voting      | Player name list                                     | Host taps chosen player                 |
| Elimination | Result, continue/finish                              | Host continues or ends game             |
| End Game    | Winner + full role reveal                            | Group reacts, celebrates, or teases spy |

---

If you want, I can now write the **Multiple Device Mode** in the same deep level so we can compare how interactions differ and how much extra backend sync is required.
