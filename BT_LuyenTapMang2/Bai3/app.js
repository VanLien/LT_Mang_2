let arr=[];
let app;
let x=0;
function begin(type) {
    if (type===1){
        arr[x]=parseFloat(document.getElementById("element").value);
        console.log(arr);
        x++;
        document.getElementById("element").value="";
    }

}