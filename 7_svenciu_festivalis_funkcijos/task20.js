"use strict";

// 20*. Fantastiškų švenčių generatorius PRO (arrow function + switch)

//butinai naudojame Math.floor - Math.floor renkasi ne pavadinimą, o numerį. Pavadinimą tik po to paima masyvas pagal tą numerį.

const getRandomItem = (list) => list[Math.floor(Math.random() * list.length)];

const randomHoliday = () => {
  const categories = ["technologinė", "maisto", "poilsio"];
  const category = getRandomItem(categories);

  let holidays;

  switch (category) {
    case "technologinė":
      holidays = ["Programuotojų diena", "Klaviatūros pagerbimo diena"];
      break;
    case "maisto":
      holidays = ["Cepelinų diena", "Šaltibarščių diena"];
      break;
    case "poilsio":
      holidays = ["Nieko neveikimo diena", "Vėlyvų pusryčių diena"];
      break;  
  }

  const holiday = getRandomItem(holidays);

  return `${category}: ${holiday}`
}

console.log(randomHoliday());
console.log(randomHoliday());
console.log(randomHoliday());