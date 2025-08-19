# JSON Viewer - Interaction Design

## Core Interaction Principles

- **View-only tool**: No editing, no auto-copying
- **Manual search**: User must press Enter or click search button
- **Simple filtering**: Value search + path search only
- **Progressive disclosure**: Click to expand/collapse tree nodes

## Detailed Interactions

### JSON Tree Interactions

**Click on folder/object (`▶ user`):**
- Opens to show children: `name: "John"`, `age: 25`
- Arrow changes to `▼ user`

**Click on value (`"John"`):**
- Just highlights it (shows it's selected)
- Shows the path in sidebar: `user.name`
- **No auto-copying**

**Click on arrow only:**
- Same as clicking the folder - expand/collapse

### Search Interactions

**Value Search:**
- Type in search box: `john`
- **Nothing happens until** you press Enter or click search button
- Then highlights matching values and shows count

**Path Search:**
- **Method 1 - Click to Build Path**: Click any property in JSON tree → auto-fills search path
- **Method 2 - Type Path**: Type path like: `user.name` (with smart placeholder examples)
- Press Enter or click search
- Shows only that specific path/value

## Detailed Click-to-Build Path Interaction

### JSON Tree Click Behaviors

**Click on property key (`name`):**
- Property gets highlighted with blue background
- Search path auto-fills: `user.name`
- Path search input shows the filled path
- **No search executed yet** - user must press Enter or click search

**Click on nested property (`user` → `profile` → `avatar`):**
- Each click builds the path: `user` → `user.profile` → `user.profile.avatar`
- Previous path segment stays highlighted as "breadcrumb"
- Path accumulates in search input

**Click on array item (`items[0]`):**
- Clicking on array shows: `items`
- Clicking on specific item shows: `items[0]`
- Clicking on property in item shows: `items[0].title`

### Visual Feedback During Path Building

**Selected Path Highlighting:**
```
JSON Tree View:
┌─ user ← (blue highlight if selected)
│ ├─ name: "John" ← (blue highlight if selected)
│ └─ profile ← (blue highlight if selected)
│     └─ avatar: "pic.jpg" ← (blue highlight if selected)
└─ settings
```

**Path Breadcrumb Trail:**
- Shows visual connection from root to selected property
- Dimmed line connecting selected elements
- Makes the path visually traceable

### Smart Placeholder System

**Rotating Examples (Every 3 seconds):**
```
Empty state: "Click any property above, or try: user.name"
↓ (3 seconds later)
"Click any property above, or try: items[0].title"  
↓ (3 seconds later)
"Click any property above, or try: settings.theme"
```

**Context-Aware Placeholders:**
- If JSON has users array: "Try: users[0].email"
- If JSON has nested config: "Try: config.api.endpoint"
- If JSON has products: "Try: products[0].price"

### Sidebar Layout with Click-to-Build

```
┌─────────────────────────────┐
│ Search Values               │
│ [john_______________] 🔍    │
└─────────────────────────────┘

┌─────────────────────────────┐
│ Search Path                 │  
│ [user.profile.name___] 🔍   │ ← Auto-filled from clicks
│ 💡 Click any property above │
└─────────────────────────────┘

⚡ 3 matches
```

### Combined Interaction Flow

**Scenario: User wants to find all user emails**

1. **User sees JSON tree:**
```
┌─ users
│ ├─ [0]
│ │ ├─ name: "John"
│ │ └─ email: "john@example.com" ← User clicks here
│ └─ [1]
│     ├─ name: "Jane"  
│     └─ email: "jane@example.com"
```

2. **After clicking `email`:**
   - Path input shows: `users[0].email`
   - `email` property highlighted in blue
   - Breadcrumb trail: `users` → `[0]` → `email`

3. **User modifies path to `users[*].email` (or we provide this as suggestion)**

4. **User presses Enter:**
   - Shows both email values
   - Highlights all matching `email` properties in tree

## Multiple Filter System

### Filter Set Concept
- **Filter Sets**: Each filter can have multiple values (OR logic within set)
- **AND Logic**: Between different filter sets
- **Example**: `users.*.job` IN ["engineer", "designer"] AND `users.*.gender` IN ["female"]

### Filter Set Creation Dialog

**When user clicks JSON property:**
```
┌─────────────────────────────────────────┐
│ Add Filter for "users.*.job"? [❌]      │
├─────────────────────────────────────────┤
│ Path: [users.*.job        ]             │
│                                         │
│ Values (OR logic within this filter):   │
│ ┌─────────────────────────────────────┐ │
│ │ engineer              [❌]          │ │ ← Tag-based input
│ │ designer              [❌]          │ │
│ │ [Add value...         ]             │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ [Cancel] [Add Filter Set]               │
└─────────────────────────────────────────┘
```

### Active Filter Sets Display

```
┌─────────────────────────────────────────────────────────────┐
│ Filter Sets (AND logic between sets):                      │
│                                                             │
│ ☑ 📍 PATH "users.*.job"                          [✏️] [❌] │
│    Values: engineer, designer (3 matches)                  │
│                                                             │
│ ☑ 📍 PATH "users.*.gender"                       [✏️] [❌] │
│    Values: female (2 matches)                              │
│                                                             │
│ Final Results: 1 match (Jane)                              │
└─────────────────────────────────────────────────────────────┘
```

### Filter Logic Flow

**Example Scenario:**
1. **FilterSet1**: `users.*.job` IN ["engineer", "designer"] → 3 people
2. **FilterSet2**: `users.*.gender` IN ["female"] → 2 people  
3. **Result**: People who match BOTH sets → 1 person (Jane - female designer)

### Edit Filter Set

```
┌─────────────────────────────────────────┐
│ Edit Filter: "users.*.job"    [❌]      │
├─────────────────────────────────────────┤
│ Path: [users.*.job        ]             │
│                                         │
│ Values:                                 │
│ ┌─────────────────────────────────────┐ │
│ │ engineer              [❌]          │ │
│ │ designer              [❌]          │ │ 
│ │ manager               [❌]          │ │ ← Can add more
│ │ [Add value...         ]             │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ [Cancel] [Update Filter Set]            │
└─────────────────────────────────────────┘
```

### Right-Click Context Menu

**When right-clicking JSON property:**
- "Add filter for this path"
- "Add value to existing filter" (if path already filtered)
- "Copy path to clipboard"

### Toolbar Actions

**Tree View | Raw JSON:**
- Click to switch between views

**Copy buttons:**
- User manually clicks to copy
- Shows "Copied!" message

**Removed Features:**
- ~~Quick filter buttons [Strings] [Numbers]~~
- ~~Auto-copy anything~~
- ~~Inline editing~~
- ~~Live search~~

## Layout Reference

```
┌─────────────────────────────────────────┐
│ 🌳 Tree View | 📄 Raw JSON | 📋 Copy All│
│ 💾 Export Filtered | 🔗 Copy Path       │
└─────────────────────────────────────────┘
┌─────────────────────┬─────────────────┐
│                     │ ┌─────────────┐ │
│                     │ │Search Values│ │
│                     │ │[query_____] │ │
│   JSON TREE VIEW    │ └─────────────┘ │
│                     │                 │
│   ┌─ user           │ Quick Filters:  │
│   │ ├─ name: "John" │ [Strings] [#]   │
│   │ └─ age: 25      │ [Arrays] [{}]   │
│   └─ settings       │                 │
│       └─ theme      │ Advanced:       │
│                     │ Key Filter:     │
│                     │ [pattern____]   │
│                     │                 │
│                     │ Path Filter:    │
│                     │ [user.name__]   │
│                     │                 │
│                     │ ⚡ 45 matches   │
└─────────────────────┴─────────────────┘
```