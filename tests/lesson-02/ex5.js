//loop in từ 1-100 (i bắt đầu là 1 đi tới 100 là bé hơn hoặc bằng 100, giá trị i tăng dần đều sau mỗi vòng lặp nên là i++)

for(i=1; i<=100;i++){
    if(i%2===0){ //nếu vòng lặp i chia hết cho 2 thì i là số chẵn
        console.log("Số " +i + " là số chẵn")
    }else{ //ngược lại thì nếu vòng lặp i không chia hết cho 2 thì i là số lẻ
        console.log("Số " + i + " là số lẻ");
    }
}