"use strict";

// 10. Bulvių patiekalų dvikova (arrow function)

/*const random = Math.random();        // 0.6234
const scaled = random * 5;           // 3.117
const index = Math.floor(scaled);    // 3
const dish = dishes[index];          // "Bulvinė košė"*/

"use strict";

const getRandomDish = (list) => list[Math.floor(Math.random() * list.length)];

const potatoBattle = () => {
  const dishes = [
    "Bulviniai blynai",
    "Vedarai",
    "Šaltibarščiai su bulvėm",
    "Bulvinė košė",
    "Bulvių plokštainis"
  ];

  const first = getRandomDish(dishes);
  const second = getRandomDish(dishes);

  /* ternary
  return first === second
  ? `Lemtingas sutapimas! Valgysi dvigubą ${first} porciją!`
  : `Šiandien rinkis tarp ${first} ir ${second}!`;*/

  if (first === second) {
    return `Lemtingas sutapimas! Valgysi dvigubą ${first} porciją!`;
  }
  return `Šiandien rinkis tarp ${first} ir ${second}!`;
};

console.log(potatoBattle());
console.log(potatoBattle());
console.log(potatoBattle());