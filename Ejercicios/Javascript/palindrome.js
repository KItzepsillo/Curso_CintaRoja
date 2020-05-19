
const palindrome = (dato) => {
    let i = 0;
    let ii = 0;
    let  new_data = [];
    let x = dato;
    while (i < 1){
        new_data[ii] = dato%10;
        dato = Math.trunc(dato/10);
        ii +=1;
        if(dato<1){
            i = 1;
        }
        
    }

    if(Number(new_data.join(""))===x){
        return true
    } else {
        return false
    }
        
}

console.log(palindrome(14941));


