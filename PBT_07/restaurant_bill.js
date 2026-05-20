// ===============================
// Restaurant Bill Calculator
// ===============================

const orders = [
    { name: "Phở bò", price: 65000, quantity: 2 },
    { name: "Trà đá", price: 5000, quantity: 3 },
    { name: "Bún chả", price: 55000, quantity: 1 }
];

// Config
const VAT_RATE = 0.08;
const TIP_RATE = 0.05;
const useTip = true;

// Ví dụ: Wednesday
const today = "Wednesday";


// ===============================
// Helper Functions
// ===============================

// Format tiền Việt Nam
function formatMoney(number) {
    return number.toLocaleString("vi-VN") + "đ";
}

// Repeat ký tự
function repeat(char, length) {
    return char.repeat(length);
}


// ===============================
// Tính tổng tiền món ăn
// ===============================

let subtotal = 0;

orders.forEach(item => {
    subtotal += item.price * item.quantity;
});


// ===============================
// Tính giảm giá
// ===============================

let discountRate = 0;

// Giảm theo tổng hóa đơn
if (subtotal > 1000000) {
    discountRate += 0.15;
}
else if (subtotal > 500000) {
    discountRate += 0.10;
}

// Thứ 3 giảm thêm 5%
if (today === "Wednesday") {
    discountRate += 0.05;
}

const discountAmount = subtotal * discountRate;


// ===============================
// Sau giảm giá
// ===============================

const afterDiscount = subtotal - discountAmount;


// ===============================
// VAT + Tip
// ===============================

const vatAmount = afterDiscount * VAT_RATE;

const tipAmount = useTip
    ? afterDiscount * TIP_RATE
    : 0;


// ===============================
// Thành tiền
// ===============================

const finalTotal =
    afterDiscount +
    vatAmount +
    tipAmount;


// ===============================
// In hóa đơn
// ===============================

console.log("╔══════════════════════════════════════════════╗");
console.log("║             HÓA ĐƠN NHÀ HÀNG                ║");
console.log("╠══════════════════════════════════════════════╣");

// In danh sách món
orders.forEach((item, index) => {

    const total = item.price * item.quantity;

    const line =
        `${index + 1}. ${item.name}`.padEnd(18) +
        `x${item.quantity} `.padEnd(6) +
        `@${item.price / 1000}k `.padEnd(10) +
        `= ${(total / 1000)}k`;

    console.log(`║ ${line.padEnd(44)} ║`);
});

console.log("╠══════════════════════════════════════════════╣");

console.log(
    `║ Tổng cộng:`.padEnd(30) +
    `${formatMoney(subtotal).padStart(16)} ║`
);

console.log(
    `║ Giảm giá (${discountRate * 100}%):`.padEnd(30) +
    `${formatMoney(discountAmount).padStart(16)} ║`
);

console.log(
    `║ VAT (8%):`.padEnd(30) +
    `${formatMoney(vatAmount).padStart(16)} ║`
);

console.log(
    `║ Tip (5%):`.padEnd(30) +
    `${formatMoney(tipAmount).padStart(16)} ║`
);

console.log("╠══════════════════════════════════════════════╣");

console.log(
    `║ THANH TOÁN:`.padEnd(30) +
    `${formatMoney(finalTotal).padStart(16)} ║`
);

console.log("╚══════════════════════════════════════════════╝");