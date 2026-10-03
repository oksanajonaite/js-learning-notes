// 01 · Aritmetiniai ir priskyrimo operatoriai
// Paleisti: node 01-ivadas/04-operatoriai.js

// --- Aritmetiniai ---
console.log(5 + 2);   // 7
console.log(5 - 2);   // 3
console.log(5 * 2);   // 10
console.log(5 / 2);   // 2.5  ← JS nedaro sveikojo dalybos
console.log(5 % 2);   // 1    ← LIEKANA po dalybos
console.log(5 ** 2);  // 25   ← laipsnis (5²)

// % naudingas patikrinti lyginumą:
console.log(10 % 2 === 0); // true  ← lyginis
console.log(7 % 2 === 0);  // false ← nelyginis

// --- Didinimas ir mažinimas ---
let x = 5;
x++;               // x = x + 1
console.log(x);    // 6
x--;
console.log(x);    // 5

// ⚠️ Skirtumas prieš / po kintamojo:
let a = 5;
console.log(a++);  // 5 ← pirma grąžina, TADA padidina
console.log(a);    // 6

let b = 5;
console.log(++b);  // 6 ← pirma padidina, TADA grąžina

// --- Priskyrimo su veiksmu ---
let y = 10;
y += 5;  console.log(y);  // 15   (y = y + 5)
y -= 3;  console.log(y);  // 12
y *= 2;  console.log(y);  // 24
y /= 4;  console.log(y);  // 6
y %= 4;  console.log(y);  // 2

// --- Veiksmų eiliškumas toks pat kaip matematikoje ---
console.log(2 + 3 * 4);    // 14 ← pirma daugyba
console.log((2 + 3) * 4);  // 20 ← skliaustai svarbiau
