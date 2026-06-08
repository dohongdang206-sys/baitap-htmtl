# 📋 PHIẾU BÀI TẬP 10

# ASYNC JAVASCRIPT & API INTEGRATION

## 👨‍🎓 Thông tin sinh viên

* Họ và tên: ......................................
* MSSV: ............................................
* Lớp: ..............................................
* Môn học: Lập trình Web
* Phiếu bài tập: PBT10

---

## 📖 Giới thiệu

Bài tập này thực hành các kiến thức về:

* Asynchronous JavaScript
* Promise, Async/Await
* Fetch API
* REST API Integration
* Error Handling
* Local Storage
* Infinite Scroll
* Multi-API Dashboard

Tất cả ứng dụng được xây dựng bằng **HTML, CSS và Vanilla JavaScript**.

---

# 📂 Cấu trúc thư mục

```text
PBT10/
│
├── answers.md
│
├── weather_app/
│   ├── index.html
│   ├── style.css
│   ├── app.js
│   └── README.md
│
├── user_directory/
│   ├── index.html
│   ├── style.css
│   ├── app.js
│   └── README.md
│
├── gallery/
│   ├── index.html
│   ├── style.css
│   ├── app.js
│   └── README.md
│
├── dashboard/
│   ├── index.html
│   ├── style.css
│   ├── app.js
│   └── README.md
│
├── screenshots/
│
└── videos/
    └── PBT10_HoTen_MSSV.mp4
```

---

# 🌦️ Bài B1 — Weather App

## API sử dụng

### Open-Meteo

```text
https://api.open-meteo.com/v1/forecast
```

hoặc

### wttr.in

```text
https://wttr.in/Hanoi?format=j1
```

## Chức năng

* Tìm kiếm thời tiết theo thành phố
* Hiển thị:

  * Nhiệt độ
  * Độ ẩm
  * Mô tả thời tiết
  * Biểu tượng thời tiết
* Loading State
* Success State
* Error State
* LocalStorage lưu 5 thành phố gần nhất
* Click lịch sử để tìm kiếm lại

## Cách chạy

```bash
Mở weather_app/index.html bằng trình duyệt
```

---

# 👥 Bài B2 — User Directory

## API sử dụng

JSONPlaceholder

```text
https://jsonplaceholder.typicode.com/users
```

## Chức năng

### READ

* Tải danh sách users từ API

### CREATE

* Thêm user mới

### UPDATE

* Chỉnh sửa user

### DELETE

* Xóa user

### SEARCH

* Tìm kiếm theo tên hoặc email

### EXTRA

* Loading Skeleton
* Error Handling
* Toast Notification

## Cách chạy

```bash
Mở user_directory/index.html bằng trình duyệt
```

---

# 🖼️ Bài B3 — Infinite Scroll Gallery

## API sử dụng

Lorem Picsum

```text
https://picsum.photos/v2/list?page=1&limit=20
```

hoặc

JSONPlaceholder Photos

```text
https://jsonplaceholder.typicode.com/photos
```

## Chức năng

* Tải 20 ảnh ban đầu
* Infinite Scroll
* Intersection Observer
* Lazy Loading Images
* Lightbox Modal
* Responsive Grid

## Cách chạy

```bash
Mở gallery/index.html bằng trình duyệt
```

---

# 📊 Bài B4 — Multi-API Dashboard

## APIs sử dụng

### JSONPlaceholder

```text
https://jsonplaceholder.typicode.com/posts
```

### Open-Meteo

```text
https://api.open-meteo.com/
```

### Random User

```text
https://randomuser.me/api/
```

## Chức năng

* Promise.allSettled()
* Fetch nhiều API song song
* Loading State
* Error State
* Widget riêng cho từng API
* Refresh All
* Hiển thị thời gian tải dữ liệu

## Cách chạy

```bash
Mở dashboard/index.html bằng trình duyệt
```

---

# 🧠 Kiến thức áp dụng

* Event Loop
* Microtask Queue
* Macrotask Queue
* Promise
* Async/Await
* Fetch API
* REST API
* Error Handling
* Local Storage
* DOM Manipulation
* IntersectionObserver
* Promise.all()
* Promise.allSettled()
* Promise.race()

---

# 📸 Screenshots

Thư mục `screenshots/` bao gồm:

* Weather App (Loading / Success / Error)
* User Directory (CRUD)
* Gallery Infinite Scroll
* Dashboard Multi API

---

# 🎬 Video Demo

Video OBS:

```text
videos/PBT10_HoTen_MSSV.mp4
```

Nội dung:

* Giải thích Async/Await
* Gọi Fetch API
* Loading State
* Error Handling
* Render dữ liệu lên DOM

---

# 🚀 Cách chạy toàn bộ project

### Cách 1

Mở trực tiếp file:

```bash
index.html
```

### Cách 2 (khuyến nghị)

Dùng VS Code + Live Server

```bash
Right Click → Open with Live Server
```

---

# ✅ Hoàn thành yêu cầu

* [x] Weather App
* [x] User Directory CRUD
* [x] Infinite Scroll Gallery
* [x] Multi API Dashboard
* [x] Async/Await
* [x] Fetch API
* [x] Error Handling
* [x] Screenshots
* [x] Video Demo
* [x] Git Commits
