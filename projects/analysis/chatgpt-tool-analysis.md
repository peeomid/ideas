Nice — below is a focused, research-backed deep dive on the **High Priority** items (AutoSenso / MailMinder, Restaurant Menu Generator, Google Review QR Generator) plus a compact plan for **traffic-only micro-tools**, dev effort (how you can use AI), go-to-market, scaling effort, competitors, and what *not* to do now.

I kept this practical and actionable — each major factual claim has a supporting source (see inline citations). If you want, I can convert the top-priority MVP into a one-page spec or a minimal Trello backlog next.

---

# 1) AutoSenso / MailMinder (Gmail filter automation) — deep analysis

## Why it’s high priority

* Email overload is persistent; users want automation that **works with existing Gmail** (not switching to a new address/product like HEY). HEY shows there’s appetite for curated inboxes, but many users reject full-platform lock-in. ([Justin Harter][1], [Reddit][2])

## Core product idea (MVP)

* Browser or Gmail Add-on that:

  1. Lets user tag/mark a message once (Imbox / Feed / Papertrail / Promo).
  2. Records the rule and **creates a Gmail filter** for future messages automatically.
  3. Gives users a simple “Screener” for new senders and analytics.
  4. All user tokens & logic run under their Google account (privacy-first; OAuth tokens, no server storage if you want pure client approach).

## Key technical facts / constraints (important)

* Gmail API supports programmatic creation of filters (`users.settings.filters.create`). Limit: **max 1,000 filters per account**. ([Google for Developers][3])
* The API **does not** provide the “apply to existing messages” single-click action that Gmail web UI shows; to replicate that you must scan threads and apply labels programmatically (can be slow / need background tasks). See developer / forum notes (App Script timeouts). ([Stack Overflow][4])
* Any app using Gmail/Google APIs must pass Google’s OAuth / app verification (brand verification) and — if published publicly — will be reviewed for the Workspace Marketplace. This adds friction and some documentation/user support requirements. ([Google Help][5], [Google for Developers][6])

## Competitors / landscape

* Clean Email, SaneBox, Mailstrom, and other inbox cleaners — they’re established, use OAuth, and position on automation/safety. Many users prefer solutions that don’t require switching email host. ([Clean Email][7], [SaneBox][8], [G2][9])

## Ease of development (relative)

* **Complexity:** Medium.

  * Core parts: OAuth + tokens, Gmail API filters & labels, UI (Gmail Add-on or web), background processing for applying rules to historical mail, a learning/ML component (optional).
  * **Friction points:** Google verification & scope justification, dealing with large mailboxes (APIs and quotas), UI inside Gmail (Workspace Add-on or Chrome extension) decisions. ([Google for Developers][3], [Google Help][5])

## How AI can speed dev

* Generate initial Add-on scaffolding and API calls with LLMs (OAuth flows, filter create JSON payloads). Use AI for:

  * Prototyping serverless endpoints (Cloud Functions / Lambda) for background re-labeling jobs.
  * Generating docs, consent screen copy for OAuth verification.
  * Building simple ML classifier (fine-tune small models or use embeddings + cosine similarity) to suggest labels from previous tags.
* Caveat: AI helps produce code fast, but **you must test thoroughly** (email rules are sensitive—wrong rules can delete/lose mail).

## Minimal, low-budget MVP path

1. **Proof of concept (2–4 weeks)** — build a **private** Google Workspace Add-on or a Chrome extension that:

   * Auths the user with OAuth.
   * Lets user tag a few senders and creates filters (via Gmail API).
   * Stores learning rules locally (in user's browser or their Google Drive).
   * Do internal user testing (friends/devs).
   * Note: private publishing reduces initial Marketplace friction, but app verification may still be required beyond small number of test users. ([groups.google.com][10], [Google for Developers][6])
2. **Beta (next 4–8 weeks)** — add: better onboarding, analytics, opt-in ML suggestions, server component for bulk apply tasks (with user consent).
3. **Public launch** — prepare OAuth verification materials, privacy policy, and Marketplace submission.

## Go-to-market (low budget)

* Target: knowledge workers, freelancers, indie developers.
* Quick channels: Product Hunt launch, Hacker News / r/productivity / r/gmail, Twitter threads showing “before/after” inbox screenshots.
* Partnerships: productivity bloggers, YouTube “inbox zero” creators.
* Traffic magnet: build a **free ‘Inbox Audit’ tool** (upload sample email headers or connect read-only and produce a “clutter score”) to capture emails and signup — good lead magnet.

## Monetization & long term

* Freemium: free for basic rule automation (e.g., 0–20 auto rules); paid for advanced learning, multiple label presets, team features.
* Privacy & trust is a selling point — emphasize running entirely inside user's Google account or simple local-only mode.

---

# 2) Restaurant Menu Generator (QR + Google Business Profile sync) — deep analysis

## Why it’s high priority

* Restaurants (especially small ones) still need **easy, free digital menus + QR**; COVID accelerated QR menu adoption and QR ordering remains a standard expectation. Vietnam shows fast QR adoption among wallets (MoMo, ZaloPay), so mobile menus + QR are a practical fit. ([orders.co][11], [Vietnam Investment Review - VIR][12])

## Product MVP

* Create a mobile-friendly menu page builder + generate printable QR codes (table, flyer).
* Optional: connect to **Google Business Profile** and push menu updates via the Business Profile API (so menus appear on Google Search/Maps). The Business Profile API exposes FoodMenus endpoints to update menus (requires profile ownership/verification). ([Google for Developers][13], [Google Help][14])

## Competitors / market

* Free / low-cost players: **GloriaFood** (free QR ordering), **BentoBox** (premium), many POS systems include QR menus. Large incumbents provide more integrated POS + ordering. ([gloriafood.com][15], [getbento.com][16])

## Ease of development

* **Complexity:** Low → Medium.

  * Basic menu + QR page: trivial (static site template + QR generator).
  * Google Business Profile integration & automated sync: medium (need API usage + location verification, and accounts must be verified). ([Google for Developers][13], [Google Help][14])
* Localized advantage: Vietnamese language UI, local payment / contact info, and templates optimized for common restaurant formats.

## How AI can speed dev

* Auto-format plain menus (e.g., take a Google Doc or Excel and automatically parse into sections/prices/images). Use LLM to parse messy input and propose sections/pricing suggestions.
* Generate printable signage and marketing text automatically.

## Go-to-market (low budget)

* **Channel ideas:** Partner with local restaurant associations, Facebook Groups / Zalo groups for restaurateurs, offline flyers to small restaurants, integrations with local POS resellers.
* **Quick traffic play (free / traffic-first):** Build a “free QR menu generator” page optimized for SEO queries like “tạo menu QR miễn phí” or “tạo menu số nhà hàng” — this will rank and attract local restaurant owners. Offer branded printable flyer templates for sharing on FB/Instagram.

## Monetization & scaling

* Freemium: free basic menu pages; paid features: custom domain, analytics, ordering or POS integration, menu import from Google Business Profile.
* Scaling is straightforward (static pages + CDN). Customer support and data sync complexity grows.

---

# 3) Google Review QR Generator — deep analysis (traffic magnet)

## Why it’s high priority (traffic-first)

* **Very low development cost** and **high search demand**: businesses search “how to get Google review link” and “QR code for Google review”. Generating a review link + QR is a one-page utility that brings steady organic traffic and is ideal as a free tool to funnel SMBs to other products. ([EmbedSocial][17], [qr-code-generator.com][18])

## How it works (tech)

* Find business Place ID (via Google Places API or a simple UI that asks for business name/address and calls Places).
* Generate the review URL: `https://search.google.com/local/writereview?placeid=PLACE_ID` and render as a downloadable PNG/SVG QR code. (This is the standard approach.) ([Google for Developers][19], [EmbedSocial][17])

## Competitors & landscape

* Many free generators already exist (QR Code Generator, Wiremo, BrightLocal, etc.). But these are prime SEO keywords and people land on them seeking exactly this single function. ([qr-code-generator.com][18], [Wiremo][20], [help.brightlocal.com][21])

## Ease of development

* **Complexity:** Very low. One page + Places API call + QR generator library.
* **Notes:** Google Places API requires API key and billing enabled (but for a small usage it’s cheap). You can also offer a manual Place ID input to avoid API cost. ([Google for Developers][19])

## Go-to-market (traffic play)

* SEO landing page for local language phrases (Vietnamese): “tạo QR đánh giá Google”, “link review Google tạo QR”.
* Offer printable stickers/templates, email footers, and “how to ask customers for reviews” short guide (adds seconds of time-on-page and conversion).
* Use this tool as a lead magnet: capture business email (optional), show other SMB tools (menu generator, QR business card, review management upsells).

---

# Traffic generation ideas (explicitly marked **TRAFFIC-ONLY** where appropriate)

1. **Free Google Review QR generator** — traffic magnet (traffic-only). People search and land; convert a % to email signups. ([qr-code-generator.com][18], [EmbedSocial][17])
2. **Free QR Menu generator (basic)** — traffic + local SMB adoption; good lead magnet for restaurant product. (Can be freemium.) ([gloriafood.com][15], [Google Help][14])
3. **Free “Inbox Audit” micro-tool** (connect read-only Gmail, show clutter score + tips) — traffic & lead generation for AutoSenso. (Privacy obvious and transparent to win trust.)
4. **Small micro-tools page**: Google review link tool + QR business card generator + menu generator — cluster them under a single “SMB tools” hub to build topical authority for SEO. Evidence that micro-tools and embedded free tools drive traffic and backlinks exists (case studies on tool/SEO magnets). ([startupmarketer.co][22], [Backlinko][23])

---

# Comparative effort, scale & ROI (quick table)

| Product   |                                         Dev effort |                    Go-to-market effort |                Scale difficulty | Ideal use                                                                             |
| --------- | -------------------------------------------------: | -------------------------------------: | ------------------------------: | ------------------------------------------------------------------------------------- |
| AutoSenso |              **Medium** (API + ML + verification). | **High** (trust, privacy, onboarding). | Medium (support + reliability). | Core product / revenue. ([Google for Developers][3], [Google Help][5])                |
| QR Menu   | **Low→Medium** (menu pages easy; GBP sync medium). |           **Medium** (local outreach). |         Low (static pages/CDN). | SMB adoption + revenue + traffic. ([gloriafood.com][15], [Google for Developers][13]) |
| Review QR |                                      **Very low**. |           **Low** (SEO landing pages). |                       Very low. | Traffic-only lead magnet. ([EmbedSocial][17], [qr-code-generator.com][18])            |

---

# What’s **not** worth doing now (based on effort vs payoff)

* **Devsgen (generic dev utilities)** — extremely crowded; low monetization. Better as an SEO page or “toolbox” if you need filler traffic.
* **Mac Work Session Manager** — heavy competition (Freedom, Focus) and macOS app dev cost.
* **Tool Reminder System (CLI reminders)** — very niche user base, little monetization.
* **Social media aggregator** — high maintenance (APIs change), low ROI.

---

# Competitor roundup (quick list with examples)

* **Email automation / cleanup:** Clean Email, SaneBox, Mailstrom, HEY. ([Clean Email][7], [SaneBox][8], [G2][9], [Justin Harter][1])
* **Restaurant menus / QR ordering:** GloriaFood (free), BentoBox (premium), Orders.co and many POS vendors. ([gloriafood.com][15], [getbento.com][16], [orders.co][11])
* **QR / Review link generators:** QR-Code-Generator, Wiremo, BrightLocal, EmbedSocial. ([qr-code-generator.com][18], [Wiremo][20], [help.brightlocal.com][21])

---

# Recommended immediate next steps (practical, low-budget roadmap)

**Phase 0 — Quick traffic wins (1–3 weeks)**

* Launch **Google Review QR generator** landing page (single page, Place ID + QR). SEO in Vietnamese + English. (Traffic-only.) ([EmbedSocial][17], [qr-code-generator.com][18])
* Launch **Free QR Menu generator (basic)** page (template + QR). Add “submit menu” upload (Google Doc/CSV). Start local outreach to restaurants. ([gloriafood.com][15])

**Phase 1 — Core product prototype (4–8 weeks)**

* Build **AutoSenso POC** as a **private Gmail Add-on or Chrome extension**: label & create filters flow only. Use the Gmail API to create filters and local storage (no heavy ML yet). Validate with 20–50 testers. Address OAuth verification docs and prepare consent text. ([Google for Developers][3], [Google Help][5])

**Phase 2 — Beta + growth (8–16 weeks)**

* Add learning suggestions, bulk apply workflow (serverless background worker), user settings, and paid plan features. Publish to Marketplace after verification. Start targeted marketing (Product Hunt, Reddit, local FB groups, restaurant channels).

---

# Final prioritized summary

1. **Short win / traffic:** Google Review QR generator (build in days) — traffic-only tool. ([EmbedSocial][17], [qr-code-generator.com][18])
2. **Short → medium win / SMB:** QR Menu generator (build in 1–3 weeks; integrate GBP later). ([gloriafood.com][15], [Google for Developers][13])
3. **Core product / revenue:** AutoSenso / MailMinder (POC asap, then public with verification). Higher friction but biggest long-term payoff. ([Google for Developers][3], [Google Help][5])

---

If you want I’ll **(pick one)**:

* A: write a copy + SEO outline and quick wireframe for the **Google Review QR** page (fast build).
* B: sketch a minimal technical spec + sequence diagram and required OAuth scopes for **AutoSenso POC** (so you can hand to AI to generate code).
* C: create the landing page wireframe + outreach script for pitching the **QR Menu** tool to local restaurants.

Which of A / B / C do you want me to produce now? (I’ll pick one and produce it immediately.)

[1]: https://justinharter.com/a-new-review-of-hey-email-in-2024-and-how-its-changed-my-processes/?utm_source=chatgpt.com "A new review of HEY email in 2024 and how it's changed ..."
[2]: https://www.reddit.com/r/HeyEmail/comments/13c2w2u/how_do_you_feel_about_hey_for_personal_use/?utm_source=chatgpt.com "How do you feel about hey for personal use ? : r/HeyEmail"
[3]: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings.filters/create?utm_source=chatgpt.com "Method: users.settings.filters.create | Gmail"
[4]: https://stackoverflow.com/questions/77970202/how-can-i-apply-a-filter-to-existing-emails-in-gmail-workspace-add-on?utm_source=chatgpt.com "How can I apply a filter to existing emails in Gmail ..."
[5]: https://support.google.com/cloud/answer/13464321?hl=en&utm_source=chatgpt.com "Verification requirements - Google Cloud Platform Console ..."
[6]: https://developers.google.com/workspace/add-ons/how-tos/publish-add-on-overview?utm_source=chatgpt.com "Publish an add-on | Google Workspace add-ons"
[7]: https://clean.email/features?utm_source=chatgpt.com "Clean Email Features - Keep Your Inbox Sparkling Clean"
[8]: https://www.sanebox.com/help/138-what-is-a-feature?utm_source=chatgpt.com "What is a feature?"
[9]: https://www.g2.com/products/mailstrom/reviews?utm_source=chatgpt.com "Mailstrom Reviews 2025: Details, Pricing, & Features"
[10]: https://groups.google.com/g/google-apps-script-community/c/lDDjsav73SU?utm_source=chatgpt.com "Verification and publication"
[11]: https://orders.co/blog/the-future-of-qr-menus-emerging-trends-to-watch/?utm_source=chatgpt.com "QR Code Menu Ordering Trends: The Future Of Dining In ..."
[12]: https://vir.com.vn/widespread-adoption-of-digital-payments-taking-hold-113598.html?utm_source=chatgpt.com "Widespread adoption of digital payments taking hold"
[13]: https://developers.google.com/my-business/reference/rest/v4/FoodMenus?utm_source=chatgpt.com "FoodMenus | Google Business Profile APIs"
[14]: https://support.google.com/business/answer/9455840?hl=en&utm_source=chatgpt.com "About the menu editor - Google Business Profile Help"
[15]: https://www.gloriafood.com/?utm_source=chatgpt.com "GloriaFood Online Ordering: Free Online Ordering System for ..."
[16]: https://www.getbento.com/?utm_source=chatgpt.com "BentoBox: Restaurant Marketing & Commerce Platform"
[17]: https://embedsocial.com/blog/google-review-link/?utm_source=chatgpt.com "How to Get Your Google Review Link [Free Generator]"
[18]: https://www.qr-code-generator.com/solutions/google-business-review-qr-code/?utm_source=chatgpt.com "Google Review QR Code for Your Business"
[19]: https://developers.google.com/maps/documentation/places/web-service/place-id?utm_source=chatgpt.com "Place IDs | Places API"
[20]: https://wiremo.co/google-review-qr-code-link-generator/?utm_source=chatgpt.com "Free Google Review QR Code Generator with Templates"
[21]: https://help.brightlocal.com/hc/en-us/articles/360014993600-Google-Review-Link-Place-ID-Generator-Overview?utm_source=chatgpt.com "Google Review Link & Place ID Generator Overview"
[22]: https://startupmarketer.co/how-to-build-a-tool-that-attracts-web-traffic-magnet/?utm_source=chatgpt.com "How to build a tool that attracts web traffic (aka a traffic magnet)"
[23]: https://backlinko.com/content-relaunch?utm_source=chatgpt.com "How to Get 260.7% More Organic Traffic In 14 Days (New ..."
