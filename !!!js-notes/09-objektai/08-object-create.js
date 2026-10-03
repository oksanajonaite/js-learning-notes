// 09 · Object.create()
// Paleisti: node 09-objektai/08-object-create.js
//
// Sukuria objektą iš turimo objekto ir SUSIEJA jį (perduoda savybes ir metodus)
// su jau esamu objektu — PROTOTIPU.

// Initialize an object with properties and methods
const job = {
  position: "cashier",
  type: "hourly",
  isAvailable: true,
  showDetails() {
    const accepting = this.isAvailable
      ? "is accepting applications"
      : "is not currently accepting applications";

    console.log(`The ${this.position} position is ${this.type} and ${accepting}.`);
  },
};

// Use Object.create to pass properties
const barista = Object.create(job);

barista.position = "barista";
barista.showDetails();
// The barista position is hourly and is accepting applications.

// --- 💡 Objektas barista turi tik VIENĄ savo savybę: position.
//        Visas kitas jis pasiekia per PROTOTIPĄ. ---
console.log(barista);                              // { position: 'barista' }
console.log(Object.keys(barista));                 // [ 'position' ]
console.log(barista.hasOwnProperty("position"));   // true  ← sava
console.log(barista.hasOwnProperty("type"));       // false ← iš prototipo
console.log(barista.type);                         // hourly ✅ vis tiek pasiekiama

// --- Prototipų grandinė ---
console.log(Object.getPrototypeOf(barista) === job);   // true

// Pakeitus prototipą, pasikeičia VISI iš jo sukurti objektai:
job.type = "full-time";
console.log(barista.type);   // full-time ⚠️

// Bet priskyrus savybę objektui, ji "uždengia" prototipo savybę:
barista.type = "part-time";
console.log(barista.type);   // part-time ← sava savybė
console.log(job.type);       // full-time ← prototipas nepakitęs

// --- ⚠️ Nepainiok su kopijavimu ---
// Object.create(job)  → NAUJAS objektas, SUSIETAS su job (prototipas)
// Object.assign({}, job) → NAUJAS objektas su job savybių KOPIJOMIS
const kopija = Object.assign({}, job);
console.log(Object.keys(kopija).length);   // 4 ← visos savybės savos
console.log(Object.keys(barista).length);  // 2 ← position ir type
