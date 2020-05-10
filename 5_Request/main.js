// Se agrega una dependencia de Nodejs
const request = require('request'); 
const {Pokemon} = require('./Pokemon')

//funcion
const buscaPokemon = (nombre) => {
    nombre = nombre.toLowerCase();
    const URL = 'https://pokeapi.co/api/v2/pokemon/';

    request(`${URL}/${nombre}`,(error,response, body) => {
        if (response.statusCode === 200) {
            console.log('Pokemon encontrado');
            const respuesta = JSON.parse(body); // Transforma el string a JSON
            //console.log(respuesta.name);
            //console.log(respuesta);   //Se visualiza ahora como un objeto
            //console.log(`Encontre  a ${respuesta.name} y es de tipo ${respuesta.types[0].type.name}`);
            //console.log(body);  //
            const pokemon = new Pokemon(
                respuesta.name,
                respuesta.types[0].type.name,
                respuesta.weight,
                respuesta.height,
                respuesta.abilities[0].ability.name);
            console.log(pokemon);
                
        } else {
            console.log(`No hay pokemon ERROR: ${response.statusCode} ${response.statusMessage}`);
            console.log(error); //Nos ayuda para ver si existe un error
        }
    
        //console.log(response); // Nos devuelve todos los objetos
        //console.log(response.statusCode); // Estado
        //console.log(response.body); //
    
        
    });
}

buscaPokemon('Charmander');
buscaPokemon('Pikachu');
buscaPokemon('Eevee');
buscaPokemon('Bulbasaur');

