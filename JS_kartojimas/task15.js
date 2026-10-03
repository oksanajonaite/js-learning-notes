"use strict";

// 15. `numeruokJSDalykus`

function numeruokJSDalykus (masyvas) {
  let sunumeruoti = masyvas.map((m, index) => `${index +1}. ${m}`);
  return sunumeruoti;
}

let masyvas = ["Kintamieji", "Ciklai", "Masyvai", "Funkcijos", "Objektai"];

console.log(numeruokJSDalykus(masyvas));
/*
[
  '1. Kintamieji',
  '2. Ciklai',
  '3. Masyvai',
  '4. Funkcijos',
  '5. Objektai'
]
  */