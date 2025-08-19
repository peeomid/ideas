Here’s a checklist of proven factors that make long-form text comfortable to read on-screen, distilled from research, WCAG guidelines, and Medium’s own typographic choices.

Typography

Typeface choice
– Prefer humanist or neo-grotesque sans-serifs (e.g. Inter, SF Pro, Helvetica Neue) or highly readable serifs (e.g. Georgia, Freight).
– Use a single body font to avoid cognitive switching; restrict secondary font to headings.
Font size (desktop ≈ laptop)
– Body: 18 – 20 px (≈ 1.125 – 1.25 rem).
– Headings: H1 ≈ 32 – 40 px, then scale down 1.25–1.33× per level.
– Mobile: Scale 10 – 15 % larger for the same viewing distance.
Letter-spacing / tracking
– Body text: 0 – 0.02 em; headings can tolerate slightly negative tracking (–0.01 em) for impact.
Line-height (leading)
– 1.5 – 1.75 for body; 1.2 – 1.4 for headings.
Line length
– 60 – 75 characters on desktop; 35 – 45 on mobile (≈ 90 % viewport width capped at 620 px). Use CSS max-width on the text container.
Layout & Spacing

Paragraph spacing: 0.75–1× of font size above, 0 below, or use first-line indent to separate.
Margins / gutters: ≥ 16 px mobile, 24–32 px desktop. Provide generous side padding to create a text column (“content well”).
White space rhythm: base a 4-pt or 8-pt spacing scale (Medium uses 8-pt).
Avoid full justification; ragged-right prevents rivers and spacing glitches.
Images & embeds: full-bleed up to 100 % width, but never exceed 1.2× text column; caption at 0.9 em, 1.4 lh.
Hierarchy & Navigation

Heading levels no deeper than H4; keep title case consistent.
Automatic Table of Contents when > 800–1000 words or when ≥ 3 H2 sections; sticky side (desktop) or collapsible top (mobile).
Reading progress bar (thin, sticky top) gives orientation feedback.
Distinct link styling: colored + underlined on hover/focus, meets 3:1 contrast against body text.
Color & Contrast

Text/background contrast ≥ 7:1 (WCAG AAA) for body, 4.5:1 for secondary UI.
Pure #000/#fff can cause visual fatigue; Medium uses #0D0D0D on #FFFFFF (≈ 15:1).
Support dark mode (e.g. #EAEAEA text on #121212). Maintain identical contrast ratios.
Limit simultaneous colors; use color mainly for links and callouts.
Responsive Behaviour

Fluid typography with clamp() to scale between breakpoints (e.g. clamp(1.125rem, 2vw + 1rem, 1.25rem)).
Column width adapts but stays within ideal line-length range.
Sticky TOC and progress bar hide on small screens to reclaim space.
Avoid fixed-height containers; let content dictate height.
Interaction & Micro-features

“Copy code” buttons for code blocks; syntax highlighting with accessible color palette.
Hover footnotes or sidenotes (desktop) become expandable popovers on mobile.
Reading time estimate near title.
Text-selection color customized to brand palette but passing contrast.
Adjustable font-size toggle for accessibility.
Accessibility & Performance

Use semantic HTML (<article>, <section>, <h2>...) so screen readers mirror structure.
ARIA landmarks for TOC, progress bar, and share menu.
Ensure focus outlines for keyboard navigation.
Lazy-load heavy media; keep Time-to-First-Byte and CLS low to prevent layout shifts.
Pre-processing / Clean-up (important for pasted text)

Normalize Unicode (smart quotes, em-dashes).
Strip styling, ads, tracking pixels.
Convert repeated line breaks into paragraphs.
Detect and preserve code blocks or lists.
Auto-detect headings (capitals + newline pattern) to generate semantics & TOC.
Finishing Touches

Subtle drop cap for first paragraph (optional, desktop only).
Callout blocks (quote, tip, warning) with left border accent color.
Hyphenation (hyphens: auto) for justified narrow columns.
“Back to top” button after first screenful.
Use this checklist as acceptance criteria when you prototype the tool: if every bullet is satisfied, you’ll match or surpass Medium’s reading comfort on both desktop and mobile.