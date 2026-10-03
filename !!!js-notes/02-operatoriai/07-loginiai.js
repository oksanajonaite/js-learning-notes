// 02 · Loginiai operatoriai: && || !
// Paleisti: node 02-operatoriai/07-loginiai.js

const age = 20;
const hasTicket = true;
const isAdmin = false;
const isOwner = true;
const isLoggedIn = false;

// --- && (IR): true kai ABI pusės true ---
console.log(age >= 18 && hasTicket);   // true
console.log(age >= 18 && false);       // false

// --- || (ARBA): true kai BENT VIENA pusė true ---
console.log(isAdmin || isOwner);       // true
console.log(false || false);           // false

// --- ! (NE): apverčia ---
console.log(!isLoggedIn);   // true
console.log(!true);         // false
console.log(!!"labas");     // true ← dvigubas ! paverčia į boolean

// --- Pilna lentelė ---
console.log(true  && true);   // true
console.log(true  && false);  // false
console.log(false && false);  // false
console.log(true  || false);  // true
console.log(false || false);  // false

// --- Jungiant kelis, && svarbiau už || (kaip * svarbiau už +) ---
console.log(true || false && false);   // true  ← skaitoma: true || (false && false)
console.log((true || false) && false); // false ← skliaustai keičia viską

// --- Praktika: sudėtinės sąlygos ---
const pajamos = 1200;
const turiDarba = true;
const galiImtiPaskola = pajamos > 1000 && turiDarba;
console.log(galiImtiPaskola); // true

// --- Gudrybė: || numatytajai reikšmei ---
let vardas = "";
console.log(vardas || "Svečias");  // Svečias ← nes "" yra falsy
