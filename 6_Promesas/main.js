const request = require('request');
const {Banda} = require('./Banda');

/*http://www.theaudiodb.com/api/v1/json/1/search.php **?s** =muse 
** query parameter
*/
const obtenerBanda = (nombre) => {
    const URL = `http://www.theaudiodb.com/api/v1/json/1/search.php?s=${nombre}`;

    return new Promise((resolve,reject) => {
        request(URL, (error,response, body) => {
            const respuesta = JSON.parse(body);
            if(respuesta.artists != null){
                //Promesa se cumple
                const {strArtist,intFormedYear,strGenre,strWebsite} = respuesta.artists[0]
                const banda = new Banda(strArtist,intFormedYear,strGenre,strWebsite)
                resolve(banda);
            } else {
                //Promesa no se cumple
                reject(new Error(`No encontre a ${nombre} ${error}`));
            }
        });
    });
}

obtenerBanda('jose jose')
    .then(data => console.log(data))
    .catch(err => console.log(err))

const objeto = {nombre: "Kevin", edad: 25}
const {nombre, edad} = objeto;
console.log(nombre);
console.log(edad);

/*
CRUD -> create read update delete una base de datos

*/