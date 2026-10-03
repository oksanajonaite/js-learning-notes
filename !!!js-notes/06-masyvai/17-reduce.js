// 06 · reduce() — suveda masyvą į VIENĄ reikšmę
// Paleisti: node 06-masyvai/17-reduce.js
//
// Sintaksė: array.reduce(callback, initialValue)
//   callback     — funkcija (reducer), kuri atlieka skaičiavimus
//   initialValue — pradinė reikšmė. NEBŪTINA.
//                  Jei nenurodyta, pradine tampa arr[0].
//
// callback(previousValue, currentValue, currentIndex, array)
//   previousValue — rezultatas iš ankstesnio prasisukimo
//   currentValue  — einamasis elementas
//   currentIndex  — einamojo elemento indeksas
//   array         — pats masyvas

// --- Pirmas prasisukimas priklauso nuo initialValue ---
// | initialValue | previousValue | currentValue |
// | nurodyta     | initialValue  | array[0]     |
// | nenurodyta   | array[0]      | array[1]     |

// --- 1. Sandauga ---
var array = [1, 2, 3, 4, 5];

function productArray(totalResult, currValue) {
  return totalResult * currValue;
}

let answer = array.reduce(productArray);
console.log("Be pradinės reikšmės:", answer);   // 120 (1*2*3*4*5)

let answer2 = array.reduce(productArray, 2);
console.log("Su pradine reikšme 2:", answer2);  // 240 (2*1*2*3*4*5)

// --- 2. Suma (dažniausias atvejis) ---
console.log([1, 2, 3, 4, 5].reduce((prev, curr) => prev + curr, 0)); // 15

// ⚠️ Tuščiam masyvui BE initialValue — TypeError.
console.log([].reduce((p, c) => p + c, 0)); // 0 ✅ su initialValue saugu

// --- 3. Krepšelio suma (objektų masyvas) ---
let shoppingCart = [
  { product: "phone", qty: 1, price: 500 },
  { product: "Screen Protector", qty: 1, price: 10 },
  { product: "Memory Card", qty: 2, price: 20 },
];

let total = shoppingCart.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue.qty * currentValue.price;
}, 0);

console.log(total); // 550

// ⚠️ Čia initialValue 0 BŪTINA: be jos previousValue pirmu kartu būtų
//    OBJEKTAS { product: 'phone', ... }, o ne skaičius.

// --- 4. Žingsnis po žingsnio (kad matytųsi, kas vyksta) ---
[10, 20, 30].reduce((prev, curr, i) => {
  console.log(`i=${i}  prev=${prev}  curr=${curr}  →  ${prev + curr}`);
  return prev + curr;
}, 0);
// i=0  prev=0   curr=10  →  10
// i=1  prev=10  curr=20  →  30
// i=2  prev=30  curr=30  →  60

// --- 5. reduceRight — tas pats, tik nuo galo ---
console.log(["a", "b", "c"].reduce((p, c) => p + c));      // "abc"  →
console.log(["a", "b", "c"].reduceRight((p, c) => p + c)); // "cba"  ←
