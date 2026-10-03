"use strict";

// 19. `apskaiciuokBalansoIndeksa`

function apskaiciuokBalansoIndeksa(darbasValandomis, poilsisValandomis) {
  let balansas = poilsisValandomis / darbasValandomis;
  if (balansas < 0.5) {
    return "Reikia atostogų";
  } else if (balansas < 1) {
    return "Geras balansas";
  } else if (balansas === 1) {
    return "Idealus balansas";
  }
}
console.log(apskaiciuokBalansoIndeksa(10, 1)); //Reikia atostogų

/*
function apskaiciuokBalansoIndeksa(workHours, restHours) {
  const balance = restHours / workHours;

  if (balance === 1) return "Idealus balansas";
  if (balance >= 0.5 && balance < 1) return "Geras balansas";
  return "Reikia atostogų";
}
  */
