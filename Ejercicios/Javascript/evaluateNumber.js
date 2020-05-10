const evaluateNumber = (dato) => {
    if(dato%5 === 0 && dato%11===0){
        return true;
    }else{
        return false;
    }

}

console.log( evaluateNumber(5));