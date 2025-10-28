# Trochoinhom MVP Sitemap & User Flow

## User Flow Analysis

### Primary User Journeys

**Discovery Flow:**
1. User searches "trò chơi ai là gián điệp" → lands on game explanation page
2. User reads about the game → clicks "Chơi ngay"
3. User sets up game → plays entirely on same page (client-side)
4. After game ends → option to replay or discover other games

**Direct Play Flow:**
1. User visits homepage → sees available games
2. User clicks on preferred game → goes to game page
3. User plays game (all client-side interactions)
4. User explores other games

**Learning Flow:**
1. User wants to understand rules → visits rule pages
2. User learns strategies → ready to play
3. User starts game session

## Sitemap Structure

### Vietnamese Routes (Default)

**Trang chủ** - `/`
- Game gallery with all available games
- Featured game section
- Quick access to popular games

**Game Pages (Client-side apps)**
- `/vn/ai-la-gian-diep` - Who is the Spy game app (entire gameplay here)
- `/vn/[future-game-slug]` - Future games as separate apps

**Game Information & pSEO**
- `/vn/huong-dan/ai-la-gian-diep` - Rules, how to play, strategies
- `/vn/gioi-thieu/ai-la-gian-diep` - What is the game, origins, benefits
- `/vn/huong-dan/` - General game rules hub
- `/vn/tro-choi-nhom` - Group games category overview

**Content & Discovery**
- `/vn/tat-ca-tro-choi` - All games directory
- `/vn/bai-viet/` - Blog section for pSEO content
- `/vn/gioi-thieu` - About platform

### English Routes

**Homepage** - `/en/`
- Same structure as Vietnamese

**Game Pages**
- `/en/who-is-the-spy` - Game app
- `/en/[future-game-slug]` - Future games

**Game Information**
- `/en/rules/who-is-the-spy` - Game rules and how to play
- `/en/about/who-is-the-spy` - Game explanation and benefits
- `/en/rules/` - Rules hub
- `/en/group-games` - Category page

**Content**
- `/en/all-games` - Games directory
- `/en/articles/` - English blog content
- `/en/about` - About platform

## Future-Proof Structure

**Game Categories** (when you have more games):
- `/vn/tro-choi-tap-the` - Party games
- `/vn/tro-choi-chien-thuat` - Strategy games
- `/vn/tro-choi-nhanh` - Quick games

**Game Types** (as you expand):
- Single device games
- Multi-device games (future)
- Video call games (future)

## Technical Considerations

- All game pages are Astro pages with embedded client-side apps
- Game state managed entirely in browser (localStorage for persistence)
- No backend API calls during gameplay
- Static content generation for SEO pages
- Responsive design prioritizing mobile/tablet usage
- jQuery for simple DOM manipulation, React for complex game UI
- TypeScript for type safety throughout