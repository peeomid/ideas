# Devsgen

**Things Project**: Devsgen (Work area)

## Problem
Developers need common utility tools for everyday tasks like regex replacement, bulk find/replace, code beautification, and JSON viewing - but existing tools are scattered or inadequate.

## Solution  
Privacy-first developer utilities web application with client-side processing. Built with Astro, React, and TypeScript for optimal performance and SEO.

## Improvement
- SEO
  - "comma to new line" -> Return this page https://devsgen.com/tools/regex-find-replace/ -> Not optimized for SEO

## Current Status ✅
**Live at**: [devsgen.com](https://devsgen.com)

## Completed Tools (3/5)
### ✅ Regex Helper
- 50+ built-in regex patterns for bulk transformations
- Pattern management (create, edit, delete, search)
- Import/Export via JSON
- Command palette (Cmd+K) for keyboard-driven workflow
- Numeric key access and quick lookup
- Programmatic SEO with dedicated pattern pages

### ✅ Line Filter Tool  
- Handle large files (50,000+ lines) without memory issues
- Multiple filter support with complex logic
- CSV and text file processing
- Export filtered results
- Client-side processing for privacy

### ✅ Generic Code Beautifier
**COMPLETED**: Smart code formatting for various data structures and messy code output
- **Auto-detection**: JSON, Python repr, PHP arrays/var_dump, generic structures
- **Web Worker Architecture**: Non-blocking formatting with progress tracking
- **Multiple Formats**: JSON, Python, PHP, CSS, HTML, JavaScript, SQL, XML, YAML
- **Intelligent Formatting**: 
  - Bracket-based indentation for any structure (`{}`, `[]`, `()`)
  - String-aware parsing (respects quotes and escapes)
  - PHP var_dump handling with type annotations
  - Python object formatting with True/False/None support
- **Language-Specific Pages**: Dedicated SEO pages for each format type
- **Performance Optimized**: Handles large files without UI blocking
- **Client-side Processing**: Complete privacy, no server uploads

## Tech Stack
- **Frontend**: Astro + React + TypeScript
- **Styling**: Tailwind CSS  
- **State**: Nanostores
- **Testing**: Vitest + Testing Library
- **Database**: Dexie (IndexedDB)
- **Deployment**: Cloudflare Pages
- **SEO**: Programmatic pages for each tool/pattern

## Architecture Highlights
- **Islands Architecture**: Astro with React islands
- **Client-side Processing**: No server needed, privacy-first
- **Keyboard-first Workflow**: Minimal mouse usage
- **Programmatic SEO**: Each tool and pattern gets dedicated pages
- **Responsive Design**: Works on all devices

## Implementation Status
- [x] Planning & Research
- [x] Architecture Design
- [x] Core Infrastructure Setup
- [x] Regex Helper Tool (COMPLETE)
- [x] Line Filter Tool (COMPLETE)  
- [x] Code Beautifier Tool (COMPLETE - December 2024)
- [x] SEO Optimization & Programmatic Pages
- [x] Testing Suite Setup
- [x] Production Deployment (devsgen.com)
- [ ] Marketing & User Acquisition
- [ ] Analytics & Performance Monitoring

## Repository
**Location**: `/Users/luan/Development/Osimify/dev-utils/`
- Full TypeScript setup with strict typing
- Comprehensive test suite
- ESLint configuration
- Cloudflare Pages deployment ready

## Next Steps
1. ✅ ~~Complete Code Beautifier tool~~ (DONE - December 2024)
2. Launch marketing campaign for all 3 completed tools
3. Monitor user engagement and feedback
4. Plan additional tools based on user needs
5. Explore advanced features for existing tools

## Success Metrics
- Daily active users
- Tool usage patterns
- SEO ranking for developer utility keywords
- User feedback and feature requests

## Detailed Specs
- [JSON Viewer](./features/json-viewer/)
- [Line Filter Tool](./features/line_filter/)  
- [Code Beautification](./tech/beautify.md)
- [Static Pages Pattern](./features/pattern_static_papges.md)

## Marketing
- [SEO Strategy](./seo_strategry.md)
- [Google Docs Integration](./google-docs/report.md)

## Marketing Strategy
- Developer community outreach
- SEO-optimized content
- Social media presence
- Tool-specific landing pages for organic discovery