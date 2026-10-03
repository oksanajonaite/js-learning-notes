"use strict";

//12. Dovanų biudžetas (arrow function)

const giftsBudget = (k1, k2, k3) => {
  let suma = Math.round((k1 + k2 + k3) * 100) / 100; //Daugyba iš 100 turi vykti prieš apvalinimą, taigi Math.round skliaustuose:
  let statusas = suma > 50 ? "Biudžetas sprogo" : "Tilpai";
  return {suma, statusas};
};

console.log(giftsBudget(10.75, 5.3, 2.1));
console.log(giftsBudget(20, 20, 30));
console.log(giftsBudget(19.99, 19.99, 10.5));