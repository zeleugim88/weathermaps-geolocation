

class Busquedas {
    historial = ['Madrid',"Paris","Berlin"];

    constructor() {
        //TODO: leer DB si existe
    }

    //método asíncrono por ser http request
    async ciudad ( lugar = '') {
        //peticion http
        console.log(lugar);

        return []; // retornar los lugares
    }
}

module.exports = Busquedas;