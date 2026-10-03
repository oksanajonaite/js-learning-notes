"use strict";

// 5. „tvarkarastisSuPrioritetais“

function tvarkarastisSuPrioritetais(tasks) {
  let sorted = [...tasks].sort((a, b) => a.prioritetas - b.prioritetas); //sort keicia masyva, o ...task padaro jo nauja kopija, kad originalas liktu nepaliestas

  let names = [];
  for (let i = 0; i < sorted.length; i++) {
    names.push(sorted[i].uzduotis);
  }
  return names;
}

let tasks = [
  { uzduotis: "Pasportuoti", prioritetas: 3 },
  { uzduotis: "Išsimiegoti", prioritetas: 2 },
  { uzduotis: "Kartoti JS", prioritetas: 1 }
];

console.log(tvarkarastisSuPrioritetais(tasks));
// ["Kartoti JS", "Išsimiegoti", "Pasportuoti"]


/*

function tvarkarastisSuPrioritetais(tasks) {
  const sorted = [...tasks].sort((a, b) => a.prioritetas - b.prioritetas);
  return sorted.map(task => task.uzduotis);
}
*/