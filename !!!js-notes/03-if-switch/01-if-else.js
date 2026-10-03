// 03 · if / else if / else
// Paleisti: node 03-if-switch/01-if-else.js

function patikrink(a) {
  if (a > 10) {
    console.log(`${a}: daugiau nei 10`);
  } else if (a > 0 && a <= 10) {   // tikrinama TIK jei pirma sąlyga buvo false
    console.log(`${a}: nuo 1 iki 10`);
  } else if (a === 0) {
    console.log(`${a}: lygu 0`);
  } else {                          // jei NĖ VIENA sąlyga netiko
    console.log(`${a}: mažiau nei 0`);
  }
}

patikrink(25);   // 25: daugiau nei 10
patikrink(7);    // 7: nuo 1 iki 10
patikrink(0);    // 0: lygu 0
patikrink(-3);   // -3: mažiau nei 0

// --- Svarbu: įvykdomas TIK PIRMAS tinkantis blokas ---
const sk = 100;
if (sk > 10) {
  console.log("didesnis už 10");   // ← tik šitas
} else if (sk > 50) {
  console.log("didesnis už 50");   // ← nepasiekiama, nors sąlyga teisinga!
}

// --- else if ir else yra NEBŪTINI ---
if (sk > 0) console.log("teigiamas");

// --- Jei bloke viena eilutė, {} galima nerašyti ---
const ok = true;
if (ok) console.log("Taip!");

// ⚠️ Bet geriau VISADA rašyk {} — antra eilutė netyčia liks už if ribų:
if (false)
  console.log("nebus rodoma");
  console.log("bus rodoma VISADA ⚠️");  // šita jau ne if viduje
