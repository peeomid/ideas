# Line Filter Tool - Implementation Plan

## Reference Documents

This implementation plan builds upon the following specification documents:

- **[Tool Description](./tool_description.md)** - High-level overview, use cases, and value proposition
- **[Technical Specification](./tech_spec.md)** - Technical architecture, IndexedDB + Web Worker approach, and performance requirements
- **[Interaction Flow](./interaction_flow.md)** - Detailed user workflows, UI layouts, and keyboard shortcuts

**Key Requirements from Specifications:**
- **Performance**: 10k lines max, <200ms load time, guaranteed non-blocking UI
- **Storage**: IndexedDB + Web Worker architecture for zero UI blocking
- **Features**: Text/CSV filtering, include/exclude logic, column targeting
- **UX**: Keyboard shortcuts (⌘F, ⌘Enter, ⌘C, Esc), responsive design

## Phase 1: Foundation Setup (Week 1)

### Day 1-2: Project Structure & Dependencies
- [ ] Create component directory structure (see [tech_spec.md - File Organization](./tech_spec.md#file-organization))
- [ ] Install dependencies: `dexie` (per [tech_spec.md - Technology Stack](./tech_spec.md#technology-stack))
- [ ] Set up TypeScript interfaces in `/src/types/` (see [tech_spec.md - Core Types](./tech_spec.md#core-types))
- [ ] Create basic Astro page at `/src/pages/tools/line-filter/index.astro`

**Files to Create:**
```
/src/types/
├── database.ts        # Line, CSVLine interfaces
├── filters.ts         # TextFilter, CSVFilter interfaces
└── ui.ts             # UI state interfaces

/src/components/line-filter/
└── LineFilterLayout.tsx  # Empty container component
```

**Dependencies:**
```bash
npm install dexie
npm install -D @types/dexie
```

### Day 3-4: Core Services Layer
- [ ] Implement `DatabaseService.ts` with IndexedDB setup (see [tech_spec.md - Database Service](./tech_spec.md#database-service))
- [ ] Create `FileParserService.ts` for file type detection (see [tech_spec.md - File Parser Service](./tech_spec.md#file-parser-service))
- [ ] Write unit tests for services (see [tech_spec.md - Unit Tests](./tech_spec.md#unit-tests))
- [ ] Set up Web Worker file (`/public/filter.worker.js`) (see [tech_spec.md - Web Worker Implementation](./tech_spec.md#web-worker-for-larger-files-5k-10k-lines))

**Priority Order:**
1. `DatabaseService` - Core data storage
2. `FileParserService` - File type detection
3. Basic Web Worker setup
4. Unit tests for services

### Day 5-7: State Management
- [ ] Create Nanostores for state management (see [tech_spec.md - State Management Architecture](./tech_spec.md#state-management-architecture))
- [ ] Implement `lineFilterStore.ts` with core atoms
- [ ] Create computed values for UI state
- [ ] Test state management integration

**State Structure:**
```typescript
// Core atoms
dataType: 'none' | 'text' | 'csv'
lineCount: number
csvHeaders: string[]
isProcessing: boolean
progress: number

// Computed
hasData: boolean
canFilter: boolean
```

## Phase 2: Basic UI Components (Week 2)

### Day 8-10: Data Input Components
- [ ] Implement `FileUploader.tsx` with drag & drop (see [interaction_flow.md - Initial State](./interaction_flow.md#initial-state---no-data))
- [ ] Create `TextPaster.tsx` for paste functionality
- [ ] Add `FormatDetector.tsx` for automatic CSV/text detection (per [tool_description.md - Key Features](./tool_description.md#key-features))
- [ ] Add basic file validation (size, line count limits) (see [tech_spec.md - File Size Limits](./tech_spec.md#file-size-limits))

**Component Features:**
- Drag & drop file upload
- Paste text area
- Auto-format detection
- File size/line limits (10k lines, 5MB)
- Progress indication during upload

### Day 11-12: Filter Input Components
- [ ] Create `TextFilterInput.tsx` for text/log filtering (see [interaction_flow.md - Text Mode](./interaction_flow.md#text-mode))
- [ ] Implement `CSVFilterInput.tsx` with column selection (see [interaction_flow.md - CSV Mode with Column Selector](./interaction_flow.md#csv-mode-with-column-selector))
- [ ] Add `FilterList.tsx` for managing active filters (see [interaction_flow.md - Filter List Management](./interaction_flow.md#filter-list-management))
- [ ] Build `FilterModal.tsx` for advanced filter options (see [interaction_flow.md - Add Filter Modal](./interaction_flow.md#add-filter-modal))

**Filter UI Features:**
- Pattern input with validation
- Include/Exclude toggle
- Case sensitivity option
- Regex mode toggle
- Column selector (CSV only)
- Live filter preview

### Day 13-14: Results Display Components
- [ ] Build `TextResults.tsx` for text/log display (see [interaction_flow.md - After File Load - Text Mode](./interaction_flow.md#after-file-load---text-mode))
- [ ] Create `CSVResults.tsx` with table layout (see [interaction_flow.md - After CSV Load - Table Mode](./interaction_flow.md#after-csv-load---table-mode))
- [ ] Implement `ProgressBar.tsx` for filtering progress (see [interaction_flow.md - Loading and Progress States](./interaction_flow.md#loading-and-progress-states))
- [ ] Add `ResultsHeader.tsx` with count and actions

**Display Features:**
- Line number display
- Match highlighting
- Efficient rendering (no virtual scroll initially)
- Copy functionality
- Result count display

## Phase 3: Core Functionality (Week 3)

### Day 15-17: Web Worker Implementation
- [ ] Complete `filter.worker.js` with text filtering (see [tech_spec.md - Web Worker for Larger Files](./tech_spec.md#web-worker-for-larger-files-5k-10k-lines))
- [ ] Add CSV column filtering to worker (see [tech_spec.md - CSV Filtering Logic](./tech_spec.md#csv-filtering-logic))
- [ ] Implement progress reporting
- [ ] Add error handling and validation

**Worker Capabilities:**
- Text pattern matching (include/exclude)
- CSV column-specific filtering
- Regex support
- Progress updates every 500 lines
- Error handling for invalid patterns

### Day 18-19: Integration & Testing
- [ ] Connect all components in `LineFilterLayout.tsx` (see [tech_spec.md - Component Architecture](./tech_spec.md#component-architecture))
- [ ] Implement keyboard shortcuts (⌘F, ⌘Enter, ⌘C, Esc) (see [interaction_flow.md - Keyboard Shortcuts](./interaction_flow.md#keyboard-shortcuts))
- [ ] Add comprehensive error handling (see [interaction_flow.md - Error States](./interaction_flow.md#error-states))
- [ ] Write integration tests (see [tech_spec.md - Integration Tests](./tech_spec.md#integration-tests))

**Integration Features:**
- File upload → parse → store → filter → display pipeline
- Keyboard shortcuts using existing `keyboardShortcuts.ts`
- Error states and user feedback
- Loading states during processing

### Day 20-21: Performance Optimization
- [ ] Test with 10k line files (per [tech_spec.md - Performance Targets](./tech_spec.md#performance-targets))
- [ ] Optimize IndexedDB batch operations (see [tech_spec.md - Non-Blocking Processing Strategy](./tech_spec.md#non-blocking-processing-strategy))
- [ ] Add result pagination/lazy loading
- [ ] Performance testing and profiling (see [tech_spec.md - Performance Tests](./tech_spec.md#performance-tests))

**Performance Targets:**
- 10k lines load in <200ms
- Filtering in <50ms (text) or <500ms (CSV)
- No UI blocking during any operation
- Memory usage <200KB for UI

## Phase 4: Advanced Features (Week 4)

### Day 22-23: CSV Enhancements
- [ ] Header detection toggle ([No Headers] button) (see [interaction_flow.md - CSV Without Headers](./interaction_flow.md#csv-without-headers---after-clicking-no-headers))
- [ ] Custom delimiter support
- [ ] CSV export functionality
- [ ] Column-specific filter shortcuts

**CSV Features:**
- Manual header override
- Support for tab, semicolon delimiters
- Export filtered CSV with headers
- Quick column filter from header click

### Day 24-25: User Experience Polish
- [ ] Add filter presets/templates
- [ ] Implement copy-to-clipboard functionality
- [ ] Add help/documentation tooltips
- [ ] Mobile responsive design (see [interaction_flow.md - Mobile Layout](./interaction_flow.md#mobile-layout-375x667))

**UX Improvements:**
- Common filter patterns (email extraction, error logs)
- One-click copy for results
- Contextual help system
- Touch-friendly mobile interface

### Day 26-27: Testing & Documentation
- [ ] Complete test suite (unit, integration, performance) (see [tech_spec.md - Testing Strategy](./tech_spec.md#testing-strategy))
- [ ] Browser compatibility testing
- [ ] Accessibility testing (keyboard navigation, screen readers) (see [interaction_flow.md - Accessibility Features](./interaction_flow.md#accessibility-features))
- [ ] Update documentation and examples

**Testing Coverage:**
- Service layer: 90%+ test coverage
- Component tests with user interactions
- Cross-browser testing (Chrome, Firefox, Safari)
- Performance tests with large datasets

### Day 28: Release Preparation
- [ ] Final performance testing
- [ ] Production build optimization
- [ ] Create example files for demo
- [ ] Launch preparation checklist

## Testing Strategy by Phase

### Phase 1 Tests
```typescript
// Service Tests
DatabaseService.test.ts
- storeTextLines()
- storeCSVLines()  
- getLineCount()
- clearData()

FileParserService.test.ts
- parseFile()
- detectFileType()
- extractCSVHeaders()
```

### Phase 2 Tests
```typescript
// Component Tests
FileUploader.test.tsx
- drag & drop functionality
- file validation
- progress indication

TextFilterInput.test.tsx
- filter creation
- validation
- pattern preview

CSVFilterInput.test.tsx
- column selection
- scope targeting
- filter generation
```

### Phase 3 Tests
```typescript
// Integration Tests
LineFilterLayout.integration.test.tsx
- complete user workflows
- text file filtering
- CSV file filtering
- error scenarios

// Performance Tests
performance.test.ts
- 10k line processing
- memory usage
- UI responsiveness
```

### Phase 4 Tests
```typescript
// End-to-End Tests
e2e.test.ts
- full application workflows
- browser compatibility
- keyboard shortcuts
- accessibility compliance
```

## Risk Mitigation

### Technical Risks
1. **IndexedDB Browser Support**: Test across browsers, provide graceful fallback
2. **Web Worker Performance**: Benchmark with real datasets, optimize batch sizes
3. **Memory Usage**: Monitor memory consumption, implement cleanup

### User Experience Risks
1. **File Size Limits**: Clear error messages, suggest file splitting
2. **Complex CSV Files**: Robust delimiter detection, manual override options
3. **Filter Complexity**: Pattern validation, clear error messages

## Success Criteria

### Functional Requirements
- [x] Upload text/CSV files up to 10k lines
- [x] Apply include/exclude filters
- [x] Column-specific CSV filtering
- [x] Non-blocking UI during all operations
- [x] Copy filtered results to clipboard

### Performance Requirements
- [x] 10k lines load in <200ms
- [x] Filter response in <500ms
- [x] Memory usage <200KB for visible data
- [x] Works smoothly on low-end devices

### Quality Requirements
- [x] 90%+ test coverage
- [x] Cross-browser compatibility
- [x] Keyboard accessibility
- [x] Mobile responsive design

## Dependencies & Prerequisites

### External Dependencies
- Dexie.js (IndexedDB wrapper)
- Existing keyboardShortcuts.ts utility
- Astro + React setup
- Nanostores state management

### Internal Dependencies
- BaseLayout.astro (existing)
- Tailwind CSS classes
- TypeScript configuration
- Vite build system

This implementation plan provides a structured approach to building a robust, performant line filtering tool with comprehensive testing and documentation.