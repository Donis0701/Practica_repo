export default class CL_laPizzeria{
    constructor(Nom, Cant, Tam){
        this.Nom = Nom;
        this.Cant = parseInt(Cant);
        this.Tam = parseInt(Tam);
    }
    set Nom(n){
        this._Nom = n;
    }
    get Nom(){
        return this._Nom;
    }
    set Cant(c){
        this._Cant = +c;
    }
    get Cant(){
        return this._Cant;
    }
    set Tam(t){
        this._Tam = +t;
    }
    get Tam(){
        return this._Tam;
    }

    precio(){
        if(this.Tam == 1){
            return 5;
        }else if(this.Tam == 2){
            return 10;
        }else if(this.Tam == 3){
            return 15;
        }
    }

    descuento(){
        if(this.Cant > 2){
            return  (this.precio()*this.Cant) * 0.25;
        }else{
            return 0;
        }
    }

    total(){
        return this.precio()*this.Cant - this.descuento();
    }
}