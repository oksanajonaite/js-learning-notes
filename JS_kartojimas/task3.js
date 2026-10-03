"use strict";

// 3. „sudarykMotyvaciniPlana“

function sudarykMotyvaciniPlana(masyvas) {
  let naujasMasyvas = [];

  for (let i = 0; i < masyvas.length; i++) {
    naujasMasyvas.push(masyvas[i] + " - Aš galiu!");
  }
  return naujasMasyvas;
}

let masyvas = ["Kartoti JS", "Sportuoti", "Perskaityti dokumentacią"];

console.log(sudarykMotyvaciniPlana(masyvas));

/*
'Kartoti JS - Aš galiu!',
  'Sportuoti - Aš galiu!',
  'Perskaityti dokumentacią - Aš galiu!'
  */