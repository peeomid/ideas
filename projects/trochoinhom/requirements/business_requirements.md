# Group Party Games Website – Overall Requirements

## Purpose
A browser-based platform for quick, social, text-based party games that players can enjoy together in the same physical space.  
Target market: Vietnam, mobile-first design, minimal network latency requirements.

## Business Goals
- Provide a simple, fun way for friends to play games like "Who is the Spy?" and other social deduction or word games.
- Support **both**:
  - **One-device mode**: All players share a single phone/tablet.
  - **Multi-device mode**: Each player uses their own phone to join the same game room.
- Easy to join: No accounts required, just a room code.
- Scalable architecture that can handle many concurrent small groups without external dependencies (self-hosted).

## Homepage
- Displays a **list of available games** with short descriptions and thumbnails.
- Each game entry has:
  - Title
  - Brief rules
  - “Play” button → game lobby/room creation.
- Navigation:
  - **Home** → list of games
  - **About/Rules**
  - (Optional) **Settings** for site-wide preferences (e.g., dark mode).

## Technical Overview
- **Backend**: Go (e.g., `Gin` or `Fiber`) + Redis for state management.
- **Frontend**: Simple jQuery + HTML/CSS.
- **Communication**: HTTP polling or lightweight WebSocket (depending on the game’s needs).
- **Hosting**: Self-hosted VPS.

## Shared Components for All Games
1. **Lobby creation & joining**:
   - Create room → returns room code.
   - Join room → enter code + name.
2. **Player list sync** in lobby.
3. **Host controls** (start game, restart).
4. **Game state manager** in backend using Redis.
5. **Polling/WebSocket handler** for sending/receiving game state.
6. **Error handling & reconnection logic** in case of network drops.
