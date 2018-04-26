const axios = require('axios');

const getPlaceLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion)

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyAd303C-lXrvF9i0zOOj_I5HDrq3itzW8w`)

    if (resp.data.status === 'ZERO_RESULTS'){
        throw new Error(`No hay resultados para la ciudad ${direccion}`)
    }

    let location = resp.data.results[0];

    let address = location.formatted_address;
    let coors = location.geometry.location;

    return {
        direccion: address,
        lat: coors.lat,
        lng: coors.lng
    }
} 


module.exports = {
    getPlaceLatLng
}



