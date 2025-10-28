# trochoinhom.com — Kế hoạch URL/pSEO + Taxonomy + UI/UX cho Landing theo Ngữ Cảnh
*Version: 2025-10-17 (Updated with keyword research)*

Tài liệu tóm tắt các nguyên tắc đặt URL/pSEO, cấu trúc danh mục (taxonomy), nhóm lọc (facets), danh sách landing pages khởi điểm, template nội dung để tránh "thin content", dữ liệu nghiên cứu từ khóa, và chiến lược Pillar/Child pages.

---

## 0) Nghiên cứu từ khóa (Keyword Research)

### Từ khóa chính (High Volume)
- **"team building cửa lò"** - 4,400 searches (KD: 12) 🔥
- **"du lịch team building"** - 3,600 searches (KD: 17)
- **"trò chơi team building"** - 2,400 searches (KD: 37)
- **"team building là gì"** - 1,900 searches (KD: 27)
- **"clip team building cửa lò"** - 1,600 searches (KD: 28)
- **"các trò chơi team building"** - 1,600 searches (KD: 44)
- **"tổ chức team building"** - 1,300 searches (KD: 13)
- **"các trò chơi team building trong nhà"** - 720 searches (KD: 32)

Thêm:
- "các từ khóa trong ai la gián điệp"
- "những từ trong ai la gián điệp"
- "trò chơi nhóm"

### Nhóm từ khóa theo Intent

#### Tổ chức team building (Organizational)
- "tổ chức team building" (1,300)
- "mục đích tổ chức team building" (320)
- "công ty tổ chức team building" (260)

#### Định nghĩa/Giáo dục (Educational)
- "team building là gì" (1,900)
- "team building tiếng việt là gì" (170)
- "team building nghĩa là gì" (140)

#### Trong nhà (Indoor)
- "các trò chơi team building trong nhà" (720)
- "trò chơi team building trong nhà" (720)
- "trò chơi team building trong lớp học" (260)

#### Ngoài trời (Outdoor)
- "trò chơi team building ngoài trời" (590)
- "các trò chơi team building ngoài trời" (390)

#### Đơn giản & Học sinh (Simple & Students)
- "các trò chơi team building đơn giản" (260)
- "team building học sinh" (40)

#### Đồ dùng & Nội dung (Materials & Content)
- "chơi team building" - 320 searches (KD: 35)
- "ảnh team building" - 170 searches (KD: 12)
- "nhạc team building" - 140 searches (KD: 6)
- "áo team building" → Áo, các đồ dùng cần
- "team building biển" - 140 searches (KD: 45)

### Kết luận từ dữ liệu

1. **Modifiers xuất hiện đủ tín hiệu**: `trong nhà`, `ngoài trời`, `không cần đạo cụ`, `đơn giản`, `yên tĩnh` + đối tượng (`học sinh cấp 3/cấp 2/tiểu học/mầm non`) → phù hợp với chiến lược Pillar + Child

2. **Đồng xuất hiện Intent × Audience có tín hiệu tốt**:
   - `trong nhà` × `học sinh cấp 3/cấp 2`
   - `không cần đạo cụ` × `học sinh` (tiểu học/cấp 2)
   - `yên tĩnh` × `lớp học`/`người lớn` (phòng họp)

3. **Cơ hội địa phương**: Truy vấn có chứa HCM/Hà Nội/Đà Nẵng/Cửa Lò → có thể làm cụm `/dia-diem/trong-nha/{city}` (tư vấn venue + gợi ý trò tương ứng)

---

## 1) Mục tiêu
- **URL ngắn, dễ hiểu, đọc lên biết ngay nội dung**.
- **Duyệt trước, tìm sau**: người dùng nhiều khi chưa biết mình cần trò gì → ưu tiên browse theo hub + gợi ý sẵn, sau đó mới tìm kiếm/AI.
- **Lọc ngay trên trang (faceted navigation)**, **không** đẩy người dùng sang trang search chung.
- **List view mặc định** (bảng có cột) để quét/so sánh nhanh; Card chỉ là tùy chọn.

---

## 2) Hubs (dùng cho điều hướng & pSEO cấp 1)
Các hub cũng chính là thư mục gốc cho URL:

- `/tro-choi-team-building` (công ty)
- `/tro-choi-lop-hoc`
- `/tro-choi-tre-em`
- `/tro-choi-gia-dinh`
- `/tro-choi-picnic`
- `/tro-choi-online`

> Gợi ý nav: show 6 hub này ở trang chủ bằng các chip/CTA lớn.

---

## 3) Nhóm lọc (facets) — **chỉ dùng trong trang**, *không* nhét hết vào URL
- **Mục tiêu**: phá băng, gắn kết, tư duy/giải đố, sáng tạo, vận động/energizer, thư giãn  
- **Không gian**: trong nhà, ngoài trời, phòng nhỏ, hội trường  
- **Đối tượng**: mầm non, tiểu học, THCS (cấp 2), THPT (cấp 3), người lớn  
- **Đạo cụ**: không cần, giấy bút, bóng, dây, thẻ  
- **Mức ồn/độ vận động**: yên tĩnh, ít, vừa, mạnh  
- **Quy mô nhóm**: 2–5, 6–12, 13–20, 20+  
- **Hình thức**: offline một thiết bị/leader dẫn, online, hybrid  
- **Sắp xếp**: phổ biến, phù hợp nhất, thời lượng tăng dần, ít đạo cụ

> Thời lượng **không** đưa vào URL theo yêu cầu. Vẫn có thể là filter/sort trên trang.

---

## 4) Chiến lược URL/pSEO (nông, nhất quán, có nghĩa)

### Quy tắc
- **Mẫu 1 (ưu tiên):** `/{hub}/{intent}`  
- **Mẫu 2:** `/{hub}/{intent}-cho-{doi-tuong}` *(chỉ thêm khi rõ ràng là nhu cầu tìm theo đối tượng)*

Trong đó:
- **intent** ∈ `pha-bang | trong-nha | ngoai-troi | khong-can-dao-cu | don-gian | hai-huoc | doc-la`  
  (Có thể mở rộng thêm sau; ưu tiên cụm phổ biến & an toàn thương hiệu)
- **doi-tuong** ∈ `hoc-sinh-cap-3 | hoc-sinh-cap-2 | tieu-hoc | mam-non | nguoi-lon`

### Quy tắc canonical/301
- Đồng bộ từ đồng nghĩa và 301 về slug chuẩn:
  - `teambuilding` → `team-building`
  - `doc-dao` → `doc-la`
  - `cap-2` → `hoc-sinh-cap-2`, `cap-3` → `hoc-sinh-cap-3`

---

## 5) Danh sách landing pSEO khởi điểm (có thể xuất bản ngay)

### Team-building
- `/tro-choi-team-building/pha-bang`
- `/tro-choi-team-building/trong-nha`
- `/tro-choi-team-building/ngoai-troi`
- `/tro-choi-team-building/khong-can-dao-cu`
- `/tro-choi-team-building/don-gian`
- `/tro-choi-team-building/hai-huoc`
- `/tro-choi-team-building/pha-bang-cho-hoc-sinh-cap-3`
- `/tro-choi-team-building/trong-nha-cho-hoc-sinh-cap-3`

### Lớp học
- `/tro-choi-lop-hoc/yen-tinh`
- `/tro-choi-lop-hoc/khong-can-dao-cu`
- `/tro-choi-lop-hoc/sang-tao`
- `/tro-choi-lop-hoc/ngoai-troi`
- `/tro-choi-lop-hoc/pha-bang-cho-hoc-sinh-cap-2`
- `/tro-choi-lop-hoc/pha-bang-cho-hoc-sinh-cap-3`

### Trẻ em / Gia đình / Picnic / Online
- `/tro-choi-tre-em/ngoai-troi` · `/tro-choi-tre-em/trong-nha`
- `/tro-choi-gia-dinh/khong-can-dao-cu` · `/tro-choi-gia-dinh/sang-tao`
- `/tro-choi-picnic/ngoai-troi` · `/tro-choi-picnic/gan-ket`
- `/tro-choi-online/pha-bang` · `/tro-choi-online/cho-cuoc-hop`

> Mở rộng sau bằng hậu tố đối tượng (`-cho-hoc-sinh-cap-3`) với những trang có hiệu suất tốt.

---

## 6) Template nội dung để **không “thin content”**

Mỗi landing cần tối thiểu:

1. **Hero** nêu rõ intent (1–2 câu) + 2–3 **chips** (ví dụ: *không cần đạo cụ*, *yên tĩnh*, *trong nhà*).  
2. **Top picks (biên tập)**: 3 trò kèm **2 câu lý do** vì sao phù hợp.  
3. **Listing dạng bảng** (6–12 trò) với cột:
   - Tên trò • Thời lượng • Số người • Mức ồn • Đạo cụ • Độ tuổi • `[Quick] [Start]`
4. **Quick View** (modal): tóm tắt 15s → 4–6 bước → biến thể (ví dụ “rất yên tĩnh/online”) → nút mở **Timer / Score / Chia đội / Gợi ý từ/câu hỏi**.  
5. **Playlist 45–60’**: xếp 4–5 trò; **Lưu/QR/In PDF**.  
6. **Tips cho người dẫn** (theo bối cảnh) + **FAQ** (HowTo/FAQ schema).  
7. **Fallbacks**: nếu quá ồn/hết giờ/thiếu người; **Liên kết nội bộ** tới trò chi tiết/chủ đề liên quan.

---

## 7) Ví dụ hoàn chỉnh (spec + cấu trúc nội dung)

**Intent:** Trò chơi team building **trong nhà** **cho học sinh cấp 3**  
**URL:** `/tro-choi-team-building/trong-nha-cho-hoc-sinh-cap-3`

### Cấu trúc trang
- **Hero**: “Trò chơi team building trong nhà cho học sinh cấp 3 (phòng học/họp nhỏ, kiểm soát ồn tốt).”  
  Chips: *Trong nhà* • *Cho học sinh cấp 3* • *Không cần đạo cụ*
- **Top picks (3)**  
  1) **Hai sự thật – Một điều bịa** (8–10’, 6–12, yên tĩnh): *giúp tự giới thiệu thú vị, không ồn, không cần chuẩn bị*  
  2) **Giới thiệu 1 từ** (5–7’): *nhanh, mọi người đều nói, dễ điều phối*  
  3) **Chuỗi từ liên tưởng** (7–10’): *kích hoạt tư duy, vẫn kiểm soát âm lượng*
- **Listing (bảng)** 8–12 trò (các cột như mục 6)  
- **Quick View**: Tóm tắt 15s → 4–6 bước → Biến thể “rất yên tĩnh/online” → **Timer/Score/Gợi ý câu hỏi**  
- **Playlist 45’**: 4–5 trò → **Lưu/Chia sẻ QR/In PDF**  
- **Tips** cho leader giáo viên: mở bài 30s, xoay lượt công bằng, xử lý nhóm nhút nhát/hiếu động  
- **FAQ**: *thiếu người? quá ồn? không hợp lớp 10?*  
- **Schema**: HowTo + FAQ; liên kết sang `/tro-choi-team-building/khong-can-dao-cu`, `/tro-choi-lop-hoc/yen-tinh`, …

### Wireframe (desktop)
- PNG: `sandbox:/mnt/data/landing_wireframe_team_building_trong_nha_cap3.png`

Ngoài ra có bản wireframe tổng quát (list-first, URL nông):  
- PNG: `sandbox:/mnt/data/landing_wireframe_company_icebreaker_simple.png`

---

## 8) Giao diện & tương tác (tóm tắt cho dev)
- **List view mặc định**, nhớ lựa chọn người dùng (List/Card).  
- **Facet tray** (mobile = overlay), nút *Áp dụng/Xoá tất cả*.  
- **Không** đưa người dùng sang trang search chung khi click tag → **lọc tại chỗ**.  
- **Quick View** có nút **Start** mở “chế độ dẫn trò” full-screen (chữ lớn, đếm ngược).  
- **Tool dock** cố định: Timer • Scoreboard • Chia đội • Gợi ý từ/câu hỏi • In nhanh.

---

## 9) Routing & SEO kỹ thuật
- Chuẩn hoá slug (ASCII, dấu gạch nối).  
- Áp dụng 301 cho đồng nghĩa/viết sai → canonical.  
- Thêm **Schema JSON-LD**: `HowTo`, `FAQPage`, `Article` cho landing; `HowTo` chi tiết cho trang trò.  
- Nội bộ: mô hình **hub & spoke** (hub = landing; spoke = trò, công cụ, chủ đề lễ hội).

---

## 10) Lộ trình triển khai (đề xuất 4–6 tuần)
1. **Tuần 1**: build components (ListItem, QuickView, FilterTray, ToolDock) + JSON-LD khung.  
2. **Tuần 2–3**: xuất bản 6–8 landing ưu tiên (team-building: `trong-nha`, `ngoai-troi`, `khong-can-dao-cu`, `pha-bang`; lớp học: `yen-tinh`, `khong-can-dao-cu`).  
3. **Tuần 4**: Tool cơ bản (Timer, Score, Chia đội, Gợi ý từ/câu hỏi + seed chủ đề VN).  
4. **Tuần 5**: Playlist + In PDF; thêm 4–6 landing có hậu tố đối tượng (`-cho-hoc-sinh-cap-3`).  
5. **Tuần 6**: đo lường hành vi (click facets/Quick/Start/Tool/Print), A/B vị trí Wizard & Top picks, tối ưu nội dung.

---

## 11) Chiến lược Pillar/Child Pages (dựa trên keyword research)

### Mô hình: Pillar → Child pages

Chỉ tạo Child page khi:
1. Có giá trị nội dung riêng biệt
2. Dữ liệu keyword ủng hộ
3. Tránh duplicate content

### Ví dụ: `/tro-choi-team-building/trong-nha` (Pillar)

**URL Pillar**: `/tro-choi-team-building/trong-nha`
**Từ khóa chính**: "trò chơi team building trong nhà" (720 searches)

**Nội dung Pillar page**:
- Hero + chips gợi ý (không cần đạo cụ, yên tĩnh, nhóm 6–12)
- Top Picks biên tập (3 trò)
- Listing dạng bảng (tất cả trò trong nhà)
- Quick View/Start
- Playlist 45'
- Tips & FAQ
- Links đến Child pages + city pages

### Child Pages (chỉ khi có giá trị riêng)

#### 1) `/tro-choi-team-building/trong-nha/khong-can-dao-cu`

**Từ khóa**: "trò chơi team building trong nhà không cần đạo cụ", "không cần đạo cụ"

**Khác biệt nội dung**:
- Nguyên tắc "zero props"
- Bảng chỉ hiện trò 0 đạo cụ
- Tool "gợi ý câu hỏi" text-only
- Tips cho môi trường không chuẩn bị
- PDF in nhanh (không cần mang theo gì)

#### 2) `/tro-choi-team-building/trong-nha/yen-tinh`

**Từ khóa**: "trò chơi team building yên tĩnh", "trò chơi lớp học yên tĩnh"

**Khác biệt nội dung**:
- Thang đo mức ồn chi tiết
- Tips kiểm soát âm lượng
- Biến thể "đi từng lượt" thay vì đồng loạt
- Phù hợp phòng họp/lớp học đang học
- Kịch bản xử lý khi quá ồn

#### 3) `/tro-choi-team-building/trong-nha/cho-hoc-sinh-cap-3`

**Từ khóa**: "trò chơi team building trong nhà cho học sinh cấp 3"

**Khác biệt nội dung**:
- Mục tiêu học đường (phát triển kỹ năng mềm)
- Rubric đánh giá cho giáo viên
- Kịch bản tiết 45 phút
- Lưu ý an toàn/bao hàm học sinh nhút nhát
- Liên kết chương trình GDPT

### Mở rộng sau (nếu có volume tốt)

- `/tro-choi-team-building/trong-nha/don-gian`
- `/tro-choi-team-building/trong-nha/cho-hoc-sinh-cap-2`
- `/tro-choi-team-building/trong-nha/cho-tieu-hoc`

**Nguyên tắc**: Chỉ xuất bản khi có nội dung độc đáo thực sự, không chỉ thay đổi 1–2 câu.

### Liên kết nội bộ (Internal Linking)

**Từ Pillar → Child**:
- Section "Xem thêm các trò chơi chuyên biệt"
- Cards với icon + short description

**Từ Child → Pillar**:
- Breadcrumb: Team Building > Trong Nhà > Không Cần Đạo Cụ
- CTA "Xem tất cả trò trong nhà"

**Cross-linking giữa các Child**:
- "Nếu bạn cần trò yên tĩnh hơn → `/trong-nha/yen-tinh`"
- "Nếu có đạo cụ → `/trong-nha` (tất cả)"

---

## 12) Phụ lục: Mẫu URL (đọc lên hiểu ngay)

### Pillar Pages (Intent chính)
```text
/tro-choi-team-building/trong-nha
/tro-choi-team-building/ngoai-troi
/tro-choi-team-building/khong-can-dao-cu
/tro-choi-team-building/pha-bang
/tro-choi-lop-hoc/yen-tinh
/tro-choi-lop-hoc/khong-can-dao-cu
/tro-choi-tre-em/ngoai-troi
/tro-choi-gia-dinh/sang-tao
/tro-choi-online/pha-bang
```

### Child Pages (Khi có giá trị nội dung riêng)
```text
# Team Building Indoor
/tro-choi-team-building/trong-nha/khong-can-dao-cu
/tro-choi-team-building/trong-nha/yen-tinh
/tro-choi-team-building/trong-nha/cho-hoc-sinh-cap-3
/tro-choi-team-building/trong-nha/cho-hoc-sinh-cap-2
/tro-choi-team-building/trong-nha/don-gian

# Team Building Outdoor
/tro-choi-team-building/ngoai-troi/cho-hoc-sinh-cap-3
/tro-choi-team-building/ngoai-troi/khong-can-dao-cu

# Classroom
/tro-choi-lop-hoc/yen-tinh/cho-hoc-sinh-cap-3
/tro-choi-lop-hoc/khong-can-dao-cu/cho-hoc-sinh-cap-2
