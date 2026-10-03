"use strict";

// 3. Dienos nuotaikos prognozė (function declaration + switch)

function dayMood(day) {

let mood;

  switch (day) {
    case 1:
      mood = "Pirmadienis. Stiprios kavos prašau.";
      break;
    case 2:
      mood = "Antradienis. Jau geriau.";
      break;
    case 3:
      mood = "Trečiadienis. Pusė kelio!";
      break;
    case 4:
      mood = "Ketvirtadienis. Dar truputį.";
      break;
    case 5:
      mood = "Penktadienis. Širdis dainuoja!";
      break;
    case 6:
      mood = "Šeštadienis. Galima ilgiau pamiegoti.";
      break;
    case 7:
      mood = "Sekmadienis. Nieko neveikimo menas.";
      break;
    default:
      return "Tokios dienos nėra!";
  }
  
  if (day == 5 || day == 6) {
    mood = mood + " + šventinė atmosfera";
  }
  return mood;
};

console.log(dayMood(5)); //Penktadienis. Širdis dainuoja! + šventinė atmosfera
console.log(dayMood(2)); //Antradienis. Jau geriau.
console.log(dayMood(9)); //Tokios dienos nėra!