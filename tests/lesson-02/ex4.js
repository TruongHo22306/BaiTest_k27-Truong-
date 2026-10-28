const height= 167;

//lấy phần lẻ từ chiều cao của bản thân
let odd = height % 100;

//set rule cho cân nặng, mức cân tối đa và tối thiểu

//cân nặng lý tưởng
let weight = (odd * 9)/10;

//cân nặng tối đa
let maxWeight = odd;

//cân nặng tối thiểu
let minWeight = (odd*8)/10;

//chỉ áp dụng cho người có chiều cao trên 100cm
if(height>100){
    console.log("Cân nặng lý tưởng của bạn là: "+weight+ "kg;"+ " Cân nặng tối đa của bạn là: "+maxWeight+ "kg;"+ " Và cân nặng tối thiểu của bạn là: "+minWeight+ "kg");
}
