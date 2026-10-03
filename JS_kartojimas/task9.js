"use strict";

// 9. `atrinkPoilsioVeiklas`

let atrinkPoilsioVeiklas = (tasks) => {
  let filteredTask = [];
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].length > 6) {
      filteredTask.push(tasks[i]);
    }
  }
return filteredTask;
}

let tasks = [
  "Mokytis JS",
  "Kartoti medžiagą",
  "Pietūs",
  "Pasivaikščioti",
  "Serialas",
  "Žaidimai",
];

console.log(atrinkPoilsioVeiklas(tasks));
/*
[
  'Mokytis JS',
  'Kartoti medžiagą',
  'Pasivaikščioti',
  'Serialas',
  'Žaidimai'
]
  */

