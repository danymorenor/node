const fs = require('fs');



let listadoPorHacer = [];




//Esta funcion crea una tarea en el arreglo, pero no se guarda de forma persistente
const crear = (descripcion) => {

    cargarDB(); //Esta funcion carga el archivo en formato json, y por lo tanto el listadoPorHacer

    let porHacer = {
        descripcion,
        completado: "false"
    };

    listadoPorHacer.push(porHacer);

    guardarDB(); //Se llama funcion que guarda en archivo

    return porHacer;

}

//Para que las tareas se vayan guardando de forma persistente, se hace esta funcion
const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    // con FileSystem guardar en el archvio ./db/data.json
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
}

//Leer archivo
const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');

    } catch (error) {
        listadoPorHacer = [];
    }
}


//Listar tareas
const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}




//Actualizar tareas
const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

//Borrar tareas
const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer.splice(index, 1); //Elimino el elemento del arreglo y despues guardo la base
        guardarDB();
        return true;
    } else {
        return false;
    }
}





module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}