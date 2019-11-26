(async function() {
    
    let resultado = await new Promise((resolve, reject) => setTimeout(resolve, 500, 5));

    let valorDos = await new Promise((resolve, reject) => setTimeout(resolve, 500, 15));


    console.log(resultado + valorDos);

})();

async function showGitHubInfo() {
    let respuesta = await fetch('https://api.github.com/users/engelcituk/repos');
    let repos = await respuesta.json();
    console.log(repos);
}

showGitHubInfo();

/* Para manejar errores en promesas con asyncawait se ocupan bloques try catch*/
async function errors() {
    try {
        let promesa = await Promise.reject("Error en el async");
    } catch (error) {
        console.log(error);
    }
}
errors();