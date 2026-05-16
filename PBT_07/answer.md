Câu A1 (5đ) — var / let / const
// Đoạn 1
console.log(x);
var x = 5;
undefined
Giải thích

var được hoisting (kéo lên đầu phạm vi).

// Đoạn 2
console.log(y);
let y = 10;
JavaScript hiểu gần như:

var x;
console.log(x);
x = 5;

Nên biến tồn tại nhưng chưa có giá trị → undefined

// Đoạn 3
const z = 15;
z = 20;
console.log(z);
Dự đoán output
TypeError

Ví dụ:

TypeError: Assignment to constant variable.
Giải thích

const không cho phép gán lại giá trị sau khi khởi tạo.

let y = 10;

được chạy thì không được phép truy cập y.

// Đoạn 4
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
Dự đoán output
[1, 2, 3, 4]
Giải thích

Nhiều người nghĩ const là “không đổi được gì”, nhưng thật ra:

const chỉ không cho phép gán lại biến
object/array bên trong vẫn có thể thay đổi

Ví dụ sai:

arr = [5, 6]; // lỗi

Nhưng:

arr.push(4); // hợp lệ

// Đoạn 5
let a = 1;
{
    let a = 2;
    console.log("Trong block:", a);
}
console.log("Ngoài block:", a);
let a = 1;
{
    let a = 2;
    console.log("Trong block:", a);
}
console.log("Ngoài block:", a);
Dự đoán output
Trong block: 2
Ngoài block: 1
Giải thích

let có block scope.

Biến a bên trong {} là biến khác với a bên ngoài.
Câu A2 (5đ) — Data Types & Coercion
Không chạy code, dự đoán kết quả:

console.log(typeof null);              // "object"
console.log(typeof undefined);         // "undefined"
console.log(typeof NaN);              //"number"
console.log("5" + 3);                 // "53"
console.log("5" - 3);                 // 2
console.log("5" * "3");              // 15
console.log(true + true);            // 2
console.log([] + []);                // ""
console.log([] + {});                // "[object Object]"
console.log({} + []);                // 0
Câu A3 (5đ) — So sánh == vs ===
Dự đoán true hay false:

console.log(5 == "5");                // true
console.log(5 === "5");               // false
console.log(null == undefined);       // true
console.log(null === undefined);      // false
console.log(NaN == NaN);             // flase
console.log(0 == false);             // true
console.log(0 === false);            // false
console.log("" == false);            // true