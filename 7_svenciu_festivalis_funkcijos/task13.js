"use strict";

//13. Dienos sėkmės analizė (arrow function)

const luckCheck = (diena) => {
  if (diena === 13) return "Oi...";
  if (diena % 3 === 0) return "Tokiomis dienomis kaip ši žmonės laimi loterijose";
  if (diena % 2 === 0) return "Rami diena";
  return "Normalu";
}

console.log(luckCheck(13));
console.log(luckCheck(30));
console.log(luckCheck(10));
console.log(luckCheck(29));