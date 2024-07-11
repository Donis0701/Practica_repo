/**Crear un programa de cierre de caja para totalizar el efectivo en billetes
 * USD dentro de la caja.Los billetes a contabilizar son denominados de 1 USD,
 * 5 USD, 10 USD, 20 USD, 50 USD, 100 USD. El programa debe obtener y mostrar 
 * un resumen con el monto total por cada tipo de billete y el monto total del 
 * cierre de caja.
 */
import ICL_Caja from "./ICL_Caja.js";
import CL_Caja from "./CL_Caja.js";

let ICaj = new ICL_Caja(),
USD = ICaj.leerUSD(),
USD5 = ICaj.leerUSD5(),
USD10 = ICaj.leerUSD10(),
USD20 = ICaj.leerUSD20(),
USD50 = ICaj.leerUSD50(),
USD100 = ICaj.leerUSD100(),
 Caja = new CL_Caja(USD, USD5, USD10, USD20, USD50, USD100),
salida = document.getElementById("salida");
salida.innerHTML = ICaj.reporteCaja(Caja.Cant(), Caja.Cant5(), Caja.Cant10(), Caja.Cant20(), Caja.Cant50(), Caja.Cant100(), Caja.MonT());
