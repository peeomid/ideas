# Single Device – Group Retention Decisions

_Last updated: September 30, 2025_

## Overview
These notes capture the decisions for reusing the previous group in the Who Is the Spy single-device flow while keeping word secrecy intact.

## Key Decisions
- Provide a **Continue with previous group** button during setup (Phase A). If the host taps it, show the cached roster in saved order with checkboxes so absent players can be deselected before play begins.
- If the host skips the continue option, the game starts fresh; no additional management is required.
- After a session ends (Phase F), cache `{ playerOrder: string[], savedAt }` to `localStorage['who-is-spy:lastGroup']`. Each new session overwrite the prior cache.
- During the Name + Word step (Phase B), prefill the name field with the next cached entry, but the player must still hit `Confirm` to view their word on a private screen.
- Add a **Remove player** control in the elimination phase (Phase E). Removing a player updates the active roster, triggers standard victory checks, and keeps any turn prompts in sync without revealing words.

## Open Points
- Design wireframes for the roster review modal and the Remove player confirmation to finalize copy.
- Ensure the state machine for Description and Voting phases gracefully skips removed players without exposing their prior words.
