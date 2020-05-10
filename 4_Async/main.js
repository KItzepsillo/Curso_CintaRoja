//Asincrona, hilos de ejecucion, pila

//Concurrencia: cuando dos o mas tareas progresan simultaneamente
//Paralelismo: 

/*  main.js      cola de ejecucion   "Pila           "
    **codigo
    **console.log(1)
    **console.log(2)
    "                   Terminal                     "

*/


console.log(1);
setTimeout(() => {
    console.log(2);
}, 5000);
setTimeout(() => {
    console.log(3);
}, 5000);
console.log(4);


//Programacion Funcional 
//Unicamente se resolvera mediante funciones 

//**Declarativa
//declara una base de conocimiento
//**Imperativa 
//declaras un algoritmo y una serie de instrucciones o pasos para llegar a una solucion
