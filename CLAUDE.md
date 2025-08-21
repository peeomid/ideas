# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is an Obsidian vault containing personal idea notes, project concepts, and planning documents. The repository consists primarily of markdown files documenting various business ideas, project proposals, and development concepts.

## Directory Structure

### Main Files
- `ideas.md` - Central hub with all project ideas organized by priority with effort estimates and links to detailed specs
- `todo.md` - System-wide todo coordination and priority management
- `periodic_tasks.md` - Periodic tasks to do
- `idea_notepad.md` - Note down my ideas on the go (includes quick todo capture)
- `building_guide.md` - Resources for building micro-SaaS products
- `1_financial_forecast.md` - Financial planning and forecasting content
- `traffic-growth-report.md` - Analysis or reporting on traffic growth
- `*.canvas` files - Obsidian canvas files for visual mind mapping
- Daily notes (e.g., `2025-08-19.md`) - Time-based documentation

### Projects Structure
All detailed project information is organized under `projects/` directory:

```
projects/
├── [project-name]/
│   ├── main-[project-name].md (detailed project specs)
│   ├── todo.md (project-specific task tracking)
│   └── [other project files...]
├── devsgen/main-devsgen.md + todo.md (dev utilities)
├── textua/main-textua.md + todo.md (text readability tool)
├── trochoinhom/main-trochoinhom.md + todo.md (group games platform)
└── [other projects with main + todo files...]
```

## Project Organization System

### Main Ideas File (`ideas.md`)
- **Central overview** with short descriptions of all projects
- **Priority categorization**: Working on, High Priority, Medium Priority, Low Priority, Done
- **Effort estimates**: `(S/M/L/XL)` for Small/Medium/Large/Extra Large
- **Revenue potential**: `($-$$$$)` indicating expected earning potential
- **Links to detailed specs**: Uses format `[[projects/folder/main-filename]]`

### Individual Project Files
Each project follows the naming pattern: `projects/[project-name]/main-[project-name].md`

**Standard project file template includes:**
- Problem statement
- Solution overview
- MVP features list
- Tech stack considerations
- Implementation status checklist
- Market research notes
- Revenue model estimates
- Links to existing detailed specifications

## Content Categories

The ideas span various domains:
- Development tools and utilities (regex tools, diff viewers, code formatters)
- Business applications (QR code generators, menu systems, review tools)
- Web scraping and data aggregation projects
- Financial planning and analysis tools
- Mobile and desktop applications

## How to Create New Project Ideas

1. **Add to `ideas.md`**: 
   - Include short description with effort and revenue estimates
   - Link to detailed project file: `→ [[projects/project-name/main-project-name]]`

2. **Create project directory**: 
   - Make folder: `projects/[project-name]/`

3. **Create main project file**: 
   - File name: `projects/[project-name]/main-[project-name].md`
   - Use standard template with all sections

4. **Create project todo file**:
   - File name: `projects/[project-name]/todo.md`
   - Use standard todo template (see Todo System section)
   - Link from main project file: `→ [[projects/project-name/todo]]`

5. **Update system-wide todo**:
   - Add project to `/todo.md` in appropriate priority section
   - Set initial project goals

6. **Add supporting documentation**:
   - Technical specs, marketing plans, etc. in project folder
   - Link from main project file

## Working with This Repository

This is a documentation and planning repository rather than a codebase:

1. **Markdown Editing**: All content files use standard markdown format
2. **Idea Organization**: Ideas are categorized by implementation priority and status
3. **Obsidian Integration**: Files are designed to work within Obsidian with wiki-style linking
4. **No Build Process**: This repository contains documentation only - no compilation or build steps required

## Todo System

### System-wide Todo (`/todo.md`)
- High-level coordination across all projects
- Weekly focus and sprint planning
- Cross-project dependencies tracking
- Regular review schedules

### Project Todo Files (`projects/[project-name]/todo.md`)
- Detailed task tracking per project
- Current sprint organization (In Progress, Ready to Start, Backlog)
- Priority levels (High, Medium, Low)
- Blocked tasks with specific blockers
- Completed tasks archive

### Todo Management Workflow
1. **Daily**: Check system-wide priorities, update active tasks
2. **Weekly**: Review all project todos, plan sprints, sync with `ideas.md`
3. **Monthly**: Archive completed todos, reassess priorities

## Common Tasks

- **Adding New Ideas**: Follow the project creation workflow above
- **Updating Project Status**: Move ideas between priority categories in `ideas.md`
- **Task Management**: Use todo files for detailed project tracking
- **Creating Detailed Plans**: Add supporting files in project folders and link from main project file
- **Daily Documentation**: Use date-based filenames for daily notes and progress tracking
- **Cross-linking**: Use wiki-style links to navigate between related project files