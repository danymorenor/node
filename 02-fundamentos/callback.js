// setTimeout(() => {
//     console.log('Hola Mundo');
// }, 3000);


let getUsuarioById = (id, callback) => {

    let usuario = {
        nombre: 'Dany',
        id
    }
    if (id === 20) {
        callback(`El usuario con id ${id} , no existe en la BD`)
    } else {

        callback(null, usuario); //devuelve el objeto usuario
    }
}

getUsuarioById(1, (err, usuario) => {
    if (err) {
        return console.log(err);
    } else {
        console.log('Usuario de base de datos ', usuario);
    }
});