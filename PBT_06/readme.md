# PBT_06 - CSS Frameworks (Bootstrap 5)

## Thông tin sinh viên

* Họ và tên: [Điền họ tên]
* MSSV: [Điền MSSV]
* Lớp: [Điền lớp]
* Môn học: CSE391 - Phát triển ứng dụng Web cơ bản

---

# Giới thiệu

Phiếu bài tập số 06 tập trung vào việc sử dụng CSS Framework để tăng tốc độ phát triển giao diện Web.

Track đã chọn:

✅ Bootstrap 5

Các nội dung chính:

* Bootstrap Grid System
* Bootstrap Utilities
* Bootstrap Components
* Responsive Design với Bootstrap
* Dashboard Layout
* Modal, Carousel, Navbar
* Bootstrap Customization

---

# Cấu trúc thư mục

```text
PBT_06/
├── answers.md
├── bootstrap_landing.html
├── bootstrap_dashboard.html
├── screenshots/
│   ├── landing_mobile.png
│   ├── landing_tablet.png
│   ├── landing_desktop.png
│   ├── dashboard.png
│   ├── modal_demo.png
│   ├── carousel_demo.png
│   ├── accordion_demo.png
│   └── responsive_test.png
└── videos/
    └── PBT06_HoTen_MSSV.mp4
```

---

# Nội dung thực hiện

## Phần A - Đọc hiểu

### A1 - Bootstrap Grid System

Đã nghiên cứu:

* Container
* Row
* Column
* Responsive Breakpoints
* Grid 12 cột

Ví dụ:

```html
<div class="col-12 col-md-6 col-lg-3">
```

Ý nghĩa:

| Kích thước | Chiều rộng |
| ---------- | ---------- |
| Mobile     | 12 cột     |
| Tablet     | 6 cột      |
| Desktop    | 3 cột      |

---

### A2 - Utilities & Components

Đã tìm hiểu:

* Display Utilities
* Spacing Utilities
* Containers
* Responsive Utilities

Ví dụ:

```html
d-none d-md-block
```

Ý nghĩa:

* Mobile: Ẩn
* Tablet trở lên: Hiện

---

# Phần B - Thực hành

## Bài B1 - Landing Page Bootstrap

File:

```text
bootstrap_landing.html
```

### Thành phần đã xây dựng

#### Navbar

Sử dụng:

```html
navbar navbar-expand-lg
```

Bao gồm:

* Logo
* Navigation Menu
* Search Box
* Cart Button

---

#### Hero Section

Sử dụng:

```html
carousel
```

Bao gồm:

* 3 slides
* Overlay Text
* CTA Button

---

#### Product Grid

Sử dụng:

```html
row
col-12
col-md-6
col-lg-3
```

Responsive:

| Thiết bị | Số cột |
| -------- | ------ |
| Mobile   | 1      |
| Tablet   | 2      |
| Desktop  | 4      |

---

#### Product Cards

Sử dụng:

```html
card
card-img-top
card-body
card-title
card-text
```

Kèm:

```html
badge bg-danger
```

để hiển thị nhãn Sale.

---

#### Modal

Sử dụng:

```html
modal
modal-dialog
modal-content
```

Hiển thị thông tin nhanh của sản phẩm.

---

#### Footer

Sử dụng Bootstrap Grid:

```html
row
col-md-3
```

Tạo 4 cột thông tin.

---

## Bài B2 - Dashboard Layout

File:

```text
bootstrap_dashboard.html
```

### Sidebar

Sử dụng:

```html
position-fixed
list-group
```

Chứa menu quản trị.

---

### Topbar

Sử dụng:

```html
breadcrumb
dropdown
```

Hiển thị vị trí hiện tại và thông tin người dùng.

---

### Statistic Cards

Sử dụng:

```html
card
bg-primary
bg-success
bg-warning
bg-danger
```

Hiển thị:

* Doanh thu
* Đơn hàng
* Khách hàng
* Sản phẩm

---

### Orders Table

Sử dụng:

```html
table
table-striped
table-hover
```

Hiển thị dữ liệu đơn hàng.

---

### Search Form

Sử dụng:

```html
input-group
```

Cho tìm kiếm và lọc dữ liệu.

---

### Accordion

Sử dụng:

```html
accordion
```

Hiển thị FAQ.

---

### Alert

Sử dụng:

```html
alert alert-success
```

Hiển thị thông báo thành công.

---

# Phần C - Phân tích

## C1 - Tùy biến Bootstrap

Đã nghiên cứu:

* Bootstrap Sass
* Variables
* Bootstrap Build Process

Ví dụ thay đổi:

```scss
$primary: #E63946;
```

Sau đó build lại Bootstrap.

---

## C2 - So sánh CSS thuần và Bootstrap

Đã đánh giá:

* Tốc độ phát triển
* Số lượng dòng CSS
* Khả năng tái sử dụng
* Khả năng tùy biến

Kết luận:

* Bootstrap phù hợp với MVP, Dashboard, Landing Page.
* CSS thuần phù hợp với UI độc quyền cần thiết kế riêng.

---

# Screenshots

Thư mục:

```text
screenshots/
```

Bao gồm:

| File                | Nội dung             |
| ------------------- | -------------------- |
| landing_mobile.png  | Landing Page Mobile  |
| landing_tablet.png  | Landing Page Tablet  |
| landing_desktop.png | Landing Page Desktop |
| dashboard.png       | Dashboard Layout     |
| modal_demo.png      | Bootstrap Modal      |
| carousel_demo.png   | Bootstrap Carousel   |
| accordion_demo.png  | Accordion            |
| responsive_test.png | Kiểm tra Responsive  |

---

# Responsive Testing

Đã kiểm thử trên:

| Thiết bị | Width   |
| -------- | ------- |
| Mobile   | 375px   |
| Tablet   | 768px   |
| Desktop  | 1200px+ |

Kết quả:

✅ Layout hoạt động đúng

✅ Grid responsive chính xác

✅ Navbar collapse đúng breakpoint

---

# Video thực hành

Tên file:

```text
videos/PBT06_HoTen_MSSV.mp4
```

Hoặc:

* YouTube (Unlisted): [Điền link]
* Google Drive: [Điền link]

Nội dung video:

* Bootstrap Card
* Badge
* Modal
* Responsive Layout
* Giải thích Bootstrap Classes

---

# Tiến độ hoàn thành

| Nội dung  | Trạng thái |
| --------- | ---------- |
| A1        | ✅          |
| A2        | ✅          |
| B1        | ✅          |
| B2        | ✅          |
| C1        | ✅          |
| C2        | ✅          |
| Video OBS | ✅          |

---

# Lịch sử Commit

Ví dụ:

```bash
git commit -m "PBT_06: Hoàn thành Landing Page Bootstrap"
git commit -m "PBT_06: Hoàn thành Dashboard Layout"
git commit -m "PBT_06: Hoàn thành answers và screenshots"
```

---

# Kiến thức đạt được

Sau khi hoàn thành PBT_06, tôi đã:

* Hiểu Bootstrap Grid System.
* Sử dụng Bootstrap Utilities hiệu quả.
* Xây dựng giao diện responsive nhanh chóng.
* Sử dụng các Bootstrap Components như Navbar, Card, Modal, Carousel, Accordion.
* Tạo Dashboard quản trị bằng Bootstrap.
* Hiểu cách tùy biến Bootstrap thông qua Sass Variables.
* Biết khi nào nên dùng Bootstrap và khi nào nên dùng CSS thuần.

https://youtu.be/qqOEbJLZNZo