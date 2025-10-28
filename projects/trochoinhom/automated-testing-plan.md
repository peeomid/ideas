# Automated Testing Plan for Trochoinhom

## Testing Framework Setup

### Current Status
- [x] Tooling scaffolded (Jest, Playwright, Lighthouse CI, Pa11y CI configured via project scripts)
- [ ] Automated suites implemented (logic, e2e, performance, accessibility)

**Core Testing Stack:**
- **Jest** - Unit testing for game logic functions
- **Playwright** - End-to-end integration testing
- **Lighthouse CI** - Performance and SEO automation
- **Pa11y** - Accessibility compliance testing

## 1. Unit Testing with Jest

### Game Logic Functions:
```typescript
// tests/game-logic.test.ts
describe('Game Logic', () => {
  test('playerAssignment() - distributes spy roles correctly', () => {
    // Test spy assignment for 3-8 players
    // Verify exactly 1 spy assigned
    // Ensure random distribution
  })

  test('wordPairSelection() - selects valid word pairs', () => {
    // Test word selection from JSON lists
    // Verify spy/normal word pairing
    // Test fallback for empty categories
  })

  test('votingLogic() - handles elimination correctly', () => {
    // Test player elimination mechanics
    // Verify win condition detection
    // Test edge cases (tie votes, invalid votes)
  })

  test('gameStateTransitions() - manages phase changes', () => {
    // Test setup → name-entry → description → voting → result
    // Verify state validation between phases
    // Test invalid state transitions
  })

  test('localStoragePersistence() - saves/loads game state', () => {
    // Test game state serialization
    // Verify state restoration after browser refresh
    // Test corrupted localStorage handling
  })
})
```

### Word List Management:
```typescript
// tests/word-lists.test.ts
describe('Word Lists', () => {
  test('loads Vietnamese word pairs correctly')
  test('handles missing word list files gracefully')
  test('validates word pair structure')
  test('supports multiple categories/themes')
})
```

### State Management:
```typescript
// tests/state-management.test.ts
describe('React State', () => {
  test('game state updates trigger re-renders')
  test('localStorage sync works correctly')
  test('invalid state recovery mechanisms')
})
```

## 2. End-to-End Testing with Playwright

### Complete Game Flow Automation:
```typescript
// tests/e2e/game-flow.spec.ts
test('Full 4-player game session', async ({ page }) => {
  await page.goto('/vn/ai-la-gian-diep')

  // Setup phase
  await page.fill('[data-testid="player-count"]', '4')
  await page.click('[data-testid="start-game"]')

  // Name entry phase
  for (let i = 0; i < 4; i++) {
    await page.fill('[data-testid="player-name"]', `Player${i+1}`)
    await page.click('[data-testid="confirm-name"]')
    await page.click('[data-testid="got-it"]')
    await page.click('[data-testid="next-player"]')
  }

  // Description phase
  await page.click('[data-testid="end-round"]')

  // Voting phase
  await page.click('[data-testid="player-0"]')
  await page.click('[data-testid="confirm-elimination"]')

  // Continue or end game
  await expect(page.locator('[data-testid="game-result"]')).toBeVisible()
})
```

### Cross-Language Testing:
```typescript
// tests/e2e/i18n.spec.ts
test('Language switching during game', async ({ page }) => {
  await page.goto('/')
  await page.click('[data-testid="language-switch-en"]')
  await expect(page).toHaveURL('/en/')

  // Start game in English
  await page.goto('/en/who-is-the-spy')
  // Verify English game interface

  // Switch to Vietnamese mid-game
  await page.click('[data-testid="language-switch-vn"]')
  // Verify game state preserved
})
```

### Error Handling:
```typescript
// tests/e2e/error-scenarios.spec.ts
test('Browser refresh during active game', async ({ page }) => {
  // Start game, enter names
  await setupGame(page, 4)

  // Refresh browser
  await page.reload()

  // Verify game state restored
  await expect(page.locator('[data-testid="continue-game"]')).toBeVisible()
})

test('Invalid input handling', async ({ page }) => {
  // Test empty names, duplicate names, special characters
  // Verify error messages display correctly
})
```

## 3. Performance Testing with Lighthouse CI

### Configuration:
```json
// lighthouserc.json
{
  "ci": {
    "collect": {
      "numberOfRuns": 3,
      "url": [
        "http://localhost:3000/",
        "http://localhost:3000/en/",
        "http://localhost:3000/vn/ai-la-gian-diep",
        "http://localhost:3000/vn/huong-dan/ai-la-gian-diep"
      ]
    },
    "assert": {
      "assertions": {
        "categories:performance": ["warn", {"minScore": 0.9}],
        "categories:accessibility": ["error", {"minScore": 0.9}],
        "categories:best-practices": ["error", {"minScore": 0.9}],
        "categories:seo": ["error", {"minScore": 0.9}]
      }
    }
  }
}
```

### Performance Benchmarks:
- Performance Score: > 90
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Speed Index: < 2.0s
- Cumulative Layout Shift: < 0.1

## 4. Accessibility Testing with Pa11y

### Configuration:
```json
// .pa11yrc
{
  "standard": "WCAG2AA",
  "urls": [
    "http://localhost:3000/",
    "http://localhost:3000/en/",
    "http://localhost:3000/vn/ai-la-gian-diep",
    "http://localhost:3000/vn/huong-dan/ai-la-gian-diep"
  ],
  "actions": [
    "click element [data-testid='start-game']",
    "wait for element [data-testid='player-name'] to be visible"
  ]
}
```

### Accessibility Checks:
- Color contrast ratios
- Keyboard navigation
- Screen reader compatibility
- Touch target sizes
- Form labels and ARIA attributes

## 5. CI/CD Integration

### GitHub Actions Workflow:
```yaml
# .github/workflows/test.yml
name: Automated Testing
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3

      # Unit tests
      - name: Run Jest tests
        run: npm run test

      # Build project
      - name: Build project
        run: npm run build

      # E2E tests
      - name: Install Playwright
        run: npx playwright install
      - name: Run Playwright tests
        run: npm run test:e2e

      # Performance tests
      - name: Run Lighthouse CI
        run: npm run test:lighthouse

      # Accessibility tests
      - name: Run Pa11y tests
        run: npm run test:a11y
```

## 6. Test Scripts Configuration

### Package.json scripts:
```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:e2e": "playwright test",
    "test:lighthouse": "lhci autorun",
    "test:a11y": "pa11y-ci",
    "test:all": "npm run test && npm run test:e2e && npm run test:lighthouse && npm run test:a11y"
  }
}
```

## 7. Test Data Management

### Mock Data Structure:
```typescript
// tests/fixtures/word-lists.ts
export const mockWordLists = {
  animals: [
    { spy: "chó", normal: "mèo" },
    { spy: "cá", normal: "chim" }
  ],
  food: [
    { spy: "táo", normal: "cam" },
    { spy: "cơm", normal: "phở" }
  ]
}

// tests/fixtures/game-states.ts
export const mockGameStates = {
  setupPhase: { phase: 'setup', players: [], /* ... */ },
  votingPhase: { phase: 'voting', players: [/* 4 players */], /* ... */ }
}
```

## Testing Schedule

### Development Phase:
- **Unit tests** run on every code change (watch mode)
- **Integration tests** run on git commits
- **Performance tests** run on pull requests

### Pre-deployment:
- **Full test suite** must pass before deployment
- **Lighthouse CI** scores must meet benchmarks
- **Accessibility tests** must have zero violations

### Post-deployment:
- **Smoke tests** verify production deployment
- **Performance monitoring** tracks real-world metrics
- **Error tracking** captures production issues

## Success Criteria

### Test Coverage:
- Unit test coverage > 80%
- Critical user flows covered by E2E tests
- All interactive elements tested for accessibility

### Performance Targets:
- All Lighthouse scores > 90
- Page load times < 3s on 3G
- Zero accessibility violations

### Quality Gates:
- No test failures block deployment
- Performance regressions block deployment
- Accessibility violations block deployment

This automated testing setup ensures consistent quality checks on every code change while covering all critical functionality, performance, and accessibility requirements.
