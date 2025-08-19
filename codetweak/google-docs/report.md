# Google Docs to Readable Website — Feasibility & Competitor Report

## Executive Summary
- Highly feasible. Multiple proven paths to convert Google Docs into clean, responsive websites with sync and theming.

## Technical Approaches
- Export to HTML via Drive API (files.export): Export to `text/html`, sanitize, and restyle with your own components and CSS.
  - Pros: Simple, robust.
  - Cons: HTML is noisy; requires cleanup for headings, lists, images, footnotes.
- Parse structured JSON via Docs API: Retrieve document JSON, transform to Markdown or HAST, then render.
  - Pros: Fine-grained control; most consistent output and theming.
  - Cons: More engineering to handle structure and edge cases.
- “Publish to the web” HTML: Users publish the doc; you fetch that public HTML and restyle.
  - Pros: Easiest onboarding (no OAuth).
  - Cons: Requires publishing; privacy trade-offs; HTML is limited and not fully structured.

## Key Considerations
- Auth: OAuth2 for user docs; service accounts for shared/team drives; or public “publish to web”.
- Limits: Drive export size ~10MB per request; API quotas; images fetched separately; equations/tables/footnotes need special handling.
- Sync: Drive Changes API or push notifications (webhooks) to auto-regenerate pages on edits.
- Output UX: Improve readability (max content width, font size/line-height, ToC, anchor links, footnote popovers, dark mode, reading progress).
- SEO: Semantic headings, metadata, canonical URLs, OG/Twitter tags, sitemap, structured data where relevant.

## Suggested Architecture (Astro + React + TypeScript + Tailwind)
- Pipeline:
  1) Ingest: Google Docs via Drive export (HTML or DOCX) or Docs API JSON.
  2) Transform: Use unified/remark/rehype or `@googleworkspace/google-docs-hast` to get sanitized Markdown/HAST.
  3) Render: Astro pages with React islands for ToC, footnotes popovers, search, progress bar.
  4) Deploy: Static build or SSR. Trigger rebuilds on Drive changes.
- State: Light client-side state (e.g., Nanostores) for ToC/reading progress/dark mode.

## Competitor Landscape
- Direct re-publishers:
  - gdoc.pub — restyles “Publish to web” docs. Proves demand; minimal control and privacy.
    - https://gdoc.pub/
- Docs platforms with import:
  - GitBook — imports Google Docs/HTML/Markdown; outputs polished docs sites.
    - https://docs.gitbook.com/getting-started/import
- Static site starters/integrations:
  - Eleventy + Google Docs starter using `@googleworkspace/google-docs-hast`.
    - https://github.com/jpoehnelt/eleventy-google-docs-starter
- Conversion tools:
  - Docs to Markdown (Add-on): GDocs → Markdown/HTML (manual or scripted).
    - https://workspace.google.com/marketplace/app/docs_to_markdown/700168918607
  - npm: `google-docs-converter`, `google-docs-markup` (programmatic conversion).
    - https://www.npmjs.com/package/google-docs-converter
    - https://www.npmjs.com/package/google-docs-markup
  - Pandoc via DOCX export: Drive export DOCX → Pandoc to Markdown.
    - https://pandoc.org/demos.html
- Ecosystem references:
  - Jekyll/Hugo community scripts/add-ons for Google Docs content flows.

## Verified API Docs & Methods
- Drive export to HTML: https://developers.google.com/workspace/drive/api/reference/rest/v3/files/export
- Export formats: https://developers.google.com/drive/api/guides/ref-export-formats
- Manage downloads/exports (+10MB note): https://developers.google.com/workspace/drive/api/guides/manage-downloads
- Docs API — document structure (JSON): https://developers.google.com/docs/api/concepts/structure
- Publish to the web (support): https://support.google.com/docs/answer/183965?hl=en

## MVP Options
- MVP A (fastest, no OAuth):
  - Input: “Publish to web” link from the user.
  - Fetch published HTML → sanitize/normalize → convert to Markdown/HAST (unified/remark/rehype) → render as Astro page with Tailwind.
  - Add ToC, anchors, readable typography, dark mode.
- MVP B (private docs, more robust):
  - Google OAuth sign-in → select Doc → Drive `files.export` (HTML or DOCX) → convert to MD/MDX (remark or Pandoc) → render in Astro.
  - Optional: Docs API path for higher-fidelity HAST via `@googleworkspace/google-docs-hast`.
  - Drive change notifications → auto-rebuild/redeploy on updates.

## Edge Cases & Risks
- Complex tables, footnotes, equations, drawings (e.g., Google Drawings), embedded content, and comments/suggestions may need custom handling.
- Image hosting and paths: fetch/export images and map to local/static paths or a CDN.
- Privacy/security: If using “publish to web”, ensure users understand exposure; for OAuth, scope least-privilege and encrypt tokens.
- Consistency: Map inline styles to a small semantic class set; avoid style drift.

## Effort Estimate
- POC (single doc → readable page): 1–2 days.
- OAuth + multi-doc + auto-sync + theming/templates: 1–2 weeks.

## Differentiation Opportunities
- Best-in-class mobile readability and typography.
- Footnotes/citations as popovers.
- Instant sync with previews and rollbacks.
- Themes/templates and custom domains.
- Built-in SEO and linkable headings.

## Recommended Next Steps
1) Choose MVP A (quick) or MVP B (private/sync).
2) Define target features for V1 (ToC, anchors, dark mode, theme).
3) Prototype ingest → transform → render pipeline and test with 2–3 real docs.
4) Add sync (Drive changes) and deploy flow.
