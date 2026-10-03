"use strict";

// 17. `ivertinkSavaite`

function ivertinkSavaite (masyvas) {
  let tingus = 0;
  for (let i = 0; i < masyvas.length; i++) {
    if (masyvas[i] == "tingus") {
      tingus++;
    }

  }
  return `Tinginystė užklupo ${tingus} kartus.`
}

let masyvas = ["motyvuotas", "tingus", "tingus", "normalus", "motyvuotas", "tingus", "ramus"];
console.log(ivertinkSavaite(masyvas)); //Tinginystė užklupo 3 kartus.


/*
const lazyCount = days.filter(day => day === "tingus").length;

arba

function ivertinkSavaite(days) {
  let lazyCount = 0;

  for (let i = 0; i < days.length; i++) {
    if (days[i] === "tingus") {
      lazyCount++;
    }
  }

  return `Tinginystė užklupo ${lazyCount} kartus.`;
}

*/