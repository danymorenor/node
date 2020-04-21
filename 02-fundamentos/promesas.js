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


let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {
            reject(`No existe un empleado con el  ${id} `)
        } else {
            resolve(empleadoDB);
        }
    });

}


let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {

        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDB) {
            reject(`No existe salario para el empleado ${empleado.nombre}`)
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario
            });
        }
    })
}






getEmpleado(3).then(empleado => {
    //console.log(`Empleado de BD `, empleado);

    getSalario(empleado).then(resp => {
        console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
    }, (err) => {
        console.log(err);
    })



}, (err) => {
    console.log(err);
});