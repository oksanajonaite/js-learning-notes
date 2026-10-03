"use strict";

// 5. Knyga

function readBook(chapters) {
  let days = 0;
  let read = 0; 

  while (read < chapters) {
    days++;
    read += days;   // kiekvieną dieną perskaito tiek skyrių, kelinta ta diena
  }

  let average = Math.round(chapters / days * 100) / 100;

  console.log("Įveskite knygos skyrių skaičių: " + chapters);
  console.log("Tadas visą knygą perskaitys per " + days + " dienas (-ų).");
  console.log("Tadas vidutiniškai per dieną perskaitė " + average + " skyrius (-ų).");
}

readBook(8);
console.log("-----");
readBook(17);

/*
Įveskite knygos skyrių skaičių: 8
Tadas visą knygą perskaitys per 4 dienas (-ų).
Tadas vidutiniškai per dieną perskaitė 2 skyrius (-ų).
-----
Įveskite knygos skyrių skaičių: 17
Tadas visą knygą perskaitys per 6 dienas (-ų).
Tadas vidutiniškai per dieną perskaitė 2.83 skyrius (-ų).*/