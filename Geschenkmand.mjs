import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});


let geschenkmand = [];

let mandGrootte = await userInput.question('Hoe groot is je geschenkmaand (3-20) ? ');

while (mandGrootte < 3 || mandGrootte > 20) {

console.log("De grootte van de geschenkmand is fout. Probeer opnieuw ")
mandGrootte = await userInput.question('Hoe groot is je geschenkmaand (3-20) ? ');
    
}

console.log("W.Wijn" + '\n' + "B.Bier" + '\n' + "F.Fruitsap")


async function vulGeschenkmand(geschenkmand,mandGrootte) {
    
    while (geschenkmand.length < mandGrootte) {
        
        let keuze = await userInput.question("Welk geschenk kies je? (keuze: W,B,F): ");

        if (keuze == 'W' || keuze == 'B' || keuze == 'F') {
            geschenkmand.push(keuze);
        } 
        
        else {
            console.log("Foutieve invoer, probeer opnieuw");
        }
    }
}


function berekenTotaal(geschenkmand) {

    let totaal = 0;

    for (let i = 0; i < geschenkmand.length; i++) {
        switch (geschenkmand[i]) {
            
            case 'W':
                totaal += 10;
                break;

                case 'B':
                    totaal += 2;
                    break;
                       
                    case 'F':
                        totaal += 3;
                        break;
        
        }
 
    }

    return totaal;
}

function berekenTotaalBTW(totaal,geschenkmand) {
    
    let btw = 0;

    for (let i = 0; i < geschenkmand.length; i++) {
        switch (geschenkmand[i]) {
            
            case 'W':
                btw += totaal * (21/100);
                break;

                case 'B':
                    btw += totaal * (6/100);                    
                    break;

                    case 'F':
                        btw += totaal * (12/100);
                        break;
        
        }
 
    }

    return totaal + btw;
}



function lotterij() {
    
    let geluk = Math.floor(Math.random() * 11);

    if(geluk == 7){

        console.log("Je hebt een geschenk gewonnen!")
    }
    else 
    console.log("Helaas, je hebt niks gewonnen ")
}
    

await vulGeschenkmand(geschenkmand,mandGrootte);

let totaal = berekenTotaal(geschenkmand);
console.log("De waarde van je mand is : " + totaal + " Euro.")

let totaalmetBTW = berekenTotaalBTW(totaal,geschenkmand);
console.log("Inclusief met btw is dit : " + totaalmetBTW + " Euro.")

lotterij();

process.exit();
