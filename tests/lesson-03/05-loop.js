//1.
let sum =0;
for (let i =1; i<=100; i++){
    sum = sum +i;
}
console.log(sum); //đặt ở ngoài loop để in đúng kết quả cuối cùng

//2. dùng 2 vòng lặp

//loop ngoài là để đi từ bảng 2 đến bảng 9 
for ( let n =2; n<=9;n++){
    //loop trong là để đi từ nhân 1 đến nhân 10
    for (let i =1; i<=10;i++){
        console.log(`${n} x ${i} = ${n*i}`); //in ra kết quả
    }
    console.log(""); //loop sẽ chạy từ ngoài vào trong
}



//3.
let arr=[]; //tạo biến arr
for(let i =1; i<=99; i++){
    if(i%2!=0){ //ddkien để ktra
        arr.push(i);
    }else{
        continue; //tiếp tục chạy
    }
}
console.log(arr);

//4.
for(let i =1;i<=10;i++){ //giá trị i tương ứng với số thứ tự người dùng
    console.log(`user${i}example.com,`);
}

//5.

//cấu trúc mảng doanh thu => arr obj
const doanhthu = [
    {"thang":1, "doanhthu":  1000},
    {"thang":2, "doanhthu":  2000},
    {"thang":3, "doanhthu":  3000},
    {"thang":4, "doanhthu":  4000}, 
    {"thang":5, "doanhthu":  5000},
    {"thang":6, "doanhthu":  6000},
    {"thang":7, "doanhthu":  7000},
    {"thang":8, "doanhthu":  8000},
    {"thang":9, "doanhthu":  9000},
    {"thang":10, "doanhthu":  10000},       
    {"thang":11, "doanhthu":  11000},
    {"thang":12, "doanhthu":  12000}
]

let tongDoanhThu = 0;
//duyệt qua từng phần tử (ở đây là từng tháng)
for(let i =0; i<doanhthu.length; i++){
    tongDoanhThu += doanhthu[i].doanhthu;
}
console.log(`Tong doanh thu cong ty sau 12 thang la ${tongDoanhThu}`); //in ra tổng doanh thu cả năm

