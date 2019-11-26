/* Este codigo se puede ejecutar en la consola, mediante node con el comando => node promesa.js
Ejercicio de una promesa
*/
const request = require('request');

function leer(url){
    return new Promise( function (resolve, reject) {
        request(url, function (err, response) {
           if (err) {
               reject(err);
           } else {
               resolve(response);
           }
        });        
    });
}

leer('http://codigofacilito.com')
.then(function (response) {
    console.log(response);
})
.catch(function (err) {
    console.log(err);
});