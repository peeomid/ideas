Awesome list. I’ll keep it tight, evidence-based, and oriented to low-budget/long-term. For each idea you’ll see: market signal (real user pain/behavior), gaps/opportunities, risks, the cheapest test I’d run, and a verdict. Then a ranked priority list.

---

# AutoSenso (MailMinder) — Gmail HEY-style filters

**Signal.** Google just launched “Manage subscriptions” to mass-unsubscribe and see frequent senders in one place, so inbox fatigue is real and getting direct attention from Gmail itself. HEY’s Imbox/Feed/Paper Trail workflow shows lasting user appeal for triage by *type* of mail; it’s sender-level and sticky. Many users still struggle with Gmail’s labels/filters mental model. ([blog.google][1], [HEY][2], [Reddit][3])
**Gaps.** Gmail’s new feature doesn’t auto-sort transactional/newsletters/promos into persistent lanes like HEY; nor does it learn your choices to create durable filters/labels.
**Risks.** Platform overlap—Gmail could expand categorization; access needs OAuth with high trust bar.
**Cheapest test.** Chrome extension or Apps Script that: (1) shows HEY-style lanes; (2) one-click “always send sender to X”; (3) applies filter retroactively. Recruit 20 power-users from r/gsuite to dogfood for a week; measure % of messages auto-routed and inbox zero time.
**Verdict.** **Viable if you stay purely client-side and opinionated about lanes** (Imbox/Feed/Papertrail/Promo). Don’t fight Gmail search—lean on it.

---

# Devsgen — common dev utilities (regex/JSON/beautify)

**Signal.** Devs keep copy/pasting data into web tools; many sites warn that pasted data may be public, which worries devs. An offline Mac app (DevUtils) exists and emphasizes privacy; dozens of web tools compete (ExtendsClass, JSONFormatter, Regex101). ([ExtendsClass][4], [devutils.com][5], [jsonformatter.org][6], [regex101][7])
**Gaps.** Trust (privacy/offline), speed (local), and great UX across many small tasks in a single place.
**Risks.** SEO trench war + ad clutter if web-first; strong incumbents if desktop-first.
**Cheapest test.** Ship **one** killer tool with an offline mode (e.g., JSON <-> CSV with schema inference) and a landing page explaining “never leaves your machine.” Collect email for “more tools later.”
**Verdict.** **Only worth it if you differentiate on offline/privacy or one 10× utility.** Otherwise low moat.

---

# Group Games Platform (Trochoinhom) — “Who is the Spy?”

**Signal.** Party web games draw real traffic; Gartic Phone regularly spikes to tens of thousands of concurrent viewers on Twitch, and players complain about intrusive ads on similar games (e.g., skribbl). ([SullyGnome][8], [Reddit][9])
**Gaps.** Vietnamese localization, frictionless mobile+shared-screen, stable infra (many community sites are flaky), zero-ads rooms for hosts.
**Risks.** Monetization mostly ads/donations; retention hinges on adding more games; moderation/anti-cheat.
**Cheapest test.** Build just “Who is the Spy?” with easy room codes and *one* viral clip generator (“reveal montage” users can post). Track rooms/day and avg players/room.
**Verdict.** **Traffic play**—use for audience building; don’t expect big revenue without a game portfolio.

---

# Textua — messy-to-read text → clean format (easytoread.top)

**Signal.** Tons of “remove line breaks/strip formatting” tools exist; AI rewriters also target readability, which proves persistent demand. ([TextFixer][10], [convertcase.net][11], [QuillBot][12], [Grammarly][13])
**Gaps.** Most tools are either primitive cleaners or heavy AI rewriters; few do *automatic structure* (lists, quotes, headings) from messy paste (e.g., social posts or scraped pages) with a clean, ad-light UI.
**Risks.** SEO competition for generic keywords.
**Cheapest test.** Add 3 opinionated one-click presets (“Fix Twitter threads,” “Fix PDF paste,” “Fix web article”), then watch GSC for query growth + copy rate.
**Verdict.** **Good low-cost SEO bet** if you niche on specific messy sources and stay super fast.

---

# QR Payment Generator (VN) — multi-method shareable QR

**Signal.** VietQR is standardized by NAPAS/SBV and widely supported; e-wallets (MoMo, ZaloPay, VNPay) dominate mobile payments; QR usage keeps surging. ([en.napas.com.vn][14], [GlobeNewswire][15])
**Gaps.** Unified “share pack” of payment QRs (bank VietQR + MoMo + ZaloPay) with **group shortcuts** (“Split bill room 12A”) and history.
**Risks.** Platform UX already generates QRs; some providers rate-limit deep links.
**Cheapest test.** Static generator that outputs a **single page** with multiple QRs + copyable payment notes. Distribute in student/expat FB groups; measure links created/week.
**Verdict.** **Nice local utility;** small but sticky if you nail speed and group presets.

---

# Excel Format Converter — cross-app CSV/Excel quirks

**Signal.** Excel’s CSV varies by locale (comma vs. semicolon); UTF-8 handling/encoding and import/export are persistent pain points per Microsoft docs. ([QR Planet][16], [QR Code Generator][17], [G2][18])
**Gaps.** One click: detect delimiter/encoding/decimal, normalize to target (e.g., “Excel(VN) → Google Sheets”).
**Risks.** Many small tools, but few **Vietnam-aware** presets.
**Cheapest test.** Web page with drop-zone → instant preview → download. Ship presets for “VN Excel ↔ Sheets ↔ Numbers.”
**Verdict.** **Strong evergreen SEO tool**; ads or tiny one-time fee.

---

# Gift Recommendation (“Mua quà gì?”)

**Signal.** Constant threads asking for gift ideas across Vietnamese forums (Voz/Webtretho/Reddit). ([VOZ][19], [webtretho.com][20])
**Gaps.** Localized, filterable suggestions by relation/occasion/budget with shoppable links.
**Risks.** Content treadmill; affiliate reliance.
**Cheapest test.** Start with 10 high-intent landing pages (e.g., “Quà cho sếp 500k–2tr”) + affiliate links; measure CTR.
**Verdict.** **Possible content/affiliate play**; limit scope to a few evergreen niches.

---

# Social Media Update Aggregator → auto-post to Facebook

**Signal.** Facebook Pages can be posted via Graph API; automation tools (Zapier) already offer RSS→Page flows. ([Facebook Developers][21], [IFTTT][22])
**Gaps.** Monitor **rarely-updated** sites + socials (no RSS) → change detection → curated digest to FB.
**Risks.** Anti-scraping constraints; API/policy shifts & rate limits. ([SocialBee][23])
**Cheapest test.** For 5 local orgs, set up a monitor (diff-check + OG/Twitter cards) → daily Page post. Track click-through and retention.
**Verdict.** **Agency-style micro-SaaS** if you keep it white-label and compliant.

---

# Restaurant Menu Generator (+ Google Business sync)

**Signal.** Google Business Profile has native “Menu” editor and structured menu APIs; Google is expanding structured menus in Search. ([Google Help][24], [Google for Developers][25], [Yext][26])
**Gaps.** Many QR menu builders exist; few **sync GBP menus** or auto-parse PDFs into GBP’s structure. ([Blinq][27])
**Risks.** Crowded market; GBP may improve import.
**Cheapest test.** Build “PDF → GBP structured menu” uploader for one district; charge setup fee.
**Verdict.** **Niche B2B workflow tool**—sell outcomes (“your menu shows up correctly on Google”), not QR codes.

---

# QR Business Cards (with analytics)

**Signal.** Mature incumbents (HiHello/Blinq/Popl) already sell dynamic vCards with analytics and teams. ([Google Play][28], [Reddit][29])
**Gaps.** Local language templates, Vietnam-specific fields, cheap one-time pricing.
**Risks.** Heavy competition, low switching friction.
**Cheapest test.** Theme pack (VN templates) atop open vCard links; upsell analytics for teams.
**Verdict.** **Crowded;** do only if you have a distribution angle (partners/events).

---

# Google Review QR Generator

**Signal.** Google explicitly provides review links/Place IDs and now surfaces review QR in GBP flows; “make review link easy” is standard advice. ([Google for Developers][30], [CommonMind][31])
**Gaps.** Branded printable kits + multilingual prompts + SMS copy.
**Risks.** Very easy to copy; thin product.
**Cheapest test.** Free generator + printable poster; capture leads for GBP optimization upsell.
**Verdict.** **Great lead magnet** for a local-SEO services funnel, not a standalone business.

---

# Car Comparison (Vietnam)

**Signal.** Many incumbents aggregate prices/specs; ASEAN NCAP provides safety ratings; Vietnam Register publishes recall notices. ([vnexpress.net][32], [Zigwheels][33], [ASEAN NCAP v4][34], [vr.org.vn][35])
**Gaps.** True TCO (insurance, maintenance), Vietnamese recall aggregation, ASEAN NCAP overlays.
**Risks.** Data collection/maintenance is heavy for a solo/low-budget project.
**Cheapest test.** Publish **one** deep comparison (e.g., Accent vs. City vs. Vios) with NCAP + recall summaries and a TCO calculator.
**Verdict.** **High effort;** only do focused editorial calculators, not a full portal.

---

# Maintenance Reminder App (vehicles)

**Signal.** Apps like Drivvo, Simply Auto, Fuelio have strong adoption already. ([hazeover.com][36], [Apple][37], [Freedom][38])
**Gaps.** Vietnam-specific maintenance schedules/costs and **WhatsApp/Zalo reminders**.
**Risks.** Feature parity treadmill; churn if data entry is tedious.
**Cheapest test.** SMS/Zalo-only reminder bot (no app) seeded with 10 popular models’ schedules.
**Verdict.** **Possible niche** if you stay chat-first with VN data.

---

# Tool Reminder System (CLI) — “remember the tools you installed”

**Signal.** Devs love quick help like tldr and cheat.sh; there are plugins that gently remind you to use aliases (zsh-you-should-use). ([tldr.sh][39], [GitHub][40])
**Gaps.** A shell daemon that surfaces gentle tips about *installed* CLIs you’re under-using (e.g., “try ripgrep here”).
**Risks.** Niche; needs great heuristics to avoid annoyance.
**Cheapest test.** Open-source zsh plugin with weekly “you used X/Y tools” report; measure stars/issues.
**Verdict.** **Fun OSS for credibility**; monetization unclear.

---

# Mac Work Session Manager

**Signal.** Market is saturated (Freedom site/app blocking, HazeOver dimming, Be Focused Pomodoro, etc.). ([GitHub][41], [Reddit][42])
**Gaps.** Session-first timeline for Mac users with “context packs” (apps/sites opened per session).
**Risks.** Hard to stand out; paywalls everywhere.
**Cheapest test.** Tiny menubar that re-opens “session bundles” + timer; ship on Gumroad.
**Verdict.** **Low priority** unless you have a novel hook.

---

# Google Docs → Web (readable site + analytics)

**Signal.** “Publish to web” exists but is clunky/bug-prone and formatting differs from Docs; people complain about inconsistent behavior. Tools like gdoc.pub/docs.page exist, proving demand. ([Google Help][43], [Reddit][44], [Stack Overflow][45])
**Gaps.** Clean styling, custom domain, basic analytics, and stable publishing without the quirks.
**Risks.** Platform dependency; some competitors.
**Cheapest test.** One-file converter: paste a published Doc URL → beautiful article page + share image + Plausible analytics.
**Verdict.** **Promising micro-SaaS** if you nail reliability/design.

---

## Priority (for a lean, long-term solo/low-budget plan)

1. **Excel Format Converter** — evergreen pain, low build, SEO-able. ([QR Planet][16], [QR Code Generator][17])
2. **Google Docs → Web** — real friction today; simple paid utility. ([Google Help][43], [Reddit][44])
3. **Textua** — niche on messy sources; comp but cheap to run. ([TextFixer][10])
4. **QR Payment Generator (VN)** — real local usage; modest TAM; quick build. ([en.napas.com.vn][14])
5. **AutoSenso (MailMinder)** — good if you commit to HEY-style lanes and client-side privacy. ([blog.google][1])
6. **Restaurant Menu Generator (GBP sync)** — sell the GBP outcome to small restos. ([Google for Developers][25])
7. **Google Review QR Generator** — ship as free lead magnet for local-SEO services. ([Google for Developers][30])
8. **Devsgen** — only proceed with offline/privacy angle or one 10× tool. ([devutils.com][5])
9. **Group Games (Trochoinhom)** — audience builder; expect ad-level monetization. ([SullyGnome][8])
10. **Maintenance Reminder (chat-first)** — try VN schedules via Zalo/SMS. ([Freedom][38])
11. **Social Update Aggregator → FB** — agency micro-SaaS; watch API policy. ([Facebook Developers][21])
12. **Gift Recommendation (VN)** — limited, content heavy; start with 10 evergreen pages. ([VOZ][19])
13. **QR Business Cards** — crowded; only if you have a strong distribution wedge. ([Google Play][46])
14. **Tool Reminder (CLI)** — great OSS calling card, weak monetization. ([GitHub][47])
15. **Mac Work Session Manager** — saturated; needs a very novel hook. ([GitHub][41])
16. **Car Comparison (VN)** — too data-heavy for a minimal solo effort. ([vr.org.vn][35])

---

## Minimal strategy (next 4–6 weeks)

* **Ship 2 quick wins:** Excel Format Converter + Google Review QR (free). Use them to build email list. ([QR Planet][16], [Google for Developers][30])
* **Build 1 paid micro-SaaS:** Google Docs → Web with custom domains + analytics (flat \$5–\$9/mo). ([Google Help][43])
* **Run 1 SEO bet:** Textua with “Fix PDF paste”/“Fix Twitter thread” presets; track GSC. ([TextFixer][10])
* **Explore 1 local utility:** QR Payment Generator (VN) with group presets; collect usage screenshots for social proof. ([en.napas.com.vn][14])

If you want, I can turn the top three into concrete mini-specs (endpoints, UI, instrumentation) and a one-week build plan each.

[1]: https://blog.google/products/gmail/new-manage-subscriptions-unsubscribe/ "Gmail launches new “Manage Subscriptions” view"
[2]: https://www.hey.com/features/paper-trail/ "HEY — Put receipts in the Paper Trail"
[3]: https://www.reddit.com/r/gsuite/comments/k9eqrr/i_hate_labels_any_way_to_somehow_actually_filter/ "I HATE labels. Any way to somehow actually filter and organize my gmail account? : r/gsuite"
[4]: https://extendsclass.com/json-validator.html?utm_source=chatgpt.com "Online JSON Formatter and Validator"
[5]: https://devutils.com/?utm_source=chatgpt.com "DevUtils - All-in-one Toolbox for Developers"
[6]: https://jsonformatter.org/?utm_source=chatgpt.com "Best JSON Formatter and JSON Validator: Online JSON ..."
[7]: https://regex101.com/?utm_source=chatgpt.com "regex101: build, test, and debug regex"
[8]: https://sullygnome.com/game/Gartic_Phone/2024september?utm_source=chatgpt.com "Gartic Phone - Twitch statistics, channels & viewers"
[9]: https://www.reddit.com/r/skribbl/comments/7rvk2y/the_ads_are_not_good/?utm_source=chatgpt.com "THE ADS ARE NOT GOOD : r/skribbl"
[10]: https://www.textfixer.com/tools/remove-line-breaks.php?utm_source=chatgpt.com "Remove Line Breaks Online Tool"
[11]: https://convertcase.net/remove-text-formatting/?utm_source=chatgpt.com "Remove Text Formatting | Text Cleaner"
[12]: https://quillbot.com/paragraph-rewriter?utm_source=chatgpt.com "Free AI Paragraph Rewriter"
[13]: https://www.grammarly.com/ai/ai-writing-tools/paragraph-rewriter?utm_source=chatgpt.com "Free AI Paragraph Rewriter | Rewrite Text Easily"
[14]: https://en.napas.com.vn/napas-fastfund-247-with-vietqr-code-service-184230612220807776.htm "NAPAS FastFund 247 with VietQR code Service"
[15]: https://www.globenewswire.com/news-release/2025/06/23/3103746/0/en/Vietnam-Mobile-Payments-Market-Outlook-to-2029-E-Wallet-Providers-MoMo-ZaloPay-and-VNPay-Dominate-as-Vietnam-Mobile-Payments-Landscape-Heats-Up.html "Vietnam Mobile Payments Market Outlook to 2029: E-Wallet"
[16]: https://qrplanet.com/?utm_source=chatgpt.com "QR Planet: Free QR Code Generator | Create QR Codes"
[17]: https://www.qr-code-generator.com/solutions/qr-code-for-restaurant-menu/?utm_source=chatgpt.com "Create a menu QR Code for your restaurant with QR ..."
[18]: https://www.g2.com/products/qr-code-menu-builder/competitors/alternatives?utm_source=chatgpt.com "Top 10 QR Code Menu Builder Alternatives & Competitors"
[19]: https://voz.vn/t/tu-van-tang-qua-sinh-nhat-cho-ban-gai.408609/?utm_source=chatgpt.com "tư vấn tặng quà sinh nhật cho bạn gái"
[20]: https://www.webtretho.com/f/thoi-trang/nhung-luu-y-khi-mua-qua-tang-cho-sep-nam?utm_source=chatgpt.com "Những lưu ý khi mua quà tặng cho sếp nam"
[21]: https://developers.facebook.com/docs/pages-api/posts/?utm_source=chatgpt.com "Posts - Facebook Pages API - Meta for Developers"
[22]: https://ifttt.com/explore/how-to-use-rss-feeds?utm_source=chatgpt.com "How to use RSS Feeds: The Complete Guide for 2025"
[23]: https://socialbee.com/blog/facebook-algorithm/?utm_source=chatgpt.com "Facebook Algorithm Explained: 2025 Insights"
[24]: https://support.google.com/business/answer/9455840?hl=en&utm_source=chatgpt.com "About the menu editor - Google Business Profile Help"
[25]: https://developers.google.com/my-business/content/offering-data?utm_source=chatgpt.com "Add structured offering data | Google Business Profile APIs"
[26]: https://www.yext.com/blog/2024/05/maximize-restaurant-reach-with-google-structured-menus-menu-viewer?utm_source=chatgpt.com "Maximize Your Restaurant's Reach with Google Structured ..."
[27]: https://blinq.me/pricing?utm_source=chatgpt.com "Digital Business Card Pricing | Blinq.me"
[28]: https://play.google.com/store/apps/details?hl=en_US&id=br.com.ctncardoso.ctncar&utm_source=chatgpt.com "Drivvo - car management - Apps on Google Play"
[29]: https://www.reddit.com/r/CarsIndia/comments/116dphd/app_review_fuelio_fuel_log_mileage_tracker/?utm_source=chatgpt.com "App Review: Fuelio - fuel log, mileage tracker : r/CarsIndia"
[30]: https://developers.google.com/maps/documentation/places/web-service/place-id "Place IDs  |  Places API  |  Google for Developers"
[31]: https://www.commonmind.com/blog/use-google-business-profile-qr-code-for-reviews?utm_source=chatgpt.com "How to Use Google Business Profile's New QR Code ..."
[32]: https://vnexpress.net/oto-xe-may/v-car?utm_source=chatgpt.com "V-CAR | Bảng giá xe ôtô tháng 8/2025 tại Việt Nam mới nhất"
[33]: https://www.zigwheels.vn/en/compare-cars?utm_source=chatgpt.com "Compare New Cars by Price, Specs, Mileage & Features | Gaadi"
[34]: https://www.aseancap.org/results?utm_source=chatgpt.com "Results - asean ncap"
[35]: https://www.vr.org.vn/Pages/thong-bao.aspx?Category=7&utm_source=chatgpt.com "Thông tin triệu hồi Xe cơ giới"
[36]: https://hazeover.com/?utm_source=chatgpt.com "HazeOver: Distraction Dimmer™ for Productivity on Mac"
[37]: https://apps.apple.com/us/app/be-focused-pomodoro-timer/id973134470?mt=12&utm_source=chatgpt.com "Be Focused - Pomodoro Timer on the Mac App Store"
[38]: https://freedom.to/premium?utm_source=chatgpt.com "Freedom Premium | Plans only $2.42/month"
[39]: https://tldr.sh/ "tldr pages"
[40]: https://github.com/chubin/cheat.sh "GitHub - chubin/cheat.sh: the only cheat sheet you need"
[41]: https://github.com/MichaelAquilina/zsh-you-should-use?utm_source=chatgpt.com "MichaelAquilina/zsh-you-should-use"
[42]: https://www.reddit.com/r/fishshell/comments/1kl9oez/fish_plugin_for_command_suggestions_by_pressing/?utm_source=chatgpt.com "Fish plugin for command suggestions by pressing ctrl-space"
[43]: https://support.google.com/docs/answer/183965?co=GENIE.Platform%3DDesktop&hl=en "Make Google Docs, Sheets, Slides & Forms public - Computer - Google Docs Editors Help"
[44]: https://www.reddit.com/r/googlesheets/comments/1br0izu/very_serious_google_sheets_publish_to_web/ "Very serious Google Sheets \"Publish to Web\" bug...potential solution/workaround included. : r/googlesheets"
[45]: https://stackoverflow.com/questions/64902111/publish-to-web-on-google-sheets-not-working-properly "python - \"Publish to web\" on Google Sheets not working properly - Stack Overflow"
[46]: https://play.google.com/store/apps/details?hl=en_US&id=mrigapps.andriod.fuelcons&utm_source=chatgpt.com "Simply Auto: Car Maintenance - Apps on Google Play"
[47]: https://github.com/MichaelAquilina/zsh-you-should-use "GitHub - MichaelAquilina/zsh-you-should-use:  ZSH plugin that reminds you to use existing aliases for commands you just typed"
