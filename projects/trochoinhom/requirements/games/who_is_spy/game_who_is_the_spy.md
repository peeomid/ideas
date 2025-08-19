# Game: Who is the Spy – Requirements & Interaction Flow

## Purpose
A social deduction game where most players get the same secret word, and one or more players ("spies") get a slightly different or blank clue. The spies must blend in; the others must find the spies.

---

## Game Rules (Adapted for MVP)
1. Each player is assigned **one secret word**:
   - Civilians get the **same word**.
   - Spies get a **different word** (or blank for higher difficulty).
2. Players take turns describing their word **without saying it directly**.
3. After everyone speaks, players **vote** for who they suspect is the spy.
4. The person with the most votes is revealed:
   - If spy is caught → civilians win.
   - If not → spy wins.
5. In MVP, **one spy only** is supported.

---

## Player Interaction Flow

### **One-Device Mode**
**Physical**
- Host controls the phone.
- Host passes the phone to each player in turn for word reveal.
- Players verbally describe words to the group.
- Voting done verbally, then host taps result.

**Digital**
1. **Host starts game** → chooses:
   - Number of players
   - Number of spies (MVP: 1)
   - Word pair
2. App generates player order.
3. For each player:
   - Screen shows **"Pass to Player X – Tap to Reveal"**.
   - On tap → display word for 5 seconds → back to pass screen.
4. After all have seen their word → app shows **"Voting Phase"**.
5. Host taps the player who lost vote → app reveals win/lose.

---

### **Multi-Device Mode**
**Physical**
- Players join room on their own devices.
- No passing devices.
- Players speak descriptions in the real world, same as one-device mode.
- Voting happens on individual devices.

**Digital**
1. Host creates room → gets room code.
2. Others join room via code, enter name.
3. Host starts game:
   - Backend assigns roles & words.
   - Each player’s device shows **only their own word**.
4. After speaking round (offline), devices show **voting UI**:
   - Player taps who they suspect.
5. Backend counts votes → sends result to all devices.

---

## UI Suggestion

### Lobby
- Player list (names & status: ready/not ready)
- Host: Start button
- Join form: Name + Room Code

### Game Screen (One Device)
- "Pass to Player X" screen with big button.
- Word reveal screen with large text + timer.
- Voting screen: List of names as buttons.

### Game Screen (Multi Device)
- Word screen immediately after start.
- Voting screen after discussion phase.

---

## Psychology & UX Considerations
- **Spy Identity Concealment**: Spy sees their clue just like others—no “You are the spy” text to avoid bias.
- **Pass Screen in 1-Device Mode**: Avoid accidental reveals; keep text vague (“Your word is: …”).
- **Voting Phase**: Keep votes secret until all submitted to avoid peer pressure.
- **Social Anchoring**: Show player names clearly so discussion references are easy.

---

## MVP Endpoints

### Common
- `POST /room/create` → returns room_id
- `POST /room/join` → join with room_id & name
- `GET /room/state` → get lobby/game state (polling)
- `POST /room/start` → host starts game

### Who is the Spy – Specific
- `GET /game/word` → player gets their own word
- `POST /game/vote` → submit vote for a player
- `GET /game/result` → returns winner & votes summary

---

## Backend Components
- **Room Manager** (in Redis: room state, players, game phase).
- **Role/Word Assigner**.
- **Vote Counter**.
- **State Broadcaster** (via polling/WebSocket).
