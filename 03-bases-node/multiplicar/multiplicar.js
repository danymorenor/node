//requireds
const fs = require('fs');


crearArchivo = (base) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('El valor recibido para crear la tabla de multiplicar, no es un numero');
            return;
        }

        let data = '';

        for (let i = 1; i <= 10; i++) {
            //let resultado = base * i;
            //console.log(`${base} * ${i} = ${base * i}`);
            data += `${base} * ${i} = ${base * i} \n`;
        }



        fs.writeFile(`tablas/tabla-${base}.txt `, data, (err) => {
            if (err)
                reject(err)
            else {
                resolve(`tabla-${base}.txt`);
            }

            console.log(`El archivo tabla-${base}.txt ha sido creado!`);
        });
    });
}

module.exports = {
    crearArchivo
};