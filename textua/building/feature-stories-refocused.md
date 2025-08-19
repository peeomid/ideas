# REFOCUSED Feature Stories - Reading Experience First

## Core Philosophy: Reading Experience Above All

**Primary Goal:** Transform any text into a comfortable reading experience with zero friction.  
**Secondary Goals:** Everything else (export, customization, etc.) comes later.

---

## MVP Phase (Weeks 1-4) - READING-FIRST EXPERIENCE

### Epic 1: Core Reading Experience 
Priority: CRITICAL | Effort: High

#### Story 1.1: Instant Readable Text
**As a** reader  
**I want to** paste any text and immediately get a comfortable reading experience  
**So that** I can focus on content without friction

**Acceptance Criteria:**
- [ ] Paste text (Cmd+V) and auto-format instantly (<100ms)
- [ ] Apply optimal typography (18-20px, 1.5-1.6 line height, proper spacing)
- [ ] Maintain 45-75 character line length automatically
- [ ] Clean up messy formatting (extra spaces, weird line breaks)
- [ ] Work perfectly on mobile with responsive typography
- [ ] Use high contrast colors for comfortable reading

**Success Metrics:**
- >90% of users successfully read formatted content
- <2 seconds from paste to readable
- Works on all content types (even if not perfectly detected)

#### Story 1.2: Essential Reading Navigation
**As a** reader  
**I want** basic tools to navigate long content easily  
**So that** I can read efficiently without losing my place

**Acceptance Criteria:**
- [ ] Auto-generate TOC when ≥3 headings (simple, clean design)
- [ ] TOC sticky sidebar on desktop, collapsible drawer on mobile
- [ ] Click TOC items to jump to sections
- [ ] Show reading progress bar at top
- [ ] Remember scroll position during session
- [ ] Display estimated reading time
- [ ] Keyboard shortcuts: Space/Shift+Space for page navigation

#### Story 1.3: Reliable Text Processing
**As a** user  
**I want** the tool to handle any text input gracefully  
**So that** I never lose content or get error messages

**Acceptance Criteria:**
- [ ] Process any text input (messy copy-paste, code, tables, etc.)
- [ ] Always show something readable (fallback to basic paragraphs)
- [ ] Preserve original formatting when it makes sense
- [ ] Handle large content (>10k words) without freezing
- [ ] Clear, helpful feedback for edge cases

### Epic 2: Mobile Reading Excellence
Priority: CRITICAL | Effort: Medium

#### Story 2.1: Mobile-First Reading
**As a** mobile reader  
**I want** the same excellent reading experience on my phone  
**So that** I can read comfortably anywhere

**Acceptance Criteria:**
- [ ] Single-column layout optimized for mobile screens
- [ ] Touch-friendly controls (44px minimum targets)
- [ ] Auto-hide header while reading for maximum content space
- [ ] Swipe left/right for TOC navigation
- [ ] Prevent iOS auto-zoom on text input
- [ ] Optimized font sizes for mobile (slightly larger)
- [ ] Works in both portrait and landscape

#### Story 2.2: One-Handed Mobile Usage
**As a** commuter reader  
**I want** to control everything with one hand  
**So that** I can read while holding onto transit

**Acceptance Criteria:**
- [ ] Primary actions in thumb reach zone (bottom 1/3)
- [ ] Large, well-spaced touch targets
- [ ] Tap top of screen to scroll to beginning
- [ ] Visual feedback for all touch interactions
- [ ] No precision gestures required

### Epic 3: Essential Controls Only
Priority: HIGH | Effort: Low

#### Story 3.1: Minimal Keyboard Shortcuts
**As a** power user  
**I want** essential keyboard shortcuts that don't overwhelm  
**So that** I can work efficiently without memorizing complex commands

**Acceptance Criteria:**
- [ ] Cmd+V: Paste and auto-format
- [ ] Cmd+R: Toggle between input and reading mode
- [ ] Cmd+D: Toggle dark mode
- [ ] Esc: Return to input/clear content
- [ ] Space/Shift+Space: Page up/down in reading mode
- [ ] Cmd+/: Show these 5 shortcuts

**Note:** No more shortcuts in MVP. Keep it simple.

#### Story 3.2: Dark Mode for Comfortable Reading
**As a** reader in various lighting conditions  
**I want** dark mode that's optimized for reading  
**So that** I can read comfortably day or night

**Acceptance Criteria:**
- [ ] Toggle between light/dark themes instantly
- [ ] Maintain excellent contrast ratios in both modes
- [ ] Remember preference across sessions
- [ ] Respect system preference initially
- [ ] Smooth, non-jarring transition

---

## Phase 2: DEFERRED - Reading Enhancements (Week 5+)

### ⚠️ LOWER PRIORITY - Implement only after core reading experience is perfect

#### Story 2.1: Content Type Smart Detection
**As a** student  
**I want** academic papers to format differently than social media  
**So that** the structure matches the content type

**Acceptance Criteria:**
- [ ] Detect academic papers (abstract, sections, citations)
- [ ] Identify articles vs social media vs email
- [ ] Apply appropriate formatting rules
- [ ] Fallback gracefully to generic formatting

---

## ❌ NOT NEEDED FOR NOW - Phase 3+ Features

The following features are **explicitly deprioritized** and should not be implemented until the core reading experience is excellent:

### ❌ Export & Sharing (Epic 5 from original plan)
- PDF export
- Print optimization  
- Share formatted content
- **Reasoning:** Users need great reading first, sharing second

### ❌ Reading Preferences (Epic 6.1 from original plan)
- Font size adjustment
- Font family selection
- Line height controls
- **Reasoning:** Good defaults matter more than customization

### ❌ PWA Features (Epic 8 from original plan)  
- Offline capability
- App installation
- **Reasoning:** Web experience should be perfect first

### ❌ Content Management (Epic 9 from original plan)
- Reading history
- Bookmarks & collections
- **Reasoning:** Focus on single-session reading experience

### ❌ Analytics & Insights (Epic 10 from original plan)
- Reading analytics
- Usage patterns
- **Reasoning:** User experience over data collection

### ❌ AI Enhancement (Epic 11 from original plan)
- Intelligent summarization
- Content enhancement
- **Reasoning:** Good formatting beats AI complexity

### ❌ Collaboration (Epic 12 from original plan)
- Shared reading sessions
- Collaborative highlighting
- **Reasoning:** Individual reading experience first

---

## Revised Success Metrics

### MVP Success (Reading-First):
- **Core Function:** >95% text formatting success rate
- **Reading Comfort:** >4.5/5 user satisfaction with typography
- **Performance:** <1 second paste-to-readable
- **Mobile Usage:** >70% completion rate on mobile
- **Simplicity:** <5 minutes to master the tool

### What We're NOT Measuring (Yet):
- Export usage
- Customization adoption
- Feature discovery beyond core reading
- Advanced usage patterns

---

## Implementation Priority Order

### Week 1: Text Processing Foundation
1. Basic text cleaning and paragraph detection
2. Typography system implementation
3. Responsive layout foundation

### Week 2: Core Reading Interface  
1. Reading area with optimal typography
2. Basic TOC generation
3. Reading progress indicators

### Week 3: Mobile Optimization
1. Mobile-responsive reading layout
2. Touch-friendly controls
3. Mobile-specific optimizations

### Week 4: Polish & Performance
1. Keyboard shortcuts
2. Dark mode
3. Error handling and edge cases
4. Performance optimization

### Week 5+: Only if core experience is excellent
- Content type detection improvements
- Export features (if really needed)
- Advanced customization (if users request)

This refocused plan eliminates feature creep and ensures we build the best possible reading experience first. Everything else can wait.