## Câu A1 (5đ) — Sync vs Async
Thứ tự output sẽ là:

1 - Start
4 - End
3 - Promise
6 - Promise 2
2 - Timeout 0ms
7 - Nested timeout
5 - Timeout 100ms
Giải thích từng bước

Code:

console.log("1 - Start");

setTimeout(() => console.log("2 - Timeout 0ms"), 0);

Promise.resolve().then(() => console.log("3 - Promise"));

console.log("4 - End");

setTimeout(() => console.log("5 - Timeout 100ms"), 100);

Promise.resolve().then(() => {
    console.log("6 - Promise 2");
    setTimeout(() => console.log("7 - Nested timeout"), 0);
});
## Câu A2 (5đ) — Fetch API
1. await fetch(...)
const response = await fetch("https://api.example.com/data");
2. response.ok
if (!response.ok)

response.ok là boolean.
fetch() KHÔNG tự throw lỗi với HTTP errors.
3. response.json()
const data = await response.json()
Browser phải:

đọc raw response body
convert text
parse JSON
tạo object JS

Nên .json() trả về:
4. try...catch
try {
   ...
} catch (error) {
   ...
}
Catch được lỗi gì?
 1. Network errors

Ví dụ:

mất mạng
DNS lỗi
server down
CORS fail
await fetch(...)

sẽ throw error.

Catch được.

2. JSON parse errors

Ví dụ server trả:

hello world

nhưng code gọi:

response.json()

JSON invalid → parse fail.

Catch được.
 3. Error do mình tự throw
throw new Error(`HTTP ${response.status}`);

Catch được.

404 có tự vào catch không?
KHÔNG

Đây là điểm rất nhiều người nhầm.

Ví dụ:

fetch("/not-found")

Server trả:

404 Not Found

thì:

fetch SUCCESS về mặt network
Promise resolve bình thường
response.ok = false

=> KHÔNG tự vào catch.

Vì vậy mới cần đoạn này
if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
}

Để biến HTTP error thành real exception.

Flow đầy đủ
fetch()
↓
Promise<Response>
↓
await
↓
response object
↓
check response.ok
↓
response.json()
↓
Promise<data>
↓
await
↓
JS object
rs
# Câu A3 (5đ) — Promise States
                    Promise
                   |
               Pending
              /       \
             /         \
            v           v
      Fulfilled      Rejected
      (resolve)       (reject)
    Giải thích
Trạng thái	Ý nghĩa
Pending	    Promise đang chờ xử lý
Fulfilled	Thành công → gọi resolve()
Rejected	Thất bại → gọi reject()
2. Callback Hell là gì?
Khái niệm

Callback Hell là tình trạng callback lồng callback quá nhiều tầng, làm code:

khó đọc
khó debug
khó bảo trì
nhìn như “kim tự tháp”
3. Ví dụ Callback Hell 4 cấp
setTimeout(() => {
    console.log("Bước 1");

    setTimeout(() => {
        console.log("Bước 2");

        setTimeout(() => {
            console.log("Bước 3");

            setTimeout(() => {
                console.log("Bước 4");
            }, 1000);

        }, 1000);

    }, 1000);

}, 1000);
Kết quả
Bước 1
Bước 2
Bước 3
Bước 4

Nhưng code rất khó nhìn vì callback lồng nhau liên tục.
4. Refactor thành async/await
Bước 1: Tạo Promise delay
function delay(ms, message) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(message);
        }, ms);
    });
}
Bước 2: Dùng async/await
async function run() {
    console.log(await delay(1000, "Bước 1"));
    console.log(await delay(1000, "Bước 2"));
    console.log(await delay(1000, "Bước 3"));
    console.log(await delay(1000, "Bước 4"));
}

run();
5. So sánh
Callback Hell	Async/Await
Callback lồng nhau	Code thẳng hàng
Khó đọc	Dễ đọc
Khó xử lý lỗi	Dùng try...catch
Khó bảo trì	Dễ maintain
6. Ưu điểm của async/await
Viết async như synchronous
Dễ debug
Dễ đọc hơn Promise chain
Hạn chế callback hell

Ví dụ xử lý lỗi:

async function main() {
    try {
        const data = await fetch("/api/data");
        console.log("Success");
    } catch (error) {
        console.log("Error:", error);
    }
}