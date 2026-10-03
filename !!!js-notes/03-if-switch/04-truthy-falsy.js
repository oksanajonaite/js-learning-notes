// 03 · Truthy ir falsy
// Paleisti: node 03-if-switch/04-truthy-falsy.js
//
// if (x) pirmiausia paverčia x į boolean. Todėl svarbu žinoti,
// kurios reikšmės yra "falsy".

function rodyk(uzrasas, reiksme) {
  console.log(uzrasas.padEnd(12), "→", Boolean(reiksme));
}

// --- 6 FALSY reikšmės (daugiau nėra) ---
console.log("FALSY:");
rodyk("false", false);
rodyk("0", 0);
rodyk('""', "");
rodyk("null", null);
rodyk("undefined", undefined);
rodyk("NaN", NaN);

// --- VISA kita yra truthy ---
console.log("\nTRUTHY:");
rodyk("1", 1);
rodyk("-1", -1);          // ⚠️ neigiamas irgi true
rodyk('"0"', "0");        // ⚠️ netuščias TEKSTAS
rodyk('" "', " ");        // ⚠️ tarpas irgi simbolis
rodyk('"false"', "false"); // ⚠️ tekstas "false"
rodyk("[]", []);          // ⚠️ tuščias masyvas
rodyk("{}", {});          // ⚠️ tuščias objektas
rodyk("funkcija", function () {});

// --- Praktikoje ---
console.log("");
if (0) console.log("nevykdomas");
if ("labas") console.log("vykdomas ✅");

let user = { name: "Ana" };
if (user) console.log("user egzistuoja ✅");   // dažnas patikrinimas

let tuscias = [];
if (tuscias) console.log("⚠️ tuščias masyvas yra truthy!");
if (tuscias.length === 0) console.log("✅ taip tikrinam, ar masyvas tuščias");

// --- Kaip pamatyti, ką JS "galvoja" ---
console.log(!!"labas");   // true  ← dvigubas ! rodo boolean reikšmę
console.log(!!"");        // false
