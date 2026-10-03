"use strict";

// 7. Karnavalas

function carnival(scores) {
  let total = 0;
  let passed = 0;
  let i = 0;

  while (scores[i] !== 0) {
    console.log("Įveskite kiek balų gavo mokinys: " + scores[i]);
    total++;

    if (scores[i] >= 5) {
      passed++;
    }
    i++;
  }

  console.log("Į karnavalą ėjo " + total + " mokiniai, pateko " + passed + ".");
}

carnival([4, 2, 6, 8, 5, 0]);
console.log("-----");
carnival([5, 5, 1, 2, 6, 0]);

/*
Įveskite kiek balų gavo mokinys: 4
Įveskite kiek balų gavo mokinys: 2
Įveskite kiek balų gavo mokinys: 6
Įveskite kiek balų gavo mokinys: 8
Įveskite kiek balų gavo mokinys: 5
Į karnavalą ėjo 5 mokiniai, pateko 3.
-----
Įveskite kiek balų gavo mokinys: 5
Įveskite kiek balų gavo mokinys: 5
Įveskite kiek balų gavo mokinys: 1
Įveskite kiek balų gavo mokinys: 2
Įveskite kiek balų gavo mokinys: 6
Į karnavalą ėjo 5 mokiniai, pateko 3.
*/