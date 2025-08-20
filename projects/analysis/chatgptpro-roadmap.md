Perfect—here’s a clean, phased roadmap from **now → 9–12 months**, with **validation-first sprints**, **clear targets**, **what’s being tested**, and **outputs**. I’ve separated **traffic-only** plays vs **build-for-business**. Low budget throughout.

---

# Phase 0 — Foundation (Days 0–1)

**Goal:** set up shared plumbing so every micro-tool ships fast and can cross-promote.

* **Targets**

  * Analytics: Plausible (or GA4) + event schema (`signup`, `tool_use`, `export`, `qr_scan`).
  * Lightweight design system + components (1-page LP, tool shell, form).
  * Email capture (Buttondown/Mailchimp) + waitlist tags by idea.
  * Cross-promo bar (top/bottom banner slot).

* **Output**

  * `site.com/tools/*` hub online, 1 template landing, 1 template tool page.
  * One-liner brand style + favicon set.

---

# Phase 1 — 2-week pre-code validation (Weeks 1–2)

**Goal:** validate **Excel Converter** (business), **Docs→Web** (business), **Textua** (traffic), and **QR Payment Generator** (hybrid) with the smallest artifacts.

## Sprint 1 (Week 1): Excel Converter + Textua

* **Targets**

  * Excel Converter: prove high-intent demand (signups & clicks from problem searches).
  * Textua: confirm copy/paste → export behavior (traffic magnet potential).

* **Strategy**

  * Launch **fake-door LPs** (+ 60-sec demo GIFs).
  * Publish 2 help-articles:

    * “Why Excel breaks CSV (UTF-8, delimiter, locale)—and how to fix.”
    * “Fix broken text from Facebook/Chat/Copy-Paste in one click.”
  * Seed 3–5 answers on relevant Q\&A threads (neutral tone, include working *mini demo*).
  * Tiny interactive **stubs**:

    * Converter: upload → show “preview only” + email to get download (no real conversion yet).
    * Textua: real client-side cleanup for 2 actions (“Fix line breaks”, “Bulletize”).

* **What’s being tested**

  * **Excel Converter**: % visitors who (a) upload a file, (b) request a download, (c) join waitlist.
  * **Textua**: paste→click rate, average time on tool, % who click cross-promo.

* **Goal / output (kill or go)**

  * Excel Converter: ≥15% of visitors upload; ≥8% request download; ≥50 qualified emails.
  * Textua: ≥35% paste→click; ≥10% click cross-promo.
  * If both hit: green-light MVP builds next phase.

---

## Sprint 2 (Week 2): Docs→Web + QR Payment Generator

* **Targets**

  * Docs→Web: prove creators want “pretty publish” + analytics.
  * QR Payment: verify SMB interest for **multi-method** QR page & printable cards.

* **Strategy**

  * Docs→Web **fake-door**: paste a “Publish-to-web” URL → render 2 static “before/after” screenshots + ask for email to get hosted link when ready.
  * QR Payment: working **generator for VietQR + deep-link placeholders**; download PNG + “multi-QR page” (static). Share in 2–3 FB groups (students/cafés).
  * Landing copy includes clear **use cases** + 1 printable A5 template.

* **What’s being tested**

  * **Docs→Web**: paste attempts, price sensitivity (radio: free w/badge vs \$5–\$9/mo no-badge).
  * **QR Payment**: # pages generated, # downloads, # scans (use a trackable link on sample template).

* **Goal / output**

  * Docs→Web: ≥30 paste attempts; ≥20% select paid option in price poll; ≥30 emails.
  * QR Payment: ≥100 QR images generated; ≥200 total scans; ≥10 merchants reuse within week.

---

# Phase 2 — First build & cross-promo (Weeks 3–6)

**Goal:** ship **1 traffic tool** + **1 business tool**, stitch cross-promotion, keep scope brutal.

## Sprint 3 (Weeks 3–4): Ship Textua (traffic-only) + Excel Converter (MVP)

* **Targets**

  * Textua: rank for long-tail queries; drive 1–2k visits/mo quickly.
  * Excel Converter: working conversions for 80% of common cases.

* **Strategy**

  * **Textua MVP**

    * Actions: Fix line breaks, Bulletize, Clean HTML → MD.
    * Save/Copy buttons, no login, instant load.
    * Cross-promo tiles: Excel Converter + Docs→Web waitlist.
  * **Excel Converter MVP**

    * Detect encoding + delimiter; normalize to CSV/XLSX; “Excel (vi-VN/en-US) profile”.
    * “Looks-like-Excel” preview (client-side table), export with/without BOM.
    * Free single-file; capture email to download (soft wall).

* **What’s being tested**

  * Textua: organic clicks from help articles, % of users who click cross-promo (≥10%).
  * Converter: success rate (no error) ≥95% on sample files; 1st conversion <5s.

* **Goal / output**

  * Textua: ≥500 weekly sessions by end of Week 4; ≥10% click cross-promo.
  * Converter: ≥100 successful conversions; ≥20 trial signups.

---

## Sprint 4 (Weeks 5–6): Harden Converter + release QR Suite (traffic) + Paid wall

* **Targets**

  * Converter: convert→signup ≥15%; add 2 presets (Google Sheets, Shopify CSV).
  * QR Suite (traffic): Wi-Fi QR, vCard QR, Google Review QR (simple, fast).

* **Strategy**

  * Add batch upload (queue up to 10 files) = **Pro trial**.
  * Release QR Suite under `/qr/*` with printable templates.
  * Insert **cross-promo**: “Also need to collect payments? Generate multi-QR pay page.”
  * Start **\$5–\$9/mo Pro**: batch + saved presets + API key (beta).

* **What’s being tested**

  * Price acceptance, trial→paid conversions, QR Suite usage → clickthrough to Pay generator.

* **Goal / output**

  * Converter: ≥10 paying users by Week 6; trial→paid ≥8–12%.
  * QR Suite: ≥300 QR codes generated; ≥5% click to Pay generator.

---

# Phase 3 — Second business product + hybrid (Weeks 7–12)

**Goal:** ship **Docs→Web MVP** and **QR Payment gen v1**, deepen SEO.

## Sprint 5 (Weeks 7–9): Ship Docs→Web MVP

* **Targets**

  * Time-to-publish <60s; 3 theme presets; simple analytics.

* **Strategy**

  * Paste “publish to web” URL → pretty page + auto TOC + OG image + sitemap.
  * Free with “Made with …” badge; Paid removes badge + custom domain + Plausible hook.

* **What’s being tested**

  * Publish attempts/week; % enabling analytics; badge-to-paid uplift.

* **Goal / output**

  * ≥100 published pages; ≥20 paid trials; badge CTR ≥1.5%.

---

## Sprint 6 (Weeks 10–12): Ship QR Payment v1 + print packs

* **Targets**

  * Create multi-method QR page; ≥30 recurring merchants; ≥1k scans/mo.

* **Strategy**

  * VietQR (EMVCo string) + wallet deep links (MoMo/ZaloPay).
  * “Group bill” preset amounts; vanity short link; A5 printable cards (VN/EN).
  * Partner deal with 1 local print shop.

* **What’s being tested**

  * Merchant retention (reusing link), scan trends, willingness to pay for analytics/vanity.

* **Goal / output**

  * ≥30 recurring merchants; ≥10 paid for vanity/analytics or print bundle.

---

# Phase 4 — Growth iteration (Months 4–6)

**Goal:** strengthen retention + SEO, keep OPEX tiny.

## Sprint 7 (Month 4): Converter Pro & SEO scale

* **Targets:** +3 presets (platforms), CLI/Starter API, 10 SEO articles.
* **Test:** batch adoption; API requests; article→tool conversion rate (>4%).

## Sprint 8 (Month 5): Docs→Web polish

* **Targets:** custom domains (CNAME), image optimization, “sections → nav”.
* **Test:** paid retention (Month 2), support load remains <2% users/mo.

## Sprint 9 (Month 6): QR Pay analytics & templates

* **Targets:** daily/weekly scan charts; tip presets; 10 new templates.
* **Test:** paid attach rate for merchants (>15% using analytics/vanity).

---

# Phase 5 — Portfolio wideners (Months 7–12)

**Traffic-only:**

* Add 3–5 tiny utilities (diacritics tools, % calculator, JSON formatter) to amplify SEO.
* Optional: **Group game (Who’s the Spy?)** as content play (one tight PWA, VN word packs) → link to tools.

**Defer / revisit later:**

* **AutoSenso** (unless you find a Gmail niche Gmail won’t build soon).
* **Social auto-poster**, **Mac focus app**, **Car comparison** (heavy/fragile).

---

## Dependencies (shared)

* **Infra:** Vercel/Cloudflare Pages, Cloudflare KV/R2 (for files), Supabase (auth/db) or Firebase.
* **Billing:** LemonSqueezy/Gumroad (no-codey, low dev).
* **Tracking:** Plausible sitewide + per-tool events.
* **Design:** one component library; one CSS theme; dark/light.
* **Legal:** simple ToS/Privacy; QR payments page clarifies “no custody—links only”.

---

# 2-week validation plan (detailed checklist)

### Week 1 (Excel Converter + Textua)

**Mon**

* Stand up LP templates + analytics.
* Draft “Why Excel breaks CSV” (1k words, diagrams).
* Build Textua v0 (2 actions working client-side).

**Tue**

* Publish both LPs.
* Record 60-sec demo GIFs.
* Post 2 neutral answers on Q\&A (linking article, not LP).

**Wed**

* Add Converter “upload→preview→email gate” stub.
* Outreach to 3 relevant FB/Reddit communities (value first).

**Thu**

* Add Textua “copy all / save file”.
* First review of metrics; tweak CTAs.

**Fri**

* Write “Fix broken paste from Facebook/Chat” article + link Textua.
* Ship small site changes from analytics insights.

**Sat–Sun**

* Lightly re-share articles where allowed; collect feedback emails.

**Week-1 Goals**

* Converter: ≥25 uploads, ≥10 email submissions.
* Textua: ≥150 sessions, ≥10% cross-promo clicks.

---

### Week 2 (Docs→Web + QR Pay)

**Mon**

* Docs→Web fake door (paste URL → screenshots + email capture).
* Draft “Docs to beautiful web in 1 min” guide.

**Tue**

* QR Pay generator stub: VietQR string builder + PNG export + static multi-QR page.
* Printable A5 template (VN/EN).

**Wed**

* Seed in 2 FB groups (students/cafés/vendors).
* Add scan counter to template link.

**Thu**

* Poll pricing on Docs→Web (radio on LP).
* Collect 3 short creator interviews (what would make you switch?).

**Fri**

* Review metrics; decide **go/no-go** for MVP builds.
* Write Week-2 recap + plan for Phase 2.

**Week-2 Goals**

* Docs→Web: ≥30 paste attempts; ≥20% choose paid in poll; ≥30 emails.
* QR Pay: ≥100 QR generated; ≥200 scans; ≥10 recurring merchants.

*(If any miss by >30%, rework LP/tool copy + channels before coding.)*

---

# Long-term product arc (12-month view)

* **Quarter 1:** Establish the pair **(traffic + business)**: Textua + Excel Converter.
* **Quarter 2:** Add **Docs→Web** (2nd revenue line) + **QR Pay** (hybrid).
* **Quarter 3:** Scale SEO tooling hub (5–10 utilities), add Converter API/CLI, polish Docs→Web domain features. Consider **one** community/traffic bet (game) if SEO flywheel is steady.
* **Quarter 4:** Evaluate AutoSenso only if a privacy-first lane emerges. Otherwise deepen what works (templates, integrations, batch, API) and keep CAC near zero through organic.

---

## “Not worth doing now” (stay disciplined)

* **QR Business Cards** (crowded; high CAC; low moat).
* **Mac Work Session Manager** (saturated; polish-heavy).
* **Social auto-poster** (policy + review friction).
* **Car comparison portal** (data + ops heavy).
* **Gift recommender** (content treadmill—do only as 2–3 evergreen pages under the hub).

---

### TL;DR build order

1. **Textua (traffic)** + **Excel Converter (business)** → cross-promote.
2. **QR Suite (traffic)** → feed **QR Payment**.
3. **Docs→Web (business)**.
4. **QR Payment (hybrid)**.
5. Scale what sticks; defer the rest.

If you want, I can turn this into a **Notion board** schema (columns, cards, acceptance criteria) and a **metric dashboard spec** (events, funnels, alerts) so you can track each sprint without guesswork.
