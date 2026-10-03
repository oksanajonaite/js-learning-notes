"use strict";

// 18. Šventinės dvasios progresas (arrow function)

const holidaySpirit = ( s1, s2, s3, s4, s5) => {
  let suma = s1 + s2 + s3 + s4 + s5;

  let truksta = 50 - suma; // nenaudojama salyga?

  if (suma > 40) return "Šventinė dvasia čia!";
  if (suma >= 20) return "Artėjame...";
  return "Reikia daugiau mandarinų.";
};

console.log(holidaySpirit(10, 10, 10, 10, 10));
console.log(holidaySpirit(2, 3, 4, 5, 6));
console.log(holidaySpirit(10, 10, 10, 1, 1));