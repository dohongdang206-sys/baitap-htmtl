const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];

// =============================
// Biến thống kê
// =============================
let gioi = 0;
let kha = 0;
let trungBinh = 0;
let yeu = 0;

let highest = null;
let lowest = null;

let totalMath = 0;
let totalPhysics = 0;
let totalCS = 0;

let maleTotal = 0;
let femaleTotal = 0;

let maleCount = 0;
let femaleCount = 0;

// =============================
// In bảng kết quả
// =============================
console.log("| STT | Tên     | TB   | Xếp loại     |");
console.log("|-----|---------|------|---------------|");

for (let i = 0; i < students.length; i++) {
    let s = students[i];

    // Tính điểm trung bình
    let avg =
        s.math * 0.4 +
        s.physics * 0.3 +
        s.cs * 0.3;

    avg = Number(avg.toFixed(1));

    // Xếp loại
    let rank = "";

    if (avg >= 8.0) {
        rank = "Giỏi";
        gioi++;
    } else if (avg >= 6.5) {
        rank = "Khá";
        kha++;
    } else if (avg >= 5.0) {
        rank = "Trung bình";
        trungBinh++;
    } else {
        rank = "Yếu";
        yeu++;
    }

    // Lưu điểm TB vào object
    s.avg = avg;
    s.rank = rank;

    // Tìm cao nhất
    if (highest === null || avg > highest.avg) {
        highest = s;
    }

    // Tìm thấp nhất
    if (lowest === null || avg < lowest.avg) {
        lowest = s;
    }

    // Tổng từng môn
    totalMath += s.math;
    totalPhysics += s.physics;
    totalCS += s.cs;

    // TB theo giới tính
    if (s.gender === "M") {
        maleTotal += avg;
        maleCount++;
    } else {
        femaleTotal += avg;
        femaleCount++;
    }

    // In từng dòng
    console.log(
        `| ${i + 1}   | ${s.name.padEnd(7)} | ${avg.toFixed(1)} | ${rank.padEnd(13)} |`
    );
}

// =============================
// Thống kê xếp loại
// =============================
console.log("\n===== THỐNG KÊ XẾP LOẠI =====");
console.log("Giỏi:", gioi);
console.log("Khá:", kha);
console.log("Trung bình:", trungBinh);
console.log("Yếu:", yeu);

// =============================
// Cao nhất & thấp nhất
// =============================
console.log("\n===== ĐIỂM CAO NHẤT =====");
console.log(`${highest.name} - ${highest.avg}`);

console.log("\n===== ĐIỂM THẤP NHẤT =====");
console.log(`${lowest.name} - ${lowest.avg}`);

// =============================
// TB toàn lớp từng môn
// =============================
console.log("\n===== TB TOÀN LỚP =====");

console.log(
    "Math:",
    (totalMath / students.length).toFixed(2)
);

console.log(
    "Physics:",
    (totalPhysics / students.length).toFixed(2)
);

console.log(
    "CS:",
    (totalCS / students.length).toFixed(2)
);

// =============================
// Bonus: TB theo giới tính
// =============================
console.log("\n===== TB THEO GIỚI TÍNH =====");

console.log(
    "Nam:",
    (maleTotal / maleCount).toFixed(2)
);

console.log(
    "Nữ:",
    (femaleTotal / femaleCount).toFixed(2)
);