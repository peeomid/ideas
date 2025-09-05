# Knowledge Management Guide

This guide provides detailed instructions for using the knowledge management system in this Obsidian vault.

## System Overview

The knowledge management system follows a **capture → prioritize → process → connect** workflow using inbox-style organization and Maps of Content (MOCs).

## File Structure

```
knowledge/
├── 00-inbox.md              # Capture all new links/articles/ideas
├── 01-reading-queue.md      # Prioritized reading list
├── 02-processed.md          # Archive view of read articles
├── topics/                  # Maps of Content (MOCs)
│   ├── ai-ml-moc.md        
│   ├── web-dev-moc.md      
│   ├── business-moc.md     
│   └── productivity-moc.md 
└── articles/                # Individual article notes (auto-created)
```

## Daily Workflow

### 1. Capture (00-inbox.md)
**When you find an interesting link/article:**
- Add to `00-inbox.md` with format: `- [ ] [Article Title](url) - quick note about why interesting`
- Add any quick ideas or thoughts that don't fit existing projects
- Don't worry about organization - just capture quickly

### 2. Prioritize (01-reading-queue.md) 
**During weekly review:**
- Move links from inbox to reading queue
- Organize by priority: This Week, Next Week, Someday/Maybe
- Add topic tags like `#ai-ml`, `#business`, `#web-dev`

## Article Processing Workflow

### After Reading an Article

**Step 1: Create Individual Article Note**
- Create new file: `knowledge/articles/YYYY-MM-DD-article-title.md`
- Use this template:

```markdown
# Article - [Article Title]

**Source:** [Original Article](url)
**Date Read:** YYYY-MM-DD
**Rating:** ⭐⭐⭐⭐⭐ (1-5 stars)
**Topics:** #tag1 #tag2

## Key Points
- Main insight 1
- Important finding 2
- Useful concept 3

## My Thoughts
- How this relates to my projects
- Questions it raised
- Connections to other ideas

## Action Items
- [ ] Try this approach in project X
- [ ] Research more about Y
- [ ] Share with team/friends

## Connected Ideas
- Links to [[Related Article]]
- Links to [[projects/project-name/main-project-name]]
- Links to [[Other Relevant Note]]
```

**Step 2: Add to Topic MOC**
- Open relevant topic MOC (e.g., `topics/ai-ml-moc.md`)
- Add link in "Articles & Resources" section:
  - `- [[YYYY-MM-DD-article-title]] - ⭐⭐⭐⭐⭐ - Brief description of value`

**Step 3: Update Reading Queue**
- Remove article from `01-reading-queue.md`
- Optionally add to `02-processed.md` for quick reference

## Maps of Content (MOCs)

MOCs are topic-based index notes that organize related content. Each MOC has these sections:

### Standard MOC Template
```markdown
# [Topic] Map of Content

## Core Concepts
*Fundamental knowledge and definitions*

## Articles & Resources  
*Articles you've read with ratings and notes*

## My Notes & Insights
*Your original thoughts and analysis*

## Tools & Implementations
*Practical applications, tools, code*

## Related Projects
*Links to your projects using this knowledge*

## Questions to Explore
*Things you want to research further*
```

## Weekly Review Process

**Every Sunday (or your preferred day):**

1. **Process Inbox** (5-10 minutes)
   - Review `00-inbox.md`
   - Move prioritized links to `01-reading-queue.md`
   - File quick ideas into appropriate MOCs

2. **Update Reading Queue** (5 minutes)
   - Prioritize articles for the week
   - Move low-priority items to "Someday/Maybe"

3. **Review MOCs** (10-15 minutes)
   - Look for connections between new articles and existing knowledge
   - Update "Questions to Explore" sections
   - Link related articles together

## Advanced Tips

### Linking Strategy
- **Link liberally**: Connect articles to projects, other articles, and MOCs
- **Use backlinks**: Let Obsidian show you related content automatically
- **Graph view**: Use to discover unexpected connections

### Tagging System
- Use consistent tags: `#ai-ml`, `#web-dev`, `#business`, `#productivity`
- Add specific tags for techniques: `#machine-learning`, `#react`, `#saas`
- Use status tags: `#reading-queue`, `#processed`

### Article Rating System
- ⭐ - Not worth the time
- ⭐⭐ - Some useful points
- ⭐⭐⭐ - Good information, worth referencing
- ⭐⭐⭐⭐ - Excellent insights, high value
- ⭐⭐⭐⭐⭐ - Game-changing, must reference often

### File Naming Conventions
- Articles: `YYYY-MM-DD-descriptive-title.md`
- MOCs: `topic-name-moc.md`
- Use lowercase, hyphens for spaces

## Integration with Projects

### Connecting Knowledge to Projects
- Link articles to relevant projects in the "Connected Ideas" section
- Add knowledge insights to project planning
- Reference articles in project documentation

### From Knowledge to Action
- Use "Action Items" in article notes to create project tasks
- Link research findings to implementation plans
- Track how knowledge influences project decisions

## Troubleshooting

### Common Issues

**Too many unread articles in queue:**
- Be more selective in inbox capture
- Use "Someday/Maybe" section more liberally
- Archive low-priority articles without reading

**Can't find articles later:**
- Improve article titles and descriptions
- Use more specific tags
- Link articles to multiple MOCs if relevant

**MOCs getting too long:**
- Create sub-MOCs for specific topics
- Archive older articles to separate "Archive" sections
- Focus on most relevant/recent content

## Quick Reference Commands

### Daily Capture
1. Add link to `00-inbox.md`
2. Continue with your work

### After Reading
1. Create `articles/YYYY-MM-DD-title.md`
2. Add to relevant MOC
3. Remove from reading queue

### Weekly Review
1. Process `00-inbox.md` → `01-reading-queue.md`
2. Update MOCs with new connections
3. Plan reading priorities for the week

This system grows with you - start simple and add complexity as needed.