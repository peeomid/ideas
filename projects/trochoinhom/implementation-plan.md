# Trochoinhom Implementation Plan

## Updated Requirements

- **Word Lists:** Large word list needed (note: will be provided later)
- **Design:** Simple, retro feel design system
- **Game Timing:** Fully manual, no timers
- **Analytics:** Google Analytics integration
- **Testing:** Comprehensive testing plan required

## Revised Implementation Timeline

### Phase 1: Project Foundation (Week 1)
**Day 1-2: Project Setup**
- Initialize Astro project with TypeScript + Tailwind
- Setup i18n routing (default VN, /en prefix)
- Configure Vercel deployment pipeline
- Setup GA4 analytics integration

**Day 3-5: Design System & Core Layout**
- Create retro design system (color palette, typography, components)
- Build layout components (header, footer, language switcher)
- Setup content collections structure
- Create responsive navigation

**Day 6-7: Basic Page Structure**
- Homepage layout (Vietnamese default)
- Basic routing structure
- Language switching functionality

### Phase 2: Content Pages & SEO Foundation (Week 2)
**Day 1-3: Core Content Pages**
- Homepage with game gallery layout
- Game information pages structure
- About page and basic site navigation

**Day 4-7: Priority pSEO Pages (Vietnamese)**
1. `/vn/gioi-thieu/ai-la-gian-diep` - "Trò chơi ai là gián điệp là gì?"
2. `/vn/huong-dan/ai-la-gian-diep` - Complete rules and strategies
3. `/vn/tro-choi-nhom` - Group games category overview
4. `/vn/bai-viet/10-tro-choi-nhom-hay-nhat` - Top 10 group games article
5. `/vn/bai-viet/cach-choi-game-nhom-vui` - How to make group games fun

### Phase 3: Game Page Structure (Week 3)
**Day 1-3: Game Page Foundation**
- `/vn/ai-la-gian-diep` page structure
- React component integration setup
- Basic game state architecture

**Day 4-7: Word List Integration**
- **TODO: Large word list needed** (placeholder data for development)
- JSON structure for word pairs
- Category/theme organization
- Vietnamese word list integration

### Phase 4: Core Game Development (Week 4-5)
**Day 1-7 (Week 4): Game Logic Implementation**
- React game component with TypeScript
- Game state management with localStorage
- Phase management (setup → name entry → description → voting → results)
- Player management and spy assignment

**Day 1-7 (Week 5): Game UI & UX**
- Mobile-first responsive design
- Touch-optimized interface
- Retro-styled game screens
- Smooth transitions between phases
- Error handling and edge cases

### Phase 5: English Version (Week 6)
**Day 1-4: English Content**
- Translate all game pages to English
- English SEO content creation
- English game interface

**Day 5-7: Cross-language Testing**
- Language switching functionality
- Content consistency verification
- URL structure validation

### Phase 6: Testing & Quality Assurance (Week 7)

#### Testing Strategy

**Unit Testing:**
- Game logic functions (player assignment, voting, win conditions)
- Word list loading and selection
- localStorage state persistence

**Integration Testing:**
- Game flow end-to-end testing
- Language switching during gameplay
- State persistence across browser refresh

**Device Testing Matrix:**
- **Mobile:** iPhone Safari, Android Chrome, Samsung Internet
- **Tablet:** iPad Safari, Android tablet Chrome
- **Desktop:** Chrome, Firefox, Safari, Edge
- **Screen sizes:** 320px, 768px, 1024px, 1440px

**User Experience Testing:**
- Game session with 3-8 players (simulate passing device)
- Error scenarios (browser refresh, back button, duplicate names)
- Accessibility testing (screen readers, keyboard navigation)
- Performance testing (slow 3G network simulation)

**Content Testing:**
- SEO page indexing verification
- Vietnamese language display accuracy
- Social media sharing (og:image, descriptions)

### Phase 7: Launch Preparation (Week 8)
**Day 1-3: Pre-launch Optimization**
- Performance optimization (bundle size, image optimization)
- SEO meta tags and structured data
- Security headers and HTTPS setup

**Day 4-5: Domain & Analytics Setup**
- trochoinhom.com domain configuration
- GA4 event tracking implementation
- Search Console setup

**Day 6-7: Soft Launch**
- Friends and family testing
- Bug fixes and final adjustments
- Launch preparation checklist

## Priority pSEO Content Strategy

### High Priority Vietnamese Pages:
1. **"Trò chơi ai là gián điệp là gì?"** - Target: "ai là gián điệp"
2. **"Cách chơi ai là gián điệp chi tiết"** - Target: "cách chơi ai là gián điệp"
3. **"10 trò chơi nhóm hay nhất"** - Target: "trò chơi nhóm"
4. **"Game night ideas"** - Target: "game nhóm", "trò chơi tập thể"
5. **"Luật chơi các trò chơi nhóm"** - Target: "luật chơi", "hướng dẫn chơi game"

### Content Calendar:
- Launch with 3 core game pages
- Add 1 blog article per week post-launch
- Focus on Vietnamese content first (larger market opportunity)

## Risk Mitigation

**Technical Risks:**
- React component performance on older mobile devices → Extensive device testing
- localStorage limitations → Implement fallback strategies
- Word list size impact on loading → Lazy loading implementation

**Content Risks:**
- Missing word list → Placeholder system for development
- SEO competition → Focus on long-tail Vietnamese keywords
- User experience confusion → Extensive user testing

**Timeline Risks:**
- Word list dependency → Parallel development with placeholder data
- Complex game logic → Early prototype validation
- Multi-device testing → Automated testing setup

## Project Files Reference

### Core Project Documentation
- **`main-trochoinhom.md`** - Main project overview, problem statement, solution, and MVP features
- **`mvp-sitemap.md`** - Complete sitemap structure, user flow analysis, and URL organization
- **`tech-specs.md`** - Technical architecture, technology stack decisions, and implementation details
- **`implementation-plan.md`** - This file - 8-week development timeline with phases and milestones
- **`automated-testing-plan.md`** - Comprehensive testing strategy using Jest, Playwright, Lighthouse CI, and Pa11y

### Game Requirements & Design
- **`requirements/business_requirements.md`** - Business logic and requirements specification
- **`requirements/games/who_is_spy/game_who_is_the_spy.md`** - Core game mechanics and rules
- **`requirements/games/who_is_spy/single_device_interaction.md`** - Detailed single-device user interaction flow
- **`requirements/games/who_is_spy/single_device_screen_logic.md`** - Screen-by-screen logic and transitions
- **`requirements/games/who_is_spy/multiple_device_interaction.md`** - Multi-device specs (future feature)

### Todo & Task Management
- **`todo.md`** - Project-specific task tracking and sprint organization

### Content Planning (To Be Created)
- **`word-lists/`** - Directory for Vietnamese/English word pairs (large word list needed)
- **`design-system.md`** - Retro design system specification (colors, typography, components)
- **`seo-content-plan.md`** - Detailed pSEO content strategy and keyword targeting

## Success Metrics

**Launch Goals:**
- 3 core Vietnamese game pages live
- 5 SEO-optimized content pages
- Mobile-responsive game experience
- GA4 tracking implementation
- < 3s page load time on 3G

**Post-Launch Goals (Month 1):**
- 1000+ organic Vietnamese search impressions
- 100+ completed game sessions
- < 5% bounce rate on game pages
- Mobile usage > 70%