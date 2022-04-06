const axios = require('axios');

class Searches {
    history = ['Madrid', "Paris", "Berlin"];

    constructor() {
        //TODO: leer DB si existe
    }

    get paramsMapbox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'en'
        }
    }

/*     get paramsWeather() {
        return {
            'appid' : process.env.OPENWEATHER_KEY,
            'units': "metric"
        }
    } */

    //método asíncrono por ser http request
    async city(place = '') {
        try {
            //peticion http
            const instance = axios.create({
                baseURL:`https://api.mapbox.com/geocoding/v5/mapbox.places/${ place }.json`,
                params: this.paramsMapbox
            });
            //const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/madrid.json?language=en&access_token=pk.eyJ1IjoiemVsZXVnaW0iLCJhIjoiY2wxYWY0YTdmMXd5MTNra2FoZ2J0b3N6cSJ9.se4MCVypizfTdLuzg3IIqg&limit=5');
            const resp = await instance.get();
            return resp.data.features.map( place => ({
                id: place.id,
                name: place.place_name,
                lng: place.center[0],
                lat: place.center[1],
            }));
            return [];
        } catch (error) {
            return [];
        }


        return []; // retornar los lugares
    }

/*     async placeClima (lat,lng) {
        try {
             const instance = axios.create({
                baseURL:`https://api.openweathermap.org/data/2.5/weather`,
                params: { ...this.paramsWeather, lat, lng}
            });

            const resp = await instance.get();
            const { weather, main } = resp.data;

            return ({
                desc: weather.description,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp
            });
             
        } catch (error) {
            console.log(error)
        }
    } */
}

module.exports = Searches;