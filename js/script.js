// ESERCIZIO DI OGGI

// Mail 
// Chiedi all utente la sua Email
// controlla che sia nella list di chi può accedere
// stampa un messaggio appropriato sul esito del controllo

// Dadi
// generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// ()
// Raccogliere tutto sui click del bottone
// Saranno due bottoni
// Schiaccio email e spunta laltro
// Schiaccio i bottoni e gioco ai dadi

-

Mail
Inizio creando un input nel html con un bottone
Dall'input mi ricavo l'email dell'utente tramite il click del bottone
Creo una variabile list con le condizioni che, se vere, daranno la possibilità di far accedere l'utente
(Immaginiamo che l'utente voglia accedere alla pagina gmail con la propria mail avendone create più di una)
 let text = ['Tavolo',];

// Dichiariamo un array con delle parole

// let trueEmail = ['leo@gmail.com', 'ale@gmail.com', 'alex@gmail.com', 'aless@gmail.com', 'ledio@gmail.com'];

// // L'utente ci indica una parola

//    let userWord = document.getElementById('userValue').value;

// // Confrontiamo la parola che mi ha dato l'utente con tutte le parole che ho nell'array

// // Quindi creiamo una variabile

// let trovato = false;

// // Andiamo a confrontare il tutto con il ciclo for

// for(let i = 0; i < trueEmail.length; i++){

//     // Facciamo il confronto tra userWord e trovato

//     if(userWord === trueEmail[i]){
//         trovato = true;
//     }
// }

// if(trovato){
//     console.log('Perfetto, puoi accedere alla tua Email!');
// } else {
//     console.log('Accesso negato, inserisci i dati correttamente');
// }

// altro

// const button = document.querySelector('.btn');

// button.addEventListener('click', function(){

//     let text = ['Tavolo', 'Sedia', 'Computer', 'Mouse', 'Monitor'];
    
//     // prendiamo il valore userWord nella funzione click - se l'avessimo presa fuori dal click non avrebbe avuto un valore

//     let userWord = document.getElementById('userValue').value;

//     let trovato = false;

//     for(let i = 0; i < text.length; i++){
//         if(userWord.toLowerCase() === text[i].toLowerCase()){ 
//             trovato = true;
//         }
//     }
//     const result = document.getElementById('result')
//     if(trovato){
//         result.innerHTML = 'Questo è disponibile :)';
//     } else {
//         result.innerHTML = 'Non è disponibile :(';
//     }
// })