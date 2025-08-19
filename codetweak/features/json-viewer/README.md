# JSON Viewer & Filter Tool

A web-based tool for viewing, searching, and filtering JSON data with an intuitive interface.

## Core Concept

A developer utility that takes JSON input and provides powerful viewing and filtering capabilities without requiring complex query syntax.

## Design Decisions

### Interface
- **Tabbed interface** (not split view)
- **Simple filtering approach** - text search, type dropdowns, key filters, basic path filtering
- **No size limits** initially (can add performance optimizations later)
- **No integration** with other tools for now
- **No URL presets** initially (focus on core functionality first)

## Core Features

### JSON Input
- Paste JSON directly into textarea
- File upload support

### Viewing Options (Tabs)
- **View Tab**: Pretty-printed formatted view with collapsible tree structure
- **Filter Tab**: Simple filtering interface with text search and dropdown filters
- **Export Tab**: Copy, download, and CSV export options
- **Raw Tab**: Plain JSON text view

### Search & Filter (Simple Approach)
- Text search box: finds any JSON value containing the text
- Type filter dropdown: Show only strings, numbers, booleans, arrays, objects
- Key filter: Show keys containing specific text
- Basic path filter: Simple notation like "user.name" or "items.price"

### Output Options
- Copy filtered results to clipboard
- Download filtered JSON as file
- Export to CSV (for array data)
- Copy specific values or paths


## User Flow & Interface Design

### Flow Pattern (Similar to Line Filter)
1. **Input Screen**: User pastes JSON or uploads file → clicks "Load JSON"
2. **Main View**: Transitions to JSON viewer with toolbar + sidebar layout

### Layout: "Toolbar + Minimal Sidebar"
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

### Key Design Benefits
- **Horizontal toolbar**: Actions immediately accessible, maximizes vertical space
- **Progressive disclosure**: Basic search → Quick filters → Advanced filters
- **Immediate feedback**: Match count shows filter effectiveness
- **Clean hierarchy**: View modes and actions in toolbar, filters in sidebar

## Technical Considerations

- Client-side processing with Web Workers for performance
- State management approach (similar to regex tool)
- Keyboard shortcuts and accessibility
- Mobile responsiveness: sidebar becomes bottom drawer