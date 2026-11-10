//1.
const car ={
    make: "Toyota",
    model: "Corolla",
    year: 2021
};

console.log("Năm sản xuất của xe là: "+ car.year) //in ra năm sản xuất xe

//2.
const person ={ //nested object (object lồng nhau)
    name: "Bill",

    address: {
        street: "189 Cô Giang",
        city: "Hồ Chí Minh",
        country: "Việt Nam"
    }
};

console.log(`Địa chỉ của ${person.name} là: ${person.address.street}`); //in ra địa chỉ của person

//3.
const student = {
    name: "Hùng",
    grades:{
        math: 9.5,
        english : 8.3
    }
};
console.log("Điểm toán của " + student["name"] + " là: " + student.grades["math"]);

//console.log(`Điểm toán của ${student.name} là: ${student.grades.math}`);

//4.
const settings = {
    volume : 10,
    brightness : 100
};

settings.volume =25; //thay đổi thuộc tính của obj
console.log(`Volume của settings là: ${settings.volume}`); 

//5.
const bike = {
    make: "Yamaha",
    model: "abc"
};
bike.color = "pink";
console.log(bike);

//6.
const employee = {
    name: "Bill",
    age : 22
};
delete employee.age; //xóa thuộc tính tuổi

//7. 

const school = {
    classA: ["An","Bình","Châu"],
    classB: ["Đào","Hương","Giang"]
}
console.log(`Học sinh lớp A bao gồm: ${school.classA}`); //in ra học sinh lớp A
console.log(`Học sinh lớp B bao gồm: ${school.classB}`); //in ra học sinh lớp B