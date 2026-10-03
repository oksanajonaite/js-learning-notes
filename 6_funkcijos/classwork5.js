"use strict";

/*Funkcija priima du ingredientus: times yra skaičius (kiek kartų kartoti), 
o action yra kita funkcija. Būtent dėl to repeat yra HOF.*/

function repeat(times, action) {
  for (let i = 1; i <= times; i++) {
    action(i);
  }
}

/*function doItWith(value, action) {
  action(value);
}

doItWith(5, (x) => console.log(x * 2));   // 10
doItWith("Oksana", (name) => console.log(`Labas, ${name}`));*/