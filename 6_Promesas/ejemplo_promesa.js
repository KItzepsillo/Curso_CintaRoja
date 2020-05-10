/*  Promesas tiene tres estados, ademas es una clase
        -Pending (Esperar)
        -Resolve (Se tiene un resultado)
        -Rejected (No se cumple la promesa)
    **Nota 
    se utilizan en interacciones asincronas
*/

//callbacks -> propiedades o atributos de la promesa 

//Determinar si un numero es mayor a 5
const promesa = new Promise((resolve,reject) => {
    const numero = Math.floor(Math.random()*10);
    //Emular una peticion
    /*setTimeout(() => {
        if(numero > 5){
            resolve(`${numero} es mayor a 5`);
        }else{
            reject(new Error(`Error ${numero} no es mayor a 5`));
        }
    },5000);*/
    setTimeout(()=> {
        // ? :
        numero > 5
            ? resolve (`${numero} es mayor a 5`)
            : reject(new Error(`Error ${numero} no es mayor a 5`));
    },5000);
});

console.log(promesa);

//then  -> cuando la promesa se cumple
//catch -> cuando la promesa no se cumple

promesa
    .then((data) => console.log(data))
    .catch((err) => console.log(err));


