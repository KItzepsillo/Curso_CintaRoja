const longestCountry = (dato) => {
    let i = 0;
    let ii = 0;
    let x = 0;
    let dato1 = "";
    x = dato[0].length;

    while(i < 1){
        if (dato[ii].length > x) {
            dato1 = dato[ii];
        } 
        ii+=1;
        
    }
    return dato1
}

console.log(longestCountry(["Guatemala", "El Salvador"]));
