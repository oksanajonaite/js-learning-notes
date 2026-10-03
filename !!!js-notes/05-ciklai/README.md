# 05 · Ciklai: cheat sheet

> Šaltinis: `5_ciklai.pptx` · Ankstesnė tema: [04 · Funkcijos](../04-funkcijos/)
>
> 🖥️ Kiekvienai temai šiame aplanke yra paleidžiamas `.js` failas:
> ```bash
> node 05-ciklai/01-for.js
> ```
> Laukiamas rezultatas surašytas komentaruose — gali pirma **atspėti**, tada paleisti ir pasitikrinti.

## Kada kurį naudoti

| Ciklas | Kada | Pavyzdys | Failas |
|---|---|---|---|
| `for` | **žinai**, kiek kartų suksis | 10 kartų, per visą masyvą | [01](01-for.js) |
| `while` | **nežinai**, kiek kartų | kol vartotojas įves 0 | [02](02-while.js) |
| `do...while` | kodas turi įvykti **bent 1 kartą** | pirma paklausti, tada tikrinti | [03](03-do-while.js) |
| `for...of` | per **masyvo reikšmes** | kiekvienas vaisius | [04](04-for-of.js) |
| `for...in` | per **objekto raktus** | kiekviena auto savybė | [05](05-for-in.js) |

## for

📄 [01-for.js](01-for.js)

```js
//  pradžia     sąlyga   žingsnis
for (let i = 1; i <= 100; i++) {
  sum += i;
}
// sum: 5050
```

Tvarka: **pradžia** → tikrinama **sąlyga** → **kūnas** → **žingsnis** → vėl sąlyga → ...

```js
const arr = ["a", "b", "c"];
for (let i = 0; i < arr.length; i++) {   // < length, ne <= ⚠️
  console.log(i, arr[i]);
}

for (let i = 3; i >= 1; i--) {}      // atgal
for (let i = 0; i <= 10; i += 2) {}  // kas 2
```

⚠️ Naudok `let`, ne `var` — su `var` skaitiklis „išlenda“ iš ciklo.

## while

📄 [02-while.js](02-while.js)

Sąlyga tikrinama **prieš** kiekvieną kartą. Jei iškart `false`, ciklas neįvyksta nė karto.

```js
let i = 1;
while (i <= 5) {
  console.log(i);   // 1 2 3 4 5
  i++;              // ⚠️ pamiršus bus begalinis ciklas
}
```

```js
let sum = 0;
let number = parseInt(prompt("Skaičius:"));
while (number >= 0) {                        // kol įvedamas neneigiamas skaičius
  sum += number;
  number = parseInt(prompt("Skaičius:"));
}
```

## do...while

📄 [03-do-while.js](03-do-while.js)

Kūnas vykdomas **pirma**, sąlyga tikrinama **po to**, todėl įvyksta **bent 1 kartą**.

```js
let sum = 0, number = 0;
do {
  sum += number;
  number = parseInt(prompt("Skaičius:"));
} while (number >= 0);
```

💡 `do...while` = „pirma padaryk, paskui klausk“.

## for...of (masyvams)

📄 [04-for-of.js](04-for-of.js)

```js
const vaisiai = ["Obuolys", "Bananas", "Kriaušė"];

for (const vaisius of vaisiai) {
  console.log(vaisius);   // Obuolys, Bananas, Kriaušė
}

for (const [i, v] of vaisiai.entries()) {}   // jei vis dėlto reikia indekso
for (const raide of "JS") {}                 // veikia ir su tekstu
```

⚠️ Su objektu `for...of` **neveikia** — `object is not iterable`.

## for...in (objektams)

📄 [05-for-in.js](05-for-in.js)

```js
const auto = { marke: "Audi", spalva: "Juoda", metai: 2022 };

for (const key in auto) {
  console.log(key + ": " + auto[key]);   // marke: Audi ...
}
```

> `auto[key]`, ne `auto.key`, nes `auto.key` ieškotų savybės, kurios pavadinimas tiesiog „key“.

Šiuolaikinė alternatyva, kuri skaitosi aiškiau:

```js
for (const [key, value] of Object.entries(auto)) {
  console.log(`${key} = ${value}`);
}
Object.keys(auto);    // [ 'marke', 'spalva', 'metai' ]
Object.values(auto);  // [ 'Audi', 'Juoda', 2022 ]
```

💡 **of** yra **reikšmės** (masyvai), **in** yra **raktai** (objektai).

## break ir continue

📄 [06-break-continue.js](06-break-continue.js)

```js
for (let i = 0; i < 10; i++) {
  if (i === 3) break;       // NUTRAUKIA visą ciklą
  console.log(i);           // 0 1 2
}

for (let i = 0; i < 5; i++) {
  if (i === 3) continue;    // PRALEIDŽIA tik šį kartą
  console.log(i);           // 0 1 2 4
}
```

⚠️ `break` **neveikia** `forEach` cikle. Jei reikia nutraukti — naudok `for` / `for...of` arba `find`/`some`.

---

## Failai šiame aplanke

| Failas | Tema |
|---|---|
| [01-for.js](01-for.js) | `for`, ėjimas per masyvą, žingsnis, atgal |
| [02-while.js](02-while.js) | `while`, begalinis ciklas |
| [03-do-while.js](03-do-while.js) | `do...while`, skirtumas nuo `while` |
| [04-for-of.js](04-for-of.js) | `for...of`, `entries()` |
| [05-for-in.js](05-for-in.js) | `for...in`, `Object.keys/values/entries` |
| [06-break-continue.js](06-break-continue.js) | `break`, `continue` |

⬅️ [04 · Funkcijos](../04-funkcijos/) · [Visos temos](../README.md) · [06 · Masyvai](../06-masyvai/) ➡️
