export default class ICL_Caja{
    leerUSD(){
        return prompt("Ingresa la cantidad de billetes de $1: ");
    }
    leerUSD5(){
        return prompt("Ingresa la cantidad de billetes de $5: ");
    }
    leerUSD10(){
        return prompt("Ingresa la cantidad de billetes de $10: ");
    }
    leerUSD20(){
        return prompt("Ingresa la cantidad de billetes de $20: ");
    }
    leerUSD50(){
        return prompt("Ingresa la cantidad de billetes de $50: ");
    }
    leerUSD100(){
        return prompt("Ingresa la cantidad de billetes de $100: ");
    }

    reporteCaja(Cant, Cant5, Cant10, Cant20, Cant50, Cant100,MonT){
        return`
        <br>--- Resumen del cierre de caja ---
        <br>Billetes de $1: (Total: $${Cant})
        <br>Billetes de $5: (Total: $${Cant5})
        <br>Billetes de $10: (Total: $${Cant10})
        <br>Billetes de $20: (Total: $${Cant20})
        <br>Billetes de $50: (Total: $${Cant50})
        <br>Billetes de $100: (Total: $${Cant100})
        <br>Monto total del cierre de caja: $${MonT}
        `
    }
}