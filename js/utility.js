// Lezione di oggi in classe

// let elTesto = document.getElementById('testo');

// let elColore = document.getElementById('colore');

// let elForma = document.getElementById('forma');

// let elButton = document.querySelector('.btn.btn-success');

// //console.log(elTesto, elColore, elForma, elButton);

// let elBox = document.querySelector('.box');

// //console.log(elBox);

// // Abbiamo preso tutto cio che ci serve dall html
// //Adesso aggiungiamo un event in questo caso click

// console.log(forma.classList);

// elButton.addEventListener('click' , function(){

//     //console.log('Hai cliccato il bottone');

//     let testo = elTesto.value;
//     let colore = elColore.value;
//     let forma = elForma.value;
//     console.log(testo, colore, forma);
//     let formaClass = (forma === 'circle') ? 'rounded-circle' : '';
//     //'rounded-circle'
//     // elBox.classList.add('bg-black');
//     // elBox.classList.remove('d-none');
//     elBox.innerHTML = testo;

//     //elBox.classList.toggle('bg-black'); prova
//     // elBox.className = '';
//     elBox.className = 'box' + colore + '' + formaClass; // ClassName viene usato così
//     // elBox.classList.add(colore);
//     // elBox.classList.remove('d-none');

// });

// //Aggiungiamo una funzione come secondo valore da passare a elButton


// 08/03
// Esercizio in classe - Quadrati Dinamici

// Creiamo un quadrato grande tipo scacchiera
// 10 quadrati per lato
// ognuno 80px
// Creare una griglia quadrata di 100 quadrati (10 + 10)
// Centrata in pagina con un numero progressivo al centro di ogni quadrato
// I quadrati avranno lo sfondo blu



// template quadratini - Esercizio svolto in classe

/* <div id="boxes" class="d-flex justify-content-center align-content-center gap-2  ">
            <div class="box">

            </div>

            <div class="box">

            </div>
    </div> */

// const squareWrapper = document.createElement('div');
// console.log(typeof squareWrapper);
// // consolidato che squareWrapper è un oggetto
// squareWrapper.className = 'd-flex justify-content-between align-content-center flex-wrap'
// // con className andiamo ad incollare le classi di html da Js
// squareWrapper.setAttribute('id','boxes');
// //console.dir(squareWrapper);

// let numBox = 100; 
// let tmpHtml = ''; //variabile preparata per contenere l'html

// // Facciamo un ciclo per stampare tutti i quadrati

// for(let i = 0; i < numBox; i++){
//     tmpHtml += `<div class="box">${i + 1}</div>`;
// }

// squareWrapper.innerHTML = tmpHtml;
// console.log(squareWrapper);

// // mettiamo la griglia con i quadrati gia pronta tutta dentro la pagina html

// const container = document.querySelector('.container');
// container.append(squareWrapper);

// const miaStringa = "Rosso" + "Acceso";
// console.log(miaStringa);

// let miaVariabile = 'Stringa';
// let numero = 23;
// let myBool = true;

// //undefined
// //null

// let classe123 = 

// PUSH ci fa aggiungere un elemento alla fine del nostro array
// UNSHIFT ci fa inserire un elemento all'inizio del nostro array
// POP rimuove l'ultimo elemento di un array
// SHIFT rimuove il primo elemento di un array



// Esempio
// class123.push('Angelo Ciulla');
// class123.unshift('Andrea Sgura');
// let exUltimo = classe123.pop();

// Scrivere un array di numeri
// Stampare tutti i numeri nell'array

// let mynumbers = [1,3,7,5,9,2,8];

// console.log(mynumbers);

// console.log(mynumbers[0]);

// // ora li vogliamo stampare tutti quanti in console
// // Andiamo di ciclo

// for(let i = 0; i < mynumbers.lenght; i++){
//     console.log;(mynumbers[i]);
// }


//Esercizio in classe - Stampiamo i numeri sopra citati in modo decrescente
// for(let i = mynumbers.length - 1; i >= 0; i--){
//     console.log(mynumbers[i]);
// }

// Creiamo un ciclo che stampa solo i numeri dispari
// for(let i = 0; i < mynumbers.length; i++){
//     // let dispari = mynumbers[i] % 2 !== 0;
//     if(mynumbers[i] % 2 !== 0;){
//         console.log(mynumbers[i]);
//     }
// }




// Dichiariamo un array con delle parole

// let text = ['Tavolo', 'Sedia', 'Computer', 'Mouse', 'Monitor'];

// // L'utente ci indica una parola

// let userWord = 'Tastiera';

// // Confrontiamo la parola che mi ha dato l'utente con tutte le parole che ho nell'array

// // Quindi creiamo una variabile

// let trovato = false;

// // Andiamo a confrontare il tutto con il ciclo for

// for(let i = 0; i < text.length; i++){

//     // Facciamo il confronto tra userWord e trovato

//     if(userWord === text[i]){
//         trovato = true;
//     }
// }

// if(trovato){
//     console.log('Si ce l\'ho');
// } else {
//     console.log('Non ce l\'ho');
// }


// Altro Esercizio


// let numeriRandom = [];

// let numeriDaInserire = 10;

// // Vogliamo mettere dentro questo array 10 numeri creati randomicamente

// // getRndInteger(min, max) - Funzione per numeri random

// for(let i = 0; i < 10; i++){
//     numeriRandom.push(getRndInteger(1, 100));
// }

// console.log(numeriRandom);





// Esercizio



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


// Altro Esercizio

// creo un array di img - ci inseriamo una serie di img che voglio visualizzare nella mia html
// let images = [
//     'fritz';
//     'fuffy';     //diciamo che sono 3 img jpg
//     'trilly';
// ];
// const result = document.getElementById('result');
// // Template da stampare in html
// //<img src="" alt="fritz" class="img-fluid ">
// // Le immagini che stamperemo andranno nel nostro div id='result'

// // Creiamo una variabile dove poi andremo ad aggiungere le nostre immagini

// let tmpHtml = '';

// for (let i = 0; i < images.length; i++){
//     tmpHtml += `
//     <img src="" ${images[i]} alt="${images[i]}" class="img-fluid ">
//     `
// }

// console.log(tmpHtml);

// result.innerHTML = tmpHtml;



// Altro esercizio con gli attributi di sopra;

//  let images = [
//      'fritz';
//      'fuffy';     //diciamo che sono 3 img jpg
//      'trilly';
//  ];
// // Andiamo a selezionare i nostri box
//  const Boxes = document.getElementsByClassName('box');
//  console.log(boxes);

//  for(let i = 0; i < boxes.length; i++){
//     boxes[i].classList.add('bg-success')

//     // abbiamo aggiunto la classe success a tutti i nostri box
//     // per fare un quadrato pari di un colore e dispari di un altro colore
//     if(i % 2)
//     boxes[i-1].classList.add('bg-success');s
//  }


ESERCIZIO DI OGGI

Mail 
Chiedi all utente la sua Email
controlla che sia nella list di chi può accedere
stampa un messaggio appropriato sul esito del controllo

Dadi
generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
()
Raccogliere tutto sui click del bottone
Saranno due bottoni
Schiaccio email e spunta laltro
Schiaccio i bottoni e gioco ai dadi