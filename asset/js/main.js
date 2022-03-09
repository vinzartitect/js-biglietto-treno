// prompt per chiedere i km da percorrere
const inputKm = prompt("inserisci i km da percorrere");
console.log(inputKm);

//prompt per chiedere l'eta del passeggero
const inputEta = prompt("inserisci la tua età anagrafica");
console.log(inputEta);

// calcolare i km da percorrere x 0.21 euro al km
const prezzoBase = inputKm * 0.21;
console.log('Prezzo Base: ' + prezzoBase + '€');

//condizione if per calcolare sconto minorenne
if (inputEta < 18) {
    const scontoMin = prezzoBase * 0.2;
    const prezzoSconto = Math.floor(prezzoBase - scontoMin);
    prezzoSconto = prezzoSconto.toFixed(2);
    console.log('Prezzo Scontato: ' + prezzoSconto + '€');
}  else {
    console.log('Prezzo definitivo: ' + prezzoBase + '€');
}

//condizione if per calcolare sconto maggiore di 65 anni
if (inputEta >=65) {
    const scontoMax = prezzoBase * 0.4;
    const prezzoSconto = Math.floor(prezzoBase - scontoMax);
    console.log('Prezzo Scontato: ' + prezzoSconto + '€');
}  else {
    console.log('Prezzo definitivo: ' + prezzoBase + '€');
}