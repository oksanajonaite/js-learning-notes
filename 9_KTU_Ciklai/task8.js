"use strict";

// 7. Begimo varzybos

function findFastest(times) {
  let runners = times.length;
  let total = 0;
  let fastest = times[0];

  console.log("Kiek dalyvavo bėgikų: " + runners);
  for (let i = 0; i < runners; i++) {
    console.log("Įveskite " + (i + 1) + " bėgiko laiką: " + times[i]);
    total += times[i];

    if (times[i] < fastest) {
      fastest = times[i];
    }
  }

  let average = total / runners;
  let difference = Math.round(average - fastest);

  console.log("Greičiausio bėgiko laikas: " + fastest + " sek.");
  console.log("Jis buvo " + difference + " sek geresnis už vidurkį.");
}

findFastest([25, 20, 32]);
console.log("-----");
findFastest([22, 20, 25, 25]);

/*Įveskite 2 bėgiko laiką: 20
Įveskite 3 bėgiko laiką: 32
Greičiausio bėgiko laikas: 20 sek.
Jis buvo 6 sek geresnis už vidurkį.
-----
Kiek dalyvavo bėgikų: 4
Įveskite 1 bėgiko laiką: 22
Įveskite 2 bėgiko laiką: 20
Įveskite 3 bėgiko laiką: 25
Įveskite 4 bėgiko laiką: 25
Greičiausio bėgiko laikas: 20 sek.
Jis buvo 3 sek geresnis už vidurkį.*/