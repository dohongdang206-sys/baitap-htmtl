Câu A1 (5đ) — DOM Tre
div#app
│
├── header
│   ├── h1
│   │   └── "Todo App"
│   │
│   └── nav
│       ├── a.active
│       │   └── "All"
│       ├── a
│       │   └── "Active"
│       └── a
│           └── "Completed"
│
└── main
    ├── form#todoForm
    │   ├── input#todoInput
    │   └── button
    │       └── "Add"
    │
    └── ul#todoList
        ├── li.todo-item
        │   └── "Learn HTML"
        │
        └── li.todo-item.completed
            └── "Learn CSS"
            1. Chọn thẻ <h1>document.querySelec("h1");
2. Chọn input trong form
document.querySelector("form input");
3. Chọn tất cả .todo-item
document.querySelectorAll(".todo-item");
4. Chọn link đang active
document.querySelector("a.active");
5. Chọn <li> đầu tiên trong #todoList
document.querySelector("#todoList li");
6. Chọn tất cả <a> bên trong <nav>
document.querySelectorAll("nav a"); 
Câu A2 (5đ) — innerHTML vs textContent
. innerHTML

Cho phép đọc/ghi HTML bên trong element.

<div id="box"></div>
document.getElementById("box").innerHTML =
    "<h1>Hello</h1>";

Kết quả:

<div id="box">
    <h1>Hello</h1>
</div>
Khi dùng
Khi muốn render HTML động
Tạo thẻ mới nhanh
Hiển thị template HTML

Ví dụ:

list.innerHTML += `<li>${name}</li>`;
innerText

Lấy text mà người dùng nhìn thấy.

Nó:

tôn trọng CSS
bỏ phần display: none
tính xuống dòng giống trình duyệt

Ví dụ:

<div id="demo">
    Hello
    <span style="display:none">Hidden</span>
</div>
console.log(demo.innerText);

Kết quả:

Hello
Khi dùng
Lấy text hiển thị thực tế
Copy text giống người dùng thấy
Kiểm tra UI
3. textContent

Lấy toàn bộ text thô trong node.

Không quan tâm CSS.

console.log(demo.textContent);

Kết quả:

Hello Hidden
Khi dùng
Hiệu năng tốt
Gán text an toàn
Tránh XSS
Xử lý dữ liệu text
Vấn đề bảo mật: XSS với innerHTML
Vì sao nguy hiểm?

innerHTML sẽ parse chuỗi thành HTML thật.

Nếu user nhập:

<img src=x onerror="alert('Hacked!')">

thì trình duyệt sẽ tạo thẻ <img>.

Do src=x lỗi nên onerror chạy:

alert("Hacked!")

=> Đây gọi là XSS (Cross-Site Scripting).

Ví dụ nguy hiểm
<input id="search">
<div id="result"></div>
const userInput =
    document.querySelector("#search").value;

document.querySelector("#result").innerHTML =
    userInput;

Nếu user nhập:

<script>alert("Hack")</script>

hoặc:

<img src=x onerror="alert('Hack')">

=> JavaScript độc hại sẽ chạy.

Cách sửa an toàn

Dùng textContent thay vì innerHTML.

const userInput =
    document.querySelector("#search").value;

document.querySelector("#result").textContent =
    userInput;
Câu A3 (5đ) — Event Bubbling
Trường hợp hiện tại

Code:

document.querySelector("#outer").addEventListener("click", () => {
    console.log("OUTER");
});

document.querySelector("#inner").addEventListener("click", () => {
    console.log("INNER");
});

document.querySelector("#btn").addEventListener("click", (e) => {
    console.log("BUTTON");
});
Khi click button

Thứ tự chạy:

Listener của button
Bubble lên inner
Bubble lên outer

Output:

BUTTON
INNER
OUTER
Nếu dùng e.stopPropagation()
document.querySelector("#btn").addEventListener("click", (e) => {
    console.log("BUTTON");
    e.stopPropagation();
});

stopPropagation() sẽ chặn sự kiện nổi bọt lên parent.

Nên:

button chạy
KHÔNG bubble lên inner
KHÔNG bubble lên outer

Output:

BUTTON