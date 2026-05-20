// 1. pipe() — Nối chuỗi functions
function pipe(...fns) {
    return function(value) {
        return fns.reduce((result, fn) => fn(result), value);
    };
}

const process = pipe(
    x => x * 2,        // 5 → 10
    x => x + 10,       // 10 → 20
    x => x.toString(), // 20 → "20"
    x => "Kết quả: " + x
);

console.log(process(5)); 
// → "Kết quả: 20"
function memoize(fn) {
    const cache = {};

    return function(arg) {
        if (cache[arg] !== undefined) {
            console.log("Lấy từ cache");
            return cache[arg];
        }

        const result = fn(arg);
        cache[arg] = result;

        return result;
    };
}

const expensiveCalc = memoize((n) => {
    console.log("Đang tính...");
    
    let result = 0;
    for (let i = 0; i < n; i++) {
        result += i;
    }

    return result;
});

console.log(expensiveCalc(1000000));
console.log(expensiveCalc(1000000));
function debounce(fn, delay) {
    let timer;

    return function(...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

const search = debounce((query) => {
    console.log("Searching:", query);
}, 500);
async function retry(fn, maxAttempts = 3) {
    let attempts = 0;

    while (attempts < maxAttempts) {
        try {
            return await fn();
        } 
        catch (error) {
            attempts++;

            console.log(`Thử lần ${attempts} thất bại`);

            if (attempts >= maxAttempts) {
                throw error;
            }
        }
    }
}