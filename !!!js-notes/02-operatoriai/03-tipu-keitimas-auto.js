// 02 · Automatinis (implicit) tipų keitimas
// Paleisti: node 02-operatoriai/03-tipu-keitimas-auto.js
//
// JS pats bando paversti tipus, kai jie nesutampa. Kartais tai patogu,
// kartais — spąstai.

// --- - * / % paverčia tekstą į skaičių ---
console.log("6" / "2");   // 3
console.log("6" - 2);     // 4
console.log("6" * 2);     // 12
console.log("6" % 4);     // 2

// --- ⚠️ BET + su tekstu reiškia SUJUNGIMĄ ---
console.log("6" + 2);     // "62"  ⚠️
console.log(2 + "6");     // "26"  ⚠️
console.log(typeof ("6" + 2)); // string

// --- Praktiškas atvejis: prompt visada grąžina string ---
let height = 30;
let lives = "3";          // tarkim, gauta iš prompt()

console.log(height + lives);    // "303" ⚠️ ne tai, ko norėjome
console.log(height + +lives);   // 33 ✅ unarinis + paverčia į skaičių
console.log(height + Number(lives)); // 33 ✅ aiškiau

// --- alert / console.log viską verčia į tekstą ---
console.log(String([1, 2, 3])); // "1,2,3"
console.log(String(null));      // "null"

// --- Palyginimas su == irgi keičia tipą ---
console.log("30" == 30);   // true  ⚠️
console.log("30" === 30);  // false ✅ todėl naudok ===
