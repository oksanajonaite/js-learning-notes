# 01 · JavaScript įvadas

> Šaltinis: `1_JS_ivadas.pptx`. Medžiaga sugrupuota pagal temas, o kodo pavyzdžiai iš skaidrių paveikslėlių perrašyti tekstu.
>
> ⚡ Trumpa versija kartojimui: [README.md](README.md)

## Turinys

1. [Kas yra JavaScript](#1-kas-yra-javascript)
2. [Kur ir kaip vykdomas JS](#2-kur-ir-kaip-vykdomas-js)
3. [JS paleidimas su Node.js](#3-js-paleidimas-su-nodejs)
4. [JS prijungimas prie HTML](#4-js-prijungimas-prie-html)
5. [Sintaksės pagrindai](#5-sintaksės-pagrindai)
6. [use strict](#6-use-strict)
7. [Kintamieji: let, const, var](#7-kintamieji-let-const-var)
8. [Kintamųjų vardai](#8-kintamųjų-vardai)
9. [Duomenų tipai](#9-duomenų-tipai)
10. [Operatoriai (trumpai)](#10-operatoriai-trumpai)
11. [Cheat sheet](#cheat-sheet)
12. [Pasitikrink save](#pasitikrink-save)

---

## 1. Kas yra JavaScript

**JavaScript (JS)** yra plačiai naudojama programavimo kalba, kuri puslapius paverčia *interaktyviais*.

Principas paprastas: **vartotojas → veiksmas → puslapio reakcija**.

| Vartotojo veiksmas | Puslapio reakcija |
|---|---|
| Paspaudžia mygtuką | Atsiranda pranešimas |
| Paspaudžia „Patinka“ | Padidėja skaičius |
| Prideda prekę į krepšelį | Krepšelis atsinaujina |
| Įveda slaptažodį | Patikrinama, ar jis pakankamai stiprus |

### Istorija
- JS sukūrė **Brendan Eich** 1995 m. per **10 dienų** (Netscape kompanijoje).
- Pavadinimai keitėsi taip: **Mocha → LiveScript → JavaScript**.
- Naudojamas ir **frontend'e** (naršyklėje), ir **backend'e** (serveryje, per Node.js).

### JavaScript ≠ Java
Tai **visiškai skirtingos kalbos**. Panašus pavadinimas buvo tik marketingo sprendimas, nes tuo metu Java buvo labai populiari.

### ECMAScript ir versijos
- **ECMAScript** yra *taisyklės* (standartas).
- **JavaScript** yra *kalba*, kuri tas taisykles įgyvendina.

| Versija | Metai | Svarbiausi pakeitimai |
|---|---|---|
| ES5 | 2009 | `"use strict"`, JSON palaikymas, `String.trim()`, `Array.isArray()` |
| **ES6 / ES2015** | **2015** | **`let` ir `const`**, numatytosios parametrų reikšmės, `Array.find()` |
| ES2016 | 2016 | Kėlimo laipsniu operatorius `**`, `Array.includes()` |
| ES2017 | 2017 | `async` funkcijos, teksto „padding'as“ |
| ES2018 | 2018 | rest / spread savybės, `Promise.finally()` |

> 💡 **ES6 (2015)** yra svarbiausia versija. Nuo jos prasideda „modernus“ JavaScript.

---

## 2. Kur ir kaip vykdomas JS

- JS kodas vadinamas **skriptu** (*script*).
- JS yra **interpretuojama** kalba: interpretatorius skaito ir vykdo kodą eilutę po eilutės, atskiro kompiliavimo žingsnio nėra.
- Skriptą gali vykdyti bet koks įrenginys, turintis **JavaScript engine** (interpretatorių).

> ℹ️ Papildymas: šiuolaikiniai varikliai (pvz., Chrome V8) vykdymo metu kodą optimizuoja (JIT kompiliacija). Tačiau tau, kaip programuotojui, jokio atskiro kompiliavimo žingsnio daryti nereikia.

JS galimybės priklauso nuo **aplinkos**:

| Naršyklė (Browser) | Node.js (serveris) |
|---|---|
| Kurti ir keisti HTML elementus | Dirbti su failais |
| Keisti CSS stilius | Kurti serverius, API |
| Reaguoti į pelės ir klaviatūros įvykius | Jungtis prie duomenų bazių |
| Siųsti užklausas serveriams (fetch) | |
| Dirbti su cookies, rodyti pranešimus (`alert`) | |
| Saugoti duomenis naršyklėje (`localStorage`) | |

> ⚠️ `alert()` veikia **tik naršyklėje**. Node.js aplinkoje naudok `console.log()`.

---

## 3. JS paleidimas su Node.js

1. Sukurk projekto katalogą.
2. Patikrink, ar turi Node.js. Terminale parašyk:
   ```bash
   node --version
   ```
3. Jei neturi, įsidiek iš [nodejs.org](https://nodejs.org/en).
4. Atsidaryk projektą VS Code: kataloge paleisk terminalą ir parašyk:
   ```bash
   code .
   ```
5. Sukurk failą `task1.js`:
   ```js
   console.log("Hello World!!!");
   ```
6. VS Code terminale paleisk:
   ```bash
   node task1
   ```
7. Terminale turėtum pamatyti `Hello World!!!`.

---

## 4. JS prijungimas prie HTML

Skriptas rašomas tarp `<script>` žymių. Jį galima dėti **`<head>`** dalyje arba **prieš `</body>`**.

### Kodas tiesiai HTML faile
```html
<body>
  <h2>Mano puslapis</h2>

  <script>
    console.log("Labas!");
  </script>
</body>
```

### Išorinis failas (rekomenduojama)

**Variantas A:** skriptas prieš `</body>`
```html
<!DOCTYPE html>
<html>
<body>
  <h2>External JavaScript</h2>
  <p id="demo">A Paragraph.</p>
  <button type="button" onclick="myFunction()">Try it</button>

  <script src="myScript.js"></script>
</body>
</html>
```

**Variantas B:** skriptas `<head>` dalyje
```html
<!DOCTYPE html>
<html>
<head>
  <script src="/js/myScript.js"></script>
</head>
<body>
  <h2>External JavaScript</h2>
  <p id="demo">A Paragraph.</p>
  <button type="button" onclick="myFunction()">Try it</button>
</body>
</html>
```

### Atributas `defer`

Įprastai, kai naršyklė HTML'e randa `<script>`, ji **sustabdo HTML krovimą**, parsisiunčia ir įvykdo skriptą ir tik tada krauna HTML toliau.

**`defer`** nurodo: *„parsisiųsk skriptą fone, bet įvykdyk jį tik tada, kai visas HTML bus užkrautas“*.

```html
<!-- Be defer: HTML krovimas sustoja, kol skriptas įvykdomas -->
<script src="script.js"></script>

<!-- Su defer: HTML kraunamas toliau, skriptas vykdomas pabaigoje -->
<script src="script.js" defer></script>
```

Kodėl tai naudinga:
- puslapis vartotojui pasirodo **greičiau**;
- skriptas gali saugiai ieškoti HTML elementų, nes jie jau užkrauti.

> 💡 Praktikoje: `<script src="..." defer></script>` dėk į `<head>` ir nesuksi galvos.

---

## 5. Sintaksės pagrindai

- Programa susideda iš **sakinių** (*statements*).
- Sakinius rekomenduojama baigti **kabliataškiu** `;`, nors tai nėra privaloma.
- JS yra **case sensitive**: `name` ir `Name` yra skirtingi dalykai.

```js
var a, b, c;   // Deklaruojami 3 kintamieji
a = 5;         // Priskiriama reikšmė 5 kintamajam a
b = 6;         // Priskiriama reikšmė 6 kintamajam b
c = a + b;     // c priskiriama a ir b suma
```

### Komentarai
```js
// Vienos eilutės komentaras

/*
  Kelių eilučių
  komentaras
*/
```

---

## 6. use strict

Pirmoje `.js` failo eilutėje rekomenduojama rašyti:

```js
"use strict";
```

**Kam to reikia?** JS yra *loosely typed* ir daug ką „atleidžia“. Tai patogu, bet tokios klaidos lieka nepastebėtos. `"use strict"` įjungia **griežtesnį režimą**:
- klaidos, kurios anksčiau būdavo **nutylimos**, tampa **klaidų pranešimais**;
- kodas saugesnis ir gali veikti greičiau.

### Pavyzdys: nedeklaruotas kintamasis

**Be** `use strict` JS leidžia naudoti kintamąjį jo nedeklaravus. Tai **bloga praktika**:
```js
num = 5;          // kintamasis "num" sukuriamas automatiškai
console.log(num); // 5
```

**Su** `use strict` gauni klaidą:
```js
"use strict";

num = 5; // ❌ ReferenceError: num is not defined
```

---

## 7. Kintamieji: let, const, var

**Kintamasis** yra pavadinta vieta duomenims saugoti.

Deklaruojamas su vienu iš trijų raktažodžių: **`let`**, **`const`**, **`var`**.

### 7.1 `let`

Atsirado ES6 (2015). Naudojamas, kai **reikšmė keisis**.

```js
let message;          // deklaracija
message = 'Hello!';   // priskyrimas
console.log(message); // Hello!
```

Kelis kintamuosius galima deklaruoti vienoje eilutėje:
```js
let user = 'John', age = 25, message = 'Hello';
```
...bet **geriau** kiekvieną atskiroje eilutėje, nes taip lengviau skaityti:
```js
let user = 'John';
let age = 25;
let message = 'Hello';
```

#### `let` savybės

**1. Block scope.** Kintamasis „gyvena“ tik tame `{ }` bloke, kuriame sukurtas:
```js
let greeting = "say Hi";
let times = 4;

if (times > 3) {
  let hello = "say Hello instead";
  console.log(hello); // "say Hello instead"
}
console.log(hello); // ❌ ReferenceError: hello is not defined
```

**2. Reikšmę keisti galima, bet tame pačiame scope deklaruoti iš naujo negalima:**
```js
let greeting = "say Hi";
greeting = "say Hello instead"; // ✅ OK: pakeista reikšmė
```
```js
let greeting = "say Hi";
let greeting = "say Hello instead"; // ❌ SyntaxError: Identifier 'greeting' has already been declared
```
```js
let greeting = "say Hi";
if (true) {
  let greeting = "say Hello instead"; // ✅ OK: kitas scope
  console.log(greeting); // "say Hello instead"
}
console.log(greeting); // "say Hi"
```

**3. Prieš naudojant kintamąjį, jį būtina deklaruoti:**
```js
greeter = "say hello"; // ❌ ReferenceError: Cannot access 'greeter' before initialization
let greeter;
```

### 7.2 `const`

Naudojamas, kai **reikšmė nesikeis**.

```js
const myBirthday = '18.04.1982';
```

Konstantos **reikšmės pakeisti negalima**:
```js
const myBirthday = '18.04.1982';
myBirthday = '01.01.2001'; // ❌ TypeError: Assignment to constant variable.
```

...ir **deklaruoti iš naujo taip pat negalima**:
```js
const greeting = "say Hi";
const greeting = "say Hello instead"; // ❌ SyntaxError: Identifier 'greeting' has already been declared
```

`const` taip pat turi **block scope**, kaip ir `let`.

#### Konstantos DIDŽIOSIOMIS raidėmis

Kai reikšmė yra **iš anksto žinoma ir „kieta“** (spalvos, nustatymai), vardas rašomas `UPPER_SNAKE_CASE`:
```js
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...kai reikia pasirinkti spalvą
let color = COLOR_ORANGE;
console.log(color); // #FF7F00
```
Tokį vardą lengviau įsiminti nei `"#FF7F00"`, o suklydus rašant vardą gausi klaidą. Suklydus hex kode klaidos nebūtų.

### 7.3 `var` (senas būdas)

`var` yra „old school“ kintamųjų deklaravimo būdas, naudotas iki ES6. Jį reikia **atpažinti** svetimame kode, bet **pačiam naudoti nereikia**.

```js
var message = 'Hello';
```

#### `var` savybės

**1. Neturi block scope.** Jis būna tik **global** arba **function scope**:
```js
function newFunction() {
  var hello = "hello";
}
console.log(hello); // ❌ ReferenceError: hello is not defined (už funkcijos ribų)
```
```js
"use strict";

function sayHi() {
  if (true) {
    var phrase = "Hello";
  }
  console.log(phrase); // ✅ "Hello": var „išlenda“ iš if bloko!
}

sayHi();
console.log(phrase); // ❌ ReferenceError: už funkcijos ribų nebematomas
```

**2. Galima ir keisti reikšmę, ir deklaruoti iš naujo:**
```js
var greeter = "hey hi";
var greeter = "say Hello instead"; // ✅ jokios klaidos
greeter = "dar kitaip";            // ✅ jokios klaidos
```

**3. Hoisting.** Prieš vykdant kodą JS automatiškai „iškelia“ deklaracijas į scope viršų.
```js
console.log(greeter); // undefined (ne klaida!)
var greeter = "say hello";
```
JS šį kodą interpretuoja taip:
```js
var greeter;          // deklaracija iškeliama į viršų
console.log(greeter); // undefined
greeter = "say hello";
```
Klaidos negauni, kodas vykdomas toliau. Todėl klaidas su `var` **sunku pastebėti**.

#### Kodėl `var` yra problema

```js
var greeter = "hey hi";
var times = 4;

if (times > 3) {
  var greeter = "say Hello instead"; // perrašo IŠORINĮ kintamąjį!
}

console.log(greeter); // "say Hello instead" 😱
```
Norėjai sukurti naują kintamąjį tik `if` blokui, o netyčia pakeitei išorinį. Su `let` taip nenutiktų.

### 7.4 Palyginimas

| | `var` | `let` | `const` |
|---|---|---|---|
| Scope | function / global | **block** | **block** |
| Keisti reikšmę | ✅ | ✅ | ❌ |
| Deklaruoti iš naujo (tame pačiame scope) | ✅ | ❌ | ❌ |
| Naudoti prieš deklaraciją | `undefined` | ❌ ReferenceError | ❌ ReferenceError |
| Kada naudoti | **nenaudoti** | kai reikšmė keisis | **pagal nutylėjimą** |

> 💡 **Taisyklė:** pradėk nuo `const`. Jei paaiškėja, kad reikšmę reikia keisti, pakeisk į `let`. `var` nenaudok.

---

## 8. Kintamųjų vardai

Taisyklės:
- vardą gali sudaryti **raidės, skaitmenys, `$` ir `_`**;
- **pirmas simbolis negali būti skaičius**;
- **brūkšnelis `-` neleidžiamas**;
- didžiosios ir mažosios raidės skiriasi: `apple` ≠ `AppLe`;
- kelių žodžių vardams naudojamas **camelCase**;
- ne lotyniškos raidės leidžiamos, bet **nerekomenduojamos**.

```js
// ✅ Geri vardai
let userName;
let $price;
let _count;
let lunchCostPerStudent = 5; // aiškus, aprašantis vardas

// ❌ Klaidingi vardai
let 1user;     // prasideda skaičiumi
let user-name; // brūkšnelis

// ⚠️ Veikia, bet nedaryk taip
let имя = '...';
let 我 = '...';
```

---

## 9. Duomenų tipai

JS yra **dynamically typed** (*loosely typed*) kalba. Duomenų tipai egzistuoja, bet **kintamasis nėra pririštas prie tipo**, todėl tas pats kintamasis gali saugoti bet ką:

```js
// klaidos nėra
let message = "hello";
message = 123456;
```

### Tipų apžvalga

| Primityvai | Struktūriniai tipai |
|---|---|
| `number` (įskaitant `Infinity`, `NaN`) | `object` (masyvai, datos ir kt.) |
| `bigint` | `function` |
| `string` | |
| `boolean` | |
| `null` | |
| `undefined` | |
| `symbol` (unikalūs objektų savybių identifikatoriai) | |

Tipą sužinosi su `typeof`:
```js
typeof 42;        // 'number'
typeof "labas";   // 'string'
typeof true;      // 'boolean'
typeof undefined; // 'undefined'
typeof 10n;       // 'bigint'
typeof null;      // 'object' ⚠️ sena JS klaida, taip jau ir liko
```

### 9.1 Number

Tiek sveikieji skaičiai, tiek skaičiai su kableliu yra **tas pats tipas**:
```js
let n = 123;
n = 12.345;
```

> ℹ️ Sveikuosius skaičius JS tiksliai saugo tik intervale nuo **−(2⁵³−1) iki 2⁵³−1** (`Number.MAX_SAFE_INTEGER`). Didesni skaičiai gali prarasti tikslumą, tam skirtas `BigInt`.

Specialios `number` reikšmės:
```js
console.log(1 / 0);                // Infinity: matematinė begalybė
console.log("not a number" / 2);   // NaN: neteisingo matematinio veiksmo rezultatas
```

### 9.2 BigInt

Neriboto dydžio sveikiesiems skaičiams. Skaičiaus gale rašoma raidė **`n`**:
```js
const bigInt = 1234567890123456789012345678901234567890n;
```

### 9.3 String

Tekstas. JS turi **3 rūšių kabutes**:
```js
let str = "Hello";                              // dvigubos
let str2 = 'Single quotes are ok too';          // viengubos
let phrase = `can embed another ${str}`;        // backticks
```

Dvigubos ir viengubos kabutės veikia **vienodai**. **Backticks** turi papildomų galimybių.

#### Template literals (backticks)

Į tekstą galima įterpti **kintamąjį** arba **reiškinį** per `${...}`:
```js
let name = "John";

console.log(`Hello, ${name}!`);          // Hello, John!
console.log(`the result is ${1 + 2}`);   // the result is 3
```

Galima rašyti **kelias eilutes** ir **HTML**:
```js
const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;

let html = `
  <h2>${title}</h2>
  <p>By ${author}</p>
  <span>This blog has ${likes} likes</span>
`;
```

#### Sujungimas su `+` (senas būdas)

Tą patį galima padaryti su `+`, bet taip sunkiau skaityti:
```js
let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
```

#### Primityvas ar objektas?

```js
let str1 = new String('What am I?');
typeof str1; // 'object': sukurta su new, todėl OBJEKTAS

let str2 = String('What am I?');
typeof str2; // 'string': primityvas

let str3 = "What am I?";
typeof str3; // 'string': primityvas

str1 === str2; // false
str1 === str3; // false
str2 === str3; // true
```
> 💡 `new String()` praktikoje **nenaudojamas**. Visada rašyk tiesiog kabutes.

#### Simbolių pasiekimas pagal indeksą

Indeksai prasideda nuo **0**:
```js
let str = 'larch';
str[0];         // 'l'
str[1];         // 'a'
str[4];         // 'h'
str.charAt(0);  // 'l': tas pats, tik per metodą
```

#### String yra immutable (nekintamas)

**Atskiros teksto raidės pakeisti negalima:**
```js
"use strict";
let str = 'larch';
str[0] = 'm';     // ❌ strict režime TypeError; be jo tiesiog nieko neįvyksta
console.log(str); // 'larch'
```

Bet **visą kintamojo reikšmę perrašyti galima**, nes tada priskiriamas naujas tekstas:
```js
let str = 'larch';
str = 'march';
console.log(str); // 'march'
```

### 9.4 Boolean

Tik dvi reikšmės: **`true`** arba **`false`**.
```js
let nameFieldChecked = true;   // taip, vardo laukas pažymėtas
let ageFieldChecked = false;   // ne, amžiaus laukas nepažymėtas

let isGreater = 4 > 1;
console.log(isGreater); // true: palyginimo rezultatas yra boolean
```

### 9.5 null ir undefined

| `null` | `undefined` |
|---|---|
| „Nieko“, „tuščia“, „reikšmė nežinoma“ | „Reikšmė **nepriskirta**“ |
| **Tu pats** sąmoningai priskiri | JS priskiria **automatiškai** |

```js
let age = null;     // sąmoningai: „amžius kol kas nežinomas“

let x;
console.log(x);     // undefined: deklaruotas, bet reikšmės nėra
```

🧻 Skirtumą padeda įsiminti tualetinio popieriaus laikiklis:

| Reikšmė | Laikiklis |
|---|---|
| ne nulinė reikšmė | yra ritinys su popieriumi |
| `0` | yra ritinys, bet be popieriaus |
| `null` | laikiklis yra, bet ritinio nėra |
| `undefined` | laikiklio iš viso nėra |

---

## 10. Operatoriai (trumpai)

> Plačiau apie operatorius kitoje temoje: `02-operatoriai.md`.

### Aritmetiniai

| Operatorius | Reikšmė | Pavyzdys |
|---|---|---|
| `+` | sudėtis | `5 + 2` → `7` |
| `-` | atimtis | `5 - 2` → `3` |
| `*` | daugyba | `5 * 2` → `10` |
| `**` | kėlimas laipsniu (ES2016) | `5 ** 2` → `25` |
| `/` | dalyba | `5 / 2` → `2.5` |
| `%` | dalybos liekana | `5 % 2` → `1` |
| `++` | padidinti 1 | `x++` |
| `--` | sumažinti 1 | `x--` |

### Priskyrimo

| Operatorius | Pavyzdys | Tas pats kaip |
|---|---|---|
| `=` | `x = y` | `x = y` |
| `+=` | `x += y` | `x = x + y` |
| `-=` | `x -= y` | `x = x - y` |
| `*=` | `x *= y` | `x = x * y` |
| `/=` | `x /= y` | `x = x / y` |
| `%=` | `x %= y` | `x = x % y` |
| `**=` | `x **= y` | `x = x ** y` |

```js
let score = 10;
score += 5;   // 15
score *= 2;   // 30
score %= 7;   // 2
```

Daugiau: [w3schools: Arithmetic](https://www.w3schools.com/js/js_arithmetic.asp) · [w3schools: Assignment](https://www.w3schools.com/js/js_assignment.asp)

---

## Cheat sheet

```js
"use strict";                         // visada pirmoje eilutėje

// ── Kintamieji ─────────────────────────────
const PI = 3.14;                      // nekeičiama reikšmė (naudok pagal nutylėjimą)
let count = 0;                        // keičiama reikšmė
count = 1;                            // ✅
// var x = 1;                         // ❌ nenaudoti

// ── Duomenų tipai ──────────────────────────
let num    = 42;                      // number (ir 3.14, Infinity, NaN)
let big    = 123n;                    // bigint
let text   = "labas";                 // string ('', "", ``)
let isOk   = true;                    // boolean
let empty  = null;                    // „tuščia“ (priskiri pats)
let nothing;                          // undefined (nepriskirta)

typeof num;                           // 'number'
typeof null;                          // 'object' ⚠️

// ── Tekstas ────────────────────────────────
const name = "Ana";
`Labas, ${name}! 2 + 2 = ${2 + 2}`;   // template literal
"Labas, " + name;                     // sujungimas
name[0];                              // 'A'

// ── Operatoriai ────────────────────────────
5 ** 2;   // 25     5 % 2;   // 1
x += 1;   // x = x + 1
x++;      // padidina 1

// ── Išvedimas ──────────────────────────────
console.log("veikia visur");
alert("tik naršyklėje");
```

```html
<!-- JS prijungimas: geriausias variantas -->
<head>
  <script src="script.js" defer></script>
</head>
```

```bash
node --version    # ar turiu Node.js
node task1        # paleisti task1.js
```

### Dažniausios klaidos

| Klaida | Priežastis |
|---|---|
| `ReferenceError: x is not defined` | kintamasis nedeklaruotas arba naudojamas už savo scope ribų |
| `ReferenceError: Cannot access 'x' before initialization` | `let`/`const` naudojamas prieš deklaraciją |
| `SyntaxError: Identifier 'x' has already been declared` | tame pačiame scope du kartus `let`/`const` |
| `TypeError: Assignment to constant variable` | bandoma pakeisti `const` reikšmę |
| `ReferenceError: alert is not defined` | `alert` naudojamas Node.js aplinkoje |
| Skriptas neranda HTML elemento | skriptas `<head>` be `defer`, HTML dar neužkrautas |

---

## Pasitikrink save

> Atsakymą pamatysi paspaudęs **Atsakymas**.

**1.** Kuo skiriasi JavaScript ir ECMAScript?

<details><summary>Atsakymas</summary>

ECMAScript yra standartas (taisyklės), o JavaScript yra kalba, kuri tas taisykles įgyvendina.
</details>

**2.** Ką atspausdins šis kodas?
```js
let a = "išorė";
if (true) {
  let a = "vidus";
}
console.log(a);
```

<details><summary>Atsakymas</summary>

`"išorė"`, nes `let` turi block scope, todėl vidinis `a` yra kitas kintamasis.
</details>

**3.** O jei 2 klausimo kode abiejose vietose vietoj `let` būtų `var`?

<details><summary>Atsakymas</summary>

`"vidus"`, nes `var` neturi block scope, todėl `if` viduje perrašomas tas pats kintamasis.
</details>

**4.** Ką atspausdins šis kodas?
```js
console.log(x);
var x = 5;
```

<details><summary>Atsakymas</summary>

`undefined`. Deklaracija dėl hoisting iškeliama į viršų, bet reikšmė priskiriama vėliau.
</details>

**5.** Kuris kintamojo vardas neleistinas: `$total`, `2price`, `user_name`, `firstName`?

<details><summary>Atsakymas</summary>

`2price`, nes vardas negali prasidėti skaičiumi.
</details>

**6.** Kuo skiriasi `null` ir `undefined`?

<details><summary>Atsakymas</summary>

`null` programuotojas priskiria sąmoningai („tuščia“), o `undefined` reiškia, kad reikšmė iš viso nepriskirta.
</details>

**7.** Kam reikalingas `defer` atributas?

<details><summary>Atsakymas</summary>

Kad skriptas būtų vykdomas tik užsikrovus visam HTML: puslapis rodomas greičiau, o skriptas gali pasiekti HTML elementus.
</details>

**8.** Ką grąžins kiekviena eilutė?
```js
`Suma: ${2 + 3}`
"Suma: " + 2 + 3
```

<details><summary>Atsakymas</summary>

`"Suma: 5"` ir `"Suma: 23"`. Antruoju atveju prie teksto pirmiausia prijungiamas `2`, tada `3`.
</details>
