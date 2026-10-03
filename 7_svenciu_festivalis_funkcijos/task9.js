"use strict";

// 9. Šakočio sezono detektorius (arrow function)

const shouldEatCake = (month, hungerLevel) => {
  if (month === 12 && hungerLevel > 5) return "Šakotis privalomas";
  if (month !== 12 && hungerLevel > 7) return "Na jau gerai... galima mažą gabalėlį";
  return "Gal užteks arbatos?";
};

console.log(shouldEatCake(12, 6));
console.log(shouldEatCake(1, 8));
console.log(shouldEatCake(7, 1));
console.log(shouldEatCake(12, 3));