const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=8a2820ddba02a5d284bdf359afce102f&units=metric`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}