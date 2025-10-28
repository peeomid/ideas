# Trochoinhom Technical Specifications

## Architecture Overview

### Core Technology Stack
- **Framework:** Astro (Static Site Generation)
- **Languages:** TypeScript, HTML, CSS
- **Styling:** Tailwind CSS
- **UI Libraries:**
  - jQuery (latest version) for simple DOM manipulation
  - React for complex game interface components
- **State Management:** Browser localStorage/sessionStorage
- **Deployment:** Static hosting (Vercel/Netlify)

### Project Structure
```
src/
├── pages/
│   ├── index.astro                 # Vietnamese homepage
│   ├── en/
│   │   ├── index.astro            # English homepage
│   │   ├── who-is-the-spy.astro   # English game page
│   │   └── rules/
│   └── vn/
│       ├── ai-la-gian-diep.astro  # Vietnamese game page
│       └── huong-dan/
├── components/
│   ├── games/
│   │   └── WhoIsSpyGame.tsx       # React component for game
│   ├── layout/
│   └── ui/
├── content/
│   ├── games/                     # Game content collections
│   └── articles/                  # Blog content
├── data/
│   └── word-lists/               # Game word lists
└── styles/
    └── global.css
```

## Game Implementation Architecture

### Who Is The Spy Game
- **Main Component:** React component (`WhoIsSpyGame.tsx`)
- **State Management:** React hooks + localStorage persistence
- **Game Flow:** State machine pattern for phase management
- **Word Lists:** JSON files with Vietnamese/English word pairs

### Game State Structure
```typescript
interface GameState {
  phase: 'setup' | 'name-entry' | 'description' | 'voting' | 'result'
  players: Player[]
  currentPlayerIndex: number
  spyIndexes: number[]
  wordPair: { spy: string; normal: string }
  eliminated: number[]
  language: 'vn' | 'en'
}

interface Player {
  name: string
  isSpy: boolean
  isEliminated: boolean
}
```

## Technical Decisions

### State Management Strategy
- **Game State:** React hooks within game component
- **Persistence:** localStorage for game continuation after refresh
- **Session:** sessionStorage for temporary UI state
- **No external state library needed for MVP**

### UI Framework Choice
- **Simple interactions:** jQuery for basic DOM manipulation, transitions
- **Complex game UI:** React for game state, phase management, dynamic rendering
- **Static content:** Pure Astro components for SEO pages

### Internationalization (i18n)
- **Astro i18n:** Built-in i18n support for routing and content
- **Content Collections:** Separate collections for VN/EN content
- **Game Content:** JSON files with language-specific word lists
- **Runtime Translation:** React context for in-game text

### Performance Considerations
- **Bundle Size:** Lazy load React components only on game pages
- **Offline Support:** Service worker for basic offline functionality
- **Mobile Optimization:** Touch-friendly UI, responsive breakpoints
- **SEO:** Static generation for all content pages

### Development Workflow
- **TypeScript:** Strict mode for type safety
- **ESLint + Prettier:** Code formatting and linting
- **Astro Dev Server:** Hot reload for development
- **Build Process:** Static site generation with optimization

## Deployment & Infrastructure

### Hosting Strategy
- **Platform:** Vercel (preferred) or Netlify
- **Domain:** trochoinhom.com
- **CDN:** Automatic via hosting platform
- **SSL:** Automatic via hosting platform

### Performance Targets
- **Page Load:** < 2s on 3G
- **Bundle Size:** < 200KB total JS
- **Lighthouse Score:** > 90 performance
- **Mobile-First:** Primary target device

### Security Considerations
- **No Backend:** Eliminates server-side vulnerabilities
- **Static Assets:** CDN-delivered, cached content
- **Client-Side Only:** No sensitive data handling
- **HTTPS:** Enforced via hosting platform

## Future Scalability

### Additional Games
- **Modular Structure:** Each game as separate React component
- **Shared Utilities:** Common game logic in shared modules
- **Content Management:** Standardized content collections

### Potential Enhancements
- **PWA Support:** Service worker, app manifest
- **Real-time Features:** WebSocket integration for multi-device
- **Analytics:** Privacy-focused usage tracking
- **Social Features:** Game sharing, leaderboards