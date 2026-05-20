// ===============================
// Version 1: Classic FizzBuzz
// ===============================

console.log("=== Classic FizzBuzz ===");

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}


// ===============================
// Version 2: Custom FizzBuzz
// ===============================

function customFizzBuzz(n, rules) {

    for (let i = 1; i <= n; i++) {

        let result = "";

        // Duyệt qua từng rule
        for (const rule of rules) {

            if (i % rule.divisor === 0) {
                result += rule.word;
            }
        }

        // Nếu không có word nào
        console.log(result || i);
    }
}


// ===============================
// Test
// ===============================

console.log("\n=== Custom FizzBuzz ===");

customFizzBuzz(30, [
    { divisor: 3, word: "Fizz" },
    { divisor: 5, word: "Buzz" },
    { divisor: 7, word: "Jazz" }
]);


// Ví dụ:
// 15  -> FizzBuzz
// 21  -> FizzJazz
// 35  -> BuzzJazz
// 105 -> FizzBuzzJazz