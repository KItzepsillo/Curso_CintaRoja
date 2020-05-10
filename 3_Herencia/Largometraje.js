//Clase Padre

class Largometraje{
    constructor(titulo,duracion,director){
        //Atributos
        this.titulo = titulo;
        this.duracion = `${duracion} minutos`; 
        this.director = director;
    }
}

// Haremos que se comporte como un modulo
module.exports = {
    Largometraje
}

//camelCase => Functions, let, const
//PacalCase => Clases
//snake-case => css