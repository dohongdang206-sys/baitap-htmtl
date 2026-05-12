Câu A1 (5đ) — Viewport & Mobile-First
1. Thẻ <meta viewport> chuẩn
<meta name="viewport" content="width=device-width, initial-scale=1.0">
name="viewport"	Khai báo đang cấu hình vùng hiển thị (viewport) của thiết bị
width=device-width	Chiều rộng trang web sẽ bằng đúng chiều rộng màn hình thiết bị
initial-scale=1.0	Mức zoom ban đầu là 100%
Nếu KHÔNG có thẻ viewport:

iPhone sẽ giả lập trang web như một màn hình desktop rộng khoảng 980px
Trình duyệt tự thu nhỏ toàn bộ website để vừa màn hình điện thoại
Chữ và nút sẽ rất nhỏ
Layout responsive có thể hoạt động sai
Người dùng phải zoom mới đọc được


Câu A2 (5đ) — Breakpoints
xs	< 576px	Điện thoại nhỏ	1 cột
sm	≥ 576px	Điện thoại lớn	2 cột
md	≥ 768px	Tablet	2–3 cột
lg	≥ 992px	Laptop	4 cột
xl	≥ 1200px	Desktop lớn	4–5 cột
xxl	≥ 1400px	Màn hình rất lớn / TV	6 cột
Thiết bị	Số cột hợp lý	Lý do
Mobile nhỏ	1 cột	Dễ đọc, nút bấm lớn
Mobile lớn	2 cột	Tận dụng chiều ngang
Tablet	2–3 cột	Cân bằng kích thước card
Laptop	4 cột	Hiển thị nhiều sản phẩm
Desktop lớn	5–6 cột	Tối ưu không gian

Câu A3 (5đ) — Media Queries

375px (iPhone SE)	100%
600px	540px
800px	720px
1000px	960px
1400px	1140px

Câu A4 (5đ) — SCSS Basics

1. Variables (Biến trong SCSS)

SCSS cho phép tạo biến bằng ký hiệu $ để lưu màu sắc, font, kích thước… giúp tái sử dụng dễ dàng.
$primary-color: blue;
$text-color: white;

.button {
    background-color: $primary-color;
    color: $text-color;
}
CSS sau khi compile:
.button {
    background-color: blue;
    color: whit
}

2. Nesting (Viết CSS lồng nhau)

SCSS cho phép viết selector lồng nhau giống cấu trúc HTML

3. Mixins (@mixin, @include)

Mixin giống như “hàm CSS”, giúp tái sử dụng nhiều đoạn style.
@mixin flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.box {
    @include flex-center;
    height: 200px;
}
SS sau khi compile:
.box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;}

    Mixins có tham số:
@mixin button-style($bg-color) {
    background: $bg-color;
    padding: 10px 20px;
    border-radius: 5px;
}

.btn-primary {
    @include button-style(blue);
}

.btn-danger {
    @include button-style(red);
}
4. @extend / Inheritance (Kế thừa)

@extend cho phép một class kế thừa style từ class khác.

Ví dụ:
.button {
    padding: 10px 20px;
    border-radius: 5px;
    color: white;
}

.btn-primary {
    @extend .button;
    background: blue;
}

.btn-danger {
    @extend .button;
    background: red;
}
CSS sau khi compile:
.button,
.btn-primary,
.btn-danger {
    padding: 10px 20px;
    border-radius: 5px;
    color: white;
}

.btn-primary {
    background: blue;
}

.btn-danger {
    background: red;
}
1. Wireframe Responsive Strategy
Mobile (<768px)
Layout: 1 cột
Header: logo + nút gọi điện
Hero image full width
Grid món ăn: 1 cột hoặc 2 cột nhỏ
Form đặt bàn: đặt ngay dưới hero hoặc dưới gallery
Google Maps: full width phía dưới form
Footer cuối trang
Những gì bị ẩn?
Có thể ẩn:
menu navigation dài
text mô tả phụ
ảnh phụ trong hero
Chỉ giữ:
logo
hotline
CTA “Đặt bàn ngay”
Wireframe Mobile
-------------------
| LOGO   CALL BTN |
-------------------

|     HERO IMG    |
|  "Đặt bàn ngay" |
-------------------

|  FOOD 1         |
|  FOOD 2         |
|  FOOD 3         |
|  FOOD 4         |
|  FOOD 5         |
|  FOOD 6         |
-------------------

| FORM ĐẶT BÀN    |
| Ngày            |
| Giờ             |
| Số người        |
| Ghi chú         |
| [ĐẶT BÀN]       |
-------------------

| GOOGLE MAPS     |
-------------------

| FOOTER          |
-------------------
2. Tablet (768px – 1023px)
Layout: 2 cột linh hoạt
Header ngang đẹp hơn
Hero vẫn full width
Grid món ăn: 2 hoặc 3 cột
Form đặt bàn + Maps có thể:
xếp dọc
hoặc 2 block riêng
Grid ảnh

→ thường dùng 3 cột

Bản đồ nằm đâu?

→ dưới form hoặc cạnh form nếu đủ rộng

Wireframe Tablet
--------------------------------
| LOGO        PHONE / MENU     |
--------------------------------

|         HERO IMAGE           |
--------------------------------

| FOOD | FOOD | FOOD           |
| FOOD | FOOD | FOOD           |
--------------------------------

| FORM ĐẶT BÀN | GOOGLE MAPS   |
--------------------------------

| FOOTER                       |
--------------------------------
3. Desktop (≥1024px)
Layout: 2 hoặc 3 cột
Hero lớn toàn màn hình
Gallery: 3 cột
Form + maps nằm cạnh nhau
Có thể thêm sidebar
Layout bao nhiêu cột?

→ thường:

main content: 8 phần
sidebar/form: 4 phần
Sidebar có không?

→ Có thể có:

giờ mở cửa
khuyến mãi
social links
review
Wireframe Desktop
------------------------------------------------
| LOGO          NAVIGATION         HOTLINE     |
------------------------------------------------

|                HERO IMAGE                    |
------------------------------------------------

| FOOD | FOOD | FOOD                           |
| FOOD | FOOD | FOOD                           |
------------------------------------------------

| FORM ĐẶT BÀN      | GOOGLE MAPS             |
|                    SIDEBAR                  |
------------------------------------------------

| FOOTER                                        |
------------------------------------------------
4. CSS Skeleton (Mobile-First)
/* RESET */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* MOBILE FIRST */
body {
    font-family: Arial, sans-serif;
}

.container {
    width: 100%;
    padding: 16px;
}

/* HEADER */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
}

/* HERO */
.hero {
    height: 300px;
    background: #ddd;
}

/* FOOD GRID */
.food-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    margin: 24px 0;
}

.food-item {
    height: 200px;
    background: #ccc;
}

/* BOOKING SECTION */
.booking-section {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
}

.booking-form {
    background: #eee;
    padding: 20px;
}

.map {
    height: 300px;
    background: #bbb;
}

/* FOOTER */
.footer {
    padding: 20px;
    text-align: center;
    background: #222;
    color: white;
    margin-top: 24px;
}

/* TABLET */
@media (min-width: 768px) {

    .food-grid {
        grid-template-columns: repeat(3, 1fr);
    }

    .booking-section {
        grid-template-columns: 1fr 1fr;
    }

    .hero {
        height: 450px;
    }
}

/* DESKTOP */
@media (min-width: 1024px) {

    .container {
        max-width: 1200px;
        margin: auto;
    }

    .food-grid {
        grid-template-columns: repeat(3, 1fr);
    }

    .booking-section {
        grid-template-columns: 2fr 1fr;
    }

    .hero {
        height: 600px;
    }
}
5. Ý tưởng Responsive Strategy
Mobile-first
Thiết kế cho màn hình nhỏ trước
Sau đó mở rộng bằng media queries
Ưu tiên UX Mobile
Nút đặt bàn lớn
Hotline dễ bấm
Form ngắn gọn
Grid linh hoạt
Mobile: 1 cột
Tablet: 2–3 cột
Desktop: 3 cột lớn
Nội dung quan trọng luôn hiển thị
Logo
CTA đặt bàn
Số điện thoại
Form booking