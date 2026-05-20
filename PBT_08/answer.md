
Câu A1 (5đ) — Function Declaration vs Expression vs Arrow
function tinhThueBaoHiem1(luong) {
    let thue = luong > 11000000 ? luong * 0.1 : 0;
    
    return {
        thue: thue,
        thuc_nhan: luong - thue
    };
}

console.log(tinhThueBaoHiem1(15000000));


// 2. Function Expression
const tinhThueBaoHiem2 = function(luong) {
    let thue = luong > 11000000 ? luong * 0.1 : 0;

    return {
        thue: thue,
        thuc_nhan: luong - thue
    };
};

console.log(tinhThueBaoHiem2(10000000));


// 3. Arrow Function
const tinhThueBaoHiem3 = (luong) => {
    let thue = luong > 11000000 ? luong * 0.1 : 0;

    return {
        thue: thue,
        thuc_nhan: luong - thue
    };
};

console.log(tinhThueBaoHiem3(20000000));
Câu A2 (5đ) — Scope & Closure
// Đoạn 1:
function counter() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}
const c = counter();
console.log(c.increment());  // 1
console.log(c.increment());  // 2
console.log(c.increment());  // 3
console.log(c.decrement());  // 2
console.log(c.getCount());   // 2

// Đoạn 2:
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var:", i), 100);
}
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let:", j), 200);
}
// Output sau 200ms: 1 2 3
Câu A3 (5đ) — Array Methods
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Lấy các số chẵn
const evenNums = nums.filter(n => n % 2 === 0);

// 2. Nhân mỗi số với 3
const tripleNums = nums.map(n => n * 3);

// 3. Tính tổng tất cả
const sum = nums.reduce((total, n) => total + n, 0);

// 4. Tìm số đầu tiên > 7
const firstGreaterThan7 = nums.find(n => n > 7);

// 5. Kiểm tra CÓ số > 10 không
const hasGreaterThan10 = nums.some(n => n > 10);

// 6. Kiểm tra TẤT CẢ đều > 0
const allGreaterThan0 = nums.every(n => n > 0);

// 7. Tạo mảng "Số X là [chẵn/lẻ]"
const oddEvenText = nums.map(
  n => `Số ${n} là ${n % 2 === 0 ? "chẵn" : "lẻ"}`
);

// 8. Đảo ngược mảng (không mutate gốc)
const reversedNums = [...nums].reverse();
Câu A4 (5đ) — Object Destructuring & Spread
const product = {
    name: "iPhone 16",
    price: 25990000,
    specs: { ram: 8, storage: 256, color: "Titan" }
};

// Destructuring
const { name, price, specs: { ram, color } } = product;
console.log(name, price, ram, color);  // iPhone 16 25990000 8 Titan
console.log(specs);                     // ReferenceError

// Spread
const updated = { ...product, price: 23990000, sale: true };
console.log(updated.price);            // 23990000
console.log(updated.sale);             // true
console.log(product.price);            // ???   25990000

// Spread gotcha
const copy = { ...product };
copy.specs.ram = 16;
console.log(product.specs.ram)


Câu C2 (10đ) — Thiết kế API
const miniArray = {
    map(arr, fn) {
        const result = [];

        for (let i = 0; i < arr.length; i++) {
            result[result.length] = fn(arr[i], i, arr);
        }

        return result;
    },

    filter(arr, fn) {
        const result = [];

        for (let i = 0; i < arr.length; i++) {
            if (fn(arr[i], i, arr)) {
                result[result.length] = arr[i];
            }
        }

        return result;
    },

    reduce(arr, fn, initialValue) {
        let accumulator;
        let startIndex;

        // Có initialValue
        if (initialValue !== undefined) {
            accumulator = initialValue;
            startIndex = 0;
        } 
        // Không có initialValue
        else {
            accumulator = arr[0];
            startIndex = 1;
        }

        for (let i = startIndex; i < arr.length; i++) {
            accumulator = fn(accumulator, arr[i], i, arr);
        }

        return accumulator;
    }
};

// Test
console.log(miniArray.map([1,2,3], x => x * 2));
// → [2,4,6]

console.log(miniArray.filter([1,2,3,4], x => x > 2));
// → [3,4]

console.log(
    miniArray.reduce([1,2,3,4], (sum, x) => sum + x, 0)
);
// → 10