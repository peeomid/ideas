# Astro Technical Architecture for Readability Tool

## Architecture Overview

The readability tool leverages Astro's islands architecture to deliver optimal performance while maintaining rich interactivity. The hybrid approach combines static HTML/CSS delivery with selective React component hydration for maximum efficiency.

### Core Architectural Principles

1. **Performance First:** <1s LCP through static content delivery
2. **Progressive Enhancement:** Works without JavaScript, enhanced with it
3. **Islands Pattern:** Hydrate only interactive components
4. **Type Safety:** Full TypeScript throughout the stack
5. **Privacy by Design:** All processing happens client-side

---

## Project Structure

```
src/
├── components/
│   ├── core/                     # Static Astro components
│   │   ├── Layout.astro          # Base page layout
│   │   ├── Header.astro          # App header with nav
│   │   ├── Footer.astro          # Footer with links
│   │   └── SEO.astro             # Meta tags and SEO
│   │
│   ├── ui/                       # Reusable UI components  
│   │   ├── Button.astro          # Button variants
│   │   ├── Card.astro            # Content cards
│   │   ├── Typography.astro      # Text styling
│   │   ├── Icon.astro            # SVG icon system
│   │   └── Loading.astro         # Loading states
│   │
│   ├── islands/                  # Interactive React components
│   │   ├── TextProcessor.tsx     # Main input & processing
│   │   ├── ReadingArea.tsx       # Formatted content display
│   │   ├── TableOfContents.tsx   # Dynamic TOC
│   │   ├── KeyboardShortcuts.tsx # Shortcut management
│   │   ├── ExportDialog.tsx      # Export functionality
│   │   ├── SettingsPanel.tsx     # User preferences
│   │   ├── ThemeToggle.tsx       # Dark/light mode
│   │   └── ShareDialog.tsx       # Content sharing
│   │
│   └── features/                 # Feature-specific modules
│       ├── TextDetection/        # Content type detection
│       │   ├── ContentDetector.ts
│       │   ├── types.ts
│       │   └── patterns.ts
│       ├── FormatEngine/         # Text processing core
│       │   ├── TextProcessor.ts
│       │   ├── TOCGenerator.ts
│       │   ├── Formatter.ts
│       │   └── ContentCleaner.ts
│       ├── Export/               # Export functionality
│       │   ├── PDFExporter.ts
│       │   ├── PrintOptimizer.ts
│       │   └── ShareGenerator.ts
│       └── Analytics/            # Usage tracking
│           ├── PerformanceMonitor.ts
│           ├── UserTracker.ts
│           └── EventBus.ts
│
├── layouts/
│   ├── BaseLayout.astro          # HTML structure
│   ├── ReadingLayout.astro       # Reading-optimized layout
│   └── MinimalLayout.astro       # Distraction-free layout
│
├── pages/
│   ├── index.astro               # Landing/input page
│   ├── read/
│   │   ├── [id].astro           # Dynamic reading pages
│   │   └── shared/[token].astro  # Shared content pages
│   ├── api/                      # API endpoints
│   │   ├── process.ts           # Text processing endpoint
│   │   ├── export.ts            # PDF generation
│   │   ├── share.ts             # Content sharing
│   │   └── analytics.ts         # Usage data
│   ├── about.astro              # About page
│   ├── privacy.astro            # Privacy policy
│   └── help.astro               # Help documentation
│
├── lib/
│   ├── text-processing/         # Core processing logic
│   │   ├── pipeline.ts          # Main processing pipeline
│   │   ├── parsers/
│   │   │   ├── ArticleParser.ts
│   │   │   ├── SocialParser.ts
│   │   │   ├── EmailParser.ts
│   │   │   └── CodeParser.ts
│   │   ├── formatters/
│   │   │   ├── TypographyFormatter.ts
│   │   │   ├── StructureFormatter.ts
│   │   │   └── LinkFormatter.ts
│   │   └── generators/
│   │       ├── TOCGenerator.ts
│   │       ├── MetadataGenerator.ts
│   │       └── SummaryGenerator.ts
│   │
│   ├── stores/                  # State management
│   │   ├── reading-store.ts     # Reading state
│   │   ├── settings-store.ts    # User preferences
│   │   ├── content-store.ts     # Content management
│   │   └── analytics-store.ts   # Analytics data
│   │
│   ├── utils/                   # Utility functions
│   │   ├── keyboard-shortcuts.ts # Shortcut handling
│   │   ├── local-storage.ts     # Storage utilities
│   │   ├── performance.ts       # Performance helpers
│   │   ├── url-utils.ts         # URL manipulation
│   │   └── validation.ts        # Input validation
│   │
│   ├── hooks/                   # React hooks
│   │   ├── useKeyboardShortcuts.ts
│   │   ├── useLocalStorage.ts
│   │   ├── useReadingProgress.ts
│   │   └── useContentProcessor.ts
│   │
│   └── types/                   # TypeScript definitions
│       ├── content.ts           # Content models
│       ├── settings.ts          # Settings interfaces
│       ├── analytics.ts         # Analytics types
│       └── api.ts               # API interfaces
│
├── styles/
│   ├── globals.css              # Global styles
│   ├── components/              # Component-specific styles
│   │   ├── reading-area.css
│   │   ├── text-processor.css
│   │   └── table-of-contents.css
│   ├── themes/
│   │   ├── base.css             # CSS custom properties
│   │   ├── light.css            # Light theme
│   │   ├── dark.css             # Dark theme
│   │   └── high-contrast.css    # Accessibility theme
│   └── utilities/
│       ├── typography.css       # Typography utilities
│       ├── layout.css           # Layout helpers
│       └── animations.css       # Micro-interactions
│
└── public/
    ├── manifest.json            # PWA manifest
    ├── sw.js                    # Service worker
    ├── robots.txt               # SEO directives
    ├── icons/                   # App icons
    │   ├── icon-192.png
    │   ├── icon-512.png
    │   └── favicon.ico
    └── fonts/                   # Self-hosted fonts
        ├── inter-var.woff2
        └── merriweather-var.woff2
```

---

## Key Technical Decisions

### 1. Astro Islands vs Full React App

**Decision:** Hybrid Astro + React Islands  
**Rationale:**
- **Performance:** Static HTML/CSS delivers instantly (<1s LCP)
- **SEO:** Server-rendered content for better discoverability  
- **Bundle Size:** Only interactive components load JavaScript
- **Progressive Enhancement:** Works without JavaScript

**Implementation:**
```astro
---
// pages/index.astro
---
<Layout>
  <!-- Static content loads immediately -->
  <Header />
  <main>
    <!-- Interactive component hydrates on load -->
    <TextProcessor client:load />
    
    <!-- Reading area hydrates when visible -->
    <ReadingArea client:visible />
  </main>
</Layout>
```

### 2. State Management Strategy

**Decision:** Zustand with localStorage persistence  
**Rationale:**
- **Bundle Size:** 2KB vs Redux's 8KB overhead
- **TypeScript:** Native TypeScript support
- **Persistence:** Built-in localStorage sync
- **Simplicity:** Minimal boilerplate

**Implementation:**
```typescript
// lib/stores/reading-store.ts
interface ReadingState {
  content: ProcessedContent | null;
  isReading: boolean;
  scrollPosition: number;
  readingProgress: number;
  toc: TOCItem[];
  settings: ReadingSettings;
}

export const useReadingStore = create<ReadingState>()(
  persist(
    (set, get) => ({
      content: null,
      isReading: false,
      scrollPosition: 0,
      readingProgress: 0,
      toc: [],
      settings: defaultSettings,
      
      setContent: (content) => set({ content, isReading: true }),
      updateProgress: (progress) => set({ readingProgress: progress }),
      resetReading: () => set({ 
        content: null, 
        isReading: false, 
        scrollPosition: 0 
      }),
    }),
    {
      name: 'readability-reading',
      partialize: (state) => ({ settings: state.settings }),
    }
  )
);
```

### 3. Text Processing Architecture

**Decision:** Client-side processing with fallback  
**Rationale:**
- **Privacy:** Content never leaves user's device
- **Performance:** No server round-trips for basic processing
- **Offline:** Works without internet connection
- **Scalability:** No server processing costs

**Processing Pipeline:**
```typescript
// lib/text-processing/pipeline.ts
export class TextProcessingPipeline {
  private parsers: Record<ContentType, Parser> = {
    article: new ArticleParser(),
    social: new SocialParser(),
    email: new EmailParser(),
    code: new CodeParser(),
  };

  async process(rawText: string): Promise<ProcessedContent> {
    const startTime = performance.now();
    
    try {
      // 1. Content detection (target: <50ms)
      const contentType = await this.detectContentType(rawText);
      
      // 2. Parallel processing
      const [cleaned, structure, metadata] = await Promise.all([
        this.cleanContent(rawText, contentType),
        this.extractStructure(rawText, contentType),
        this.generateMetadata(rawText)
      ]);
      
      // 3. Format for optimal reading
      const formatted = await this.formatForReading(
        cleaned, 
        structure, 
        metadata,
        contentType
      );
      
      // 4. Generate additional features
      const toc = this.generateTOC(structure);
      const readingTime = this.calculateReadingTime(cleaned);
      
      const processingTime = performance.now() - startTime;
      console.log(`Processing completed in ${processingTime}ms`);
      
      return {
        ...formatted,
        toc,
        readingTime,
        contentType,
        processingTime,
      };
      
    } catch (error) {
      // Fallback to basic formatting
      return this.basicFormat(rawText);
    }
  }
}
```

### 4. Component Communication Strategy

**Decision:** Event-driven architecture with Zustand  
**Rationale:**
- **Decoupling:** Islands can communicate without direct dependencies
- **Performance:** Selective re-renders based on state subscriptions
- **Maintainability:** Clear data flow patterns

**Implementation:**
```typescript
// Island communication pattern
export default function TextProcessor() {
  const { setContent } = useReadingStore();
  
  const handleTextProcess = async (text: string) => {
    const processed = await textProcessor.process(text);
    setContent(processed);
    
    // Emit event for other islands
    window.dispatchEvent(
      new CustomEvent('content:processed', { 
        detail: processed 
      })
    );
  };
  
  return (
    <div className="text-processor">
      <textarea onPaste={handlePaste} />
      <button onClick={() => handleTextProcess(text)}>
        Format Text
      </button>
    </div>
  );
}

export default function ReadingArea() {
  const { content } = useReadingStore();
  
  return content ? (
    <article className="reading-area">
      <h1>{content.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content.html }} />
    </article>
  ) : null;
}
```

### 5. Styling Strategy

**Decision:** CSS Custom Properties + CSS Modules  
**Rationale:**
- **Performance:** No runtime CSS-in-JS overhead
- **Theming:** Dynamic theme switching via CSS variables
- **Scoping:** CSS Modules prevent style conflicts
- **Bundle Size:** Minimal JavaScript overhead

**Implementation:**
```css
/* styles/themes/base.css */
:root {
  /* Typography Scale */
  --font-reading: 'Merriweather', Georgia, serif;
  --font-ui: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  
  /* Reading Optimization */
  --reading-max-width: clamp(45ch, 90vw, 65ch);
  --reading-line-height: 1.6;
  --reading-font-size: clamp(16px, 2.5vw, 20px);
  
  /* Color System */
  --color-bg-primary: hsl(0, 0%, 99%);
  --color-text-primary: hsl(0, 0%, 10%);
  --color-accent: hsl(213, 90%, 55%);
  
  /* Spacing Scale */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
}

/* Dark theme overrides */
[data-theme="dark"] {
  --color-bg-primary: hsl(220, 13%, 12%);
  --color-text-primary: hsl(220, 9%, 88%);
  --color-accent: hsl(213, 90%, 65%);
}
```

```css
/* components/islands/ReadingArea.module.css */
.container {
  max-width: var(--reading-max-width);
  font-family: var(--font-reading);
  line-height: var(--reading-line-height);
  font-size: var(--reading-font-size);
  color: var(--color-text-primary);
  margin: 0 auto;
  padding: var(--space-lg);
}

.focusMode {
  background: var(--color-bg-primary);
  border-radius: 0.5rem;
  padding: var(--space-xl);
  box-shadow: 0 0 0 100vmax rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 10;
}
```

---

## Performance Optimization Strategy

### Bundle Splitting & Loading

```typescript
// astro.config.mjs
export default defineConfig({
  output: 'hybrid',
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'text-processing': [
              './src/lib/text-processing/',
              './src/components/features/FormatEngine/'
            ],
            'ui-islands': [
              './src/components/islands/TextProcessor.tsx',
              './src/components/islands/ReadingArea.tsx'
            ],
            'export-features': [
              './src/components/islands/ExportDialog.tsx',
              './src/components/features/Export/'
            ]
          }
        }
      }
    },
    optimizeDeps: {
      include: ['zustand', 'unified', 'remark-parse', 'remark-html']
    }
  }
});
```

### Progressive Enhancement Pattern

```astro
---
// components/islands/TextProcessor.astro
---

<div class="text-processor">
  <!-- Fallback: Works without JavaScript -->
  <noscript>
    <form action="/api/process" method="post" class="fallback-form">
      <textarea 
        name="content" 
        placeholder="Paste your text here..."
        required
        rows="10"
      ></textarea>
      <button type="submit" class="format-button">
        Make Readable
      </button>
    </form>
  </noscript>
  
  <!-- Enhanced: Interactive version -->
  <div class="enhanced-processor" style="display: none;">
    <TextProcessorIsland client:load />
  </div>
</div>

<script>
  // Show enhanced version if JavaScript is available
  document.querySelector('.enhanced-processor').style.display = 'block';
  document.querySelector('noscript').style.display = 'none';
</script>
```

### Performance Monitoring

```typescript
// lib/utils/performance.ts
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  
  static getInstance() {
    if (!this.instance) {
      this.instance = new PerformanceMonitor();
    }
    return this.instance;
  }
  
  trackTextProcessing(startTime: number, contentLength: number) {
    const duration = performance.now() - startTime;
    const wordsPerSecond = (contentLength / duration) * 1000;
    
    // Target: >10,000 words/second processing
    if (wordsPerSecond < 10000) {
      console.warn(`Text processing below target: ${wordsPerSecond} w/s`);
    }
    
    // Track Core Web Vitals
    this.reportWebVital('text-processing-speed', duration);
  }
  
  trackPageLoad() {
    // LCP tracking
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          this.reportWebVital('LCP', entry.startTime);
        }
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] });
    
    // FID tracking
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        this.reportWebVital('FID', entry.processingStart - entry.startTime);
      }
    }).observe({ entryTypes: ['first-input'] });
  }
  
  private reportWebVital(metric: string, value: number) {
    // Local analytics only - respect privacy
    const vitals = JSON.parse(
      localStorage.getItem('performance-vitals') || '{}'
    );
    vitals[metric] = { value, timestamp: Date.now() };
    localStorage.setItem('performance-vitals', JSON.stringify(vitals));
  }
}
```

---

## Critical Decision Points

### 1. Text Processing Complexity Level

**Options:**
- **Basic (MVP):** Markdown-style parsing, 90% accuracy, <50ms processing
- **Advanced:** ML-powered content detection, 98% accuracy, 100-500ms processing

**Recommendation:** Start with Basic, measure user feedback, upgrade selectively

**Implementation Strategy:**
```typescript
// lib/text-processing/content-detector.ts
export class ContentDetector {
  private useAdvancedDetection = false;
  
  async detectContentType(text: string): Promise<ContentType> {
    if (this.useAdvancedDetection) {
      return this.advancedDetection(text);
    }
    return this.basicDetection(text);
  }
  
  private basicDetection(text: string): ContentType {
    // Pattern-based detection (fast)
    if (text.includes('@') && text.includes('Subject:')) return 'email';
    if (text.startsWith('#') || text.includes('## ')) return 'article';
    if (text.length < 280 && text.includes('#')) return 'social';
    return 'generic';
  }
}
```

### 2. Export Format Priority

**Options:**
- **High Priority:** PDF, print-optimized HTML
- **Medium Priority:** EPUB, plain text, markdown
- **Low Priority:** Word document, custom formats

**Recommendation:** Focus on PDF + print for MVP based on user research

### 3. Offline Capability Scope

**Options:**
- **Basic:** Reading previously processed content offline
- **Advanced:** Full text processing without internet
- **Complete:** Cross-device sync when online

**Recommendation:** Basic for MVP (simple caching), advanced in Phase 2

### 4. Analytics and Privacy Balance

**Options:**
- **Privacy-First:** Local-only analytics, no external tracking
- **Balanced:** Anonymous usage patterns, opt-in telemetry
- **Full Analytics:** Detailed usage data with consent

**Recommendation:** Privacy-first approach aligns with tool's value proposition

---

## Deployment & Infrastructure

### Build Configuration

```typescript
// astro.config.mjs
export default defineConfig({
  output: 'hybrid', // SSG with selective SSR
  adapter: vercel({
    functions: {
      '/api/process': { memory: 1024 },
      '/api/export': { memory: 512 },
    }
  }),
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    sitemap(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      target: 'es2020',
      cssCodeSplit: true,
    },
  },
});
```

### Service Worker for PWA

```typescript
// public/sw.js
const CACHE_NAME = 'readability-v1';
const STATIC_ASSETS = [
  '/',
  '/styles/globals.css',
  '/manifest.json',
  // Critical fonts
  '/fonts/inter-var.woff2',
  '/fonts/merriweather-var.woff2',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
});

// Offline text processing
self.addEventListener('message', (event) => {
  if (event.data.type === 'PROCESS_TEXT_OFFLINE') {
    try {
      const processed = processTextBasic(event.data.content);
      event.ports[0].postMessage({ success: true, data: processed });
    } catch (error) {
      event.ports[0].postMessage({ success: false, error: error.message });
    }
  }
});

// Basic offline text processing
function processTextBasic(text) {
  // Simplified processing for offline use
  const paragraphs = text.split('\n\n').filter(Boolean);
  const wordCount = text.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200); // 200 wpm average
  
  return {
    html: paragraphs.map(p => `<p>${p}</p>`).join(''),
    wordCount,
    readingTime,
    title: paragraphs[0]?.substring(0, 60) + '...',
    offline: true,
  };
}
```

### Performance Budget

```json
// .lighthouserc.js
module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      settings: {
        chromeFlags: '--no-sandbox',
      },
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 1.0 }],
        'categories:best-practices': ['error', { minScore: 0.95 }],
        'categories:seo': ['error', { minScore: 0.95 }],
        
        // Core Web Vitals
        'first-contentful-paint': ['error', { maxNumericValue: 1500 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.05 }],
        
        // Bundle size constraints
        'total-byte-weight': ['error', { maxNumericValue: 500000 }], // 500KB
      },
    },
  },
};
```

This architecture provides a robust, scalable foundation that can evolve from MVP to full-featured application while maintaining excellent performance and user experience. The key strength is the progressive enhancement approach - users get immediate value with basic functionality, while advanced features load seamlessly for enhanced experiences.

---

## Next Steps & Implementation Questions

### Immediate Architecture Decisions Needed:

1. **Content Storage Strategy:** How long should we cache processed content? Local storage limits?

2. **Error Boundary Strategy:** How should we handle processing failures gracefully?

3. **Analytics Implementation:** Which metrics are most valuable for product decisions?

4. **Accessibility Testing:** What automated tools should be integrated into CI/CD?

5. **Font Loading Strategy:** Self-host vs Google Fonts for optimal performance?

These decisions will shape the implementation details and should be finalized before beginning development.