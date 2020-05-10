//Crea una función llamada decimalToBinary() que reciba como parámetro un número entero decimal 
//y lo convierta en un número binario retornando su resultado.

function decimalToBinary(x){ 
    const bin = [];
    var ii = 0;
    var i = 0;
    if (x == 1){
        return bin[0] = 1;
    } else {
        while(i < 1){
            num = x%2;              //01
            x = Math.trunc(x/2);    //1,0.75
            bin[ii] = num;          //0 
            ii = ii+1
            if(x < 1){
                i = 1;
            }
        }
    }

/*
    i = 0;
    ii = 0;
    n = []*bin.length
    while(i < 1){
        n[ii] = bin[-ii]
        ii = ii+1;
        if(ii < bin.length){
            i = 1;
        }
    }
*/  
    bin.reverse()
    return bin.join("");
    //return bin.join("")
}

console.log(decimalToBinary(4));