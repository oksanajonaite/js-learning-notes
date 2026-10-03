"use strict";

//11. Šventės svarbos analizatorius

const holidayPriority = (svente, dienosIki) => {
  let svarba;

  switch (svente) {
    case "Kalėdos":
      svarba = 5;
      break;
    case "Velykos":
      svarba = 4;
      break;
    case "Joninės":
      svarba = 3;
      break;
    case "Cepelinų diena":
      svarba = 2;
      break;
    default:
      svarba = 1;
  }

  const koeficientas = svarba * (30 - dienosIki);
  return `Skubos koeficientas: ${koeficientas}`;
};

console.log(holidayPriority("Kalėdos", 60));
console.log(holidayPriority("Cepelinų diena", 5));
console.log(holidayPriority("Rugsėjo 1-oji", 10));