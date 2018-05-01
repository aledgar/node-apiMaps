const lugar = require('./config/lugar');
const colors = require('colors');
const argv = require('yargs')
            .options({
                descripcion:{
                    alias:'d',
                    desc:'Pais a consultar',
                    demand:true
                }
            })
            .argv;

lugar.getLugarLngLat(argv.d)
        .then(asw => {
            console.log(`Ciudad: ${asw.ciudad}`.green);
            console.log(`Latitud: ${asw.lat}`.blue);
            console.log(`Longitud: ${asw.lng}`.yellow);
        })
        .catch(err => console.log(err));
