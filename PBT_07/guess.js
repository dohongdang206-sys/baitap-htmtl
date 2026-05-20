// Random số từ 1 -> 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;
const maxAttempts = 7;

// Lưu các số đã đoán
const guessedNumbers = [];

while (attempts < maxAttempts) {

    let input = prompt("Nhập số từ 1 đến 100:");

    // Nếu bấm Cancel
    if (input === null) {
        alert("Bạn đã thoát game!");
        break;
    }

    let guess = Number(input);

    // Validate input
    if (
        input.trim() === "" ||
        isNaN(guess) ||
        guess < 1 ||
        guess > 100
    ) {
        alert("Vui lòng nhập số hợp lệ từ 1 đến 100!");
        continue;
    }

    // Kiểm tra đoán trùng
    if (guessedNumbers.includes(guess)) {
        alert("Bạn đã đoán số này rồi!");
        continue;
    }

    guessedNumbers.push(guess);
    attempts++;

    // Kiểm tra kết quả
    if (guess === secretNumber) {
        alert(`Đúng rồi! Bạn đoán đúng sau ${attempts} lần!`);
        break;
    } else if (guess < secretNumber) {
        alert("Cao hơn!");
    } else {
        alert("Thấp hơn!");
    }

    // Hết lượt
    if (attempts === maxAttempts) {
        alert(`Bạn đã thua! Đáp án là ${secretNumber}`);
    }
}