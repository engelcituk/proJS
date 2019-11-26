/* Este codigo se puede ejecutar en la consola, mediante node con el comando => node multiplesPromesas.js
Ejercicio para resolver multiples promesas
*/
let promesa1 = new Promise( (resolve, reject) => setTimeout( resolve, 500, 'hola mundo'));

let promesa2 = new Promise( (resolve, reject) => setTimeout( resolve, 600, 'segundo hola mundo'));

let promesa3 = Promise.reject();


let saluda = () =>  console.log('Hola a todos ...');

// promesa1.then(console.log);

Promise.all([promesa1, promesa2, promesa3]).then( resultados => {
    console.log(resultados);
    saluda();
}).catch( () => console.log('he fallado'));