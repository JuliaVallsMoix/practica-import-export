/**
 * Utiliza la sentencia export adecuadamente dentro del fichero ./utils/cupon.js
 *
 * La función comprueba si un cupón de descuento es válido. NO es necesario modificar este fichero
 */

import checkCoupon from "./utils/cupon.js";

let esValido = checkCoupon(
  "123",
  "123",
  "September 5, 2014",
  "October 1, 2014"
);
console.log(esValido); // true
let esValido_no = checkCoupon(
  "123",
  "blablebli",
  "September 5, 2014",
  "October 1, 2014"
);
console.log(esValido_no); // false
