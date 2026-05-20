
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