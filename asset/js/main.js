// prompt per chiedere i km da percorrere
const inputKm = prompt("inserisci i km da percorrere");
console.log(inputKm);

//prompt per chiedere l'eta del passeggero
const inputEta = prompt("inserisci la tua età anagrafica");
console.log(inputEta);

// calcolare i km da percorrere x 0.21 euro al km
let prezzoBase = inputKm * 0.21;
console.log('Prezzo Base: ' + prezzoBase.toFixed(2) + '€');

//condizione if per calcolare sconto minorenne
let prezzoFinale;

if (inputEta < 18) {

    const scontoMin = prezzoBase * 0.20;
    let prezzoScontoMin = (prezzoBase - scontoMin);
    console.log('Prezzo Scontato: ' + prezzoScontoMin.toFixed(2) + '€');
    prezzoFinale = prezzoScontoMin;

}  else if (inputEta >=65) {

    const scontoMax = prezzoBase * 0.40;
    let prezzoScontoMax = (prezzoBase - scontoMax);
    console.log('Prezzo Scontato: ' + prezzoScontoMax.toFixed(2) + '€');
    prezzoFinale = prezzoScontoMax;

}  else {

    console.log('Prezzo definitivo: ' + prezzoBase.toFixed(2) + '€');
    prezzoFinale = prezzoBase;

}

prezzoFinale = prezzoFinale.toFixed(2);

document.getElementById('totale').innerHTML = `prezzo finale: ${prezzoFinale} €`;