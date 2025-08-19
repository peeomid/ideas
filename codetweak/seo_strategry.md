# CodeTweak SEO / Content Strategy (v2)

_Last updated: 7 Aug 2025_

---

## 1. Objective (12 mo)
• 50 k organic sessions / month  
• Top-3 ranks for “regex tester”, “phone number regex”, “bulk regex replace”  
• ≥ 7 % session → tool-run conversion

## 2. Information Architecture
```
/tools                    — index of utilities
  /find-replace            — Find Replace tool (default view)
    /[pattern-slug]       — Regex Helper loaded with pattern + info card
  /bulk-replace           — future tool
/guides/                  — long-form articles & comparisons
/changelog/               — release notes
```

## 3. Keyword Strategy by Purpose

Below, each keyword group contains (a) a **primary keyword** (bold) with search volume (Ahrefs global), (b) key variations, and (c) suggested content/page type.

### 3.1 Tool-Intent Keywords (use the tool now)
| Primary KW (Vol) | Core Variations | Target Page | Notes |
|------------------|-----------------|-------------|-------|
| **regex tester** (70 k) | online regex tester, regex validator | `/tools/regex-tester` | Canonical tool page |
| **Find and Replace regex** (1.2 k) | multiple find replace, batch regex replace | `/tools/regex-find-replace` | Tool page |
| **bulk regex replace** (1.2 k) | multiple find replace, batch regex replace | `/tools/bulk-replace` | Canonical tool page |
| **code beautifier** (12 k) | code formatter online, prettify code | `/tools/code-beautifier` | Future tool |

### 3.2 Sub-Tool-Intent Keywords (use the tool now)
| Primary KW (Vol) | Core Variations | Target Page | Notes |
|------------------|-----------------|-------------|-------|
| **search and replace slash with dot** (1.2 k) | search and replace slash with dot | `/tools/regex-find-replace/slash-with-dot` | Sub-tool page |
| **search and replace camel case to kebab case** (1.2 k) | search and replace camel case to kebab case | `/tools/regex-find-replace/camel-case-to-kebab-case` | Sub-tool page |
| **search and replace camel case to snake case** (1.2 k) | search and replace camel case to snake case | `/tools/regex-find-replace/camel-case-to-snake-case` | Sub-tool page |

### 3.3 Pattern-Intent Keywords (specific copy-paste patterns)
| Primary KW (Vol) | Related Patterns | Target Page | Page Type |
|------------------|-----------------|-------------|-----------|
| **email regex** (22 k) | email address regex, validate email regex | `/tools/regex/email-regex` | Pattern page + helper pre-filled |
| **phone number regex** (9.4 k) | international phone regex, us phone regex | `/tools/regex/phone-number-regex` | Pattern page |
| **uuid regex** (3.2 k) | guid regex | `/tools/regex/uuid-regex` | Pattern page |
| **hex color regex** (1.8 k) | color code regex | `/tools/regex/hex-color-regex` | Pattern page |

### 3.4 Learning / Guide Keywords (concepts & how-tos)
| Primary KW (Vol) | Variations | Target Page | Content Idea |
|------------------|-----------|-------------|--------------|
| **regex lookahead** (9 k) | negative lookahead regex, positive lookahead | `/guides/regex-lookahead` | Illustrated guide with live examples |
| **regex cheat sheet** (8 k) | regex summary, regex quick reference | `/guides/regex-cheat-sheet` | Evergreen reference |
| **regex replace newline** (1.1 k) | regex remove newline, strip newlines regex | `/guides/regex-replace-newline` | Tutorial + link to bulk replace tool |

### 3.5 Brand / Support Keywords
| Keyword | Target Page | Purpose |
|---------|-------------|---------|
| codetweak regex | `/tools/regex` | Branded capture |
| codetweak bulk replace | `/tools/bulk-replace` | Branded capture |

**Content Mapping Summary**
1. **Tool pages** → satisfy “do” intent keywords.  
2. **Pattern pages** → satisfy “solution” intent and internally deep-link back to tool.  
3. **Guides** → satisfy “learn” intent; end with CTA to launch tool with example.

---
_Note:_ Some high-volume queries such as **“email regex”** are informational—not directly a find/replace pattern used inside the helper—but we still capture them via a pattern-info page (`/tools/regex/email-regex`). The helper loads with the pattern pre-filled so users can test or adapt it.
| Bucket | Example KW | Page | Primary KPI |
|--------|------------|------|-------------|
| Tool   | regex tester (70 k) | `/tools/regex` | Sessions, runs |
| Pattern| email regex (22 k)  | `/tools/regex/email-regex` | Copy clicks |
| Guide  | regex lookahead (9 k) | `/guides/regex-lookahead` | Scroll depth |

## 4. Pattern Page Template
1. H1: `<pattern> regex`  
2. Pattern card → live tester → use-cases → FAQ (FAQPage schema)  
3. CTAs: Copy · Test sample · Share link

## 5. UX / Persuasion Principles
• Auto-focus & highlight pre-loaded regex  
• Instant match feedback; success toasts  
• Social proof counters (e.g. “3 k copies in July”)

## 6. On-Page & Technical Checklist
- Titles ≤ 60 chars, keyword first  
- SoftwareApplication schema on tool pages  
- `<link rel="canonical">` between pattern ↔ canonical  
- JS payload < 35 KB; lazy-load heavy libs  
- Auto-generate `sitemap.xml`, `robots.txt`

## 7. Internal Linking Strategy (with examples)
1. **Primary nav** (header/footer)  
   • Tools → `/tools`  
   • Regex Helper → `/tools/regex`  
   • Guides → `/guides`  
   • Changelog → `/changelog`
2. **Tool page → Pattern pages**  
   • Inside `/tools/regex`, banner "Popular patterns: [Email](../regex/email-regex), [Phone](../regex/phone-number-regex), [UUID](../regex/uuid-regex)"  
3. **Pattern page cross-links**  
   • `/tools/regex/email-regex` footer: "See also [Phone Number Regex](/tools/regex/phone-number-regex)" (related patterns module)  
   • CTA "Need bulk replacement? Try [Bulk Replace Tool](/tools/bulk-replace)"  
4. **Guide → Tool / Pattern**  
   • Guide `/guides/regex-lookahead` ends with "Practice in [Regex Helper](/tools/regex#lookahead)"  
   • Inline link "email regex" → `/tools/regex/email-regex`
5. **Changelog deep-links**  
   • Release note: "Added [Hex color regex pattern](/tools/regex/hex-color-regex)"  
6. **Breadcrumbs** (structured data)  
   • `Home › Tools › Regex › Email Regex`
7. **Reciprocal contextual links**  
   • Bulk Replace tool page references Regex Helper (`/tools/regex`) for testing patterns  
   • Pattern pages reference Guides for theory ("Learn about lookahead")

1. **Primary nav**: Tools, Guides, Patterns, Changelog visible site-wide.  
2. **Contextual links** inside tool UI (e.g. “Need email regex? → pattern page”).  
3. **Related patterns** module (max 6) at bottom of every pattern page.  
4. **Guide → Tool**: Each guide ends with a button to launch relevant tool pre-loaded.  
5. **Changelog** entries deep-link to new/updated patterns & tools to spread equity.  
6. Use `breadcrumbList` schema for depth ≤ 3.

## 8. Link-Building & Authority
1. StackOverflow answers linking to pattern pages  
2. GitHub gists for each pattern (`rel=canonical` back)  
3. Guest posts (LogRocket, CSS-Tricks)  
4. Free API inclusion in dev tool lists  
5. VS Code marketplace listing

## 9. Measurement
| Metric | Target | Tool |
|--------|--------|------|
| Organic sessions | 50 k/mo | GA4 |
| Avg time on tool | > 3 min | GA4 |
| Pattern copy CTR | 30 % | GA4 event |
| Backlinks (DR > 40) | 200 | Ahrefs |

Track weekly in Looker Studio; reassess quarterly.

## 10. Roadmap
| Q | Deliverable |
|---|--------------|
| Q3 2025 | Launch Regex Tester, 10 pattern pages, sitemap, OG images |
| Q4 2025 | Bulk Replace tool, +10 patterns, VS Code extension |
| Q1 2026 | Code Beautifier, regex API docs, 10 guides |
| Q2 2026 | JSON/YAML formatters, multilingual rollout |

---
This v2 supersedes prior drafts.

_Last updated: 7 Aug 2025_

## 1. Business & SEO Goals
1. Drive qualified developers to CodeTweak’s web tools (starting with the Regex Helper) and convert them to recurring users.
2. Rank on page-1 for high-intent queries such as “regex tester”, “bulk find and replace”, and “regex cheat sheet”.
3. Build topical authority so that future tools (e.g. JSON formatter, UUID generator) inherit strong organic visibility.

Key KPIs (first 12 months):
- 50 k monthly organic sessions.
- 15 % returning-visitor rate.
- 7 % tool-usage conversion (session → run action).

## 2. Audience & Search Intent
| Segment | Pain Point | Search Examples |
|---------|------------|-----------------|
| Front-end / full-stack devs | Need quick regex validation while coding | “regex tester online”, “javascript regex test” |
| QA / testers | Bulk text replacement in test data | “bulk regex replace”, “find replace multiple patterns” |
| Data engineers | Clean log files & CSV | “regex replace newline”, “regex extract group” |

Search intent clusters:
1. **Do/Tool** – want to _use_ a tester / replacer now.
2. **Learn** – need explanations or cheat-sheets.
3. **Solution** – looking for patterns for a specific task (e.g. email regex).

## 3. Keyword Research Snapshot
(Volumes = global monthly; KD = Ahrefs keyword difficulty)

| Primary Keyword | Volume | KD | Intent |
|-----------------|--------|----|--------|
| regex tester | 70 000 | 46 | Tool |
| regex online | 40 000 | 41 | Tool |
| regex replace | 30 000 | 38 | Tool |
| bulk find and replace | 1 200 | 17 | Tool |
| code beautifier | 12 000 | 29 | Tool |
| regex cheat sheet | 8 000 | 14 | Learn |
| email regex | 22 000 | 32 | Solution |
| uuid regex | 3 200 | 11 | Solution |
| date regex | 2 800 | 18 | Solution |

Long-tail (sample): `regex remove blank lines` (1 100), `regex whitespace` (900), `regex uppercase words` (500).

## 4. Content & Page Architecture
```
/                    (Landing – dev-utils hub)
/regex/              (Tool island – interactive)
  └─ /tester/        (Regex Tester – canonical)
  └─ /replace/       (Bulk Find & Replace)
  └─ /beautify/      (Code Beautifier)
/regex/patterns/     (Static library)
  ├─ /email/         (Email regex pattern)
  ├─ /uuid/          (UUID regex pattern)
  ├─ /date/          (Date regex patterns)
/blog/               (Guides, tutorials, release notes)
```

### Static Pattern Pages (high search/low KD)
Create ~30 pages targeting specific patterns:
- `/regex/patterns/phone-number/` – **Volume:** 9 400
- `/regex/patterns/ip-address/` – 4 600
- `/regex/patterns/json/` – 3 900
- `/regex/patterns/url/` – 6 500
Include:
1. Copy-pasteable pattern with explanation.
2. Live tester component pre-loaded with pattern.
3. Common use-cases & pitfalls.
4. FAQ (schema.org FAQPage).

### Blog / Guides
1. “How to chain multiple regex replaces in one command” – targets `multiple regex replace` (800 vol).
2. “Top 10 VS Code regex shortcuts” – captures IDE audience & earns links.
3. Release posts for each new tool to seed backlinks.

## 5. On-Page Optimisation Checklist
- Page titles ≤ 60 chars, primary keyword first (e.g. “Regex Tester – Validate & Debug Regex Online | CodeTweak”).
- Meta description 150–155 chars with CTA.
- H1 mirrors title; subsections use H2/H3 with secondary keywords.
- JSON-LD `SoftwareApplication` schema for each tool page.
- `<link rel="canonical">` between pattern pages & derivatives.
- Lazy-load code example iframes to maintain Core Web Vitals.

## 6. Technical SEO
- Framework: Astro Islands + React ensures static-first output; keep interactive payload < 35 KB.
- Generate static HTML for pattern pages at build; ensures crawlability.
- Pre-render Open Graph images (`@vercel/og` or `satori`).
- Add XML sitemap & `robots.txt`; update on build.
- Use `x-robots-tag: noindex` for experimental/internal routes.

## 7. Link-Building & Authority
1. Publish regex patterns as reusable GitHub gists → link back.
2. Answer regex questions on StackOverflow with CodeTweak tester embeds.
3. Guest post on dev blogs (CSS-Tricks, LogRocket) using patterns article.
4. Offer free API for regex validation → natural links from tooling lists.
5. Earn mentions from VS Code marketplace when launching extension.

## 8. Measurement & Reporting
| Metric | Target | Tool |
|--------|--------|------|
| Organic sessions | 50 k/mo | GA4 |
| % new vs return | 85 / 15 | GA4 |
| Avg. time on tool | > 3 min | GA4 | 
| Primary keyword rankings | Top-3 | Ahrefs / GSC |
| Backlinks (DR > 40) | 200 | Ahrefs |

Track weekly in Looker Studio; iterate content priorities quarterly.

## 9. Roadmap
| Q | Deliverable |
|---|--------------|
| Q3 2025 | Launch Regex Tester, 10 pattern pages, sitemap, OG images |
| Q4 2025 | Bulk Replace tool, 10 additional patterns, VS Code extension |
| Q1 2026 | Code Beautifier, regex API endpoint & docs |
| Q2 2026 | Expand to JSON/YAML formatters, reach 50 k sessions |

## 10. Future Opportunities
- **Internationalisation**: auto-translate pattern pages (ES, PT, JA) once English pages rank.
- **Video snippets**: 1-min regex demos on YouTube Shorts embeds – improves dwell time & link diversity.
- **Community-generated patterns**: encourage users to submit patterns, building UGC & long-tail content.
