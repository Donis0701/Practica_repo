/**Una pizzería tiene una promoción del 25% de descuento si el cliente compra más de
 * 2 pizzas.El precio de las pizzas depende del tamaño: pequeña $5, mediana $10,grande
 *  $15.Se desea un programa que determine el monto a pagar por el cliente y también el
 * monto del descuento,conociendo los siguientes datos: nombre,cantidad de pizzas y 
 * tamaño de la pizza(1=pequeña,2=mediana,3=grande)
  */
 import ICL_laPizzeria from "./ICL_laPizzeria.js";
 import CL_laPizzeria from "./CL_laPizzeria.js";

 let IPiz = new ICL_laPizzeria(),
      Nom = IPiz.leerNom(),
      Cant = IPiz.leerCant(),
      Tam = IPiz.leerTam(),

    Piz = new CL_laPizzeria(Nom, Cant, Tam),
    salida  = document.getElementById("salida");
    salida.innerHTML = IPiz.reporterVenta(Piz.descuento(),Piz.total());
     
 