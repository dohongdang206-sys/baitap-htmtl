# PHIẾU BÀI TẬP 07 – JAVASCRIPT BASICS

## Thông tin sinh viên

* Họ và tên: ........................................
* MSSV: .............................................
* Lớp: ..............................................
* Môn học: JavaScript Basics
* Giảng viên: .......................................

---

## Mô tả bài tập

Bài tập thực hành về:

* Variables (`var`, `let`, `const`)
* Data Types
* Type Coercion
* Comparison Operators (`==`, `===`)
* Truthy & Falsy
* Template Literals
* Control Structures (`if`, `switch`, loops)
* Functions cơ bản
* Debugging JavaScript

---

## Cấu trúc thư mục

```text
PBT07/
│
├── answers.md
├── var_let_const.js
├── calculator.js
├── student_data.js
├── guess_number.html
├── guess.js
├── fizzbuzz.js
├── restaurant_bill.js
│
├── screenshots/
│   ├── var_let_const.png
│   ├── calculator.png
│   ├── student_data.png
│   └── fizzbuzz.png
│
├── videos/
│   └── PBT07_HoTen_MaSV.mp4
│
└── README.md
```

---

## Hướng dẫn chạy chương trình

### 1. Kiểm tra var / let / const

```bash
node var_let_const.js
```

### 2. Máy tính đơn giản

```bash
node calculator.js
```

### 3. Xử lý dữ liệu sinh viên

```bash
node student_data.js
```

### 4. FizzBuzz

```bash
node fizzbuzz.js
```

### 5. Hóa đơn nhà hàng

```bash
node restaurant_bill.js
```

### 6. Game đoán số

Mở file:

```text
guess_number.html
```

trên trình duyệt và chơi bằng hộp thoại `prompt()`.

---

## Nội dung đã hoàn thành

### Phần A – Đọc hiểu

* [x] A1 – var / let / const
* [x] A2 – Data Types & Coercion
* [x] A3 – So sánh == và ===
* [x] A4 – Truthy & Falsy
* [x] A5 – Template Literals

### Phần B – Thực hành

* [x] B1 – Calculator
* [x] B2 – Student Data Processing
* [x] B3 – Guess Number Game
* [x] B4 – FizzBuzz

### Phần C – Suy luận

* [x] C1 – Debug JavaScript
* [x] C2 – Restaurant Bill

### Phần D – Video

* [x] Video OBS hoàn thành
* [x] Demo Console
* [x] Demo Node.js
* [x] Giải thích Type Coercion
* [x] Giải thích var / let / const

---

## Một số kiến thức rút ra

1. Nên ưu tiên dùng `const`, sau đó đến `let`.
2. Hạn chế dùng `var` do vấn đề hoisting và function scope.
3. Luôn dùng `===` thay vì `==` để tránh ép kiểu ngoài ý muốn.
4. Hiểu rõ Type Coercion giúp tránh nhiều lỗi JavaScript.
5. Cần validate dữ liệu đầu vào trước khi xử lý.

---

## Lịch sử commit

```text
Commit 1: Hoàn thành phần A + var_let_const.js
Commit 2: Hoàn thành calculator.js và student_data.js
Commit 3: Hoàn thành guess game và fizzbuzz.js
Commit 4: Hoàn thành restaurant_bill.js + video + README
```

https://youtu.be/sUhwAS2FsIM?si=NF-OuXupA603TyrH