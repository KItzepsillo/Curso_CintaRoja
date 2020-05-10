//Palabra reservada => Palabra exclusiva del lenguaje, no podemos usarlo en variables

//Vamos a declarar una clase
class perro{
    //Constructor -> es un metodo, sera lo primero en ejecutar al invocar la clase
    /*
    constructor(){
    }*/

    constructor(raza, tamanio, nombre){
        //console.log("Se ejecuto");
        //Atributos
        this.raza = raza;
        this.tamanio = tamanio;
        this.nombre = nombre;
    }

    //Metodos
    /*
    comer(parametro){
        //funcionalidad
    }
    */

    comer(comida) {
        //Igualdad === "exactamente igual", comparaciones extrictas
        if(comida === "Croquetas"){
            return "feliz";
        } else {
            return "Infeliz";
        }
    }

    saludo() {
        return `Hola mi nombre es ${this.nombre}`;
    }

    //Corresponde mas a java
    //Se utilizan para acceder a una propiedad de un objeto y modificar
    getNombre (){
        return this.nombre;
    }

    getRaza(){
        return this.raza;
    }
    //Corresponde mas a java
    //Setear o establecer valores
    setNombre(nombre){
        this.nombre = nombre;
    }

}

//Instancia de la clase perro
const snoopy = new perro("tu","callejero","Benito");
const scooby = new perro("tua","cruzado","Lupita");

//console.log(snoopy);
//console.log(scooby);
//Mandando a llamar con metodos dentro de la clase
//console.log(snoopy.comer("Croquetas"));
//console.log(snoopy.comer("pan"));

//Se reasigna el atribuno nombre 
perro.nombre = "Juan"
//console.log(snoopy);
//console.log(scooby.getNombre());



class Persona {
    constructor(nombre, apaterno, amaterno, diaNaci, mesNaci, edad, peso, altura){
        this.nombre = nombre;
        this.apaterno = apaterno;
        this.amaterno = amaterno;
        this.edad = edad;
        this.diaNaci = diaNaci; 
        this.mesNaci = mesNaci;
        this.sexo = peso;
        this.altura = altura;
        this.fecha = 2020;
        this.num = 0;
    }

    calcularIMC(){
        this.num = -1900 + this.fecha - this.edad
        return this.nombre.substring(0,2) + this.apaterno[0]+this.amaterno[0]+this.num+this.mesNaci+this.diaNaci;
    }

}

const persona1 = new Persona("Juan","Hernandez","Lopez",10,11,31);

console.log(persona1.calcularIMC());

class Cuenta {
    constructor(titular,cantidad,estado){
        this.titular = titular;
        this.cantidad = cantidad;
        this.estado = 0;
        this.dineroMax = 900;
        this.dineroMin = 10;
        this.saldo = 500;
    }

    ingresar(){
        if (this.cantidad >= 900){
            return `Estimado ${this.titular} supera el limite establecido $900`;
        }else{
            this.saldo = this.saldo + this.cantidad;
                if(this.saldo >= 900){
                    return `Estimado ${this.titular} supera el limite establecido por ${this.saldo-900}`;   
                } else {
                    return `Su nuevo saldo es de ${this.saldo}`;
                }
        }
    }

    retirar(){
        this.saldo = this.saldo - this.cantidad;
        if (this.saldo <= 10){
            return `Estimado ${this.titular} la cantidad a retirar no es aceptada, la cuenta debe de contar con mas de $10`
        }else{
            return `Transaccion exitosa! Su nuevo saldo es de  ${this.saldo}`;
        }

    }

}

const data = new Cuenta("Jose",495);
console.log(data.retirar())

