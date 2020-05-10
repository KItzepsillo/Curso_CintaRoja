class Pokemon {
    constructor(nombre,tipo,peso,altura,habilidad){
        this.nombre = nombre;
        this.tipo = tipo;
        this.peso = peso + 'lbs';
        this.altura = altura + 'ft';
        this.habilidad = habilidad;
    }
}

module.exports = {
    Pokemon
}