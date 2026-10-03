# 02 · Operatoriai, tipų keitimas, įvedimas/išvedimas: cheat sheet

> Šaltinis: `2d_operatoriai,kt.pptx` · Ankstesnė tema: [01 · Įvadas](../01-ivadas/)
>
> 🖥️ Kiekvienai temai šiame aplanke yra paleidžiamas `.js` failas:
> ```bash
> node 02-operatoriai/02-typeof.js
> ```
> Laukiamas rezultatas surašytas komentaruose — gali pirma **atspėti**, tada paleisti ir pasitikrinti.

## Masyvai ir objektai

📄 [01-masyvai-objektai.js](01-masyvai-objektai.js)

```js
const cars = ["Saab", "Volvo", "BMW"];     // masyvas: reikšmės pagal indeksą
cars[0];                                   // "Saab" (nuo 0)
const mixed = ["John", "Doe", 46];         // tipai gali būti skirtingi

const person = { firstName: "John", age: 46 };  // objektas: key: value
person.firstName;                               // "John"

const list = [{ type: "Fiat" }, { type: "BMW" }]; // masyvas iš objektų
list[1].type;                                     // "BMW"
```

## typeof

📄 [02-typeof.js](02-typeof.js)

```js
typeof x;  typeof(x);   // abu būdai veikia
typeof 0;          // "number"      typeof 10n;       // "bigint"
typeof "foo";      // "string"      typeof true;      // "boolean"
typeof undefined;  // "undefined"   typeof null;      // "object" ⚠️
typeof {};         // "object"      typeof [];        // "object" ⚠️ → Array.isArray([]) // true
```

## Tipų keitimas

📄 [03-tipu-keitimas-auto.js](03-tipu-keitimas-auto.js) · [04-tipu-keitimas-rankinis.js](04-tipu-keitimas-rankinis.js)

### Automatinis (implicit)

```js
"6" / "2";   // 3     ← - * / % paverčia į number
"6" - 2;     // 4
"6" + 2;     // "62"  ⚠️ + su tekstu = sujungimas
alert(5);    // alert viską paverčia į string
```

### Rankinis (explicit)

| Į ką | Būdas | Pavyzdys |
|---|---|---|
| **number** | `Number(x)` | `Number("123")` → `123` · `Number("3 lives")` → `NaN` |
| | `parseInt(x)` | `parseInt("20.01")` → `20` · `parseInt("3 lives")` → `3` |
| | `parseFloat(x)` | `parseFloat("20.01")` → `20.01` |
| | `+x` | `+"20.01"` → `20.01` |
| | `Math.floor(x)` | `Math.floor("20.01")` → `20` (apvalina žemyn) |
| **string** | `String(x)` | `String(true)` → `"true"` |
| **boolean** | `Boolean(x)` | `Boolean("hello")` → `true` |

**`Number` vs `parseInt`:** `Number` reikalauja, kad **visas** tekstas būtų skaičius. `parseInt` pasiima skaičių iš teksto **pradžios**.

```js
let height = 30, lives = "3";
height + lives;     // "303" ⚠️
height + +lives;    // 33 ✅
```

### `Number()` ir `Boolean()` taisyklės

📄 [05-number-boolean-taisykles.js](05-number-boolean-taisykles.js)

| Reikšmė | `Number()` |
|---|---|
| `undefined` | `NaN` |
| `null` | `0` |
| `true` / `false` | `1` / `0` |
| `""` arba `"  "` | `0` |
| `" 12 "` | `12` (tarpai kraštuose nukerpami) |
| `"12abc"` | `NaN` |

**`false`** grąžina tik *falsy* reikšmės: `false`, `0`, `""`, `null`, `undefined`, `NaN` (dar `-0` ir `0n`).
**Visos kitos** grąžina `true`:

```js
Boolean("0");      // true ⚠️ netuščias tekstas
Boolean(" ");      // true ⚠️ tarpas irgi simbolis
Boolean("false");  // true ⚠️
Boolean([]);       // true ⚠️
```

## Palyginimo operatoriai

📄 [06-palyginimas.js](06-palyginimas.js)

| Operatorius | Reikšmė | Pavyzdys |
|---|---|---|
| `==` | lygu (tipą **pakeičia**) | `"30" == 30` → `true` |
| `===` | lygu **ir tas pats tipas** | `"30" === 30` → `false` |
| `!=` / `!==` | nelygu / nelygu arba kitas tipas | `"30" !== 30` → `true` |
| `>` `<` `>=` `<=` | daugiau, mažiau | `5 >= 5` → `true` |

> 💡 Visada naudok **`===`** ir **`!==`** — `0 == ""` ir `0 == false` grąžina `true`.

**Ternary** (trumpas if): `sąlyga ? jei_true : jei_false`

```js
const voteable = age < 18 ? "Too young" : "Old enough";
```

## Loginiai operatoriai

📄 [07-loginiai.js](07-loginiai.js)

| | Reikšmė | `true` kai... |
|---|---|---|
| `&&` | IR | **abi** pusės `true` |
| `\|\|` | ARBA | **bent viena** pusė `true` |
| `!` | NE | apverčia: `!true` → `false` |

```js
age >= 18 && hasTicket;   // abi sąlygos
isAdmin || isOwner;       // bent viena
!isLoggedIn;              // neigimas
vardas || "Svečias";      // numatytoji reikšmė, jei vardas falsy
```

⚠️ `&&` svarbesnis už `||`: `true || false && false` → `true`.

## Įvedimas / išvedimas (naršyklėje)

📄 [08-ivedimas-isvedimas.js](08-ivedimas-isvedimas.js)

| Funkcija | Ką daro | Grąžina |
|---|---|---|
| `alert("Hi")` | parodo pranešimą | nieko |
| `prompt("Klausimas?", default)` | prašo įvesti tekstą | **string**, o paspaudus Cancel `null` |
| `confirm("Ar tikrai?")` | OK / Cancel | `true` / `false` |

```js
let age = prompt("How old are you?", 100);  // "100" ← STRING!
Number(age) + 1;                            // 101
let isBoss = confirm("Are you the boss?");  // true / false
```

```html
<p id="demo"></p>
<script>
  document.getElementById("demo").innerHTML = 5 + 6;  // įrašo "11" į HTML
</script>
```

---

## Failai šiame aplanke

| Failas | Tema |
|---|---|
| [01-masyvai-objektai.js](01-masyvai-objektai.js) | masyvas pagal indeksą, objektas pagal raktą |
| [02-typeof.js](02-typeof.js) | `typeof`, `Array.isArray()` |
| [03-tipu-keitimas-auto.js](03-tipu-keitimas-auto.js) | automatinis keitimas, `+` spąstai |
| [04-tipu-keitimas-rankinis.js](04-tipu-keitimas-rankinis.js) | `Number`, `parseInt`, `String`, apvalinimas |
| [05-number-boolean-taisykles.js](05-number-boolean-taisykles.js) | `Number()` ir `Boolean()` lentelės, falsy |
| [06-palyginimas.js](06-palyginimas.js) | `==` vs `===`, ternary |
| [07-loginiai.js](07-loginiai.js) | `&&`, `\|\|`, `!` |
| [08-ivedimas-isvedimas.js](08-ivedimas-isvedimas.js) | `alert`, `prompt`, `confirm`, `console` |

⬅️ [01 · Įvadas](../01-ivadas/) · [Visos temos](../README.md) · [03 · If, switch](../03-if-switch/) ➡️
