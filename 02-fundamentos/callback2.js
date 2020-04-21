let empleados = [{
    id: 1,
    nombre: 'Dany'
}, {
    id: 2,
    nombre: 'Melissa'
}, {
    id: 3,
    nombre: 'Juan'
}];

let salarios = [{
    id: 1,
    salario: 35000
}, {
    id: 2,
    salario: 20000
}];


let getEmpleado = (id, callback) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        callback(`No existe un empleado con el  ${id} `)
    } else {
        callback(null, empleadoDB);
    }
    //console.log(empleadoDB);
}

let getSalario = (empleado, callback) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        callback(`No existe salario para el empleado ${empleado.nombre}`)
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario
        });
    }


}



getEmpleado(3, (err, empleado) => {
    if (err) {
        return console.log(err);
    } else {
        console.log(empleado);
        getSalario(empleado, (err, resp) => {
            if (err) {
                return console.log(err);
            } else {
                console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
            }
        });

    }
});