# Site Plan — Option A (`/chu-de` hubs + `/tro-choi` game detail + `/tro-choi-online`)

## 1) User journeys → intents → sample queries

1. **Tìm nhanh danh sách đúng nhu cầu (Browse/Discover)**

   * Queries: “trò chơi team building trong nhà”, “trò chơi dân gian cho học sinh”, “trò chơi pha băng không cần đạo cụ”, “trò yên tĩnh cho phòng họp”.
   * Need: intro ngắn, filter rõ, danh sách gợi ý nổi bật, vài tips/FAQ nhanh.

2. **Xem chi tiết 1 trò (Learn the rules)**

   * Queries: “ai là gián điệp luật chơi”, “cướp cờ cách chơi”, “ma sói hướng dẫn”.
   * Need: mục tiêu, số người, thời lượng, đạo cụ, độ ồn, luật chi tiết, biến thể, mẹo tổ chức, gợi ý thay thế, link sang bản online (nếu có).

3. **Chơi online ngay (Play)**

   * Queries: “ai là gián điệp online”, “trò chơi online cho zoom”, “online spy game”.
   * Need: trang webapp, cách mời người chơi, host/join, link ngược về trang luật.

4. **Micro-guide ngắn gọn nhúng trong hub (Decide/Plan)**

   * Queries: “chọn trò cho 10 người”, “trò 15 phút”, “trò không cần đạo cụ”.
   * Need: tiêu chí/chips chọn nhanh, checklist ngắn, nội dung không dài dòng (nếu dài mới tách bài riêng).

---

## 2) URL map (với mô tả nội dung/structure/components cho từng loại)

### A. Trang chủ

**URL:** `/`
**Mục tiêu:** Định vị nhanh sản phẩm (kho trò chơi) + lối vào chính.
**Nội dung/Components:**

* Hero tóm tắt (USP + CTA “Khám phá trò chơi”).
* Khối “Bắt đầu theo ngữ cảnh”: 3 ô **Trong nhà / Ngoài trời / Online** → link sang hub tương ứng.
* Khối “Theo đối tượng”: Công ty, Sinh viên, Trẻ em → hub/landing tương ứng.
* Khối “Theo mục tiêu”: Pha băng, Kết nối, Trí tuệ, Vận động…
* “Trò nổi bật” (Top picks).
* Internal links đến **/chu-de/** và **/tro-choi/**.

---

### B. Tất cả trò chơi (listing tổng)

**URL:** `/tro-choi/`
**Mục tiêu:** Browse toàn bộ catalog, có filter đầy đủ.
**Nội dung/Components:**

* H1 + intro 1–2 câu (mô tả kho trò).
* **Bộ lọc**: ngữ cảnh (trong nhà/ngoài trời/online), đối tượng, mục tiêu, đạo cụ, độ ồn, số người (≥), thời lượng (≤), ô tìm kiếm.
* **Sort**: mới nhất / phổ biến / ít đạo cụ / ngắn thời lượng.
* **Grid/List** trò (card kèm badges thuộc tính).
* Pagination, canonical (không tham số).
* Mini-FAQ về cách chọn nhanh.

---

### C. Chi tiết trò (luật & thông tin)

**URL:** `/tro-choi/[slug]/` (VD: `/tro-choi/ai-la-gian-diep/`)
**Mục tiêu:** Cung cấp luật chơi + bối cảnh sử dụng + tips.
**Nội dung/Components:**

* Hero: tên trò + **thẻ thuộc tính** (mục tiêu, số người, thời lượng, đạo cụ, độ ồn, ngữ cảnh).
* “Khi nào nên dùng?” (3–5 bullet phù hợp audience/context).
* **Luật chơi chi tiết** (bước-bước), **biến thể**, **lỗi thường gặp**.
* **Mẹo tổ chức nhanh** (3–6 bullet).
* **Gợi ý thay thế** (trò tương tự theo mục tiêu/đạo cụ).
* CTA “Chơi bản online” (nếu có) → `/tro-choi-online/[slug]/`.
* Internal links về hub liên quan (ví dụ **Trong nhà**, **Pha băng**…).

---

### D. Trò chơi online (webapp)

**URLs:**

* Listing (tuỳ chọn): `/tro-choi-online/`
* Single game: `/tro-choi-online/[slug]/` (VD: `/tro-choi-online/ai-la-gian-diep/`)
  **Mục tiêu:** Cho chơi trực tiếp.
  **Nội dung/Components:**
* Hero + nút **Bắt đầu chơi**.
* Cơ chế tạo phòng / link tham gia / hướng dẫn host/join nhanh.
* (Tối giản) Mô tả luật rút gọn + link về **/tro-choi/[slug]/** để xem chi tiết.
* Nếu có nhiều online game: listing có **search** + **chips** (ngữ cảnh online, số người, thời lượng).

---

### E. Hubs / Collections (pillar & landing)

**Prefix:** `/chu-de/`
**Mục tiêu:** Trả lời các query “danh sách X theo Y” bằng 1 trang gọn nhẹ + filter.

#### E1. Hub chính theo “chủ đề lớn”

* **Team building:** `/chu-de/tro-choi-team-building/`
* **Dân gian:** `/chu-de/tro-choi-dan-gian/`

**Nội dung/Components (chuẩn chung cho hub):**

* H1 + **intro 2–3 câu** (định nghĩa chủ đề, phạm vi).
* **Chips preset** (ví dụ hub Team building hiển thị ngay chips Mục tiêu/Audience phổ biến).
* **Bộ lọc đầy đủ** (context/audience/objective/equipment/noise/size/duration/search).
* **Top Picks** (10–20 trò tiêu biểu).
* **Quick tips** (3–6 bullet) phù hợp chủ đề (micro-guide).
* **Mini-FAQ** (3–5 câu) → cách chọn, gợi ý thời lượng/đạo cụ.
* Liên quan: link sang hub khác (ví dụ từ Team building → Dân gian).

#### E2. Hub con theo **ngữ cảnh** (context)

* `/chu-de/tro-choi-team-building/trong-nha/`
* `/chu-de/tro-choi-team-building/ngoai-troi/`
* `/chu-de/tro-choi-team-building/online/`

**Nội dung/Components:**

* Intro 1–2 câu (giải thích khi nào dùng bối cảnh này).
* **Chips preset**: giữ sẵn ngữ cảnh tương ứng.
* **Filter** còn lại: audience, mục tiêu, đạo cụ, độ ồn, size, duration, search.
* **Top Picks** theo ngữ cảnh + **Quick tips** (độ ồn/không gian/đạo cụ).
* Mini-FAQ nhỏ (VD: “họp phòng nhỏ, nên chọn trò nào?”).

#### E3. Hub con theo **đối tượng** (audience) — landing

* `/chu-de/tro-choi-team-building/cho-cong-ty/`
* `/chu-de/tro-choi-team-building/cho-sinh-vien/`
* `/chu-de/tro-choi-team-building/cho-tre-em/` (hoặc tách `…/cho-mam-non/`, `…/cho-tieu-hoc/`, `…/cho-cap-2/`, `…/cho-cap-3/`)

**Nội dung/Components:**

* Intro cho audience (bối cảnh sử dụng).
* **Preset chips**: audience tương ứng.
* **Filter** khác: ngữ cảnh/mục tiêu/đạo cụ/độ ồn/size/duration/search.
* **Top Picks** theo audience + **Quick tips** (quản trò, gợi ý thời lượng).
* Mini-FAQ (VD: “team 30 người chọn gì?”).

#### E4. Hub con theo **mục tiêu** (objective) — landing

* `/chu-de/tro-choi-team-building/muc-tieu/pha-bang/`
* `/…/muc-tieu/ket-noi/`
* `/…/muc-tieu/tri-tue/`
* `/…/muc-tieu/van-dong/`
* `/…/muc-tieu/sang-tao/`
* `/…/muc-tieu/ky-nang/`

**Nội dung/Components:**

* Intro ngắn (khi nào dùng mục tiêu này).
* **Preset chips**: mục tiêu tương ứng.
* **Filter** còn lại: ngữ cảnh/audience/đạo cụ/độ ồn/size/duration/search.
* **Top Picks** theo mục tiêu + **Quick tips** (tiêu chí chọn theo mục tiêu).
* Mini-FAQ (VD: “icebreaker cho họp 15 phút?”).

#### E5. Hub con theo **đạo cụ** & **độ ồn** — intent mạnh

* `/chu-de/tro-choi-team-building/khong-can-dao-cu/`
* `/chu-de/tro-choi-team-building/it-dao-cu/`
* `/chu-de/tro-choi-team-building/yen-tinh/`
* `/chu-de/tro-choi-team-building/soi-dong/`

**Nội dung/Components:**

* Intro + **preset chips** theo intent.
* **Filter**: phần còn lại (audience/mục tiêu/size/duration/search).
* **Top Picks** + **Quick tips** (setup nhanh theo constraint).
* Mini-FAQ.

> **Lưu ý chung cho Hub:**
>
> * Các **tổ hợp filter** qua query params (ví dụ `?muc-tieu=pha-bang&doi-tuong=cong-ty&thoi-luong-max=15`).
> * **Canonical** về URL hub **không tham số** (tránh trùng lặp), trừ khi một combo được nâng cấp thành “landing mềm” có nội dung riêng.

---

### F. Địa điểm (Local SEO — tùy chọn)

**URL:** `/dia-diem/trong-nha/[city]/` (VD: `/dia-diem/trong-nha/ho-chi-minh/`)
**Mục tiêu:** Intent địa phương (“địa điểm trong nhà HCM”).
**Nội dung/Components:**

* Intro + đặc thù địa phương.
* **Preset chips**: ngữ cảnh “trong nhà”.
* Listing trò phù hợp không gian trong nhà (gợi ý size/độ ồn).
* Gợi ý địa điểm (nếu có) + lưu ý tổ chức.

---

## 3) Routes (Astro)

```
src/pages/
  index.astro                           # Trang chủ

  tro-choi/
    index.astro                         # Listing tổng
    [slug].astro                        # Chi tiết trò

  tro-choi-online/
    index.astro                         # (tuỳ chọn) Listing online
    [slug].astro                        # Webapp từng trò online

  chu-de/
    [hub]/
      index.astro                       # Hub chính (vd: tro-choi-team-building, tro-choi-dan-gian)
      [sub]/
        index.astro                     # Hub con (vd: trong-nha, ngoai-troi, online, cho-cong-ty, .../muc-tieu/pha-bang)

  dia-diem/
    trong-nha/
      [city]/
        index.astro                     # Local SEO (tuỳ chọn)
```

**Gợi ý triển khai ngắn gọn:**

* **Hub pages** (`/chu-de/...`): SSR đọc dữ liệu trò từ content collection, áp **preset chips** và render bộ lọc + Top Picks + Quick tips + mini-FAQ.
* **/tro-choi/[slug]/**: render từ MD/MDX frontmatter (title, mục tiêu, size, duration, đạo cụ, độ ồn, bối cảnh, nội dung luật, biến thể, tips).
* **/tro-choi-online/[slug]/**: trang webapp riêng; link ngược về trang luật.
* **Canonical & noindex**: hầu hết URL có param filter → `noindex,follow` + canonical về URL hub gốc (không param), trừ khi bạn làm **landing mềm** có nội dung riêng.

---

## 4) Tham số filter dùng chung cho listing/hub
⏺ Dưới đây là danh sách các danh mục bộ lọc và giá trị của chúng:

  📍 Bối cảnh (Context)

  - Indoor (trong nhà)
  - Outdoor (ngoài trời)
  - Online/Zoom

  👥 Đối tượng (Audience)

  - Mầm non
  - Tiểu học
  - Cấp 2 (THCS)
  - Cấp 3 (THPT)
  - Sinh viên
  - Công ty/Văn phòng
  - Gia đình
  - Trẻ em

  🎯 Mục đích (Objective)

  - Icebreaker/Phá băng
  - Team building
  - Vận động/Physical
  - Trí tuệ/Logic
  - Sáng tạo
  - Kỹ năng giao tiếp

  🎲 Đạo cụ (Equipment)

  - Không đạo cụ
  - Ít đạo cụ
  - Bóng
  - Giấy/Bút

  🔊 Mức độ ồn (Noise Level)

  - Yên tĩnh
  - Sôi động

```
?doi-tuong=cong-ty,sinh-vien,tre-em,mam-non,tieu-hoc,cap-2,cap-3,gia-dinh
&muc-tieu=pha-bang,ket-noi,tri-tue,van-dong,sang-tao,ky-nang
&dao-cu=khong-can,it-dao-cu,bong,giay-but,day-thun,post-it
&do-on=yen-tinh,soi-dong
&so-nguoi-min=10
&thoi-luong-max=15
&q=tu-khoa
&page=2
```

