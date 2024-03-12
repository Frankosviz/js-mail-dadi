// ESERCIZIO DI OGGI

// MAIL 
// Chiedi all utente la sua Email
// controlla che sia nella list di chi può accedere
// stampa un messaggio appropriato sul esito del controllo

// DADI
// generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// ()
// Raccogliere tutto sui click del bottone
// Saranno due bottoni
// Schiaccio email e spunta laltro
// Schiaccio i bottoni e gioco ai dadi

// -

// Mail - Procedimento....
// Inizio creando un input nell' html con un bottone
// Dall'input mi ricavo l'email dell'utente tramite il click del bottone
// Creo una variabile list con le condizioni che, se vere, daranno la possibilità di far accedere l'utente
// (Immaginiamo che l'utente voglia accedere alla pagina gmail con la propria mail avendone create più di una)
// Associamo il nostro bottone su html con javascript

     const button = document.querySelector('.email');
     console.log(button);

//  Creiamo la funzione associata al click

      button.addEventListener('click', function(){

// // //  Dichiariamo un array con le email valide per l'accesso

      let trueEmail = ['leo@gmail.com', 'ale@gmail.com', 'alex@gmail.com', 'aless@gmail.com', 'ledio@gmail.com'];
      console.log(trueEmail);
     
// // //  L'utente ci scrive la sua email, prendiamo il valore tramite value

      let userWord = document.getElementById('userValue').value;
      console.log(userWord);

// //     // Confrontiamo la email che mi ha dato l'utente con tutte le email che ho nell'array-true

// //     // Quindi creiamo una variabile

      let finded = false;

// //     // Andiamo a confrontare il tutto con il ciclo for

      for(let i = 0; i < trueEmail.length; i++){
         if(userWord.toLowerCase() === trueEmail[i].toLowerCase()){ 
         finded = true;
         }
     }

     const result = document.getElementById('result')

      if(finded === true){
          result.innerHTML = 'Perfetto, puoi accedere alla tua Email! :)';
      } else {
          result.innerHTML = 'Accesso negato, inserisci i dati correttamente';
      }
 })

// Dadi - Procedimento....

  const buttonDadi = document.querySelector('.dadi');

  buttonDadi.addEventListener('click', function(){
      let output = document.getElementById('resultDadiUser')
     output.innerHTML = ''
      let userNumber = getRndInteger(1, 6);
     console.log(numeriNumber);
     let pcNumber = getRndInteger(1, 6);
     console.log(pcNumber);
     if(userNumber < pcNumber){
      console.log('User ha vinto')
     } else if (userNumber > pcNumber){
      console.log('Pc ha vinto')
     } else {     
      console.log('Avete pareggiato')
     }
  });




