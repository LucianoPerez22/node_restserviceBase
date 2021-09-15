const fs = require('fs');

let salida = '';

const multiplicar = async () =>{

    for (let index = 1; index <= 10; index++) {
        salida += `5 * ${index} = ${5*index} \n`;

    }
    fs.writeFile('salida1.txt',salida, (err) => {
        if (err) throw err
    
        console.log('ARchivo creado');
    });

    return 'salida1.txt';
}

module.exports = {
     multiplicar
}