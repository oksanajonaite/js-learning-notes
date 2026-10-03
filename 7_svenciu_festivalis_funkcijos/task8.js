"use strict";

// 8. Programuotojo produktyvumo skaičiuoklė (arrow function)

const devMotivation = (kavosPuodeliai, eilutesKodo, klaidos) => {
  let index = (eilutesKodo - klaidos) * kavosPuodeliai;

  if (index < 20) return "Reikia dar kavos...";
  if (index <= 100) return "Ne blogai";
  return "Super puikiai programuoju";
};

console.log(devMotivation(5, 50000, 1000));
console.log(devMotivation(1, 100, 100));
console.log(devMotivation(0, 0, 100));
console.log(devMotivation(1, 60, 10));
console.log(devMotivation(1, 120, 20));