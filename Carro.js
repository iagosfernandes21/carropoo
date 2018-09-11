"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Carro {
    constructor(gas, pass, km) {
        this.gas = 0;
        this.pass = 0;
        this.km = 0;
    }
    embarcar() {
        if (this.pass < 2)
            this.pass++;
    }
    desembarcar() {
        if (this.pass > 0)
            this.pass--;
    }
    abastecer(quant) {
        this.gas += quant;
        if (this.gas > 10)
            this.gas = 10;
    }
    andar(dist) {
        if (this.gas >= dist / 10 && this.pass >= 1) {
            this.gas -= dist / 10;
            this.km += dist;
        }
    }
}
exports.Carro = Carro;
