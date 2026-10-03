"use strict";

// 7. Vardadienių sveikintojas (arrow function)

const celebrateNameDay = (name, isWellSlept) => {
  let text = `Sveikiname su vardadieniu, ${name}!`;
  if (!isWellSlept) {
    text += " (bet pirmiau išgerk kavos)";
  }
  return text;
};

console.log(celebrateNameDay("Oksana", true)); //Sveikiname su vardadieniu, Oksana!
console.log(celebrateNameDay("Oksana", false)); //Sveikiname su vardadieniu, Oksana! (bet pirmiau išgerk kavos)
