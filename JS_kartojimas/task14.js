"use strict";

// 14. `sudarykBalansoAtaskaita`

function sudarykBalansoAtaskaita(darbas, poilsis) {
  //darbas.length + poilsis.length galima tik taip skaiciuoti kieki
  let balansas = darbas.concat(poilsis);
  return `Dienos balansas: ${balansas.length} veiklu.`
}

let darbas = ["Mokytis", "Kartoti", "Testuoti"];
let poilsis = ["Pietūs", "Pasivaikščiojimas", "Miegas"];

console.log(sudarykBalansoAtaskaita(darbas,poilsis)); //Dienos balansas: 6 veiklu.

/*
function sudarykBalansoAtaskaita(darbas, poilsis) {
  return `Dienos balansas: ${[...darbas, ...poilsis].length} veiklų.`;
}
  */