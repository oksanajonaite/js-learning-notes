"use strict";

// 12. `trumpinkDienosPlana`

function trumpinkDienosPlana(tasks) {
  return tasks.slice(0, 5).sort();
}

let tasks = [
  "Mokytis JS",
  "Kartuoti",
  "Sportuoti",
  "Sutvarkyti kambarį",
  "Paskaityti",
  "Išnešti šiukšles",
];

console.log(trumpinkDienosPlana(tasks));



//   let plan = tasks;

//   if (plan.length > 5) {
//     plan = plan.slice(0,5); //graziname nauja masyva nuo 0 iki 5 (5neiskantant!)
//   }

//   plan.sort(); //rikiuoja pagal abecele
//   return plan;
// }


/*
[
  'Kartuoti',
  'Mokytis JS',
  'Paskaityti',
  'Sportuoti',
  'Sutvarkyti kambarį'
]
  */