"use strict";

// 16. `ieskokSavaitgalio`

function ieskokSavaigalio(masyvas) {
  for (let i = 0; i < masyvas.length; i++) {
    if (masyvas[i] < 120) return "Puiku - rastas savaitgalis!";
  }
    return "Reikia poilsio dienos!";
  }

  let masyvas= [180, 240, 300, 200, 400, 50, 60];

  console.log(ieskokSavaigalio(masyvas)); //Puiku - rastas savaitgalis!

  /*
  function ieskokSavaitgalio(minutes) {
  return minutes.some(m => m < 120)
    ? "Puiku – rastas savaitgalis!"
    : "Reikia poilsio dienos!!!";
}
    */