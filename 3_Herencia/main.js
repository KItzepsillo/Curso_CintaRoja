// Herencia
// Es la capacidad para definir atributos y metods nuevos para la subclase

//Super-Clase / Clase padre
class Mascotas{
    constructor(nombre,patas){
        //Atributos
        this.nombre = nombre;
        this.cerebro = true;
        this.patas = patas;
    }
}

//Clase hija / Sub clase
class Perro extends Mascotas{
    constructor(nombre, patas, ladra,cola){
        //Llama al constructor
        super(nombre,patas); //---> se agrega los atributos de la clase padre 
        //Atributos
        this.ladra = ladra;
        this.comida = "Croquetas";
        this.cola = cola;
    }
}

class Serpiente extends Mascotas{
    constructor(nombre,patas, color, veneno){
        //Llama al constructor
        super(nombre,patas);
        //Atributos
        this.color = color;
        this.veneno = veneno;
    }
}

const pluto = new Perro('Pluto',4,true,true);
console.log(pluto); // Se observa el objeto Perro

const kaa = new Serpiente('kaa',0,'verde',false);
console.log(kaa);