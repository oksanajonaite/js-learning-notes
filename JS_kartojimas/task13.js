"use strict";

// 13. `skaiciuokAtideliojimą`

function skaiciuokAtideliojima(minutes) {
  let sum = 0;
  for (let i = 0; i < minutes.length; i++) {
    sum = sum + minutes[i];
  }
  if (sum > 100) {
    return `Uff... atidėliojimo per daug: ${sum} min`;
  } else {
    return `Pakenčiama: ${sum} min`;
  }
}

console.log(skaiciuokAtideliojima([20, 30, 40])); //Pakenčiama: 90 min

/*
function skaiciuokAtideliojima(minutes) {
  let sum = minutes.reduce((total, m) => total + m, 0);

  return sum > 100
    ? `Uff... atidėliojimo per daug: ${sum} min`
    : `Pakenčiama: ${sum} min`;
}
    */
