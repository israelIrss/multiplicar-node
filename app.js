//graba archivo https://nodejs.org/dist/latest-v15.x/docs/api/fs.html#fs_fs_writefile_file_data_options_callback
//yargs: https://www.npmjs.com/package/yargs
//const fs = require('fs');
//const fs = require('express'); no es nativo
//const fs = require('./archivos'); nosotros creamos
const { crearArchivo, listarArchivo } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');


let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarArchivo(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado: ${archivo }`.trap))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');


}
/*let parametro = argv[2];
let base = parametro.split('=')[1];*/