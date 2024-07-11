export default class CL_Caja{
    constructor(USD, USD5, USD10, USD20, USD50, USD100){
        this.USD = parseInt(USD);
        this.USD5 = parseInt(USD5);
        this.USD10 = parseInt(USD10);
        this.USD20 = parseInt(USD20);
        this.USD50 = parseInt(USD50);
        this.USD100 = parseInt(USD100);
    }

    set USD(USD){
        this._USD = +USD;
    }
    get USD(){
        return this._USD;
    }
    set USD5(USD5){
        this._USD5 = +USD5;
    }
    get USD5(){
        return this._USD5;
    }
    set USD10(USD10){
        this._USD10 = +USD10;
    }
    get USD10(){
        return this._USD10;
    }
    set USD20(USD20){
        this._USD20 = +USD20;
    }
    get USD20(){
        return this._USD20;
    }
    set USD50(USD50){
        this._USD50 = +USD50;}
    get USD50(){
        return this._USD50;
    }

    set USD100(USD100){
        this._USD100 = +USD100;
    }
    get USD100(){
        return this._USD100;
    }
    Cant(){
        return this.USD*1;
    }

    Cant5(){
        return this.USD5*5;
    }
    Cant10(){
        return this.USD10*10;
    }
    Cant20(){
        return this.USD20*20;
    }
    Cant50(){
        return this.USD50*50;
    }
    Cant100(){
        return this.USD100*100;
    }

    MonT(){
        return this.Cant()+this.Cant5()+this.Cant10()+this.Cant20()+this.Cant50()+this.Cant100();
    }
    }