// 08 · Specialieji (escape) simboliai
// Paleisti: node 08-strings/02-specialieji-simboliai.js
//
// | Simbolis   | Reikšmė                                              |
// | \n         | New line — nauja eilutė                              |
// | \r         | Carriage return. Windows failuose naujai eilutei      |
// |            | naudojama \r\n, kitur — tik \n                       |
// | \' , \"    | Kabutės                                              |
// | \\         | Pats backslash                                       |
// | \t         | Tab                                                  |
// | \b \f \v   | Backspace, Form Feed, Vertical Tab —                 |
// |            | palikti dėl suderinamumo, nebenaudojami              |

console.log("Pirma eilutė\nAntra eilutė");
// Pirma eilutė
// Antra eilutė

console.log("Vardas:\tAna\nAmžius:\t25");
// Vardas:	Ana
// Amžius:	25

console.log("Kelias: C:\\Users\\Lenovo");   // Kelias: C:\Users\Lenovo
console.log('Kabutė: \'');                   // Kabutė: '
console.log("Kabutė: \"");                   // Kabutė: "

// --- ⚠️ Vienas backslash "dingsta" ---
console.log("C:\Users");    // C:Users ⚠️ \U nieko nereiškia, tad backslash dingo
console.log("C:\\Users");   // C:\Users ✅ backslash rašomas dvigubai

// --- \t lentelei ---
const prekes = [["Duona", 1.2], ["Pienas", 0.9], ["Sūris", 4.5]];
for (const [pav, kaina] of prekes) {
  console.log(`${pav}\t${kaina} €`);
}

// --- Kiek simbolių iš tikrųjų? ---
console.log("a\nb".length);    // 3 ← \n yra VIENAS simbolis, ne du
console.log("a\\b".length);    // 3 ← a, \, b
console.log("a\tb".length);    // 3

// --- Backticks: \n vis tiek veikia, bet nauja eilutė paprastesnė ---
console.log(`Pirma
Antra`);
