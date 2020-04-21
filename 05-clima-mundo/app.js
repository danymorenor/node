const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLmg(argv.direccion)
//     .then(console.log);

// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log);



const getInfo = async(direccion) => {

    try {

        const coords = await lugar.getLugarLatLmg(direccion);
        let long = coords.lng;
        let lati = coords.lat;

        const temp = await clima.getClima(lati, long);
        return `El clima de ${direccion} es ${temp}`;
    } catch (error) {
        return `No se pudo de terminar el clima de ${direccion}`;
    }

}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);