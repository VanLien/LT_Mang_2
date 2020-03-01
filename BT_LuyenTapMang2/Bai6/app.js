    let arr=[];
    let count=0;
    function addtxt() {
        arr[count]=document.getElementById("input").value;
        count++;
        document.getElementById("input").value="";
    }
    function replace() {
        let str="";
        for (let i=0;i<arr.length;i++){
            str+=arr[i];
        }
        document.getElementById("result").innerHTML=str+"<br/>"
            +" Thay Doi:"+str.replace(/-/g,'_');
    }