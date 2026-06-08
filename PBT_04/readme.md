# PBT_04 - CSS Layout

## Thông tin sinh viên

* Họ và tên: [Điền họ tên]
* MSSV: [Điền MSSV]
* Lớp: [Điền lớp]
* Môn học: CSE391 - Phát triển ứng dụng Web cơ bản

---

# Giới thiệu

Phiếu bài tập số 04 tập trung vào các kỹ thuật xây dựng layout hiện đại bằng CSS:

* CSS Positioning
* Flexbox
* CSS Grid
* Sticky Layout
* Fixed Layout
* Responsive Layout Foundation
* Layout Debugging

---

# Cấu trúc thư mục

```text
PBT_04/
├── answers.md
├── positioning.html
├── positioning.css
├── flexbox_layout.html
├── flexbox.css
├── grid_layout.html
├── grid.css
├── screenshots/
│   ├── fixed_header.png
│   ├── sticky_sidebar.png
│   ├── hot_badge.png
│   ├── flexbox_navbar.png
│   ├── flexbox_cards.png
│   ├── grid_layout.png
│   ├── before_fix.png
│   ├── after_fix.png
│   └── validator_result.png
└── videos/
    └── PBT04_HoTen_MSSV.mp4
```

---

# Nội dung thực hiện

## Phần A - Kiểm tra đọc hiểu

### A1 - CSS Positioning

Đã nghiên cứu và trả lời:

* static
* relative
* absolute
* fixed
* sticky

Bao gồm:

* Flow của document
* Reference Position
* Scrolling Behavior
* Nearest Positioned Ancestor

---

### A2 - Flexbox và Grid

Đã phân tích:

* Flex Container
* Flex Wrap
* Justify Content
* Align Items
* Grid Columns
* Grid Rows
* Gap
* Repeat
* Fraction Unit (fr)

---

## Phần B - Thực hành

### Bài B1 - Positioning Playground

Files:

```text
positioning.html
positioning.css
```

Nội dung:

* Fixed Header
* Sticky Sidebar
* Absolute Badge
* Scroll To Top Button

Kiến thức áp dụng:

```css
position: fixed;
position: sticky;
position: relative;
position: absolute;
```

---

### Bài B2 - Flexbox Navigation & Cards

Files:

```text
flexbox_layout.html
flexbox.css
```

Nội dung:

#### Navbar

* Logo bên trái
* Menu ở giữa
* Login/Register bên phải

Kiến thức áp dụng:

```css
display: flex;
justify-content: space-between;
align-items: center;
```

#### Product Cards

* Flex Wrap
* Card Hover Effect
* Margin Auto

Kiến thức áp dụng:

```css
flex-wrap: wrap;
margin-top: auto;
transform: translateY(-5px);
```

---

### Bài B3 - Grid Layout E-Commerce

Files:

```text
grid_layout.html
grid.css
```

Nội dung:

* Header
* Hero Banner
* Sidebar Filter
* Product Grid
* Advertisement Area
* Footer

Kiến thức áp dụng:

```css
display: grid;
grid-template-columns: 200px 1fr 200px;
gap: 20px;
grid-column: 1 / -1;
```

Bonus:

* Grid Template Areas
* Featured Product Layout

---

## Phần C - Suy luận

### C1 - Khi nào dùng Flexbox hoặc Grid

Đã phân tích:

* Navbar
* Instagram Gallery
* Blog Layout
* Footer Columns
* Product Cards

---

### C2 - Debug Flexbox

Đã xử lý:

* Card chiều cao không đều
* Căn giữa ngang và dọc
* Sidebar bị co lại

Các lỗi được giải thích và sửa bằng mã nguồn thực tế.

---

# Screenshots

Thư mục:

```text
screenshots/
```

Bao gồm:

| Ảnh                | Nội dung                |
| ------------------ | ----------------------- |
| fixed_header.png   | Header cố định khi cuộn |
| sticky_sidebar.png | Sidebar sticky          |
| hot_badge.png      | Badge HOT               |
| flexbox_navbar.png | Navbar Flexbox          |
| flexbox_cards.png  | Product Cards           |
| grid_layout.png    | Layout Grid             |
| before_fix.png     | Trước khi sửa lỗi       |
| after_fix.png      | Sau khi sửa lỗi         |

---

# Kết quả kiểm thử

## CSS Layout

Đã kiểm tra:

* Fixed Position
* Sticky Position
* Absolute Position
* Flexbox Layout
* Grid Layout

Kết quả hoạt động đúng trên Chrome.

---

## Responsive Behavior

Đã thử thay đổi kích thước cửa sổ trình duyệt để kiểm tra:

* Flex Wrap
* Grid Scaling
* Sticky Sidebar
* Fixed Header

---

# Video thực hành

Tên file:

```text
videos/PBT04_HoTen_MSSV.mp4
```

Hoặc:

* YouTube (Unlisted): [Điền link]
* Google Drive: [Điền link]

---

# Tiến độ hoàn thành

| Nội dung  | Trạng thái |
| --------- | ---------- |
| A1        | ✅          |
| A2        | ✅          |
| B1        | ✅          |
| B2        | ✅          |
| B3        | ✅          |
| C1        | ✅          |
| C2        | ✅          |
| Video OBS | ✅          |

---

# Lịch sử Commit

Ví dụ:

```bash
git commit -m "PBT_04: Hoàn thành Positioning Playground"
git commit -m "PBT_04: Hoàn thành Flexbox Navbar và Cards"
git commit -m "PBT_04: Hoàn thành Grid Layout"
git commit -m "PBT_04: Hoàn thành answers và screenshots"
```

---

# Kiến thức đạt được

Sau khi hoàn thành PBT_04, tôi đã:

* Hiểu rõ 5 loại Positioning trong CSS.
* Sử dụng thành thạo Flexbox để xây dựng navigation và card layouts.
* Xây dựng bố cục phức tạp bằng CSS Grid.
* Kết hợp Flexbox và Grid trong cùng một dự án.
* Debug các lỗi layout thường gặp.
* Áp dụng Sticky, Fixed và Absolute Position đúng mục đích.
* Tạo giao diện E-Commerce có cấu trúc rõ ràng và dễ mở rộng.

https://youtu.be/TDgt-t-I3ms