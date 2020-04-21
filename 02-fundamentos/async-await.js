// let getNombre = async() => {

//     //undefined.nombre;

//     return 'Dany ';
// };


let getNombre = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('Dany');
        }, 3000);

    });
}

let getSaludo = async() => {
    let nombre = await getNombre(); //tener cuidado , si no regresa nada se queda pegado por siempre
    return `Hola ${nombre}`;
}

getSaludo().then(mensaje => {
    console.log(mensaje);
});



// getNombre().then(nombre => {
//         console.log(nombre);
//     })
//     .catch(e => {
//         console.log('Error de ASYNC', e);
//     });