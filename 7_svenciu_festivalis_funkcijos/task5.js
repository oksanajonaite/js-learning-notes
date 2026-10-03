"use strict";

// 5. Žuvienės dienos planuotojas (arrow function)

const fishNeed = (g1, g2, g3) => {
  let zmones = g1 + g2 + g3;
  let zuvis = Math.round(zmones * 0.25 * 100) / 100; //suapvalinimas 2 sk po kablelio
  let zinute = zuvis > 2 ? "Reikės didelio puodo!" : "Užteks mazo puodo!";
  return {zmones, zuvis, zinute };
};

console.log(fishNeed(2, 2, 2)); //{ zmones: 6, zuvis: 1.5, zinute: 'Užteks mazo puodo!' }
console.log(fishNeed(10, 2, 2)); //{ zmones: 14, zuvis: 3.5, zinute: 'Reikės didelio puodo!' }
console.log(fishNeed(3, 3, 2)); //{ zmones: 8, zuvis: 2, zinute: 'Užteks mazo puodo!' }