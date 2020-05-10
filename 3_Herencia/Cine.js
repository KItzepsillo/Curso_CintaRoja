const {hitler} = require('./Documental');
const {mulan,spiderman} = require('./Pelicula');

//Heredar Pelicula o Documental
//console.log(hitler);
//console.log(mulan);
//console.log(spiderman);

class Cine{
    constructor(nombre,butacas,pantallas,cadena){
        //Atributos
        this.nombre = nombre;
        this.butacas = butacas;
        this.pantallas = pantallas;
        this.cadena = cadena;
    }

    //Metodos
    reproducirLargometraje(contenido){
        return `Se esta reproduciendo ${contenido.titulo}`
    }
}

const pandemic = new Cine('Pandemic',20,4,'Cinemark');

console.log(pandemic.reproducirLargometraje(hitler));

