// 09 · Kas yra objektas
// Paleisti: node 09-objektai/01-kas-yra-objektas.js
//
// OBJEKTAS — duomenų tipas, skirtas saugoti sudėtingesnės struktūros duomenis.
// Objektai yra analogai realaus gyvenimo daiktams: automobilis, katė, studentas.
//
// SAVYBĖS (properties) apibūdina, KOKS objektas yra.
// METODAI apibūdina, KĄ objektas moka daryti. Metodai aprašomi funkcijomis.

// Pavyzdys iš skaidrės — automobilis:
//   Savybės            Metodai
//   car.name = Fiat    car.start()
//   car.model = 500    car.drive()
//   car.weight = 850kg car.brake()
//   car.color = white  car.stop()

const car = {
  // --- SAVYBĖS: koks objektas yra ---
  name: "Fiat",
  model: 500,
  weight: "850kg",
  color: "white",

  // --- METODAI: ką objektas moka daryti ---
  start() {
    return `${this.name} užsivedė`;
  },
  drive() {
    return `${this.name} važiuoja`;
  },
  stop() {
    return `${this.name} sustojo`;
  },
};

console.log(car.name);      // Fiat
console.log(car.color);     // white
console.log(car.start());   // Fiat užsivedė
console.log(car.drive());   // Fiat važiuoja

// --- Kodėl objektas, o ne 4 atskiri kintamieji? ---
// Blogai: duomenys išsibarstę, nesimato, kad jie susiję
const carName = "Fiat", carModel = 500, carColor = "white";

// Gerai: visi vieno daikto duomenys vienoje vietoje
console.log(car);
// { name: 'Fiat', model: 500, weight: '850kg', color: 'white', start: ..., ... }

// --- Objektas vs masyvas ---
const masyvas = ["Fiat", 500, "white"];   // tvarka svarbi, prasmės nematyti
console.log(masyvas[2]);                  // white ← o kas tai? spalva? reikia atsiminti
console.log(car.color);                   // white ← iškart aišku ✅

// --- typeof ---
console.log(typeof car);        // object
console.log(typeof car.start);  // function ← metodas yra funkcija
