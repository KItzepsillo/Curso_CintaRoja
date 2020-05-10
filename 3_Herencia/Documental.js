// Se importa la clase padre
const {Largometraje} = require('./Largometraje');

class Documental extends Largometraje{
    constructor(titulo,duracion,director,patrocinador,productor){
        //Llama al constructor
        super(titulo, duracion,director);
        //Atributos
        this.patrocinador = patrocinador;
        this.productor = productor;
        this.precio = '$5';
    }
}

const hitler = new Documental('Hitler',60,'Desconocido','History Channel','Sony');
//console.log(hitler);

module.exports = {
    hitler
}