love the momentum 👏 — here’s a **plain-English, icon-guided roadmap** that uses what you’ve already shipped:

* **oduoc.com** → QR payment generator (MVP)
* **easytoread.top** → Textua (readability tool, MVP)
* **devsgen.com** → Devsgen (dev tools, MVP)

I stick to the earlier priority:
**Business:** Excel Format Converter, Google Docs → Web.
**Traffic:** Textua, Devsgen, QR utilities.
**Hybrid:** QR Payment (VN first), US as traffic.

---

## Quick terms (no jargon)

* **“Google Docs → Web”** = turn a Google Doc into a clean, shareable webpage (nice typography, table of contents, share image, simple analytics, optional custom domain).
* **“Landing page test” (was “fake door”)** = a simple page that explains the product and measures interest (clicks/paste/email), before you build the full thing.
* **“Traffic-only”** = built to attract lots of visitors and feed your other products; not meant to make money itself.
* **“Business product”** = meant to be paid or have a clear upgrade path.

---

# PHASE 1 — Traffic foundations & learning (Weeks 1–2)

### Sprint 1 (Weeks 1–2) → Traffic & message test

🎯 **Goal:** Strengthen **Textua** & **Devsgen** as traffic magnets; set up simple tests for the business products.

**Tasks**

* 🔎 **Keyword research** (VN + US):

  * Textua: “fix line breaks”, “clean copied text”, “readable text online”.
  * Devsgen: “JSON viewer”, “CSV to JSON”, “JWT decode”, “regex tester”.
  * Converter: “Excel UTF-8 CSV”, “comma vs semicolon CSV”, “Excel Vietnamese accents broken”.
  * Docs→Web: “turn Google Doc into website”, “publish Google Docs nicely”.
* 🧱 **Landing pages** (very simple):

  * **Excel Converter** (Business) → upload preview + email capture.
  * **Docs → Web** (Business) → paste Doc URL → show mock preview + email capture.
* 🔁 **Cross-promo bars** on all 3 sites:

  * From Textua/Devsgen → point to Converter & Docs→Web pages.
  * From oduoc.com/qr → point to your QR suite tools (Wi-Fi, vCard, Review QR).
* 🌐 **Posts in communities** (VN + US):

  * VN FB groups (freelancers/SMB), Zalo groups; US Reddit (r/excel, r/googledocs, r/datasets), Indie Hackers.
  * Share helpful tips + link to the tool (keep it useful, not salesy).
* 📢 **Tiny paid test** (optional): a small search ad to check which phrases get the most clicks for Converter and Docs→Web.

✅ **Output:** list of winning keywords/topics, early emails collected, cross-promo working.

---

### Product notes in Phase 1

**🧰 Devsgen (developer one-liners / AI code helper)** — *Traffic-only*

* 🎯 **Market:** Dev niche (US + VN), strong SEO potential on utility queries.
* 🚦 **Role:** SEO magnet like regex101/JSON viewers; feed traffic to Converter.
* 🔗 **Dependency:** none; can add tools quickly with AI help.
* ⚡ **Validation:** release 2–3 tiny tools next (JSON viewer, CSV⇄JSON, JWT decode) + short posts.

**📝 Textua (make messy text readable)** — *Traffic-only*

* 🎯 **Market:** VN + US users pasting messy text from chats, PDFs, socials.
* 📣 **Marketing:** “how to fix paste from Facebook/Chat/PDF” articles; short demos on TikTok (VN) and Reddit posts (US).
* ⚡ **Validation:** users paste → click “clean” → copy; watch which content brings them.

**💸 QR payment @ oduoc.com (VN first)** — *Hybrid*

* 🎯 **Market:** cafés/sellers/event hosts in VN; in US, use as “tip jar” (Venmo/PayPal/Cash App).
* 📣 **Marketing:** printable QR cards (A5), templates, “how to set up tip jar quickly” posts.
* ⚡ **Validation:** people print or reuse their payment page; you get DMs/comments asking for vanity links or analytics.

---

# PHASE 2 — First business product build (Weeks 3–6)

### Sprint 2 (Weeks 3–4) → **Excel Format Converter** (Build & soft launch)

🎯 **Goal:** Ship a simple converter that “just opens right in Excel” (Vietnamese accents, delimiter, encoding).

**Tasks**

* 🛠 **Build**: drag-drop file → auto-detect encoding & delimiter → export CSV/XLSX; presets for **Excel (vi-VN/en-US)** + Google Sheets.
* 👀 **“Looks like Excel” preview** (so users trust the output).
* 📚 **Help articles** (VN + US): “Why Excel breaks CSV and how to fix it (diacritics, commas/semicolons).”
* 🤝 **Answer questions** on Reddit/Superuser/StackOverflow with short explanations and a link to your tool.
* 🧲 **Upgrade idea**: batch convert + saved presets = paid upgrade (keep language simple: “Batch mode & save your settings”).

📣 **Go-to-market**

* VN: Facebook groups for office/excel, Zalo mini-guides, Vietnamese how-to posts.
* US: Reddit threads where people struggle with CSV/Excel, dev/ops communities, “CSV upload failed” help-center comments (polite tips + link).

✅ **Output:** a working converter people share in threads; a couple of “starter presets” that match real platforms (e.g., Shopify/Sheets).

---

### Sprint 3 (Weeks 5–6) → **Traffic Flywheel**

🎯 **Goal:** Multiply free traffic and route it to Excel Converter.

**Tasks**

* ➕ **Add 2–3 Devsgen tools** (JSON viewer, CSV⇄JSON, JWT decoder).
* 🧷 **Launch a small “QR Suite”** at oduoc.com (Wi-Fi QR, vCard QR, Google Review QR).
* 🔗 **Cross-links:** clear banners/cards from Textua/Devsgen/QR Suite → Excel Converter.
* 📝 **Write short guides** (VN + US): 400–600 words each; show quick fixes; include screenshots.

📣 **Go-to-market**

* VN: SEO on Vietnamese queries + FB group posts.
* US: Reddit utility roundups (“best quick online converters that don’t track me”), Indie Hackers “tiny tool” posts.

✅ **Output:** growing organic visits; Excel Converter becomes the main destination from your utilities.

---

# PHASE 3 — Second business product & QR growth (Weeks 7–12)

### Sprint 4 (Weeks 7–9) → **Google Docs → Web** (Build & launch)

🎯 **Goal:** Let people paste a Google Doc (already “Published to web”) and get a **clean, shareable page** with nice typography, a table of contents, preview image, and optional simple analytics. Free version shows a tiny “Made with …” badge; paid removes badge + lets them use their domain.

**Tasks**

* 🛠 **Build**: paste URL → pretty page; add a couple of themes; auto table of contents; social preview image.
* 🧪 **Templates**: “Resume” + “Press Kit” pages that look great out of the box.
* 🔍 **Docs page SEO**: basic metadata, sitemap so pages can be found (if users want).
* 📣 **Go-to-market**

  * US: Product Hunt mini-launch; Reddit r/googledocs/r/Notion; Twitter/X demos.
  * VN: KOLs/YouTubers who share CV/portfolio tips; FB groups for jobs/freelancers.
* 🧵 **Content**: “How to turn your Doc into a portfolio/resume/press kit in 60 seconds.”

✅ **Output:** people share live pages; some upgrade to remove the badge/use domain.

---

### Sprint 5 (Weeks 10–12) → **QR Payment upgrades (VN), US variant**

🎯 **Goal:** Make VN version useful daily; try US “tip jar” flavor.

**Tasks**

* 🧾 **VN upgrades**: vanity short link, simple scan analytics, “tip amount” presets, beautiful printable signs (VN/EN).
* 💳 **US variant**: Venmo/PayPal/Cash App links → QR image; “multi-method tip jar” page.
* 🤝 **Local partners**: a print shop you can recommend; bundle “printable kit”.

📣 **Go-to-market**

* VN: café/vendor groups; “how to accept payment with one QR” post; TikTok shorts showing the printable.
* US: Reddit bartender/creator threads (“set up a tip jar fast”), Twitter/X posts.

✅ **Output:** VN merchants keep using the same link/sign; US variant drives traffic and some creators adopt it for tips.

---

# PHASE 4 — Polish & keep costs tiny (Months 4–6)

* **Excel Converter**: add more “ready-made” profiles (Google Sheets, Shopify, ad platforms). Offer a simple **batch tool** and (optionally) a tiny **API**.
* **Docs → Web**: smoother custom domains (CNAME), faster images, “section nav” for long docs.
* **QR Payment (VN)**: simple charts (daily scans), holiday templates, “team shared page” for events.
* **Traffic**: keep adding **tiny Devsgen tools** and **text utilities** that answer a specific search (“remove BOM”, “convert tabs to spaces”, “diacritics add/remove”).

---

# PHASE 5 — Portfolio wideners (Months 7–12)

* **Traffic-only**: more **Devsgen** tools & **Textua** presets; a small **party game** later if you want pure reach.
* **Skip for now**: Gmail filter manager, social auto-poster, Mac focus app, car portal (too heavy/crowded without a strong edge).

---

## Per-product cheat sheets

**🧮 Excel Format Converter — Business (US + VN)**

* 🧑‍🤝‍🧑 **Who:** spreadsheet users, ops, marketers who get broken CSVs.
* 🧲 **Marketing:** how-to articles, helpful replies on Excel/CSV threads, tutorials in VN & US.
* 💳 **Business model:** free single file; paid = batch + saved presets; later: simple API.
* 🔧 **Build tip:** keep it boring & fast; trust comes from a preview that looks like Excel.

**📰 Google Docs → Web — Business (US + VN)**

* 🧑‍🎨 **Who:** creators, freelancers, students, small teams sharing docs as websites.
* 🧲 **Marketing:** launch templates (Resume/Press Kit); show before/after previews; Product Hunt + Reddit.
* 💳 **Business model:** free with badge; paid = remove badge + custom domain + analytics.
* 🔧 **Build tip:** one-minute publish flow, instant share image, clean typography.

**🧰 Devsgen — Traffic-only (US + VN)**

* 🧑‍💻 **Who:** devs searching quick utilities.
* 🧲 **Marketing:** SEO on long-tail utilities; “no login, no tracking” tone; link to Converter.
* 💡 **What to add next:** JSON viewer, CSV⇄JSON, JWT decode, Base64/URL tools.

**📝 Textua — Traffic-only (US + VN)**

* 🧍 **Who:** anyone pasting messy text from chat/PDF/social.
* 🧲 **Marketing:** short “how to clean copy/paste” posts; TikTok reels (VN), Reddit how-tos (US).
* 🔧 **What to add next:** “Fix PDF paste”, “Turn transcript into bullets”, “Convert to Markdown”.

**💳 QR Payment — Hybrid (VN business, US traffic)**

* 🧍 **Who:** VN cafés/sellers/events; US creators for tip jars.
* 🧲 **Marketing:** printable kits, group presets (“split bill”), local FB groups; in US, creator/bartender threads.
* 💳 **Business model (VN):** simple vanity link + scan analytics; optional printable bundle.
* 🔧 **Build tip:** keep generation instant; make the printable look great.

---

## Simple go-to-market playbook (VN + US)

* **VN:** Facebook groups (SMB, cafés, freelancers), Zalo posts, YouTube/TikTok shorts showing step-by-step, Vietnamese blog posts answering specific problems.
* **US:** Reddit answers (be helpful), Indie Hackers/Show HN, Product Hunt mini-launches, short Loom videos on X/LinkedIn.
* **Everywhere:** add a tiny “Made with …” badge on free outputs (opt-out on paid) to drive free word-of-mouth.

---

If you want, I can turn Phase 1 and Phase 2 into **ready-to-paste task lists** (checklists) for each site, and draft the first **two blog posts** (VN + US) to kick off your content.
