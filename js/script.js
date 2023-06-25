/*
    
    1) Definiamo la funzione per:
        - numeri casuali
        - numeri unici in modo da non ripetersi nel gioco 
    2) inizializziamo il button, per la generazione de inumeri casuali su schermo
    3) stampiamo i numeri randomici in pagina
    4) con un timer rimuoviamo i numeri in pagina
    5) facciamo comparire dei prompt per richiederci l'inserimento di quei 5 numeri, uno per uno.
        - convertiamo i valori in numeri interi
    6) funzione per lo start, unita al button, avvia il gioco tramite l'evento click sul button
    7) blocchiamo il pulsante button durante il gioco per non avere problemi tipo: avvii multipli.
    8) si genererà un array di numeri casuali tra 1 e 60
        -facciamo visualizzare i numeri sul DOM
        - dopo 10 secondi i numeri spariscono, e dopo altri 5s comprarirà il prompt per richiedere un numer oalla volta
    9) viene mostrato l'ultimo prompt con quanti numeri indovinati abbiamo finito il gioco.
*/

// FUNZIONE numeri casuali
function getRandomNumber (min, max){
    return Math.floor(Math.random() * ((max + min)/1)) + min;
}

// FUNZIONE per i numeri unici ( non ripetuti nel codice stampato )
function uniqueNumber(min, max, count){ //
    let number = []; // array vuoto
    while (number.lenght < count){
        let randomNumber = getRandomNumber(min, max);
        if(!number.includes(randomNumber)){// neghiamo la condizione se l'array number non contiene gia il numero generato random
            number.push(randomNumber);// se il numerp casuale non è gia inserito nell'array, allora lo inserisce
        }
    }
    return number; // restituisce l'array quando contiene tutti i numeri dentro
}
