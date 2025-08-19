# Interaction Flow Diagrams

## Primary User Flow: Text to Reading

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   DISCOVER  │───▶│    PASTE    │───▶│   FORMAT    │───▶│    READ     │
│   Content   │    │    Text     │    │   Content   │    │  & Enjoy    │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
      │                    │                   │                   │
      ▼                    ▼                   ▼                   ▼
  User finds          Cmd+V or Tap        Auto-process        Comfortable
   content to        in paste area       & apply styles      reading exp.
     consume              │                   │                   │
                          │                   │                   │
                    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
                    │ Alternative │    │ Instant     │    │ Export/     │
                    │ Input Ways  │    │ Feedback    │    │ Share       │
                    └─────────────┘    └─────────────┘    └─────────────┘
                          │                   │                   │
                    • File upload        • Progress bar     • Copy link
                    • Drag & drop        • Success state    • PDF export
                    • URL import         • Error handling   • Print view
```

## State Transition Model

### Desktop Application States

```
                    ┌─────────────────┐
                    │   EMPTY STATE   │◄──────────┐
                    │   (Landing)     │           │
                    └─────────┬───────┘           │
                              │ paste/type        │
                              ▼                   │ escape/clear
                    ┌─────────────────┐           │
               ┌────│   INPUT STATE   │           │
               │    │  (Has content)  │           │
               │    └─────────┬───────┘           │
               │              │ format            │
               │              ▼                   │
               │    ┌─────────────────┐           │
               │    │ PROCESSING      │           │
               │    │ (Brief loading) │           │
               │    └─────────┬───────┘           │
               │              │ complete          │
               │              ▼                   │
               │    ┌─────────────────┐           │
               │    │  READING STATE  │───────────┘
               │    │  (Formatted)    │ edit
               │    └─────────┬───────┘
               │              │ customize
               │              ▼
               │    ┌─────────────────┐
               └───▶│ SETTINGS STATE  │
                    │ (Preferences)   │
                    └─────────────────┘
```

### Mobile State Flow

```
     ┌─────────────┐
     │   MOBILE    │
     │   LANDING   │
     └──────┬──────┘
            │ tap paste area
            ▼
     ┌─────────────┐
     │  KEYBOARD   │──────┐
     │   ACTIVE    │      │ paste
     └──────┬──────┘      │
            │ type        │
            ▼             ▼
     ┌─────────────┐ ┌─────────────┐
     │  TYPING     │ │   PASTED    │
     │   STATE     │ │   CONTENT   │
     └──────┬──────┘ └──────┬──────┘
            │               │
            └───────┬───────┘
                    │ format button
                    ▼
           ┌─────────────┐
           │ FULL-SCREEN │
           │  READING    │
           └─────────────┘
```

## Keyboard Interaction Patterns

### Universal Shortcuts (All States)

```
┌─────────────────┬──────────────────┬─────────────────────┐
│   SHORTCUT      │      STATE       │       ACTION        │
├─────────────────┼──────────────────┼─────────────────────┤
│   Cmd/Ctrl+V   │       Any        │ Paste & auto-format │
│   Cmd/Ctrl+N   │       Any        │ New/Clear content   │
│   Cmd/Ctrl+D   │       Any        │ Toggle dark mode    │
│      Esc        │    Non-empty     │ Return to empty     │
│   Cmd/Ctrl+/   │       Any        │ Show shortcuts      │
└─────────────────┴──────────────────┴─────────────────────┘
```

### Reading Mode Shortcuts

```
┌─────────────────┬─────────────────────────────────────┐
│   SHORTCUT      │              ACTION                 │
├─────────────────┼─────────────────────────────────────┤
│     Space       │ Scroll down one screen              │
│  Shift+Space    │ Scroll up one screen                │
│      j/k        │ Scroll line by line (vim-like)      │
│      g/G        │ Go to top/bottom                    │
│   Cmd/Ctrl+F   │ Find in text                        │
│       t         │ Toggle table of contents            │
│   Cmd/Ctrl+E   │ Export options                      │
│   Cmd/Ctrl+S   │ Save/bookmark                       │
│   Cmd/Ctrl+P   │ Print                               │
│   Cmd/Ctrl+R   │ Return to edit mode                 │
│    +/- (num)    │ Increase/decrease font size         │
└─────────────────┴─────────────────────────────────────┘
```

## Touch Interaction Flow (Mobile)

### Gesture Map

```
┌─────────────────────────────────────────────┐
│               MOBILE GESTURES                │
├─────────────────┬───────────────────────────┤
│    GESTURE      │         ACTION            │
├─────────────────┼───────────────────────────┤
│ Tap paste area  │ Focus & show keyboard     │
│ Long press      │ Paste menu               │
│ Swipe left      │ Previous TOC section     │
│ Swipe right     │ Next TOC section         │
│ Pinch in/out    │ Decrease/increase font   │
│ Double tap      │ Toggle focus mode        │
│ Pull down       │ Return to input mode     │
│ Scroll up       │ Show header/controls     │
└─────────────────┴───────────────────────────┘
```

### Mobile Scroll Behavior

```
     Normal Reading
           │
    ┌─────────────┐
    │   Header    │ ◄─── Always visible initially
    │   Visible   │
    └─────────────┘
           │ scroll down
           ▼
    ┌─────────────┐
    │   Header    │ ◄─── Auto-hide for max reading space
    │   Hidden    │
    └─────────────┘
           │ scroll up or
           │ reach top
           ▼
    ┌─────────────┐
    │   Header    │ ◄─── Slide back in
    │   Visible   │
    └─────────────┘
```

## Error State Handling

### Input Validation Flow

```
    User Input
        │
        ▼
   ┌─────────────┐     No    ┌─────────────┐
   │ Has Content?├──────────▶│Show Helper  │
   └─────┬───────┘           │Text/Examples│
         │ Yes               └─────────────┘
         ▼
   ┌─────────────┐     No    ┌─────────────┐
   │Valid Text?  ├──────────▶│Show Error + │
   └─────┬───────┘           │Suggestions  │
         │ Yes               └─────────────┘
         ▼
   ┌─────────────┐    Fail   ┌─────────────┐
   │ Process OK? ├──────────▶│Retry with   │
   └─────┬───────┘           │Fallback     │
         │ Success           └─────────────┘
         ▼
   ┌─────────────┐
   │ Show Result │
   └─────────────┘
```

### Error Messages with Recovery

```
┌────────────────────────────────────────────────────────────┐
│                    ERROR SCENARIOS                         │
├──────────────────┬─────────────────┬─────────────────────┤
│     ERROR        │    MESSAGE      │      RECOVERY       │
├──────────────────┼─────────────────┼─────────────────────┤
│ Empty input      │ "Paste some     │ Show examples       │
│                  │ text to start"  │ Focus paste area    │
├──────────────────┼─────────────────┼─────────────────────┤
│ Invalid format   │ "Couldn't       │ Clean & retry       │
│                  │ process text"   │ Show paste again    │
├──────────────────┼─────────────────┼─────────────────────┤
│ Too large        │ "Text too long  │ Process first 10k   │
│                  │ (limit 50k)"    │ Offer file upload   │
├──────────────────┼─────────────────┼─────────────────────┤
│ Network error    │ "Processing     │ Retry automatically │
│                  │ offline..."     │ Queue for later     │
└──────────────────┴─────────────────┴─────────────────────┘
```

## Progressive Enhancement Flow

### Feature Detection & Fallbacks

```
    Page Load
        │
        ▼
┌─────────────────┐
│ Check Browser   │
│ Capabilities    │
└─────┬───────────┘
      │
  ┌───▼───┐
  │ Basic │ ──┐
  │ HTML  │   │
  └───────┘   │
              │
  ┌───▼───┐   │
  │  CSS  │ ──┤
  │ Works │   │   ┌─────────────┐
  └───────┘   ├──▶│Full Feature │
              │   │ Experience  │
  ┌───▼───┐   │   └─────────────┘
  │  JS   │ ──┘
  │ Works │
  └───────┘
      │
      ▼
┌─────────────────┐
│ PWA Features    │
│ Available?      │
└─────┬───────────┘
      │
  ┌───▼───┐
  │ Add   │
  │ PWA   │
  │ Layer │
  └───────┘
```

## Accessibility Interaction Patterns

### Screen Reader Navigation

```
┌─────────────────────────────────────────────────────────┐
│               SCREEN READER LANDMARKS                   │
├─────────────────┬───────────────────────────────────────┤
│    ELEMENT      │            LABEL/ROLE                │
├─────────────────┼───────────────────────────────────────┤
│ Main container  │ main - "Article reading area"        │
│ Input area      │ region - "Text input"                │
│ Format button   │ button - "Format text for reading"   │
│ Reading content │ article - "Formatted article"        │
│ TOC sidebar     │ navigation - "Table of contents"     │
│ Settings menu   │ dialog - "Reading preferences"       │
└─────────────────┴───────────────────────────────────────┘
```

### Keyboard Focus Flow

```
Tab Order:
1. Skip to content link (hidden until focused)
2. Settings button
3. Dark mode toggle
4. Help button
5. Paste text area
6. Format button
7. (Reading mode) TOC items
8. (Reading mode) Export button
9. (Reading mode) Reading content (focusable for find)
```

## Performance Interaction Model

### Perceived Performance Optimizations

```
User Action          Immediate Feedback       Background Process
     │                       │                        │
     ▼                       ▼                        ▼
  Paste Text         Show typing indicator     Parse & analyze
     │                       │                        │
     ▼                       ▼                        ▼
  Click Format       Disable button +         Apply formatting
     │               Show progress                     │
     ▼                       │                        ▼
  Processing         Skeleton layout          Generate TOC
     │               + fade transitions               │
     ▼                       │                        ▼
  Complete           Smooth reveal            Cache result
```

### Loading State Micro-interactions

```
┌─────────────────────────────────────────────────────────┐
│                 LOADING ANIMATIONS                      │
├─────────────────┬───────────────────────────────────────┤
│     PHASE       │              VISUAL                  │
├─────────────────┼───────────────────────────────────────┤
│ 0-100ms         │ Immediate button press feedback      │
│ 100-300ms       │ Button disabled + spinner            │
│ 300-800ms       │ Skeleton layout fades in             │
│ 800ms+          │ Content streams in progressively     │
└─────────────────┴───────────────────────────────────────┘
```

This comprehensive interaction flow ensures users always understand their current state, available actions, and how to accomplish their reading goals with minimal cognitive overhead.