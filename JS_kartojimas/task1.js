"use strict";

// 1. „suskaiciuokDienosKrūvį“

function suskaiciuokDienosKruvi(darbas, mokslas) {
  let kruvis = darbas + mokslas;
  if (kruvis > 10) {
    return `Per stipriai varai! Šiandien: ${kruvis} val.`;
  } else {
    return `Gerai paskirstyta diena: ${kruvis} val.`;
  }
}

console.log(suskaiciuokDienosKruvi(4, 7)); //Per stipriai varai! Šiandien: 11 val.
