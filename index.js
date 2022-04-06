//confirugracion de las variables de entorno
require('dotenv').config()

const { readInput, consoleMenu, pause, listPlaces } = require('./helpers/inquirer')
const Searches = require('./models/searches')

const main = async () =>
{
  
    const searches = new Searches();
    let opt; 

    do {
        // Print concole main Menu
        opt = await consoleMenu();
        switch (opt) {

            case "1": //cómo se podría introducir número en vez de string con consoleMenu()
                // Show message
                const place = await readInput('Ciudad: ');

                //Search places
                const places = await searches.city( place );

                //Select place
                const id = await listPlaces(places);
                const selectedPlace = places.find( l => l.id === id);
                console.log(selectedPlace)
                
                //Clima
                //const clima = await searches.placeClima( selectedPlace.lat, selectedPlace.lng )
                //Mostrar mensaje:
                //Buscar los lugares
                //Seleccionar el lugar
                //Datos del clima
                //Mostrar resultados
                console.log('\nCity Info\n'.green);
                console.log('City:', selectedPlace.name);
                console.log('Lat:', selectedPlace.lat);
                console.log('Lng:', selectedPlace.lng);
                console.log('Temperatura:', );
                console.log('Minima:',);
                //console.log('Como esta el clima: ', clima)
                break;
        }
        if ( opt != 0) await pause();
/*         switch (opt) {
            case '1':
                // crear opcion
                let cityName = await readInput('City:');
                //series.addSerie(cityName);
                break;

            case '2':
                console.log(cityName)
                //series.serieList();
                break;

            case '3': // listas sin empezar
                series.serieListByType("Wishlist");
                break;
        } */
    }
    while (opt !== '0');
}

main();
