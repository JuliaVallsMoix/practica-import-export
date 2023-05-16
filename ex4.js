/**
 * 1. Usa Npm para instalar este paquete: https://www.npmjs.com/package/jpeg-exif. Pedid ayuda para el import, ya que es un poco diferente.
 

 * 2. Mirando la documentación necesaria de la misma página, usa este módulo de terceros para obtener la información EXIF de DSCN0010.jpg y mostrarlo por consola
 
 
 * 3. ¿Serías capaz de ubicar la imagen a partir de las coordenadas GPS que arroja la consola?
 */

// 2.

import exif from 'jpeg-exif';

const filePath = 'DSCN0010.jpg';

exif.parse(filePath, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

// 3.


