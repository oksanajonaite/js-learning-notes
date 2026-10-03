// 06 · slice() — nukopijuoja masyvo dalį
// Paleisti: node 06-masyvai/10-slice.js
//
// Sintaksė: arr.slice([start], [end])
//   start — nuo kurios pozicijos kopijuoti (įskaitytinai)
//   end   — iki kurios kopijuoti (NEĮSKAITYTINAI ⚠️)
// Grąžina NAUJĄ masyvą, senojo NEKEIČIA.

let arr = ["t", "e", "s", "t"];

console.log(arr.slice(1, 3)); // [ 'e', 's' ] ← nuo 1 iki 3 (3-ias neįeina)
console.log(arr.slice(-2));   // [ 's', 't' ] ← paskutiniai du
console.log(arr.slice(2));    // [ 's', 't' ] ← nuo 2 iki galo
console.log(arr);             // [ 't', 'e', 's', 't' ] ← originalas nepakitęs ✅

// --- Be argumentų = viso masyvo kopija ---
const kopija = arr.slice();
kopija.push("!");
console.log(arr.length);      // 4 ← originalas nepaliestas
console.log(kopija.length);   // 5

// 💡 Dažnai naudojama, kai norima keisti masyvą nedarant įtakos originalui.
//    ES6 alternatyva: const kopija = [...arr];
