# Project Manager Tool - Todo

## In Progress

## Ready to Start

### High Priority
- [ ] Research Things 3 database structure and access methods
- [ ] Set up basic markdown parser for existing todo files
- [ ] Create and configure Telegram bot via BotFather
- [ ] Test catt integration with Google Home Hub

### Medium Priority  
- [ ] Design daily summary format for Telegram
- [ ] Plan bidirectional sync strategy with Things app
- [ ] Set up SQLite for local state tracking
- [ ] Research AppleScript vs direct database access for Things

### Low Priority
- [ ] Plan error handling and logging strategy
- [ ] Design configuration management system
- [ ] Consider open source release planning

## Backlog

### Phase 1: Foundation
- [ ] Parse todo.md and all projects/*/todo.md files
- [ ] Extract tasks with status, priority, dates
- [ ] Generate structured data format (JSON/SQLite)
- [ ] Basic CLI tool for testing parsing

### Phase 2: Telegram Integration
- [ ] Implement daily summary generation
- [ ] Add scheduled sending functionality
- [ ] Create different summary formats (brief, detailed, urgent-only)
- [ ] Add manual trigger command

### Phase 3: Things App Sync
- [ ] Implement Things 3 database reading
- [ ] Create todos in Things from markdown
- [ ] Sync completion status between systems
- [ ] Handle project organization and tags mapping

### Phase 4: Google Home Integration
- [ ] Format todo lists for voice announcements
- [ ] Implement catt integration for casting
- [ ] Add different announcement types (morning, evening, urgent)
- [ ] Schedule regular briefings

### Phase 5: Automation & Polish
- [ ] Set up cron/systemd for scheduled runs
- [ ] Comprehensive error handling
- [ ] Configuration file system
- [ ] Documentation and setup guide

## Blocked

### Research Needed
- [ ] **Things 3 API access** - Need to determine best method for integration
- [ ] **Markdown parsing edge cases** - Handle various todo formats across projects
- [ ] **Google Home casting limitations** - Test catt capabilities and restrictions

## Completed

## Notes

### Technical Considerations
- Things 3 database path: `~/Library/Group Containers/JLMPQHK86H.com.culturedcode.ThingsMac/Things Database.thingsdatabase/`
- catt installation status: Need to verify local installation
- Telegram bot token storage: Use environment variables or config file

### Integration Points
- Current markdown files in: `/Users/luannguyenthanh/Library/Mobile Documents/iCloud~md~obsidian/Documents/ideas/`
- Main todo file: `todo.md`
- Project todos: `projects/*/todo.md`

### Success Metrics
- Daily summaries sent automatically
- Seamless task creation in Things app
- Regular voice briefings working
- No disruption to existing markdown workflow