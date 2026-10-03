"use strict";

//16. Arbatos orakulas PRO (function expression)

// Užduotis sako: (A ARBA B) IR nemiegojo. Vadinasi, visa „arba" dalis turi būti savo skliaustuose
//Kai sąlygoje maišosi && ir ||, visada dėk skliaustus, net jei atrodo, kad jų nereikia. Taip nesuklysi dėl prioritetų, ir kitam skaitančiam bus aiškiau.

const teaOracle = function (temp, vejas, arMiegojo) {
  if ((temp < 10 || (temp < 13 && vejas > 5)) && !arMiegojo) return "Karšta arbata privaloma!"; //&& turi aukštesnį prioritetą už ||, panašiai kaip daugyba už sudėtį.Reikalingi skliaustai.
  if (temp > 15 && vejas <= 5 && arMiegojo) return "Gal šalta arbata?";
  return "Arbata pagal nuotaiką.";
};

console.log(teaOracle(9, 5, false));
console.log(teaOracle(12, 7, false));
console.log(teaOracle(9, 5, true));
console.log(teaOracle(20, 3, true));
console.log(teaOracle(20, 8, true));