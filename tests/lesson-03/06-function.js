
//1.
function multipy(a, b) {
    let result = a * b;
    return result;
}
console.log(multipy(2, 3));

//2.

function findMin(a, b, c) {
    let min = a;
    if (b < min) {
        min = b;
    }
    if (c < min) {
        min = c;
    }
    return min;
}

console.log(`Gía trị nhỏ nhất là: ${findMin(2, 3, 1)}`);
console.log(`Gía trị nhỏ nhất là: ${findMin(5, 3, 1)}`);

//3.
function getTopStudents(students, threshold) {

    //mảng chứa các stu thỏa
    const topStudents = [];

    //ktra dữ liệu của các học sinh
    for (let i = 0; i < students.length; i++) {
        //điều kiện nếu điểm số của học sinh i lớn hơn hoặc bằng threshold thì nó là top students
        if (students[i].score >= threshold) {
            topStudents.push(students[i].name);
        } else {
            continue;
        }
    }
    return topStudents;
}

const studentsList = [
    { name: "Trường", score: 9.3 },
    { name: "Bình", score: 6.0 },
    { name: "Châu", score: 9.0 },
    { name: "Đào", score: 7.5 },
    { name: "Hương", score: 8.0 }
];

const result = getTopStudents(studentsList, 8.5);
console.log("Học sinh đạt top yêu cầu là:", result);


//4.
function calculateInterest(principal, rate, years) {
    let total = principal + principal * rate * years / 100;
    return total;
}

console.log(`Tổng số tiền sau kỳ hạn: ${calculateInterest(10000000, 5, 3)}`);
