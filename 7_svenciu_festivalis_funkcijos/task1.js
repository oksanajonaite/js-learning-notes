"use strict";

// 1. Cepelinų kalorijų analizatorius (arrow function + ternary)

let cepelinuAnalize = (kiekCepelinu) => {
    let kalorijos = kiekCepelinu * 350;
    let zinute = kalorijos > 1000 ? "Ufff... čia rimtas balius!" : "Dar gali judėti po valgio.";
    return {kalorijos, zinute};
}

let rezultatas = cepelinuAnalize(10);
console.log(rezultatas); //{ kalorijos: 3500, zinute: 'Ufff... čia rimtas balius!' }