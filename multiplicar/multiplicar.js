const fs = require('fs');
const colors = require('colors');


let listarArchivo = (base, limite = 10) => {
    console.log('==================================================================='.blue);
    console.log(`tabla de ${base} hasta el ${limite}`.red);
    console.log('==================================================================='.blue);
    for (let i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);

    }

}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, rejects) => {

        if (!Number(base)) {
            rejects('No es un nuemero');
            return;
        }

        let data = '';
        for (let i = 0; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                rejects(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    })
}
module.exports = {
    crearArchivo,
    listarArchivo
}