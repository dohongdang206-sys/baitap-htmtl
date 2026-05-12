
Câu A1 (10đ) — Grid System
kích thước	                < 768px 	768px - 991px	≥ 992px
Class hoạt động         	col-12	 col-md-6	        col-lg-3
Số box / hàng	            1 box	    2 box	        4 box
Số cột Bootstrap mỗi box	12	        6	            3   
1. Mobile < 768px

col-12

Mỗi box chiếm toàn bộ chiều ngang.

[ Box 1 ]

[ Box 2 ]

[ Box 3 ]

[ Box 4 ]
2. Tablet 768px - 991px

col-md-6

Mỗi box chiếm 6/12 cột.

[ Box 1 ][ Box 2 ]

[ Box 3 ][ Box 4 ]
. Desktop ≥ 992px

col-lg-3

Mỗi box chiếm 3/12 cột.

[ Box1 ][ Box2 ][ Box3 ][ Box4 ]\
Câu A2 (10đ) — Utilities & Components
Ý nghĩa từng class
d-none
→ display: none
→ ẩn element
d-md-block
→ từ breakpoint md (≥ 768px)
→ display: block
Element hiển thị khi nào?
Kích thước	Hiển thị?
< 768px	        Ẩn
≥ 768px	        Hiện
Cú pháp:

{property}{side}-{size}
property:
m = margin
p = padding
side:
t = top
b = bottom
s = start(left)
e = end(right)
x = left + right
y = top + bottom
Ví dụ 1 — mt-3
<div class="mt-3">

→ margin-top

margin-top=1rem
Ví dụ 2 — px-4
<div class="px-4">

→ padding trái + phải

padding-left=padding-right=1.5rem
Ví dụ 3 — mb-auto
<div class="mb-auto">

→ margin-bottom tự động

Thường dùng trong flexbox để đẩy phần tử.
Ví dụ 4 — py-2
<div class="py-2">

→ padding trên + dưới

padding-top=padding-bottom=0.5rem
Ví dụ 5 — ms-5
<div class="ms-5">

→ margin-left (start)

margin-left=3rem
3. Khác nhau giữa .container, .container-fluid, .container-md
Class	            Đặc điểm
.container	        Width cố định theo breakpoint
.container-fluid	Luôn full 100% màn hình
.container-md	    Full width dưới md, fixed width từ md trở lên