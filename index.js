const { readInput, consoleMenu, pause } = require('./helpers/inquirer')
const Busquedas = require('./models/busquedas')
const main = async () =>
{
    /* const texto = await readInput('Hola :')
    console.log(texto) */
  
    const busquedas = new Busquedas();
    let opt; 

    do {
        // Print concole main Menu
        opt = await consoleMenu();
        switch (opt) {

            case "1": //cómo se podría introducir número en vez de string con consoleMenu()
                const place = await readInput('Ciudad: ');
                console.log(place);
                //Mostrar mensaje:
                //Buscar los lugares
                //Seleccionar el lugar
                //Datos del clima
                //Mostrar resultados
                console.log('\nCity Info\n'.green);
                console.log('City:',);
                console.log('Lat:',);
                console.log('Lng:',);
                console.log('Temperatura:',);
                console.log('Minima:',);
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