# PBT_05 - CSS Responsive & SCSS

## Thông tin sinh viên

* Họ và tên: [Điền họ tên]
* MSSV: [Điền MSSV]
* Lớp: [Điền lớp]
* Môn học: CSE391 - Phát triển ứng dụng Web cơ bản

---

# Giới thiệu

Phiếu bài tập số 05 tập trung vào các kỹ thuật thiết kế giao diện hiện đại:

* Responsive Web Design
* Mobile-First Design
* Media Queries
* CSS Transitions
* CSS Animations
* SCSS (Sass)
* Responsive Product Layout

Mục tiêu là xây dựng giao diện có khả năng thích nghi trên nhiều kích thước màn hình khác nhau và áp dụng SCSS để tổ chức CSS chuyên nghiệp hơn.

---

# Cấu trúc thư mục

```text
PBT_05/
├── answers.md
├── responsive.html
├── responsive.css
├── animations.html
├── animations.css
├── scss/
│   ├── _variables.scss
│   ├── _mixins.scss
│   ├── _components.scss
│   ├── _layout.scss
│   └── style.scss
├── css/
│   └── style.css
├── screenshots/
│   ├── mobile_375px.png
│   ├── tablet_768px.png
│   ├── desktop_1200px.png
│   ├── animation_card_hover.png
│   ├── animation_button.png
│   ├── animation_spinner.png
│   ├── website_analysis_mobile.png
│   ├── website_analysis_tablet.png
│   ├── website_analysis_desktop.png
│   ├── media_query_1.png
│   └── media_query_2.png
└── videos/
    └── PBT05_HoTen_MSSV.mp4
```

---

# Nội dung thực hiện

## Phần A - Kiểm tra đọc hiểu

### A1 - Viewport & Mobile-First

Đã nghiên cứu:

* Thẻ meta viewport chuẩn
* Cơ chế hiển thị trên thiết bị di động
* Mobile-First vs Desktop-First
* Ưu điểm của Mobile-First Design

---

### A2 - Breakpoints

Đã tìm hiểu:

| Breakpoint | Thiết bị     |
| ---------- | ------------ |
| < 576px    | Mobile       |
| ≥ 576px    | Mobile lớn   |
| ≥ 768px    | Tablet       |
| ≥ 992px    | Laptop       |
| ≥ 1200px   | Desktop      |
| ≥ 1400px   | Màn hình lớn |

---

### A3 - Media Queries

Đã phân tích cách CSS thay đổi theo:

```css
@media (min-width: ...)
```

và dự đoán kích thước container ở nhiều độ rộng màn hình khác nhau.

---

### A4 - SCSS Basics

Đã tìm hiểu:

* Variables
* Nesting
* Mixins
* Extend / Inheritance
* Quy trình biên dịch SCSS → CSS

---

# Phần B - Thực hành

## Bài B1 - Responsive Product Page

Files:

```text
responsive.html
responsive.css
```

### Mobile (<768px)

* Hamburger Menu
* Product Grid 1 cột
* Sidebar ẩn

### Tablet (768px - 1023px)

* Menu ngang
* Product Grid 2 cột
* Filter hiển thị dạng ngang

### Desktop (≥1024px)

* Sidebar trái
* Product Grid 4 cột
* Ads Bar bên phải

### Kỹ thuật sử dụng

```css
@media (min-width: 768px)
@media (min-width: 1024px)
```

```css
max-width: 100%;
height: auto;
```

---

## Bài B2 - CSS Animations & Transitions

Files:

```text
animations.html
animations.css
```

### Hiệu ứng đã thực hiện

#### 1. Product Card Hover

```css
transform: translateY(-8px);
transition: all 0.3s ease;
```

#### 2. Button Hover

```css
transform: scale(1.05);
```

#### 3. Image Zoom

```css
transform: scale(1.1);
```

#### 4. Loading Spinner

```css
@keyframes spin
```

#### 5. Fade In Animation

```css
@keyframes fadeIn
```

---

## Bài B3 - SCSS Refactor

### Cấu trúc SCSS

```text
scss/
├── _variables.scss
├── _mixins.scss
├── _components.scss
├── _layout.scss
└── style.scss
```

### Variables

Ví dụ:

```scss
$primary-color: #0d6efd;
$secondary-color: #6c757d;

$spacing-sm: 8px;
$spacing-md: 16px;
$spacing-lg: 32px;

$breakpoint-tablet: 768px;
$breakpoint-desktop: 1024px;
```

### Mixins

```scss
@mixin flex-center
@mixin card-shadow
@mixin respond-to($breakpoint)
```

### Nesting

```scss
.card {
    .card-title {
    }

    &:hover {
    }

    &.featured {
    }
}
```

### Compile SCSS

Lệnh sử dụng:

```bash
sass scss/style.scss css/style.css
```

Hoặc:

```bash
sass --watch scss/style.scss:css/style.css
```

---

# Phần C - Phân tích

## C1 - Phân tích Responsive Website

Website được chọn:

* [Shopee/Tiki/VNExpress/YouTube]

Đã phân tích trên:

* Mobile (375px)
* Tablet (768px)
* Desktop (1440px)

Nội dung đánh giá:

* Navigation
* Grid Layout
* Hidden Elements
* Font Scaling
* Media Queries

---

## C2 - Responsive Strategy

Đã thiết kế wireframe cho:

* Mobile
* Tablet
* Desktop

Áp dụng:

* CSS Grid
* Media Queries
* Mobile-First Approach

---

# Screenshots

Thư mục:

```text
screenshots/
```

Bao gồm:

| Ảnh                          | Nội dung            |
| ---------------------------- | ------------------- |
| mobile_375px.png             | Responsive Mobile   |
| tablet_768px.png             | Responsive Tablet   |
| desktop_1200px.png           | Responsive Desktop  |
| animation_card_hover.png     | Hover Card          |
| animation_button.png         | Hover Button        |
| animation_spinner.png        | Loading Spinner     |
| website_analysis_mobile.png  | Phân tích Mobile    |
| website_analysis_tablet.png  | Phân tích Tablet    |
| website_analysis_desktop.png | Phân tích Desktop   |
| media_query_1.png            | Media Query thực tế |
| media_query_2.png            | Media Query thực tế |

---

# Kiểm thử Responsive

## Device Testing

Đã kiểm tra bằng:

* Chrome DevTools
* Device Toolbar

Các thiết bị:

* iPhone SE (375px)
* iPad (768px)
* Desktop (1200px+)

---

## Responsive Breakpoints

| Width          | Layout |
| -------------- | ------ |
| < 768px        | 1 cột  |
| 768px - 1023px | 2 cột  |
| ≥ 1024px       | 4 cột  |

---

# Video thực hành

Tên file:

```text
videos/PBT05_HoTen_MSSV.mp4
```

Hoặc:

* YouTube (Unlisted): [Điền link]
* Google Drive: [Điền link]

Nội dung video:

* Mobile-First CSS
* Media Queries
* Product Grid
* Responsive Testing
* DevTools Device Toolbar

---

# Tiến độ hoàn thành

| Nội dung  | Trạng thái |
| --------- | ---------- |
| A1        | ✅          |
| A2        | ✅          |
| A3        | ✅          |
| A4        | ✅          |
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
git commit -m "PBT_05: Hoàn thành Responsive Product Page"
git commit -m "PBT_05: Hoàn thành CSS Animations"
git commit -m "PBT_05: Refactor SCSS và compile CSS"
git commit -m "PBT_05: Hoàn thành answers và screenshots"
```

---

# Kiến thức đạt được

Sau khi hoàn thành PBT_05, tôi đã:

* Hiểu nguyên lý Responsive Web Design.
* Áp dụng Mobile-First Approach vào dự án thực tế.
* Thành thạo Media Queries và Breakpoints.
* Xây dựng giao diện hoạt động tốt trên Mobile, Tablet và Desktop.
* Sử dụng CSS Transitions và Animations để cải thiện trải nghiệm người dùng.
* Tổ chức CSS chuyên nghiệp bằng SCSS.
* Sử dụng Variables, Nesting, Mixins và Partials để tái sử dụng mã nguồn hiệu quả.
* Biên dịch SCSS thành CSS phục vụ trình duyệt.

https://youtu.be/jtvnzA8xI0g