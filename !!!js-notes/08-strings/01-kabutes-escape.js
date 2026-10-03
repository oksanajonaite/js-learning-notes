// 08 · Kabutės ir escape simboliai
// Paleisti: node 08-strings/01-kabutes-escape.js

// --- 3 būdai užrašyti tekstą ---
const a = "dvigubos kabutės";
const b = 'viengubos kabutės';
const c = `backticks (atbulinės)`;
console.log(a, "|", b, "|", c);

// --- Kėlimas į naują eilutę su PAPRASTOMIS kabutėmis: \n ---
let guestList = "Guests:\n * John\n * Pete\n * Mary";
console.log(guestList);
// Guests:
//  * John
//  * Pete
//  * Mary

// --- Kėlimas į naują eilutę su BACKTICKS: tiesiog spaudi Enter ---
let str2 = `Hello
World`;
console.log(str2);
// Hello
// World

// --- Kabučių "escape", kai jos sutampa su teksto kabutėmis ---
console.log('I\'m the Walrus!');   // I'm the Walrus!
console.log("Jis pasakė \"labas\""); // Jis pasakė "labas"

// --- Su backticks kabutės escape simboliu NEŽYMIMOS ---
console.log(`I'm the Walrus!`);    // I'm the Walrus!
console.log(`Jis pasakė "labas"`); // Jis pasakė "labas"

// 💡 Kabutes žymėti reikia TIK tada, kai string'ui aprašyti naudojamos
//    kabutės sutampa su tekste esančiomis kabutėmis.
//    Paprasčiausias sprendimas — pasirinkti KITOKIAS kabutes:
console.log("I'm the Walrus!");    // veikia be jokio \
console.log('Jis pasakė "labas"'); // irgi veikia

// --- Backticks dar moka įterpti reikšmes: ${} ---
const vardas = "Ana";
console.log(`Labas, ${vardas}! ${2 + 3}`); // Labas, Ana! 5
