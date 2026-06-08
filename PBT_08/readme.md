# PHIẾU BÀI TẬP 08 – JAVASCRIPT FUNCTIONS, ARRAYS & OBJECTS

## Thông tin sinh viên

* Họ và tên: ........................................
* MSSV: .............................................
* Lớp: ..............................................
* Môn học: JavaScript Functions, Arrays & Objects
* Giảng viên: .......................................

---

# Giới thiệu

Bài tập này tập trung vào các kiến thức JavaScript nâng cao hơn:

* Function Declaration, Expression, Arrow Function
* Scope & Closure
* Arrays và Array Methods
* Objects, Destructuring, Spread Operator
* Higher-Order Functions
* Functional Programming cơ bản
* Module Pattern bằng Closure

---

# Cấu trúc thư mục

```text
PBT08/
│
├── answers.md
├── product_manager.js
├── shopping_cart.js
├── higher_order.js
│
├── screenshots/
│   ├── product_manager.png
│   ├── shopping_cart.png
│   └── higher_order.png
│
├── videos/
│   └── PBT08_HoTen_MaSV.mp4
│
└── README.md
```

---

# Hướng dẫn chạy chương trình

## 1. Product Manager

```bash
node product_manager.js
```

Chức năng:

* Lọc sản phẩm còn hàng
* Tìm kiếm theo từ khóa
* Lọc theo category và khoảng giá
* Sắp xếp giá tăng/giảm
* Tính tổng giá trị kho
* Tính rating trung bình

---

## 2. Shopping Cart

```bash
node shopping_cart.js
```

Chức năng:

* Thêm sản phẩm
* Xóa sản phẩm
* Cập nhật số lượng
* Tính tổng tiền
* Áp dụng mã giảm giá
* In giỏ hàng dạng bảng
* Closure bảo vệ dữ liệu private

---

## 3. Higher-Order Functions

```bash
node higher_order.js
```

Bao gồm:

### pipe()

Ghép nhiều hàm xử lý liên tiếp.

### memoize()

Lưu cache kết quả để tối ưu hiệu năng.

### debounce()

Chỉ thực hiện hàm sau khi người dùng ngừng thao tác một khoảng thời gian.

### retry()

Tự động thử lại khi tác vụ thất bại.

---

# Nội dung đã hoàn thành

## Phần A – Đọc hiểu

* [x] Function Declaration / Expression / Arrow Function
* [x] Scope & Closure
* [x] Array Methods
* [x] Object Destructuring & Spread

## Phần B – Thực hành

* [x] Product Manager
* [x] Shopping Cart bằng Closure
* [x] Higher-Order Functions

## Phần C – Suy luận

* [x] Refactor Code
* [x] Thiết kế miniArray API

## Phần D – Video

* [x] Giải thích Closure
* [x] Demo Shopping Cart
* [x] Sử dụng reduce()
* [x] So sánh Closure với biến global

---

# Kiến thức rút ra

## Closure

Closure cho phép hàm con ghi nhớ biến trong phạm vi của hàm cha ngay cả khi hàm cha đã thực thi xong.

Ví dụ:

```javascript
function counter() {
    let count = 0;

    return () => ++count;
}
```

---

## Array Methods

Các phương thức được sử dụng nhiều nhất:

```javascript
map()
filter()
reduce()
find()
sort()
some()
every()
```

Giúp code ngắn gọn và dễ đọc hơn so với vòng lặp truyền thống.

---

## Destructuring & Spread

Ví dụ:

```javascript
const { name, price } = product;

const updated = {
    ...product,
    sale: true
};
```

Giúp sao chép và cập nhật object dễ dàng hơn.

---

## Higher-Order Functions

Hàm có thể:

* Nhận hàm khác làm tham số
* Trả về một hàm khác

Đây là nền tảng của Functional Programming trong JavaScript.

---

# Lịch sử Commit

```text
Commit 1:
Hoàn thành answers.md và Product Manager

Commit 2:
Hoàn thành Shopping Cart bằng Closure

Commit 3:
Hoàn thành Higher-Order Functions

Commit 4:
Bổ sung screenshots, video và README
```

---

# Kết luận

Qua bài tập này, em đã thực hành:

* Viết hàm theo nhiều cách khác nhau
* Sử dụng Closure để đóng gói dữ liệu
* Thành thạo Array Methods
* Làm việc với Object hiện đại
* Xây dựng các Higher-Order Functions
* Áp dụng tư duy Functional Programming trong JavaScript


https://youtu.be/JH8MoTmW99U