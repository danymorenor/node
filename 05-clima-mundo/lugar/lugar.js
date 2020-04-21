const axios = require('axios');


const getLugarLatLmg = async(dir) => {

    //Si se recibe la direccion New York, el espacio causaria problemas, por lo que se hace lo siguiente:
    const encodeUlr = encodeURI(dir);
    //console.log(encodeUlr);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUlr}`,
        headers: { 'x-rapidapi-key': '4fa5f261a2msh998abc3b99703d9p11206fjsn489f75cc4749' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;




    // instance.get()
    //     .then(resp => {
    //         console.log(resp.data.Results[0]);
    //     })
    //     .catch(err => {
    //         console.log('ERROR!!!', err);
    //     });

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLmg
}