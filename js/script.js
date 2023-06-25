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
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// FUNZIONE per i numeri unici (non ripetuti nel codice stampato)
function uniqueNumber(min, max, count) {
    let numbers = [];
    while (numbers.length < count) {
        let randomNumber = getRandomNumber(min, max);
        if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
        }
    }
    return numbers;
}

// FUNZIONE per visualizzare il contenuto sull'HTML
function displayNumber(numbers) {
    let numberDiv = document.getElementById('number');
    numberDiv.textContent = numbers.join(', ');
    }

    // FUNZIONE rimozione elementi dall'HTML per il gioco (aggiunto il timer)
    function clearNumber() {
    let numberDiv = document.getElementById('number');
    numberDiv.textContent = "";
}

// FUNZIONE per controllare se i numeri inseriti sono corretti ed identici nell'ordine a quelli stampati dal computer
function checkNumber(myNumbers, originalNumbers) {
    let correctNumbers = [];
    for (let i = 0; i < originalNumbers.length; i++) {
        if (myNumbers[i] === originalNumbers[i]) {
        correctNumbers.push(originalNumbers[i]);
        }
    }
    return correctNumbers;
}

// Funzione per gestire il prompt e controllare i numeri inseriti dall'utente
function handleUserInput(originalNumbers) {
    let myNumbers = [];
    for (let i = 0; i < originalNumbers.length; i++) {
        let userInput = prompt('Inserisci il numero ' + (i + 1) + ':');
        let number = parseInt(userInput);
        myNumbers.push(number);
    }
    return myNumbers;
}

// FUNZIONE per avviare il gioco
function startGame() {
    startButton.disabled = true;
    let originalNumbers = uniqueNumber(1, 60, 5);
    displayNumber(originalNumbers);

    setTimeout(function () {
        clearNumber();

        setTimeout(function () {
        let myNumbers = handleUserInput(originalNumbers);
        let correctNumbers = checkNumber(myNumbers, originalNumbers);
        alert("Hai indovinato " + correctNumbers.length + " numeri: " + correctNumbers.join(', '));
        startButton.disabled = false;
        }, 1000); // Timer di 1 secondi dopo la scomparsa dei numer icompare l'ultimo alert
    }, 9000); // Timer di 7 secondi di visibilità per i numeri
}

// Avvia il gioco quando il pulsante viene cliccato
let startButton = document.getElementById('startButton');
startButton.addEventListener('click', startGame);
