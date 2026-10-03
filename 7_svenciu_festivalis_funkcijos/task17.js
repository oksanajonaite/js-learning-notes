"use strict";

// 17. Nieko neveikimo detektorius (arrow function)

const canDoNothing = (diena, padarytiDarbai) => {

  if (diena === 7 || padarytiDarbai > 5) return "Gali nieko neveikti";
  return "Dar šiek tiek padirbėk";
};

console.log(canDoNothing(1, 6));
console.log(canDoNothing(7, 0));
console.log(canDoNothing(2, 4));