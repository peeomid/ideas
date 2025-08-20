Awesome—let’s zoom in on the highest-leverage ideas, add real-world signals (with sources), spell out dev/ops effort, GTM, and call out “traffic-only” ideas vs. “build for business.” I’ll also flag what to skip for now.

---

# Updated priorities (focused on impact vs. effort)

1. **Excel Format Converter** → **Build for business** (clear pain, many niches underserved)
2. **Google Docs → Web** → **Build for business** (narrow, high-intent creators/teams)
3. **Textua (readability/cleanup)** → **Traffic-only** (broad demand; monetize via cross-sell)
4. **QR Payment Generator (VN)** → **Hybrid** (traffic + light B2B upsell)
5. **AutoSenso (MailMinder)** → **Defer / validate more** (Gmail native catching up) ([The Verge][1], [The Times of India][2])

Everything else: see “Do later / skip” near the end.

---

## 1) Excel Format Converter (CSV/encoding/delimiter/locale fixes)

### Market & problem signals

* Excel still mishandles UTF-8 CSV unless imported a certain way or saved with BOM; official guidance points users to PQ/Data->Get Data workflows to avoid broken characters. This pain shows up across MS support, Q\&A, and SO. ([Microsoft Support][3], [Microsoft Q\&A][4], [Microsoft Learn][5])
* Delimiter pain (comma vs semicolon) depends on Windows regional settings; many teams can’t change system settings just to export a file correctly. ([Microsoft Support][6], [Ablebits][7])

### Competitors & gaps

* Generic converters (Ablebits guides, ConvertCSV, ExtendsClass) exist but don’t “just work” for **Vietnamese** UTF-8/diacritics and locale quirks (decimal comma, list separator), nor do they batch-fix files or show a **safe preview** of how Excel will read the result. (Refs show the problem space and current guidance, not a “one-click” tool.) ([Ablebits][8], [Super User][9])

### MVP (effort: **small–medium**)

* Web: drag-drop → detect encoding & delimiters → normalize (CSV/TSV/XLSX) → “**Open in Excel preview**” mode that simulates how Excel will parse on common locales (en-US, vi-VN, de-DE).
* Batch mode + simple API.
* Guardrails: quote escaping, BOM options, date coercion, “decimal comma safe” export profiles.

### Other work

* Docs with “why Excel breaks your CSV” (wins links from forums/help desks).
* Templates/presets for **Salesforce/Shopify/Zalo OA/Google Ads** upload formats to capture long-tail searches.

### GTM (low-budget)

* **SEO program** around “Excel UTF-8 Vietnamese”, “CSV semicolon to comma”, “Excel import accented characters”, etc. (These issues are *heavily* discussed and linked from help desks.) ([Microsoft Q\&A][4], [Super User][9])
* Answer threads + link your tool from guides (MS Q\&A, Superuser, StackOverflow answers *with code and a neutral tone*). ([Super User][9])
* “Paste data → see errors” landing converts instantly.

### Scale risk

* Desktop Excel changes are slow; this pain is persistent across versions. (MS’s own docs still recommend workarounds.) ([Microsoft Support][3])

**Call:** High priority—ship.

---

## 2) Google Docs → Web (Docs → clean web pages with analytics)

### Market & problem signals

* Creators know “Publish to web” exists but the output is ugly/limited; tools like **gdoc.pub** and **gdocweb** exist—proof of demand—but they’re rough and/or require GitHub flow. ([Google Help][10], [gdoc.pub][11], [gdocweb][12])

### Competitors & gaps

* **gdoc.pub**: simple “pretty publish,” no site structure, limited branding. ([gdoc.pub][11])
* **gdocweb**: generates GitHub Pages; more control but friction (auth to Drive + GitHub). ([gdocweb][12], [blog.gdocweb.com][13])
* Add-ons for posting to WordPress exist, but many users want **hosted, clean, tracked, shareable** pages—no CMS or GitHub. ([Google Workspace][14])

### MVP (effort: **small–medium**)

* Paste a “publish to web” URL → render a **clean, responsive** page with theme presets, auto-TOC, footnotes, image optimization, and **privacy-respecting analytics**.
* Canonical URLs + OpenGraph, sitemap.xml to make it SEO-usable.
* Option: “mirror” mode (pull on change) vs. snapshot.

### Other work

* Simple “Docs as site” (multi-page doc sections → nav).
* One-click export to static HTML bundle.

### GTM (low-budget)

* Seed in Google Docs/No-Code communities & “Docs → blog/portfolio” tutorials (there are many such threads). ([Wordable][15], [Make Community][16])
* “Before/after” gallery for common use cases (resumes, wikis, press kits).
* Add a tiny “Made with …” badge for free tier growth (opt-out in paid).

### Scale risk

* If Google improves “Publish to web,” your advantage shrinks, but history shows slow evolution; third-party polish keeps winning. ([Google Help][10])

**Call:** High priority—ship.

---

## 3) Textua (make messy text readable)

### Market & problem signals

* Huge evergreen demand for **line-break removal/cleanup/paragraph fixes**—tons of “quick tools” exist and get heavy traffic. (This is classic “traffic magnet.”) ([TextFixer][17], [TextToolz][18])

### Competitors & gaps

* Utilities like TextFixer/Browserling/OnlineTextTools do one thing each; **no single clean UX** that: paste → auto-structure → headings/bullets → copy. ([TextFixer][17], [Browserling][19])

### MVP (effort: **small**)

* Paste text → auto-normalize whitespace, smart paragraphs, convert bullets/numbering, wrap long lines, optional Vietnamese diacritics handling (remove/repair). Include **“HTML/Markdown”** views.

### Traffic strategy (explicitly **traffic-only**)

* Make it ad-free/fast, publish how-to posts (“Fix broken copy from Facebook/YouTube descriptions,” “Turn transcripts into bullets”), and **link out** to your paid products.
* Proof that simple utilities can scale traffic: see Similarweb’s public stats for calculator/utility sites (many millions of visits). ([Similarweb][20])

**Call:** High priority for **traffic**, not direct revenue.

---

## 4) QR Payment Generator (Vietnam)

### Market & problem signals

* VN cashless/QR skyrocketing: SBV/NAPAS report **>100% YoY growth for QR volume** in 2024; NAPAS handled **9.56B** transactions in 2024; VietQR share is rising fast. ([Vietnam+ (VietnamPlus)][21], [vietnamnews.vn][22], [en.napas.com.vn][23], [Vietnam Investment Review - VIR][24])

### Competitors & gaps

* **VietQR.io**, **vietqr.co**, **Sepay** provide generators/APIs; many are developer-oriented or tied to plugins. Opportunity: **clean, bilingual, mobile-first UI** that prints/cards/stickers + shared “group wallet” page (owner can rotate destination) and supports **deep links** for wallets (MoMo, ZaloPay) where QR is proprietary. ([vietqr.io][25], [vietqr.co][26], [qr.sepay.vn][27])
* Wallet deep-links are documented (MoMo/ZaloPay), so you can integrate “tap to open app” fallbacks. ([developers.momo.vn][28], [beta-docs.zalopay.vn][29])

### MVP (effort: **small–medium**)

* Form → generate **VietQR** (NAPAS/EMVCo compliant), download SVG/PNG, vanity link, “split bill” preset amounts, **group page** with multiple methods (VietQR + MoMo + ZaloPay deep link). ([vietqr.io][30])
* Optional receipt confirmation via payOS/partner (later). ([vietqr.io][25])

### GTM

* SEO for “tạo mã VietQR”, “QR thanh toán MoMo/ZaloPay,” “in QR quán cà phê.”
* Partner with sticker/print shops (bundled QR templates).
* Publish guides on **best practices** (tip jar QR, event QR stands) citing official growth stats for credibility. ([Vietnam Investment Review - VIR][31])

### Risks

* Cross-wallet fragmentation (VNPAY QR, wallet specifics); focus on **VietQR + wallet deep-links** as pragmatic coverage. ([adapters.ixopay.com][32])

**Call:** Good bet. Treat core generator as **traffic**; monetize with **templates/printing/analytics**.

---

## 5) AutoSenso (MailMinder for Gmail)

### Reality check

* Gmail just rolled out **Manage subscriptions** view with one-click unsub, frequency sorting, and sender totals—this **eats a lot of the use-case**. Third-party “unsubscribe” tools are now less compelling and some carry privacy baggage. ([The Verge][1], [The Times of India][2], [Unroll.Me][33])

### Competitors

* Clean Email, Leave Me Alone, Unroll.Me, SaneBox—crowded, paid, and privacy-sensitive. ([Clean Email][34], [Leave Me Alone][35], [Unroll.Me][36])

### If you pursue it anyway

* Only worth exploring as a **local-only** Chrome extension that **learns your screen decisions** and **exports/updates native Gmail filters**—no cloud, no account access beyond OAuth scopes. Distinct positioning: “HEY-style triage **without** leaving Gmail, privacy-first.” (But I’d still **de-prioritize**.)

**Call:** **Not now**—Gmail’s native is rising fast. ([The Verge][1])

---

# Traffic engines (quick wins; label = **traffic-only**)

These bring searchers; monetize by linking to your core apps.

1. **Text utilities hub** (Traffic-only)

   * Remove line breaks / merge paragraphs / deduplicate / add bullets / convert to Markdown/HTML. Existing sites get steady traffic; your angle is **fast, no-ads UX**. ([TextFixer][17], [Browserling][19])

2. **Vietnamese diacritics tools** (Traffic-only)

   * “Bỏ dấu/Thêm dấu/Chuẩn hoá” with API; popular niche utilities exist—bundle with better UX. ([onlinetexttools.com][37], [codebeautify.org][38])

3. **Free QR suite** (Traffic-only → cross-sell to QR Payments)

   * Wi-Fi QR, vCard QR, Google Review QR. Many free generators exist—make yours bilingual, branded templates for SMBs, and **link to paid analytics**. ([QR Code Generator][39], [Whitespark][40])

4. **Calc/converter mini-apps** (Traffic-only)

   * % calculator, ROI, unit/time diff; these sites have **huge** visits (see Similarweb public figures). ([Similarweb][20])

---

# Do later / skip (for now)

* **QR Business Cards** — crowded (HiHello, Popl, Blinq); CAC is high, switching low. ([hihello.com][41])
* **Mac Work Session Manager** — extremely saturated (Freedom, Cold Turkey, RescueTime, Focus To-Do, etc.). Hard to differentiate without big polish. ([Zapier][42], [Apple][43])
* **Group Games Platform (Who’s the Spy?)** — many playable clones/hosts already; content/community is the moat. Use as **content marketing** later, not a product bet. ([netgames.io][44], [spyfall.adrianocola.com][45])
* **Google Review QR Generator** — keep inside the free **QR suite** (traffic), not a standalone business. Plenty of free options exist. ([QR Code Generator][39], [Wiremo][46])
* **Social Media Update Aggregator → auto-post to Facebook** — Platform/API policies, app review, and scraping restrictions add friction/risk; not a low-budget play. ([Facebook Developers][47], [Facebook][48])
* **Car Comparison Tool** — data heavy & entrenched incumbents in VN (oto.com.vn, bonbanh.com). Needs serious capital/content. ([oto.com.vn][49], [Bonbanh.com - Mua bán ô tô][50])

---

# Go-to-market & scaling notes (per idea)

### Excel Format Converter

* **Acquisition:** SEO content + embedded “Fix it” widgets you can iframe into vendor help centers (e.g., “CSV upload failed?” pages).
* **Retention:** Saved profiles per target platform; CLI for batch jobs.
* **Pricing:** Free for single files; pay for batch/API.

### Google Docs → Web

* **Acquisition:** Showcase creators (resumes, portfolios, press kits), “Docs → beautiful website in 1 minute” posts.
* **Retention:** Custom domains, theme presets, analytics, minor CDN.
* **Pricing:** Free with badge; paid = no badge + custom domain + analytics.

### Textua (traffic-only)

* **Acquisition:** Rank many small “how to fix text X” posts; instant tool loads.
* **Monetization:** Promote Excel Converter & Docs→Web in the UI.

### QR Payment Generator

* **Acquisition:** Guides (“In menu QR cho quán nhỏ”, “MoMo/ZaloPay deep link”), template packs, bilingual.
* **Monetization:** Branded templates, print packs, simple analytics dashboard; partner with printers.

---

# Development feasibility (quick read)

* **Small effort:** Textua, QR Review/QR misc tools (within QR suite).
* **Small–Medium:** Excel Converter (if you avoid browser-XLSX editing and focus on robust CSV/TSV/encoding + XLSX export), Google Docs→Web (clean render + CDN + basic analytics), QR Payment Generator.
* **Large / slow to validate:** AutoSenso (Gmail), Car comparison, Mac productivity app, Social auto-posting.

*(Deliberately qualitative—no time promises.)*

---

# Competitor snapshots (by idea)

* **Excel Converter:** Guides/tools abound, but few solve **encoding + delimiter + locale** end-to-end with “looks right in Excel” previews. ([Microsoft Support][3])
* **Docs→Web:** gdoc.pub, gdocweb; Add-ons to WordPress exist but a hosted “one click, looks good, analytics” gap remains. ([gdoc.pub][11], [gdocweb][12], [Google Workspace][14])
* **Textua:** TextFixer/OnlineTextTools/Browserling—single-purpose utilities. Bundle + UX wins. ([TextFixer][17], [Browserling][19])
* **QR Pay:** VietQR.io/vietqr.co/Sepay; wallets publish deeplink/SDK docs. ([vietqr.io][25], [vietqr.co][26], [qr.sepay.vn][27], [developers.momo.vn][28], [beta-docs.zalopay.vn][29])
* **MailMinder:** Gmail’s “Manage subscriptions” + Clean Email/Leave Me Alone/SaneBox; privacy concerns are a factor. ([The Verge][1], [Leave Me Alone][35], [Unroll.Me][36])

---

## What I’d do next (concrete)

1. **Ship Excel Format Converter** first (core + SEO pillar pages). Back it with a **“Why Excel breaks CSV”** tutorial that becomes your #1 inbound page. ([Microsoft Support][3])
2. In parallel, **ship Docs → Web** minimal (paste publish URL → pretty page + analytics). Feature your own docs/help pages as live examples. ([Google Help][10])
3. Stand up **Textua** + **QR suite** as **traffic-only** and cross-promote the two core apps. Use Similarweb-style social proof to justify the “utility hub” strategy. ([Similarweb][20])
4. Validate **QR Payment Generator** with a super-simple builder and printable templates; treat analytics/printing as the paid upsell. Cite VN growth stats in landing copy. ([Vietnam+ (VietnamPlus)][21], [Vietnam Investment Review - VIR][24])
5. **Park AutoSenso** unless you find a sharp niche Gmail can’t address (e.g., **local, on-device triage that writes Gmail filters** with zero external data sharing). ([The Verge][1])

If you want, I can draft the **SEO brief + landing outlines** for the first two (Converter, Docs→Web) and a simple **feature matrix** to keep scope tight.

[1]: https://www.theverge.com/news/701282/gmail-manage-email-subscriptions-unsubscribe?utm_source=chatgpt.com "Gmail's new tab is made for unsubscribing from emails"
[2]: https://timesofindia.indiatimes.com/technology/tech-news/gmail-rolls-out-new-tab-to-help-you-unsubscribe-faster/articleshow/122348713.cms?utm_source=chatgpt.com "Gmail rolls out new tab to help you unsubscribe faster"
[3]: https://support.microsoft.com/en-us/office/opening-csv-utf-8-files-correctly-in-excel-8a935af5-3416-4edd-ba7e-3dfd2bc4a032?utm_source=chatgpt.com "Opening CSV UTF-8 files correctly in Excel"
[4]: https://answers.microsoft.com/en-us/msoffice/forum/all/opening-utf-8-encoded-csv-in-excel-that-appears-ok/94e1a881-b184-449d-8a59-27997d5e97ef?utm_source=chatgpt.com "Opening utf-8 encoded csv in Excel, that appears ok when I ..."
[5]: https://learn.microsoft.com/en-us/answers/questions/5136644/how-do-you-open-import-a-csv-file-with-unicode-cha?forum=msoffice-all&referrer=answers&utm_source=chatgpt.com "How do you open/import a CSV file with Unicode characters?"
[6]: https://support.microsoft.com/en-us/office/import-or-export-text-txt-or-csv-files-5250ac4c-663c-47ce-937b-339e391393ba?utm_source=chatgpt.com "Import or export text (.txt or .csv) files"
[7]: https://www.ablebits.com/office-addins-blog/change-excel-csv-delimiter/?utm_source=chatgpt.com "How to change Excel CSV delimiter to comma or semicolon"
[8]: https://www.ablebits.com/office-addins-blog/convert-excel-csv/?utm_source=chatgpt.com "Convert Excel to CSV (comma delimited) and UTF-8"
[9]: https://superuser.com/questions/832786/excel-does-not-honor-the-delimiter-setting-for-reading-or-writing-csv-files?utm_source=chatgpt.com "Excel does not honor the delimiter setting for reading or ..."
[10]: https://support.google.com/docs/answer/183965?co=GENIE.Platform%3DDesktop&hl=en&utm_source=chatgpt.com "Make Google Docs, Sheets, Slides & Forms public"
[11]: https://gdoc.pub/?utm_source=chatgpt.com "Publish good looking Google Docs"
[12]: https://gdocweb.com/?utm_source=chatgpt.com "Convert Google Docs to Website Free - gdocweb"
[13]: https://blog.gdocweb.com/introducing-gdocweb.html?utm_source=chatgpt.com "Introducing gdocweb"
[14]: https://workspace.google.com/marketplace/app/tenwrite_google_docs_to_wordpress_blogge/487671105635?utm_source=chatgpt.com "Tenwrite - Google Docs™ to WordPress™ Blogger"
[15]: https://wordable.io/google-docs-blog-old/?utm_source=chatgpt.com "How to Use Google Docs for Blogging"
[16]: https://community.make.com/t/how-to-setup-google-doc-to-wordpress-post/12752?utm_source=chatgpt.com "How to setup google doc to Wordpress post"
[17]: https://www.textfixer.com/tools/remove-line-breaks.php?utm_source=chatgpt.com "Remove Line Breaks Online Tool"
[18]: https://text-toolz.com/text-cleaner/online-text-cleaner?utm_source=chatgpt.com "Comprehensive Online Text cleaning and formatting tool"
[19]: https://www.browserling.com/tools/remove-accents?utm_source=chatgpt.com "Remove Accents - Delete Letter Diacritics - Online"
[20]: https://www.similarweb.com/website/calculator.net/?utm_source=chatgpt.com "calculator.net Traffic Analytics, Ranking & Audience [July ..."
[21]: https://en.vietnamplus.vn/qr-code-payment-transactions-surge-in-2024-post308072.vnp?utm_source=chatgpt.com "QR code payment transactions surge in 2024"
[22]: https://vietnamnews.vn/economy/1690354/qr-code-payment-transactions-surge-in-2024.html?utm_source=chatgpt.com "QR code payment transactions surge in 2024"
[23]: https://en.napas.com.vn/napas-organized-2025-mission-implementation-conference-184250116113727821.htm?utm_source=chatgpt.com "NAPAS organized 2025 mission implementation conference"
[24]: https://vir.com.vn/digital-payment-penetrates-every-aspect-of-vietnamese-life-121326.html?utm_source=chatgpt.com "Digital payment penetrates every aspect of Vietnamese life"
[25]: https://www.vietqr.io/en/?utm_source=chatgpt.com "VietQR API | VietQR API"
[26]: https://vietqr.co/?utm_source=chatgpt.com "VIETQR.CO - TẠO QRCODE BANKING MIỄN PHÍ"
[27]: https://qr.sepay.vn/?utm_source=chatgpt.com "Tạo QR Code Online chuẩn VietQR"
[28]: https://developers.momo.vn/v3/docs/payment/api/wallet/onetime/?utm_source=chatgpt.com "One-Time Payments | MoMo Developers"
[29]: https://beta-docs.zalopay.vn/docs/sdk/intro/?utm_source=chatgpt.com "SDK Integration"
[30]: https://www.vietqr.io/en/generate/?utm_source=chatgpt.com "VietQR.IO (v2/generate)"
[31]: https://vir.com.vn/cashless-payments-further-on-the-rise-122961.html?utm_source=chatgpt.com "Cashless payments further on the rise"
[32]: https://adapters.ixopay.com/en/payment-method/vnpay-qr?utm_source=chatgpt.com "VNPAY QR | Method"
[33]: https://unroll.me/legal/privacy/?utm_source=chatgpt.com "UNROLL.ME PRIVACY NOTICE"
[34]: https://clean.email/auto-clean/how-to-automatically-sort-emails-in-gmail?utm_source=chatgpt.com "How To Automatically Sort Emails In Gmail | Guide For 2025"
[35]: https://leavemealone.com/?utm_source=chatgpt.com "Leave Me Alone: Easily Unsubscribe From Unwanted Emails"
[36]: https://unroll.me/?utm_source=chatgpt.com "Unroll.Me: Block emails, instantly"
[37]: https://onlinetexttools.com/remove-text-diacritics?utm_source=chatgpt.com "Remove Diacritics from Text"
[38]: https://codebeautify.org/remove-accents?utm_source=chatgpt.com "Remove Accents online to remove accent characters ..."
[39]: https://www.qr-code-generator.com/solutions/google-business-review-qr-code/?utm_source=chatgpt.com "Google Review QR Code for Your Business"
[40]: https://whitespark.ca/google-review-link-generator?utm_source=chatgpt.com "Google Review Link Generator - Free & Awesome!"
[41]: https://www.hihello.com/blog/best-digital-business-cards-platforms-ranked-reviewed?utm_source=chatgpt.com "Best Digital Business Cards for 2025 - Top 18 Platforms ..."
[42]: https://zapier.com/blog/stay-focused-avoid-distractions/?utm_source=chatgpt.com "The 7 best apps to help you focus and block distractions in ..."
[43]: https://apps.apple.com/us/app/focus-to-do-focus-timer-tasks/id966057213?utm_source=chatgpt.com "Focus To-Do: Focus Timer&Tasks 4+ - App Store - Apple"
[44]: https://netgames.io/games/spyfall/?utm_source=chatgpt.com "Spyfall"
[45]: https://spyfall.adrianocola.com/?utm_source=chatgpt.com "Spyfall"
[46]: https://wiremo.co/google-review-qr-code-link-generator/?utm_source=chatgpt.com "Free Google Review QR Code Generator with Templates"
[47]: https://developers.facebook.com/docs/permissions/?utm_source=chatgpt.com "Permissions Reference - Graph API - Meta for Developers"
[48]: https://www.facebook.com/legal/automated_data_collection_terms?utm_source=chatgpt.com "Automated Data Collection Terms"
[49]: https://oto.com.vn/?utm_source=chatgpt.com "Kênh thông tin mua bán ô tô mới cũ hàng đầu"
[50]: https://bonbanh.com/?utm_source=chatgpt.com "Bonbanh.com: Mua bán ô tô cũ và mới, oto đã qua sử dụng"
