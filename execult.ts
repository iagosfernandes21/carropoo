declare function require (msg:string):any;
var readline = require('readline-sync');

import {Carro} from "./Carro" ;

{
    let c : Carro = new Carro (0, 0, 0);
    console.log(Carro);
    
    let opcao: string = "";
    
    while(true){

        opcao = readline.question("Digite a opcao");
        switch (opcao){
            case "embarcar":
                c.embarcar();
                break;
            
            case "desembarcar":
                c.desembarcar();
                break;

            case "andar":
                let dist : string = readline.question("Digite a distancia");
                c.andar(parseFloat(dist));
                break;
            
            case "abastecer":
            let abast : string = readline.question("Digite a quantidade ");    
            c.abastecer(parseFloat(abast));
                break;
           
                case "mostrar":
            let mostrar : string;
                console.log(Carro);   
            break;    
        }

    }

}