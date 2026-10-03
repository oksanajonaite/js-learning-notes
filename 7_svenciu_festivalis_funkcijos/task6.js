"use strict";

// 6. Kaziuko mugės sprendimų medis (function expression)

const goToFair = function (temp, vejas) {
   if (temp < 0 && vejas > 5) return "NEEIK! Sušalsi!";
   if (temp > 0 && vejas < 5) return "Riestainiai tavęs laukia!";
   return "Gal eik, bet apsirenk.";
};

console.log(goToFair(-1, 6)); //NEEIK! Sušalsi!
console.log(goToFair(1, 4)); //Riestainiai tavęs laukia!
console.log(goToFair(5, 6)); //Gal eik, bet apsirenk.
console.log(goToFair(-5, 2)); //Gal eik, bet apsirenk.