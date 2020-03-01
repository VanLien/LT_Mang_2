let arr=[];
let element="";
let x=0;
function add() {
    arr[x]=document.getElementById("input").value;
    console.log(arr);
    x++;
    document.getElementById("input").value="";
}
function check() {
    let count=0;
    for (let i=0;i<arr.length;i++){
        element+= arr[i];
    }
    count=element.length;
    document.getElementById("Result").innerHTML="Ký Tự Nhập Vào Là : "+ element+"<br/>"+"Số Ký Tự Trong Chuỗi Là : "+ count;
}