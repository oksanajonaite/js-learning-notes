# 01 · JS įvadas: cheat sheet

> Šaltinis: `1_JS_ivadas.pptx` · Plačiau su paaiškinimais: [pilna-versija.md](pilna-versija.md)
>
> 🖥️ Kiekvienai temai šiame aplanke yra paleidžiamas `.js` failas:
> ```bash
> node 01-ivadas/01-kintamieji.js
> ```
> Laukiamas rezultatas surašytas komentaruose — gali pirma **atspėti**, tada paleisti ir pasitikrinti.

## Pagrindai

- **JS ≠ Java.** **ECMAScript** yra taisyklės, **JavaScript** yra kalba. **ES6 (2015)** atnešė `let`/`const`.
- JS yra **interpretuojama**, **case sensitive**, **dynamically typed** kalba.
- **Naršyklė**: HTML, CSS, įvykiai, `alert`, `localStorage`. **Node.js**: serveris, failai. `alert` ten neveikia.

```bash
node --version   # ar įdiegta
node task1       # paleisti task1.js
```

```html
<script src="script.js" defer></script>  <!-- į <head>; defer = vykdyti, kai HTML užkrautas -->
```

```js
"use strict";   // 1-a eilutė: nutylėtos klaidos tampa klaidomis (pvz., x = 5 be let)
// komentaras      /* kelių eilučių */
```

## Kintamieji

📄 [01-kintamieji.js](01-kintamieji.js)

```js
const MAX = 10;  // pagal nutylėjimą · keisti ❌
let count = 0;   // kai reikšmė keisis
var old = 1;     // ❌ nenaudoti
```

| | Scope | Keisti | Deklaruoti iš naujo | Naudoti prieš deklaraciją |
|---|---|---|---|---|
| `const` | block `{}` | ❌ | ❌ | ReferenceError |
| `let` | block `{}` | ✅ | ❌ | ReferenceError |
| `var` | function | ✅ | ✅ | `undefined` (hoisting) |

```js
if (true) { let a = 1; var b = 2; }
a; // ❌ ReferenceError
b; // 2: var „išlenda“ iš bloko
```

⚠️ `const` saugo **nuorodą**, ne turinį — `const arr = [1,2]; arr.push(3);` veikia.

**Vardai:** raidės, skaičiai, `$`, `_` · ne nuo skaičiaus · be `-` · `camelCase` · konstantos `UPPER_CASE` · `a` ≠ `A`

## Duomenų tipai

📄 [02-duomenu-tipai.js](02-duomenu-tipai.js)

| Tipas | Pavyzdys | Atmink |
|---|---|---|
| `number` | `42`, `3.14` | `1/0` → `Infinity`, `"a"/2` → `NaN` |
| `bigint` | `123n` | labai dideliems sveikiesiems |
| `string` | `"a"`, `'a'`, `` `a` `` | immutable: `s[0]='x'` nieko nekeičia |
| `boolean` | `true`, `false` | `4 > 1` → `true` |
| `null` | `let x = null` | „tuščia“, priskiri **pats** |
| `undefined` | `let x;` | „nepriskirta“, priskiria **JS** |
| `symbol` | `Symbol()` | unikalus identifikatorius |
| `object` | `{}`, `[]` | struktūrinis tipas |

```js
typeof 42;    // 'number'
typeof null;  // 'object' ⚠️ JS keistenybė
typeof NaN;   // 'number' ⚠️
```

## Tekstas

📄 [03-tekstas.js](03-tekstas.js)

```js
const name = "Ana";
`Labas, ${name}! ${2 + 3}`;  // "Labas, Ana! 5"  ← template literal (galima ir kelios eilutės)
"Labas, " + name;            // senas būdas
"Suma: " + 2 + 3;            // "Suma: 23" ⚠️
name[0];                     // "A" (indeksai nuo 0)
```

## Operatoriai

📄 [04-operatoriai.js](04-operatoriai.js)

| Aritmetiniai | | Priskyrimo | |
|---|---|---|---|
| `5 % 2` | `1` (liekana) | `x += y` | `x = x + y` |
| `5 ** 2` | `25` (laipsnis) | `x *= y` | `x = x * y` |
| `x++` / `x--` | ±1 | `x %= y` | `x = x % y` |

⚠️ `a++` grąžina **seną** reikšmę, `++a` — **naują**.

## Klaidos

📄 [05-klaidos.js](05-klaidos.js)

| Pranešimas | Priežastis |
|---|---|
| `x is not defined` | nedeklaruotas / už scope ribų |
| `Cannot access 'x' before initialization` | `let`/`const` naudotas per anksti |
| `'x' has already been declared` | du kartus `let`/`const` |
| `Assignment to constant variable` | keičiamas `const` |
| `Cannot read properties of undefined` | savybė imama iš `undefined`/`null` |

---

## Failai šiame aplanke

| Failas | Tema |
|---|---|
| [01-kintamieji.js](01-kintamieji.js) | `let`, `const`, `var`, scope, hoisting, vardai |
| [02-duomenu-tipai.js](02-duomenu-tipai.js) | `typeof`, 8 tipai, `null` vs `undefined` |
| [03-tekstas.js](03-tekstas.js) | template literals, sujungimas, metodai |
| [04-operatoriai.js](04-operatoriai.js) | aritmetiniai, `%`, `**`, `++`, `+=` |
| [05-klaidos.js](05-klaidos.js) | dažniausios klaidos ir ką jos reiškia |
| [pilna-versija.md](pilna-versija.md) | ilgasis konspektas su plačiais paaiškinimais |

[Visos temos](../README.md) · [02 · Operatoriai](../02-operatoriai/) ➡️
