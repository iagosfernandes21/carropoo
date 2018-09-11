"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require('readline-sync');
const Carro_1 = require("./Carro");
{
    let c = new Carro_1.Carro(0, 0, 0);
    console.log(Carro_1.Carro);
    let opcao = "";
    while (true) {
        opcao = readline.question("Digite a opcao");
        switch (opcao) {
            case "embarcar":
                c.embarcar();
                break;
            case "desembarcar":
                c.desembarcar();
                break;
            case "andar":
                let dist = readline.question("Digite a distancia");
                c.andar(parseFloat(dist));
                break;
            case "abastecer":
                let abast = readline.question("Digite a quantidade ");
                c.abastecer(parseFloat(abast));
                break;
            case "mostrar":
                let mostrar;
                console.log(Carro_1.Carro);
                break;
        }
    }
}
