// 03 · switch
// Paleisti: node 03-if-switch/07-switch.js

function savaitesDiena(nr) {
  let day;
  switch (nr) {
    case 0:
      day = "Sunday";
      break;              // ⚠️ be break vykdomi ir TOLESNI case
    case 6:
      day = "Saturday";
      break;
    default:              // jei netiko nė vienas case (nebūtinas)
      day = "Workday";
  }
  return day;
}

console.log(savaitesDiena(0)); // Sunday
console.log(savaitesDiena(6)); // Saturday
console.log(savaitesDiena(3)); // Workday

// --- switch lygina per === , todėl tipas SVARBUS ---
switch ("1") {
  case 1:
    console.log("skaičius 1");
    break;
  default:
    console.log('tekstas "1" nesutapo su case 1 ⚠️');
}

// --- Keli case tam pačiam kodui ---
function savaitgalis(nr) {
  switch (nr) {
    case 0:
    case 6:
      return "Weekend";
    default:
      return "Workday";
  }
}
console.log(savaitgalis(6)); // Weekend
console.log(savaitgalis(2)); // Workday

// --- ⚠️ Kas nutinka pamiršus break ---
console.log("--- be break: ---");
switch (1) {
  case 1:
    console.log("case 1");   // ← rastas
  case 2:
    console.log("case 2");   // ← vykdomas irgi!
  case 3:
    console.log("case 3");   // ← ir šitas
}

// --- return funkcijoje veikia kaip break ---
// (matai savaitgalis() pavyzdyje aukščiau — break nereikėjo)
