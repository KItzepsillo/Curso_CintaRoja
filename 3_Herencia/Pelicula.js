// Se importa la clase padre
const {Largometraje} = require('./Largometraje');

const prueba = new Largometraje();

class Pelicula extends Largometraje{
    constructor(titulo, duracion, director, cast, tema){
        //Llama al constructor
        super(titulo, duracion,director);
        //Atributos
        this.cast = cast;
        this.tema = tema;
        this.precio = '$3';
    }
}

const mulan = new  Pelicula('Mulan',120,'Tony Bancroft',['Mulan','Mushu'],'Infantil');
const spiderman = new  Pelicula('Spiderman',120,'Desconocido',['Peter','Tia May'],'Accion');


//console.log(mulan);
//console.log(spiderman);

module.exports = {
    mulan,
    spiderman
}