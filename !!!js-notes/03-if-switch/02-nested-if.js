// 03 · Sudėtinis (nested) if — if if viduje
// Paleisti: node 03-if-switch/02-nested-if.js

function palygink(val1, val2, operation) {
  if (operation === "<") {
    if (val1 < val2) console.log("Val1 < val2");
    else             console.log("Val1 >= val2");
  } else if (operation === ">") {
    if (val1 > val2) console.log("Val1 > val2");
    else             console.log("Val1 <= val2");
  } else {
    console.log("Nežinoma operacija");
  }
}

palygink(5, 10, "<");   // Val1 < val2
palygink(5, 10, ">");   // Val1 <= val2
palygink(5, 10, "!");   // Nežinoma operacija

// --- Dažnai nested if galima sutrumpinti su && ---
const amzius = 20;
const turiBilieta = true;

// Nested:
if (amzius >= 18) {
  if (turiBilieta) {
    console.log("Įleidžiam ✅");
  }
}

// Trumpiau ir aiškiau:
if (amzius >= 18 && turiBilieta) {
  console.log("Įleidžiam ✅");
}

// --- Bet kartais nested reikalingas: kai kiekvienam lygiui yra savas else ---
if (amzius >= 18) {
  if (turiBilieta) console.log("Įleidžiam");
  else console.log("Nusipirk bilietą");
} else {
  console.log("Per jaunas");
}
