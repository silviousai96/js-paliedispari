//Chiedere all’utente di inserire una parola 
//Creare una funzione per capire se la parola inserita è palindroma.


//input parola all'utente
var inputParola = prompt("Inserisci una parola: ");


//funzione per capire se una parola è un palindromo
//
//parola da analizzare = parola da analizzare per capire se è palindroma
//
//return: un booleano (true/false): vero se la parola è palindroma, falso se non lo è.

function palindromo(parolaDaAnalizzare) {
    console.log(parolaDaAnalizzare);

    var risultatoPalindromo;
    //devo ricavare la parola al contrario della parola da analizzare.
    //leggendo i carattere di parolaDaAnalizzare partendo dall'ultimo 
    //e concatenando ogni carattere a parolaAlContrario     
    var parolaContrario = '';
    for ( var i = parolaDaAnalizzare.length - 1; i>= 0; i--) {
        
        var thisLettera = parolaDaAnalizzare[i];
        console.log(thisLettera);

        parolaContrario += thisLettera;
        console.log(parolaContrario)
    }
    
    //controllo che la parola originale sia uguale alla parola invertita
    if ( parolaDaAnalizzare == parolaContrario) {
        risultatoPalindromo = true;
    } else {
        risultatoPalindromo = false;
    }


    return risultatoPalindromo;
}

//do il risultato all'utente

var result = palindromo(inputParola);
console.log(result);

if ( result == true) {
    alert('la parola è palindroma')
} else {
    alert('la parola non è palindroma')
}