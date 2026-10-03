"use strict";

//14. Pavasario energijos vidurkis (arrow function)

const springEnergy = (e1, e2, e3) => {
  let vidurkis = Math.round(((e1 + e2 + e3) / 3) * 100) / 100;
  return vidurkis > 7 ? "Pavasarinis pakilimas!" : "Laukiam saulės...";
}

console.log(springEnergy(4, 4, 4));
console.log(springEnergy(15.5, 9.75, 3.45));
console.log(springEnergy(10, 10, 10)); 