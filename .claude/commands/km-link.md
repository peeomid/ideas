---
description: "Quickly add a link to reading queue with title fetch and date"
tools: ["Read", "Edit", "WebFetch"]
---

Quick link capture workflow:

## Process the provided URL
1. **Fetch article title and context** using WebFetch
2. **Add to reading queue** in `knowledge/01-reading-queue.md`
3. **Format**: `- [ ] [Article Title](url) - topic/relevance (added: YYYY-MM-DD)`
4. **Organize** by priority section (This Week, Next Week, or Someday/Maybe)
5. **Provide brief summary** of what the article covers

## Usage
`/km-link https://example.com/article`

The link will be automatically processed with title, context, date, and organized in the appropriate priority section based on the content relevance to current projects.