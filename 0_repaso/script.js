//alert("Funciona!");

//Variables
var string  = "Kevin";
var number = 24;
var boolean = true;

//Variables compuestas

var array = [1,2,3];

//JSON
//JavaScript Object Notation

var auto = {
    //Atributos
    color:"Rojo",
    velocidad: 180,
    ruedas : 4,
    motor: "v8",
    deportivo: true,

    //Metodos
    arranca : function(){
        alert("Auto Arranca");
    },

    frena: function(){
        alert("Auto Frena");
    },

    dobla: function() {
        alert("Auto dobla");
    }

}
console.log(auto);
console.log(auto.color);
console.log(auto.ruedas);
console.log(auto.velocidad);

var perro = {
    nombre: "Ayudante de Santa",
    raza: "Galgo",
    color: "Marron",

    ladrar: function(){
        return alert(this.nombre + " ha ladrado");
    }

}

console.log(perro);
perro.ladrar();

var perroLadra = perro.ladrar();
console.log(perroLadra)