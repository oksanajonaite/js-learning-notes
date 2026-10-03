"use strict";

/* 3. Snaiges uz lango. 
input 5 ir 3, 2 ir 4. Result: 35; 30.*/

function countSnowflakes(firstSecond, seconds) {

  let current = firstSecond; // snaiges krentancios per 1 sekunde
  let total = 0;             // visu snaigiu skaiciavimas

  for (let i = 1; i <= seconds; i++) {
    total += current;
    current *= 2;
  }

  return total;
}

let input = prompt("Įveskite, kiek snaigių nukrito per pirmąją sekundę ir kiek sekundžių snigo:");
let [firstSecond, seconds] = input.split(" ").map(Number); //split suskaido teksta ties tarpu i masyva, o map kiekviena elementa pavercia skaiciumi

console.log(countSnowflakes(firstSecond, seconds));

// console.log(countSnowflakes(5, 3));
// console.log(countSnowflakes(2, 4)); 