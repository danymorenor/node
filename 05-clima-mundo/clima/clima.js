const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=dbe915d6ef82cd398a3f01dcc96ccfd3&units=metric`);

    return resp.data.main.temp;


}




module.exports = {
    getClima

}