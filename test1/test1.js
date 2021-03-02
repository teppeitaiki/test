console.log("Điểm tổng kết của Khánh trong năm học");
alert("Điểm tổng kết của Khánh trong năm học");
let math = Number(prompt("Điểm tổng kết toán: "));
let literature = Number(prompt("Điểm tổng kết văn: "));
let english = Number(prompt("Điểm tổng kết tiếng anh: "));
console.log(`Điểm toán: ${math}`);
console.log(`Điểm văn: ${literature}`);
console.log(`Điểm anh: ${english}`);
let point = (math + literature + english)/3
if (point < 4) {
    alert("Kém")
}else if (point < 6){
    alert("Trung bình")
}else if (point < 8){
    alert("Khá")
}else if (point >= 8){
    alert("Giỏi")    
}
