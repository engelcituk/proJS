/* Este codigo se puede ejecutar en la consola, mediante node con el comando => node cadenaPromesas.js
Ejercicio para encadenar  multiples promesas
*/
function calcular() {
    return new Promise(function (resolve, reject) {
       setTimeout(resolve, 400, 5);
    });
}

function segundoCalculo(numero) {
    console.log(numero);
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, 200, 'Segunda Promesa');
    });
}

calcular().then(segundoCalculo).then(console.log);