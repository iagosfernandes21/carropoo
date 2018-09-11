export class Carro{

    gas : number;
    pass : number;
    km : number;

    constructor (gas:number, pass:number, km:number){
        this.gas = 0;
        this.pass = 0;
        this.km = 0;
    }

    embarcar (): void {
        if (this.pass < 2) this.pass++;  
    }
    desembarcar () : void{
        if (this.pass > 0)  this.pass--;
    }
    abastecer (quant : number) : void {
        this.gas += quant;
        if (this.gas > 10) this.gas = 10; 
    }

    andar (dist : number) : void {
        if (this.gas >= dist /10  && this.pass >= 1)
        {
            this.gas -= dist/10; 
            this.km += dist;
        } 

    }
    
}