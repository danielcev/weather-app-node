const place = require('./place/place');
const weather = require('./weather/weather');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async (direccion) => {

    try{
        
        let coors = await place.getPlaceLatLng(direccion);
        let temp = await weather.getClima(coors.lat, coors.lng);
    
        return `El clima en ${coors.direccion} es de ${ temp }`;

    }catch(e){
        return `No se pudo determinar el clima en ${direccion}`
    }
    
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));