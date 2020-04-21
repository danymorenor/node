let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre: function() {
        return (`${this.nombre} ${this.apellido} - poder: ${this.poder}`)
    }
}

//------------------ En esta parte se obtienen los valores uno po runo
// let nombre = deadpool.nombre;
// let apellido = deadpool.apellido;
// let poder = deadpool.poder;

//------------------ Se pueden obtener todos los valores del objeto asi:
//let { nombre, apellido, poder } = deadpool;   

//Se puede sustituir el nombre del elemento que se obtiene, por otro para 
//que no choque con variables ya tenga definidas en otra parte del codigo
let { nombre: primerNombre, apellido, poder } = deadpool;

//console.log(`nombre= ${nombre}`);
console.log(`nombre= ${primerNombre}`);

console.log(`apellido= ${apellido}`);
console.log(`poder= ${poder}`);