# JSON Viewer - Technical Architecture

## Core Decisions Made

### Storage & Performance
- **OPFS (Origin Private File System)** for storage (faster than localStorage/IndexedDB)
- **Web Workers** for all processing to prevent UI blocking
- **JSONPath libraries** for powerful filtering instead of custom logic
- **Non-blocking architecture** similar to line filter tool

### Interface & Interactions
- **View-only tool**: No editing, no auto-copying
- **Manual search**: User must press Enter or click search button
- **Click-to-build paths**: Click JSON properties to build filter paths
- **Filter Sets**: Multiple values per filter (OR within set, AND between sets)
- **Toolbar + Sidebar layout**: Actions in toolbar, filters in right sidebar

### Filter System
- **Filter Sets concept**: Each filter can have multiple values
- **OR logic within filter set**: `users.*.job` IN ["engineer", "designer"]
- **AND logic between filter sets**: Job filter AND Gender filter
- **Two filter types**: VALUE search and PATH search
- **Tag-based multi-value input** for filter creation

## Technical Architecture (Based on Line Filter Pattern)

### File Structure
```
src/components/json-viewer/
├── JSONViewerLayout.tsx          # Main layout (toolbar + sidebar + tree)
├── JSONInput.tsx                 # File upload + text paste input  
├── JSONTree.tsx                  # Collapsible tree display
├── JSONRaw.tsx                   # Raw JSON text view
├── FilterSetInput.tsx            # Filter creation dialog
├── FilterSetList.tsx             # Active filter sets management
├── PathBuilder.tsx               # Click-to-build path functionality
└── ExportActions.tsx             # Copy/export toolbar

src/services/
├── JSONParserService.ts          # JSON validation & parsing
├── JSONWorkerService.ts          # Web Worker for filtering (based on FilterWorkerService)
└── OPFSStorageService.ts         # OPFS operations for large JSON

src/stores/
└── jsonViewerStore.ts            # Nanostores state management

src/types/
├── jsonViewer.ts                 # Main type definitions
├── filterSets.ts                 # Filter set types
└── jsonTree.ts                   # Tree node types

public/
└── json-filter.worker.js         # Web Worker for JSON filtering
```

### Core Data Types
```typescript
// Filter Set (multi-value concept)
interface FilterSet {
  id: string;
  type: 'PATH' | 'VALUE';
  path?: string;                  // "users.*.job" for PATH filters
  searchTerm?: string;            // "john" for VALUE filters
  values: string[];               // ["engineer", "designer"] - OR logic within set
  isActive: boolean;
  created: Date;
}

// Store State (similar to line filter)
interface JSONViewerState {
  // Data
  jsonData: any | null;
  originalJSON: string | null;
  isValidJSON: boolean;
  fileSize: number;
  
  // Filter Sets (AND between sets, OR within sets)
  activeFilterSets: Record<string, FilterSet>;
  filteredData: any | null;
  isFiltering: boolean;
  
  // UI State
  viewMode: 'tree' | 'raw';
  selectedPath: string | null;
  expandedNodes: Set<string>;
  currentPage: number;
}
```

### Web Worker Architecture (Following Line Filter Pattern)

**JSONWorkerService.ts** (Adapted from FilterWorkerService)
```typescript
export interface JSONFilterOptions {
  filterSetId: string;
  filterSets: FilterSet[];        // All active filter sets
  jsonData: any;
}

export class JSONWorkerService {
  private worker: Worker | null = null;
  private isInitialized = false;
  
  async initialize(): Promise<void> {
    this.worker = new Worker('/json-filter.worker.js');
    // Similar initialization pattern as line filter
  }
  
  async setJSON(jsonData: any): Promise<void> {
    // Store JSON in worker memory for filtering
    return this.worker?.postMessage({
      type: 'setJSON',
      payload: { jsonData }
    });
  }
  
  async applyFilterSets(filterSets: FilterSet[]): Promise<any> {
    // Apply filter sets with progress callbacks
    return new Promise((resolve) => {
      this.worker?.postMessage({
        type: 'filter',
        payload: { filterSets }
      });
    });
  }
}
```

**json-filter.worker.js** (Adapted from filter.worker.js)
```javascript
// JSON Filter Web Worker
let currentJSON = null;

self.onmessage = function(e) {
  const { type, payload } = e.data;
  
  switch (type) {
    case 'setJSON':
      currentJSON = payload.jsonData;
      sendSuccess('JSON loaded');
      break;
    case 'filter':
      performJSONFilter(payload.filterSets);
      break;
  }
};

function performJSONFilter(filterSets) {
  try {
    // Use JSONPath library for filtering
    import('jsonpath-plus').then(({ JSONPath }) => {
      let result = currentJSON;
      
      // Apply each filter set (AND logic between sets)
      filterSets.forEach(filterSet => {
        if (!filterSet.isActive) return;
        
        if (filterSet.type === 'PATH') {
          // Convert filter set to JSONPath query
          const queries = filterSet.values.map(value => 
            `$.${filterSet.path.replace('.*', '')}[?(@=="${value}")]`
          );
          // OR logic within set: combine queries
          result = JSONPath({ path: queries.join('|'), json: result });
        }
        
        if (filterSet.type === 'VALUE') {
          // Search all values containing any of the terms
          result = searchJSONValues(result, filterSet.values);
        }
      });
      
      self.postMessage({
        type: 'complete',
        payload: { filteredData: result }
      });
    });
  } catch (error) {
    sendError(error.message);
  }
}
```

### OPFS Storage Service

**OPFSStorageService.ts**
```typescript
export class OPFSStorageService {
  private opfsRoot: FileSystemDirectoryHandle | null = null;
  
  async initialize(): Promise<void> {
    this.opfsRoot = await navigator.storage.getDirectory();
  }
  
  async saveJSON(json: string): Promise<void> {
    const fileHandle = await this.opfsRoot!.getFileHandle('json-data.json', { create: true });
    const writable = await fileHandle.createWritable();
    await writable.write(json);
    await writable.close();
  }
  
  async loadJSON(): Promise<string> {
    const fileHandle = await this.opfsRoot!.getFileHandle('json-data.json');
    const file = await fileHandle.getFile();
    return await file.text();
  }
  
  async getStorageQuota(): Promise<{ used: number; quota: number }> {
    const estimate = await navigator.storage.estimate();
    return {
      used: estimate.usage || 0,
      quota: estimate.quota || 0
    };
  }
}
```

### Performance Optimizations (From Line Filter)

1. **Non-blocking Operations**: All JSON parsing/filtering in Web Workers
2. **Progressive Loading**: Large JSON processed in chunks with progress indicators
3. **Memory Management**: Clear worker data when switching files
4. **OPFS Efficiency**: Faster file I/O than localStorage/IndexedDB
5. **Memoization**: Cache filter results for repeated queries

### State Management Flow (Nanostores)
```typescript
export const jsonViewerStore = {
  // Core data atoms
  jsonData: atom<any>(null),
  filterSets: atom<Record<string, FilterSet>>({}),
  
  // Computed values
  filteredData: computed([jsonData, filterSets], async (data, filters) => {
    if (!data) return null;
    return await jsonWorkerService.applyFilterSets(Object.values(filters));
  }),
  
  // Actions
  addFilterSet: action(/* ... */),
  updateFilterSet: action(/* ... */),
  removeFilterSet: action(/* ... */)
};
```

## Main Components Structure

### 1. Main Layout Component
```
JSONViewerLayout.tsx (Main Container)
├── Toolbar (Horizontal Actions)
│   ├── View Toggle: [🌳 Tree | 📄 Raw]
│   ├── Copy Actions: [📋 Copy All | 🔗 Copy Path]
│   └── Export Actions: [💾 Export | 📤 Download]
├── Content Area (Split Layout)
│   ├── Left: JSON Display (70% width)
│   │   ├── JSONTree.tsx (default view)
│   │   └── JSONRaw.tsx (toggle view)
│   └── Right: Filter Sidebar (30% width)
│       ├── JSONInput.tsx (input phase)
│       ├── FilterSetList.tsx (active filters)
│       └── FilterSetInput.tsx (add new filters)
```

### 2. Input Phase Components
**JSONInput.tsx** - File upload + text paste (like FileUploader + TextPaster)
- File drag & drop interface
- Text paste area
- "Load JSON" process button
- JSON validation feedback

### 3. Main Display Components
**JSONTree.tsx** - Core tree view with click-to-build paths
- TreeNode components with expand/collapse
- Click handlers for building filter paths
- Path highlighting and breadcrumbs
- Progressive disclosure for large objects

**JSONRaw.tsx** - Simple formatted text view
- Syntax highlighted JSON display
- Copy functionality
- Search within raw text

### 4. Filter Components
**FilterSetList.tsx** - Active filter management (like FilterList)
- Filter set tags with checkbox toggles
- Edit/remove actions per filter
- Clear all functionality
- Filter count display

**FilterSetInput.tsx** - Filter creation dialog
- PATH vs VALUE filter type selection
- Multi-value tag input system
- Path autocomplete from JSON structure
- Smart placeholder examples

**FilterSetTag.tsx** - Individual filter display
- Type icons (📍 for PATH, 🔍 for VALUE)
- Multi-value display with "+N more" pattern
- Toggle, edit, remove actions

### 5. Data Flow Architecture

**Loading Phase:**
```
User Input → JSONInput → JSONParserService → OPFSStorageService → JSONWorkerService
```

**Filtering Phase:**
```
User Clicks JSON Property → FilterSetInput Dialog → FilterSetList → JSONWorkerService → Filtered Results
```

**Display Phase:**
```
JSONWorkerService → jsonViewerStore → JSONTree/JSONRaw → Updated UI
```

### 6. State Management (Nanostores)
```typescript
export const jsonViewerStore = {
  // Core data
  originalJSON: atom<string | null>(null),
  parsedJSON: atom<any | null>(null),
  
  // Filter sets (AND between sets, OR within sets)
  filterSets: atom<Record<string, FilterSet>>({}),
  filteredData: computed([parsedJSON, filterSets], applyFilters),
  
  // UI state
  viewMode: atom<'tree' | 'raw'>('tree'),
  selectedPath: atom<string | null>(null),
  isLoading: atom<boolean>(false),
  
  // Actions
  actions: {
    loadJSON,
    addFilterSet,
    removeFilterSet,
    toggleFilterSet,
    switchView
  }
};
```

This architecture provides **non-blocking UI**, **efficient storage**, and **powerful filtering** while following the proven patterns from the line filter tool.