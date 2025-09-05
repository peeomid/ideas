# Technical Notes - Q&A Site

## Content Analysis

### Repository Structure
Repository located at: `/Users/luan/Development/Bowtie/bowtie-context-knowledge/qna/`

```
/qna/
├── README.md
├── posts/           # 200 Q&A markdown files
│   ├── q_101_How_to_implement_drag_and_drop_UI_in_admin_portal.md
│   ├── q_103_How_to_build_x86_64_docker_image_on_arm64_device_(Apple_M1).md
│   ├── q_105_What_are_our_payment_and_3DS_flow__How_does_Stripe_integration_work.md
│   └── ... (197 more files)
└── images/          # 82 PNG image files referenced in posts
    ├── 00a6b30f-7a5f-4a6b-b4fd-31acfb007046.png
    └── ... (81 more files)
```

**Content Scale:**
- **Total Q&As**: 200 posts
- **Images**: 82 PNG files
- **File naming pattern**: `q_{question_id}_{url_encoded_title}.md`

### Markdown Format
**Standardized format across all posts:**

```markdown
# Question Title

## Question Details
- **Question ID**: 101
- **Author**: System/Real Name
- **Created**: 2021-06-17 02:47:45 UTC
- **Score**: 1
- **Views**: 21
- **Answer Count**: 1
- **Tags**: tag1, tag2, tag3

## Question Body
Question content here...

## Answers

### Answer 1
- **Author**: Author Name
- **Created**: 2021-06-17 02:57:21 UTC
- **Score**: 1

Answer content with markdown formatting...

### Answer 2 (if multiple answers)
- **Author**: Another Author
- **Created**: 2021-08-01 10:30:00 UTC
- **Score**: 0

Another answer...
```

**Key patterns identified:**
- Consistent metadata structure in `## Question Details`
- Image references use relative paths: `../images/{uuid}.png`
- Tags are comma-separated
- Multiple answers numbered sequentially
- Rich markdown content with code blocks, links, lists
- Internal cross-references to other questions


## Architecture Decisions

### Decision Log
Use a simple FastAPI site now, that will generate simple UI for search first.

#### 4. Search Solution
**Decision**: Backend-powered search (likely with Python libraries)
**Options**: 
- Python libraries: Whoosh, Elasticsearch-py, or custom indexing
- Consider Meilisearch for self-hosted option
**Factors**: Python ecosystem, content size (200 posts), future AI integration

