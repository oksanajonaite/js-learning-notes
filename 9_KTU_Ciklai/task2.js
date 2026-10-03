"use strict";

/* 2. Kelias i mokykla
input 15, 426. Result: 1 ir 2; 42 ir 43 */

function countClapsAndClicks (steps) {
  let claps = 0;
  let clicks = 0;

  for (let i = 1; i <= steps; i++) {
    if (i % 10 == 0) { // skaicius baigiasi 0
      claps++;
    }
    else if (i % 10 == 5) { //skaicius baigiasi 5, bet su else if, jau nebeziurime skaiciu kurie baigiasi 0, jei rinktumemes tik if, tai ziuretume visus skaicius
      clicks++;
    }
  }

  return `Suplojimų bus: ${claps}\nSpragtelėjimų bus: ${clicks}`

}

let steps = Number(prompt("Įveskite žingsnių kiekį iki mokyklos:"));
console.log(countClapsAndClicks(steps));

/*Suplojimų bus: 1
Spragtelėjimų bus: 2 
Suplojimų bus: 42
Spragtelėjimų bus: 43
*/