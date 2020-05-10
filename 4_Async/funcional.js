const array = [1,4,5,8,6];

//Imperativa
//for(let i = 0; i < array.length; i++){
//    console.log(array[i]);
//}

//Funcional
//array.forEach(element => console.log(element));

//array.forEach((element) => {
//    console.log(element)
//});

//**Map
//Generar un nuevo arreglo a partir de uno previamente definido

//Imperativa
//for(let i = 0; i < array.length; i++){
//   arrayNuevo[i] = array[i]*2;
//}

//console.log(arrayNuevo);

//Funcional
//map(elementos, posiciones,imprime un arreglo)
//array.map((x,y,z) => {
//    console.log(x);
//    console.log(y);
//    console.log(z);
//})*/
//let arrayNuevo = [];
//const Nuevo = array.map((x,y) => {
//    return array*2
//});

//const arrayNuevo = array.map((x,y) => `indice ${y}: ${x}*2 = ${x*2}`);

//Filter

// Semi Imperativa
//for (let i = 0; i < array.length; i++){
//    if(array[i] % 2 == 0){
//        arrayNuevo.push(array[i]);
//    }
//}

//const a = array.filter(element => element % 2 == 0);
//console.log(a);

//Reduce

const promedio = array.reduce((a,b,c) => {
    console.log(a); // valor actual
    console.log(b); // indice
    console.log(c); // posicion array
});

//const promedio = array.reduce((a,b,c) => (a+b)/array.length);
//console.log(promedio)