export default class ICL_laPizzeria {
    leerNom(){
        return prompt("Ingresa el nombre del cliente");
    }
    leerCant(){
        return prompt("Ingresa la cantidad de pizzas");
    }
    leerTam(){
        return prompt("Ingresa el tamaño de la pizza");
    }

    reporterVenta(dT,pr){
        return `
        <br>Monto del descuento: $ ${dT}
        <br>Monto a pagar: $ ${pr}
        `
    }
    
}