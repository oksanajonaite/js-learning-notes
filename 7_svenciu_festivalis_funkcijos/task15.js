"use strict";

//15. Tortų matematikas (arrow function)

const cakePerPerson = (skersmuo, grupes) => {
  let zmones = grupes[0] + grupes[1] + grupes[2];

  if (zmones < 1) {
    zmones = Math.max(grupes[0], grupes[1], grupes[2]); //Math.max grąžina didžiausią iš paduotų skaičių. Jei suma mažesnė nei 1, senoji reikšmė perrašoma.
  }
  let perZmogui = Math.round((skersmuo / zmones) * 100) / 100;
  let ivertinimas = perZmogui < 5 ? "Mažoka" : "Pakankamai";

  return {perZmogui, ivertinimas};
};

console.log(cakePerPerson(30, [2, 3, 2]));
console.log(cakePerPerson(30, [5, 5, 5]));
console.log(cakePerPerson(30, [1, 0, 0]));