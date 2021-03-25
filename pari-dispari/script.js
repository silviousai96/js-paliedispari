// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
// Dichiariamo chi ha vinto.

//Prendo gli input della scelta pari/dispari e di un numero da 1 a 5
var inputScelta = prompt("Scegli pari o dispari: ");
console.log('input scelta:' + inputScelta);

var inputNumero = parseInt(prompt("Inserisci un numero da 1 a 5: "));
console.log('input numero:' + inputNumero);

//funzione per generare un numero da 1 a 5 (1 e 5 compresi)
function getRandomIntInclusive(min, max) {
    var min = Math.ceil(min);
    var max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
  }

var numeroComp = getRandomIntInclusive(1, 5);
console.log('numero random pc: ' + numeroComp);

//funzione che somma due numeri e dice se la somma è pari o dispari
function pariDispari(num1, num2) {
    var sommaNumeri = num1 + num2;
    var sommaPariDispari;

    if( sommaNumeri % 2 == 0 ) {
        // risultato verifica è pari
        sommaPariDispari = 'pari';
    } else {
        // risultato verifica è dispari
        sommaPariDispari = 'dispari';
    }

    return sommaPariDispari;
}

var result = pariDispari(inputNumero, numeroComp);
console.log("risultato:" + result);

//verifico se il risultato della funzione è uguale all'input della scelta utene allora ha vinto
//altrimenti, ha perso
if( inputScelta == result ) {
    alert('Complimenti, hai vinto!');
} else {
    alert('Mi dispiace, hai perso! ');
}




