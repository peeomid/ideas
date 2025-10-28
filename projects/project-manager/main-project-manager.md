# Project Manager Tool

**Things Project**: Project Manager (Work area)

## Problem Statement

Currently managing projects and todos using Claude Code with markdown files in Obsidian. While this works well for documentation and planning, it lacks automation and integration with other tools for daily workflows.

Missing integrations:
- Daily summaries to Telegram for progress tracking
- Sync with Things app for task management
- Voice announcements via Google Home Hub using catt

## Solution Overview

Build a project management automation tool that enhances the current markdown-based system with:
- Automated daily summaries sent to Telegram
- Bidirectional sync with Things app for task management
- Voice casting of todo lists to Google Home Hub
- Integration with existing markdown project structure

## MVP Features

### Core Features
- [ ] Parse existing markdown todo files (`todo.md`, `projects/*/todo.md`)
- [ ] Extract tasks, priorities, and status from markdown format
- [ ] Generate daily summary reports
- [ ] Send summaries to Telegram bot

### Things App Integration
- [ ] Read todos from Things app database/API
- [ ] Create new todos in Things from markdown files
- [ ] Sync completion status between systems
- [ ] Handle project organization and tags

### Google Home Integration
- [ ] Format todo lists for voice announcements
- [ ] Use catt to cast summaries to Google Home Hub
- [ ] Schedule regular announcements (morning briefings)
- [ ] Support different announcement formats (urgent, today's focus, weekly review)

### Advanced Features
- [ ] Smart parsing of different markdown todo formats
- [ ] Priority-based filtering for announcements
- [ ] Progress tracking and streak counting
- [ ] Integration with calendar for deadline reminders

## Tech Stack

### Backend
- **Python** - Main automation scripts
- **Things 3 API** - For task management sync
- **Telegram Bot API** - For daily summaries
- **catt** - Google Home casting (already installed locally)

### Data Processing
- **Markdown parsing** - Extract todos from existing files
- **SQLite** - Local state tracking and sync history
- **Cron/systemd** - Scheduled automation

### Integration Points
- Existing markdown files in Obsidian vault
- Things 3 app on macOS
- Telegram bot for notifications
- Google Home Hub via catt

## Implementation Status

### Phase 1: Markdown Parser
- [ ] Parse todo.md and project todo files
- [ ] Extract tasks with status, priority, dates
- [ ] Generate structured data format

### Phase 2: Telegram Integration
- [ ] Set up Telegram bot
- [ ] Design daily summary format
- [ ] Implement automated sending

### Phase 3: Things App Sync
- [ ] Research Things 3 API/database access
- [ ] Implement bidirectional sync
- [ ] Handle conflicts and duplicates

### Phase 4: Google Home Integration
- [ ] Format announcements for voice
- [ ] Test catt integration
- [ ] Schedule regular briefings

### Phase 5: Automation
- [ ] Set up scheduled runs
- [ ] Error handling and logging
- [ ] Configuration management

## Market Research

### Similar Tools
- Zapier/IFTTT integrations (paid, limited customization)
- Notion automation (different base system)
- Custom todo managers (require full migration)

### Unique Value
- Works with existing markdown workflow
- Preserves current documentation structure
- Adds automation without migration overhead
- Local control and privacy

## Revenue Model

**Personal use tool** - Not intended for monetization initially.

Potential future opportunities:
- Open source release for similar workflows
- SaaS version for teams using markdown-based planning
- Integration templates for different todo systems

## Technical Notes

### Markdown Todo Format Support
Support for various todo formats:
```markdown
- [ ] Task name
- [x] Completed task
- Priority levels (High/Medium/Low)
- Blocked tasks with reasons
- Sprint organization (In Progress, Ready to Start, Backlog)
```

### Things 3 Integration Research
- Things 3 uses SQLite database on macOS
- Location: `~/Library/Group Containers/JLMPQHK86H.com.culturedcode.ThingsMac/Things Database.thingsdatabase/`
- May need AppleScript or direct database access

### Telegram Bot Setup
- BotFather bot creation
- Daily summary format design
- Error handling for failed sends

## Related Projects
- Current todo system: [[../../todo.md]]
- Devsgen utilities: [[../devsgen/main-devsgen]]

## Next Steps
1. Research Things 3 database structure
2. Set up basic markdown parser
3. Create Telegram bot
4. Test catt with Google Home Hub