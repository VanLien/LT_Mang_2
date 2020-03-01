function begin() {
        let strA=prompt("strA:");
        let strB=prompt("strB:");
            if (strA!==strB){
                document.write("Hai Chuoi Khac Nhau");
            }else {
                let arrA=strA.split("");
                let arrB=strB.split("");
                let count=0;
                for (let i=0;i<arrA.length;i++){
                    if (arrA[i]===arrB[i]){
                        count++;
                    }
                }       if (count===arrA.length){
                    document.write("Hai Chuoi Giong Nhau");
                } else {
                    document.write("Hai Chuoi Khac Nhau");
                }
            }
}