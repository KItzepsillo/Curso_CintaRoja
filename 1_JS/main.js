// 2000 => Internet Explorer Mircrosoft

// Navegadores
// Chrome
// ES6 => EcmaScript 6

//JS
var nombre = "Kevin";

// JS ES6
let x = 5; // Es permitido cambiar el valor 
const y = 3.1416; // No es permitido reemplazar su valor 

//1.
console.log("Hola mi nombre es " + nombre + " " + "y mi edad es " + x);

//Node JS

/*
node main.js
*/ 

//2.
console.log(`Hola mi nombre es ${nombre} y mi edad es ${x}`);
//concatenar

//Funcion
/* 
fuction Mifuncion(){
    return "Mi funcion se ejecuto";
}

var valor = Mifuncion
*/

//Arrow Fuctions
// const suma = (a,b) => a+b;
const suma = (a,b) => {
    return a + b;
}

//const suma = (a,b) => a+b;

const resultado = suma(5,5);
console.log(resultado);

//Ciclos
let array = [1,2,3,4,5];

for(let i = 0; i< array.length; i++){
    console.log(`array en el indece ${array[i]}`)
}

//Objetos
//Propiedades => llave: valor
//Metodo => Acciones que puede hacer


let computadora = {
    //Atributos
    color : "negra",
    marca : "Dell",
    encendida: true,

    //Metodo
    /*
    obtenerInfo: function(){
        return `Esta computadora es ${this.color}`
    }
    */ 
    // Scope => El alcance de una variable
    obtenerInfo: function() {
        return `Esta computadora es ${this.color}, marca ${this.marca} y esta ${this.encendida}`
    }
}

// Programacion Funcional
//
// Programacion imperativa
//

console.log(computadora.obtenerInfo());

// ###  Ejemplo  ###

let myPenguin = {
    character : "Alfred",
    origin : "Zig et Puce",
    creator : "Alain Saint-Ogan",
    notes: "The pet penguin of the title characters. The Angoulême International Comics Festival named the Prix Alfred award after the character.[2]",
    volar: false,

    name: function() {
        return `El nombre del pinguino es ${this.character}`
    },   

    puedoVolar: function(){
        return this.volar
    },

    graznar: () => `Kaww Kaww`
}
//myPenguin.puedeVolar = false;
console.log(myPenguin.character);
console.log(myPenguin.name());
console.log(myPenguin.puedoVolar());
console.log(myPenguin.graznar());
console.log(myPenguin);