// Consegna
// L’utente indica un livello di difficoltà
//  in base al quale viene generata una griglia di 
//  gioco quadrata, in cui ogni cella contiene un
//   numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella,
//  la cella cliccata si colora di azzurro.
// Consigli del giorno: 
// Facciamo prima la parte grafica a mano 
// e solo dopo passiamo allo script
// Scriviamo prima cosa vogliamo fare passo 
// passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() 
// per capire se stiamo ricevendo i dati giusti.
// Le validazioni e i controlli possiamo farli
// in un secondo momento.

//richiamo il container playfield

let playfield = document.querySelector('.playfield');

//ciclo for che crea div da inserire in playflied
for(i = 0; i < 100; i++) {
    let square_div = document.createElement('div');
    square_div.classList.add("square-100");
    playfield.append(square_div);
}