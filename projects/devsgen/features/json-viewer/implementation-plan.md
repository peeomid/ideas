# JSON Viewer - Implementation Plan

## Overview
Implementation plan for the JSON Viewer tool based on the architecture defined in `technical.md`, interactions in `interaction.md`, and core features in `README.md`.

## Phase 1: Core Foundation (Week 1)

### 1.1 Project Structure Setup
**Reference:** `technical.md` - File Structure section
- [ ] Create component directories following line filter pattern
- [ ] Set up TypeScript types (`src/types/jsonViewer.ts`, `filterSets.ts`, `jsonTree.ts`)
- [ ] Initialize Nanostores structure (`src/stores/jsonViewerStore.ts`)
- [ ] Create service layer foundation (`src/services/`)

### 1.2 Basic Layout Component
**Reference:** `technical.md` - Main Components Structure
- [ ] **JSONViewerLayout.tsx** - Main container component
  - [ ] Horizontal toolbar with placeholder buttons
  - [ ] Split layout: 70% left (JSON display), 30% right (sidebar)
  - [ ] Route setup: `/tools/json-viewer/`
  - [ ] Basic responsive design (mobile: stacked layout)

### 1.3 Input System
**Reference:** `interaction.md` - JSON Input section
- [ ] **JSONInput.tsx** - Input component (like FileUploader + TextPaster)
  - [ ] File drag & drop area (.json files)
  - [ ] Text paste textarea with JSON validation
  - [ ] "Load JSON" button with loading states
  - [ ] Error handling for invalid JSON

### 1.4 Basic Storage Service
**Reference:** `technical.md` - OPFS Storage Service
- [ ] **OPFSStorageService.ts** - OPFS storage implementation
  - [ ] Initialize OPFS directory
  - [ ] Save/load JSON operations
  - [ ] Storage quota monitoring
  - [ ] Fallback to localStorage for small files (<5MB)

## Phase 2: JSON Display & Tree View (Week 2)

### 2.1 Basic JSON Display
**Reference:** `technical.md` - Main Display Components
- [ ] **JSONRaw.tsx** - Simple formatted text view
  - [ ] Syntax highlighting (use existing JSON highlighter)
  - [ ] Copy to clipboard functionality
  - [ ] Basic search within raw text

### 2.2 Tree View Foundation
**Reference:** `interaction.md` - JSON Tree Click Behaviors
- [ ] **JSONTree.tsx** - Core tree component
  - [ ] **TreeNode.tsx** - Individual node component
  - [ ] Expand/collapse functionality with ▶/▼ arrows
  - [ ] Basic click handling (selection without actions yet)
  - [ ] Progressive disclosure (show first 3 children)

### 2.3 View Switching
**Reference:** `interaction.md` - Toolbar Actions
- [ ] **View toggle toolbar** - Tree ↔ Raw switching
  - [ ] State preservation between views
  - [ ] Keyboard shortcuts (Ctrl+1, Ctrl+2)
  - [ ] Active state indicators

## Phase 3: Web Worker & Performance (Week 3)

### 3.1 Web Worker Foundation
**Reference:** `technical.md` - Web Worker Architecture
- [ ] **json-filter.worker.js** - Web Worker implementation
  - [ ] JSON loading and storage in worker memory
  - [ ] Basic message handling (setJSON, clear)
  - [ ] Error handling and timeouts
  - [ ] Progress reporting for large files

- [ ] **JSONWorkerService.ts** - Worker communication service
  - [ ] Worker initialization and management
  - [ ] Promise-based communication
  - [ ] Cleanup and termination handling

### 3.2 Store Integration
**Reference:** `technical.md` - State Management Flow
- [ ] **jsonViewerStore.ts** - Complete store implementation
  - [ ] Core data atoms (originalJSON, parsedJSON)
  - [ ] Loading states and error handling
  - [ ] Actions for JSON loading and display
  - [ ] Integration with Web Worker service

## Phase 4: Basic Filtering System (Week 4)

### 4.1 Filter Data Types
**Reference:** `technical.md` - Core Data Types
- [ ] **FilterSet interface** - Multi-value filter definition
  - [ ] PATH vs VALUE filter types
  - [ ] Multiple values with OR logic
  - [ ] Active/inactive states

### 4.2 Filter UI Components
**Reference:** `interaction.md` - Multiple Filter System
- [ ] **FilterSetList.tsx** - Active filters display (like FilterList)
  - [ ] Filter tags with type icons (📍 PATH, 🔍 VALUE)
  - [ ] Checkbox toggles for enable/disable
  - [ ] Remove and clear all functionality

- [ ] **FilterSetTag.tsx** - Individual filter display
  - [ ] Multi-value display with "+N more" pattern
  - [ ] Tooltip with full filter details
  - [ ] Quick action buttons (edit, remove)

### 4.3 Basic Filter Processing
**Reference:** `technical.md` - Web Worker filtering
- [ ] **Simple VALUE filtering** - Text search in JSON values
  - [ ] Web Worker implementation
  - [ ] Multi-value OR logic within filter set
  - [ ] Basic AND logic between filter sets

## Phase 5: Advanced Filtering (Week 5)

### 5.1 PATH Filtering Foundation
**Reference:** `interaction.md` - Path Search
- [ ] **JSONPath library integration** - Use jsonpath-plus
  - [ ] Convert filter sets to JSONPath queries
  - [ ] PATH filter processing in Web Worker
  - [ ] Wildcard support (users.*.job)

### 5.2 Click-to-Build Paths
**Reference:** `interaction.md` - Click-to-Build Path Interaction
- [ ] **Tree node click handlers** - Build filter paths from clicks
  - [ ] Path calculation from tree structure
  - [ ] Visual feedback (blue highlighting)
  - [ ] Breadcrumb trail display

### 5.3 Filter Creation Dialog
**Reference:** `interaction.md` - Filter Set Creation Dialog
- [ ] **FilterSetInput.tsx** - Filter creation modal
  - [ ] PATH vs VALUE type selection
  - [ ] Multi-value tag input system
  - [ ] Auto-fill from clicked JSON properties
  - [ ] Smart placeholder examples from current JSON

## Phase 6: Enhanced UX & Polish (Week 6)

### 6.1 Smart Placeholders
**Reference:** `interaction.md` - Smart Placeholder System
- [ ] **Context-aware placeholders** - Rotate examples from actual JSON
  - [ ] Extract real paths from loaded JSON
  - [ ] 3-second rotation cycle
  - [ ] "Click any property above" hints

### 6.2 Copy & Export Actions
**Reference:** `interaction.md` - Toolbar Actions
- [ ] **Copy functionality** - Manual copy actions only
  - [ ] Copy entire JSON
  - [ ] Copy filtered results
  - [ ] Copy specific paths
  - [ ] Visual feedback ("Copied!" toasts)

- [ ] **Export functionality**
  - [ ] Download as JSON (formatted/minified)
  - [ ] Export to CSV for arrays
  - [ ] Filename suggestions with timestamps

### 6.3 Performance Optimizations
**Reference:** `technical.md` - Performance Optimizations
- [ ] **Large JSON handling** - Progressive loading and chunking
- [ ] **Memory management** - Worker cleanup and data clearing
- [ ] **Virtual scrolling** - For large arrays in tree view
- [ ] **Filter result caching** - Memoize repeated queries

## Phase 7: Testing & Documentation (Week 7)

### 7.1 Component Testing
**Reference:** Follow line filter testing patterns
- [ ] **Input component tests** - File upload, text paste, validation
- [ ] **Tree component tests** - Expand/collapse, click behaviors
- [ ] **Filter component tests** - Filter creation, editing, removal
- [ ] **Store tests** - State management and actions

### 7.2 Integration Testing
- [ ] **End-to-end workflows** - Load JSON → Filter → Export
- [ ] **Web Worker communication** - Error handling, timeouts
- [ ] **Large file handling** - Performance validation
- [ ] **Browser compatibility** - OPFS support testing

### 7.3 Documentation Updates
- [ ] **Update CLAUDE.md** - Add JSON viewer to Available Tools
- [ ] **Create tool README** - Usage instructions and examples
- [ ] **API documentation** - Component props and service methods

## Implementation Notes

### Key Dependencies
- **jsonpath-plus** - JSONPath query processing
- **OPFS polyfill** - For browsers without native support
- **Existing dependencies** - Nanostores, React, Tailwind (from line filter)

### Development Approach
1. **Follow line filter patterns** - Reuse proven architecture
2. **Incremental development** - Each phase builds on previous
3. **Early Web Worker integration** - Prevent UI blocking from start
4. **Component isolation** - Test each component independently

### Risk Mitigation
- **OPFS fallback** - localStorage for unsupported browsers
- **Worker fallback** - Main thread processing if worker fails
- **Progressive enhancement** - Basic functionality first, advanced features later
- **Memory limits** - File size warnings and graceful degradation

## Success Criteria
- [ ] **Non-blocking UI** - No freezing during large JSON processing
- [ ] **Intuitive filtering** - Click-to-build paths work seamlessly
- [ ] **Performance** - Handle JSON files >10MB without issues
- [ ] **Accessibility** - Full keyboard navigation and screen reader support
- [ ] **Mobile responsive** - Usable on phones with stacked layout