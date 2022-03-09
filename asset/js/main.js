// prompt per chiedere i km da percorrere
const inputKm = prompt("inserisci i km da percorrere");
console.log(inputKm);

//prompt per chiedere l'eta del passeggero
const inputEta = prompt("inserisci la tua età anagrafica");
console.log(inputEta);

// calcolare i km da percorrere x 0.21 euro al km
const prezzoBase = inputKm * 0.21;
console.log('Prezzo Base: ' + prezzoBase + '€');