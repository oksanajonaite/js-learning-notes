// 04 · Funkcija, metodas, callback
// Paleisti: node 04-funkcijos/04-metodas-callback.js
//
// Visi trys yra FUNKCIJOS. Skiriasi tik tai, KUR funkcija yra
// ir KAIP ji naudojama.

const kainos = [10, 20, 30];
const dvigubinti = (x) => x * 2;

// --- FUNKCIJA: receptas, kurį iškvieti pats ---
console.log(dvigubinti(5));           // 10

// --- METODAS: funkcija, PRIKLAUSANTI objektui, kviečiama per TAŠKĄ ---
console.log(kainos.map(dvigubinti));  // map yra masyvo metodas
console.log("labas".toUpperCase());   // toUpperCase yra teksto metodas
console.log(Math.max(1, 5, 3));       // max yra Math objekto metodas

// Savo objektas su metodu:
const skaiciuotuvas = {
  sudeti(a, b) {          // tai metodas
    return a + b;
  },
};
console.log(skaiciuotuvas.sudeti(2, 3)); // 5

// --- CALLBACK: funkcija, PADUOTA kitai funkcijai kaip argumentas ---
console.log(kainos.map(dvigubinti));  // ← ta pati funkcija čia yra callback

// ⚠️ Paduodam BE skliaustų!
// kainos.map(dvigubinti)    ✅ paduodam pačią funkciją
// kainos.map(dvigubinti())  ❌ iškviečiam ir paduodam jos rezultatą

// --- Sava funkcija, priimanti callback (higher-order function) ---
function pritaikyti(masyvas, veiksmas) {
  const rezultatas = [];
  for (const el of masyvas) {
    rezultatas.push(veiksmas(el));   // čia iškviečiam paduotą funkciją
  }
  return rezultatas;
}

console.log(pritaikyti([1, 2, 3], dvigubinti));   // [ 2, 4, 6 ]
console.log(pritaikyti([1, 2, 3], (x) => x + 100)); // [ 101, 102, 103 ]
