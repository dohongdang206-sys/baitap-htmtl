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