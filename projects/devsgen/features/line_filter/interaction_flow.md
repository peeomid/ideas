# Line Filter Tool - Interaction Flow & UI Design

## Core User Scenarios

### Scenario 1: Debug Log Analysis
**User**: DevOps engineer investigating production errors
**Task**: Filter application log for ERROR messages, excluding DEBUG lines

**Step-by-Step Flow**:
```
1. User drags app.log onto drop zone
   Screen: "4,523 lines loaded"
   
2. User types "ERROR" in quick filter
   Types: "ERROR" in filter box
   Clicks: [Filter] button (no auto-processing)
   
3. Results show with highlighting
   Screen: Shows 234 matching lines
   Text: "ERROR" highlighted in each line
   Options: [Clear] [Add Filter] buttons appear
   
4. User makes filter permanent
   Clicks: [Add Filter]
   Modal: Include/Exclude choice, confirms "ERROR"
   Result: Filter added to permanent list
   
5. User adds exclude filter
   Types: "DEBUG" in quick filter
   Clicks: [Filter], then [Add Filter]
   Modal: Selects "Exclude" option
   Result: Lines with DEBUG removed from results
   
6. User copies results
   Selects filtered lines
   Clicks: [Copy All Visible] 
   Result: Filtered text copied to clipboard
```

### Scenario 2: CSV Data Cleaning
**User**: Data analyst cleaning customer export
**Task**: Remove test data and filter by status

**Step-by-Step Flow**:
```
1. User uploads customers.csv
   Screen: "2,341 rows, 4 columns detected"
   Auto-detected: Comma delimiter, headers in first row
   
2. Table view displays with column headers
   View: Table with sortable columns
   Headers: email | name | status | created_date
   Filter UI: Global filter + per-column dropdowns
   
3. User filters by specific column
   Clicks: "status" column dropdown → "Filter this column"
   Types: "active"
   Result: Shows only rows where status = "active"
   
4. User adds global exclude filter
   Types: "@test.com" in global filter
   Selects: "Exclude" + "All columns"
   Result: Removes test email rows from active users
   
5. User reviews filtered table
   Screen: Table shows 1,456 filtered rows
   Structure: Headers preserved, only matching rows shown
   
6. User copies filtered data
   Selects all visible rows
   Clicks: [Copy as CSV]
   Result: Table data with headers copied to clipboard
```

## UI Layout Design

### Desktop Layout (1440x900)

#### Initial State - No Data
```
┌──────────────────────────────────────────────────────────────┐
│ CodeTweak → Line Filter                            [?] [⚙️]  │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │                     📁                               │   │
│  │       Drop file here or click to browse             │   │
│  │                     - or -                          │   │
│  │         [Paste Text]  [Load Example]               │   │
│  │                                                      │   │
│  │   Supported: .log, .csv, .txt, .json up to 1GB     │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

#### After File Load - Text Mode
```
┌──────────────────────────────────────────────────────────────┐
│ Line Filter | server.log                         [Clear] [?] │
├──────────────────────────────────────────────────────────────┤
│ 📄 4,523 lines | Text Mode                                   │
├──────────────────────────────────────────────────────────────┤
│ 🔍 ERROR    [Filter] [All Text] ☐Case ☐Regex               │
├──────────────────────────────────────────────────────────────┤
│ ✅ Include "ERROR" (all text)                        [✏️][🗑️] │
│ ✅ Exclude "DEBUG" (all text)                        [✏️][🗑️] │
│ [+ Add Filter] [Clear All]                                   │
├──────────────────────────────────────────────────────────────┤
│ Showing 189 lines                    [Copy All Visible]     │
├──────────────────────────────────────────────────────────────┤
│ 002 │ 2024-01-15 10:23:44 ERROR Database connection failed │
│ 089 │ 2024-01-15 10:24:12 ERROR Timeout occurred          │
│ 156 │ 2024-01-15 10:24:45 ERROR Network unreachable       │
│     │ [showing filtered lines with highlights]              │
└──────────────────────────────────────────────────────────────┘
```

### After CSV Load - Table Mode  
```
┌──────────────────────────────────────────────────────────────┐
│ CSV Filter | customers.csv                      [Clear] [?]  │
├──────────────────────────────────────────────────────────────┤
│ 📊 2,341 rows, 4 columns | Table Mode | Headers: Row 1      │
│ [No Headers] [Manual Config] (if auto-detection wrong)     │
├──────────────────────────────────────────────────────────────┤
│ 🔍 active  [Filter] [status ▼] ☐Case ☐Regex               │
├──────────────────────────────────────────────────────────────┤
│ ✅ Include "active" (status column)              [✏️][🗑️]     │
│ ✅ Exclude "@test.com" (all columns)             [✏️][🗑️]     │
│ [+ Add Filter] [Clear All]                                   │
├──────────────────────────────────────────────────────────────┤
│ Showing 1,456 rows                       [Copy as CSV]      │
├──────────────────────────────────────────────────────────────┤
│ email            │ name        │ status  │ created_date     │
├──────────────────┼─────────────┼─────────┼──────────────────┤
│ john@company.com │ John Doe    │ active  │ 2024-01-15       │
│ jane@company.com │ Jane Smith  │ active  │ 2024-01-14       │
│ bob@company.com  │ Bob Johnson │ active  │ 2024-01-13       │
│                  │ [filtered table rows continue...]        │
└──────────────────────────────────────────────────────────────┘
```

### CSV Without Headers - After clicking [No Headers]
```
┌──────────────────────────────────────────────────────────────┐
│ CSV Filter | data.csv                           [Clear] [?]  │
├──────────────────────────────────────────────────────────────┤
│ 📊 2,341 rows, 4 columns | Table Mode | Headers: None       │
│ [Has Headers] [Manual Config] (to restore header detection) │
├──────────────────────────────────────────────────────────────┤
│ 🔍 active  [Filter] [Column3 ▼] ☐Case ☐Regex              │
├──────────────────────────────────────────────────────────────┤
│ ✅ Include "active" (Column3)                    [✏️][🗑️]     │
│ [+ Add Filter] [Clear All]                                   │
├──────────────────────────────────────────────────────────────┤
│ Showing 1,456 rows                       [Copy as CSV]      │
├──────────────────────────────────────────────────────────────┤
│ Column1          │ Column2     │ Column3 │ Column4          │
├──────────────────┼─────────────┼─────────┼──────────────────┤
│ john@company.com │ John Doe    │ active  │ 2024-01-15       │
│ jane@company.com │ Jane Smith  │ active  │ 2024-01-14       │
│ bob@company.com  │ Bob Johnson │ active  │ 2024-01-13       │
│                  │ [all rows treated as data, no headers]   │
└──────────────────────────────────────────────────────────────┘
```

### Mobile Layout (375x667)

#### Initial State
```
┌─────────────────┐
│ Line Filter ☰   │
├─────────────────┤
│                 │
│       📁        │
│   Upload File   │
│                 │
│       📋        │
│   Paste Text    │
│                 │
├─────────────────┤
│ No data loaded  │
└─────────────────┘
```

#### After Load - Collapsed Sections
```
┌─────────────────┐
│ Line Filter ☰   │
├─────────────────┤
│ 245K lines│52MB │
├─────────────────┤
│ 🔍 Quick filter │
├─────────────────┤
│ Filters (2) ▼   │
├─────────────────┤
│ Results: 1,234  │
├─────────────────┤
│ 142|ERROR DB... │
│ 256|WARN Mem... │
│ 389|ERROR Fail..│
│ [Scroll area]   │
├─────────────────┤
│ [Copy] [Export] │
└─────────────────┘
```

## Interactive Element Details

### Quick Filter Input

#### Text Mode
```
State 1: Empty
┌──────────────────────────────────────────────────────┐
│ 🔍 Type to filter...  [Filter] [All Text] ☐Case ☐Regex │
└──────────────────────────────────────────────────────┘

State 2: User typing "ERROR"
┌──────────────────────────────────────────────────────┐
│ 🔍 ERROR              [Filter] [All Text] ☐Case ☐Regex │
└──────────────────────────────────────────────────────┘

State 3: After filtering
┌──────────────────────────────────────────────────────┐
│ 🔍 ERROR         [Clear] [Add Filter] [All Text] ☐Case ☐Regex │
└──────────────────────────────────────────────────────┘
```

#### CSV Mode with Column Selector
```
State 1: Empty
┌──────────────────────────────────────────────────────┐
│ 🔍 Type to filter...  [Filter] [All Columns ▼] ☐Case ☐Regex │
└──────────────────────────────────────────────────────┘

Column Dropdown:
┌─ Filter Scope ──────┐
│ ● All Columns       │
│ ○ email             │
│ ○ name              │ 
│ ○ status            │
│ ○ created_date      │
└─────────────────────┘

State 2: Column-specific filter
┌──────────────────────────────────────────────────────┐
│ 🔍 active            [Filter] [status ▼] ☐Case ☐Regex │
└──────────────────────────────────────────────────────┘

State 3: After filtering
┌──────────────────────────────────────────────────────┐
│ 🔍 active       [Clear] [Add Filter] [status ▼] ☐Case ☐Regex │
└──────────────────────────────────────────────────────┘
```

### Filter List Management
```
Empty State:
┌─ Filters ──────────────────────────────────────┐
│ No filters applied - showing all 245,891 lines │
│                                                 │
│ [+ Add Filter]                                 │
└─────────────────────────────────────────────────┘

With Filters:
┌─ Active Filters (3) ───────────────────────────┐
│ ✅ Include  "ERROR"       (text)           [✏️][🗑️] │
│ ✅ Exclude  "DEBUG"       (text)           [✏️][🗑️] │
│ ❌ Include  "192.168"     (text)           [✏️][🗑️] │  ← Disabled
│                                                 │
│ [+ Add Filter] [Clear All]                     │
│                                                 │
│ Showing 189 lines                              │
└─────────────────────────────────────────────────┘
```

### Line Display States

#### Normal Line Display
```
│ 00142 │ 2024-01-15 10:23:45 ERROR Database connection failed │
```

#### Line with Highlighted Match
```
│ 00142 │ 2024-01-15 10:23:45 [ERROR] Database connection failed │
                                ^^^^^ highlighted in color
```

#### Line Selection (for copy)
```
│ 00142 │ 2024-01-15 10:23:45 ERROR Database connection failed │ ✓
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ selected row
```

## Modal Interfaces

### Add Filter Modal
```
┌─ Add Filter ──────────────────────────────────────────────┐
│                                                           │
│ Filter Type:  ● Include  ○ Exclude                       │
│                                                           │
│ Match Mode:   ● Text (fast)                              │
│               ○ Regex (powerful)                         │
│               ○ Glob (wildcards)                         │
│                                                           │
│ Pattern:      [ERROR: Database connection_______________] │
│                                                           │
│ Options:      □ Case sensitive                           │
│               □ Whole word only                          │
│               □ Column specific (CSV only)               │
│                                                           │
│ Test Preview: "2024-01-15 10:23:45 ERROR Database..."    │
│               ✅ This line would match                   │
│                                                           │
│ Live Count:   Estimated 1,234 matches                   │
│                                                           │
│ [Cancel]                            [Add Filter]         │
└───────────────────────────────────────────────────────────┘
```

### Export Options Modal
```
┌─ Export Filtered Data ────────────────────────────────────┐
│                                                           │
│ Export 1,234 filtered lines from server.log              │
│                                                           │
│ Format:       ● Plain Text (.txt)                        │
│               ○ CSV (.csv)                               │
│               ○ JSON Lines (.jsonl)                      │
│               ○ Original Format                          │
│                                                           │
│ Options:      ☑ Include line numbers                     │
│               ☑ Include timestamps                       │
│               □ Include filter info in header            │
│                                                           │
│ Filename:     [server_filtered_2024-01-15.txt__________] │
│                                                           │
│ Preview:      142: 2024-01-15 10:23:45 ERROR Database... │
│               256: 2024-01-15 10:24:12 WARN Memory...    │
│               ...                                         │
│                                                           │
│ [Generate Share Link]  [Cancel]  [Download File]        │
└───────────────────────────────────────────────────────────┘
```

## Loading and Progress States

### File Upload Progress
```
┌─ Processing server.log ───────────────────────────────────┐
│                                                           │
│ Reading file... ████████████████████████░░░░░░ 76%       │
│ 186,234 lines processed • 39.2 MB • 00:04 elapsed        │
│                                                           │
│ Estimated time remaining: 00:01                          │
│                                                           │
│ [Cancel]                                                  │
└───────────────────────────────────────────────────────────┘

After completion:
┌─ File Ready ──────────────────────────────────────────────┐
│ ✅ server.log loaded successfully                         │
│ 245,891 lines • 52.3 MB • Apache Combined format         │
│ Processing time: 5.2 seconds                             │
│                                                           │
│ [Start Filtering]                                         │
└───────────────────────────────────────────────────────────┘
```

### Filter Processing (Large Files)
```
┌─ Applying Filters ────────────────────────────────────────┐
│                                                           │
│ Filtering 245,891 lines... ██████████░░ 67%              │
│ Found 1,089 matches so far                               │
│                                                           │
│ Filter: Include "ERROR|WARN" (regex)                     │
│ Processing speed: ~45,000 lines/sec                      │
│                                                           │
│ [Cancel] (results will show what's processed so far)     │
└───────────────────────────────────────────────────────────┘
```

## Responsive Behavior

### Screen Breakpoints
- **Mobile**: < 768px - Single column, collapsible sections
- **Tablet**: 768px - 1024px - Condensed layout, smaller line heights
- **Desktop**: > 1024px - Full layout with all panels visible

### Interaction Adaptations
- **Touch devices**: Larger tap targets, swipe to delete filters
- **Keyboard users**: Full tab navigation, keyboard shortcuts
- **Screen readers**: Proper ARIA labels, live regions for updates

## Performance Feedback

### Visual Indicators
```
Processing states shown via:
- Progress bars with % complete
- Line count updates in real-time
- Processing speed metrics
- Estimated time remaining
- Ability to cancel long operations

Memory usage indicators:
- File size badges (1MB, 10MB, 100MB+)
- Memory tier indicators (In-Memory, IndexedDB, Worker)
- Warning for very large files (>500MB)
```

### Error States
```
┌─ Processing Error ────────────────────────────────────────┐
│ ⚠️ Unable to process file: server.log                    │
│                                                           │
│ Error: File appears to be corrupted or in an             │
│ unsupported format.                                       │
│                                                           │
│ Suggestions:                                             │
│ • Try opening in a text editor first                    │
│ • Check file encoding (UTF-8 recommended)               │
│ • Split large files into smaller chunks                 │
│                                                           │
│ [Try Again] [Choose Different File] [Get Help]          │
└───────────────────────────────────────────────────────────┘
```

## Keyboard Shortcuts

Minimal essential shortcuts for Line Filter:

| Shortcut | Action | Description |
|----------|--------|-------------|
| ⌘F | Focus Filter Input | Jump to filter input bar |
| ⌘Enter | Apply Filter | Process current filter input |
| ⌘C | Copy All Visible | Copy filtered results to clipboard |

### Implementation Notes

```typescript
// Minimal keyboard shortcuts
useEffect(() => {
  const shortcuts = [
    {
      key: 'f',
      metaKey: true,
      description: 'Focus filter input',
      handler: () => focusFilterInput()
    },
    {
      key: 'Enter',
      metaKey: true,
      description: 'Apply filter',
      handler: () => applyCurrentFilter()
    },
    {
      key: 'c',
      metaKey: true,
      description: 'Copy all visible',
      handler: () => copyAllVisible()
    }
  ];

  const registeredIds = shortcuts.map(shortcut => 
    keyboardShortcuts.register(shortcut)
  );

  return () => {
    registeredIds.forEach(id => keyboardShortcuts.unregister(id));
  };
}, []);
```

#### Context Behavior
- **⌘F**: Always focuses filter input
- **⌘Enter**: Applies filter when typing, works globally
- **⌘C**: Copies visible results
- **Esc**: Clears filter input or cancels modals

## Accessibility Features

### Keyboard Navigation
- Full tab navigation through all interactive elements
- Arrow key navigation in line results
- Enter/Space activation for all buttons
- Escape to cancel/close operations

### Visual Accessibility
- High contrast mode support
- Configurable font sizes
- Color-blind friendly highlighting
- Focus indicators on all interactive elements