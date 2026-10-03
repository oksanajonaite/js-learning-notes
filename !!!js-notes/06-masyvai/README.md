# 06 · Masyvai: cheat sheet

> Šaltinis: `6_masyvai.pptx` · Ankstesnė tema: [05 · Ciklai](../05-ciklai/)
>
> 🖥️ Kiekvienai temai šiame aplanke yra paleidžiamas `.js` failas:
> ```bash
> node 06-masyvai/11-map.js
> ```
> Laukiamas rezultatas surašytas komentaruose — gali pirma **atspėti**, tada paleisti ir pasitikrinti.

## Greita lentelė: keičia ar kuria naują?

| Metodas | Ką daro | Keičia originalą | Grąžina | Pvz. |
|---|---|:---:|---|---|
| `push()` | prideda į galą | ✅ | naują ilgį | [07](07-push-pop.js) |
| `pop()` | ištrina paskutinį | ✅ | ištrintą elementą | [07](07-push-pop.js) |
| `unshift()` | prideda į pradžią | ✅ | naują ilgį | [08](08-shift-unshift.js) |
| `shift()` | ištrina pirmą | ✅ | ištrintą elementą | [08](08-shift-unshift.js) |
| `splice()` | trina / įterpia / keičia | ✅ | ištrintų masyvą | [09](09-splice.js) |
| `sort()` | rikiuoja | ✅ | tą patį masyvą | [16](16-sort.js) |
| `reverse()` | apverčia | ✅ | tą patį masyvą | [16](16-sort.js) |
| `slice()` | kopijuoja dalį | ❌ | naują masyvą | [10](10-slice.js) |
| `concat()` | sujungia | ❌ | naują masyvą | [13](13-concat.js) |
| `map()` | transformuoja kiekvieną | ❌ | naują masyvą | [11](11-map.js) |
| `filter()` | atrenka tinkančius | ❌ | naują masyvą | [14](14-filter.js) |
| `find()` | randa pirmą tinkantį | ❌ | **elementą** arba `undefined` | [15](15-find.js) |
| `reduce()` | suveda į vieną reikšmę | ❌ | vieną reikšmę | [17](17-reduce.js) |
| `forEach()` | veiksmas su kiekvienu | ❌ | **`undefined`** | [12](12-forEach.js) |

## Kūrimas

```js
const a = new Array();           // []
const b = new Array(5);          // [ <5 empty items> ], b.length → 5
const c = new Array(5).fill(0);  // [0, 0, 0, 0, 0]

const tuscias = [];                                // ← dažniausiai naudojama
const fruits = ["Apple", "Orange", "Plum"];

fruits[2] = "Pear";    // pakeitimas (indeksas jau yra)
fruits[3] = "Lemon";   // pridėjimas (indeksas naujas)
```

## Pagrindai

```js
fruits.length;                  // 3
fruits[0];                      // "Apple" ← indeksai nuo 0
fruits[fruits.length - 1];      // paskutinis
fruits[99];                     // undefined ⚠️ klaidos nebus

// Masyve gali būti bet kokie tipai
let arr = ["Apple", { name: "John" }, true, function () { console.log("hello"); }];
arr[1].name;   // "John"
arr[3]();      // "hello"

typeof arr;           // "object" ⚠️ NE "array"
Array.isArray(arr);   // true ✅
```

## Masyvas yra nuoroda (reference)

Kintamojo vardas **nėra** pats masyvas — tai tik nuoroda į vietą atmintyje.

```js
let fruits = ["Banana"];
let arr = fruits;        // copy by reference — DU vardai, VIENAS masyvas

arr === fruits;          // true
arr.push("Pear");
fruits;                  // ["Banana", "Pear"] ⚠️ pasikeitė ir fruits

[1, 2] === [1, 2];       // false ⚠️ du skirtingi masyvai atmintyje
```

## Spread (`...`) ir rest (`...`)

```js
const arrValue = ["My", "name", "is", "Jack"];
console.log(arrValue);      // ["My", "name", "is", "Jack"]
console.log(...arrValue);   // My name is Jack   ← IŠSKAIDO

const arr1 = ["one", "two"];
const arr2 = [...arr1, "three"];   // ["one", "two", "three"]

Math.max(...[5, 2, 9]);     // 9
```

```js
let func = function (...args) {    // funkcijos APRAŠYME = rest parameter
  console.log(args);               // atskiri argumentai SURENKAMI į masyvą
};
func(3);        // [3]
func(4, 5, 6);  // [4, 5, 6]
```

💡 `...` **iškvietime / masyve** → spread (išskaido). `...` **funkcijos aprašyme** → rest (surenka).

## Kopijavimas

```js
const sheeps = ["🐑", "🐏", "🐑"];

const clone1 = sheeps.slice();   // senas būdas
const clone2 = [...sheeps];      // ES6 būdas
clone2 === sheeps;               // false ✅ jau kitas masyvas

const combined = [...numbersOne, ...numbersTwo];   // sujungimas
```

## push / pop / shift / unshift

```js
let fruits = ["Apple", "Orange"];
fruits.push("Pear");      // ["Apple", "Orange", "Pear"]  → grąžina 3
fruits.pop();             // grąžina "Pear"               → ["Apple", "Orange"]
fruits.unshift("Kiwi");   // ["Kiwi", "Apple", "Orange"]
fruits.shift();           // grąžina "Kiwi"
```

⚠️ `shift`/`unshift` **pastumia visus** elementus ir perskaičiuoja indeksus → lėtesni nei `push`/`pop`.

## splice() — trina, įterpia, keičia

```js
arr.splice(index[, deleteCount, elem1, ..., elemN])
```

```js
let arr = ["I", "study", "JavaScript"];
arr.splice(1, 1);                      // ["I", "JavaScript"]      ← ištrina 1

arr = ["I", "study", "JavaScript", "right", "now"];
arr.splice(0, 3, "Let's", "dance");    // ["Let's","dance","right","now"] ← pakeičia

arr = ["I", "study", "JavaScript"];
arr.splice(2, 0, "complex");           // ["I","study","complex","JavaScript"] ← įterpia

arr = ["I", "study", "JavaScript"];
let removed = arr.splice(0, 2);        // removed: ["I", "study"] ← grąžina ištrintus
```

## slice() — kopijuoja dalį

```js
arr.slice([start], [end])   // end NEĮSKAITYTINAI ⚠️
```

```js
let arr = ["t", "e", "s", "t"];
arr.slice(1, 3);   // ["e", "s"]
arr.slice(-2);     // ["s", "t"]   ← nuo galo
arr.slice();       // viso masyvo kopija
```

## map() — transformavimas

```js
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {   // callback function
  return value * 2;
}
// numbers2: [90, 8, 18, 32, 50]   numbers1 nepakitęs ✅

numbers1.map((n) => n * 2);                  // tas pats su arrow
users.map((u) => u.name);                    // išrinkti vieną lauką
```

⚠️ Pamiršus `return` gausi `[undefined, undefined, ...]`.

## forEach() — veiksmas su kiekvienu

```js
["Bilbo", "Gandalf"].forEach((item, index, array) => {
  console.log(`${item} is at index ${index}`);
});

// Nieko negrąžina → rezultatą reikia padėti patiems
const playStore = [];
apps.forEach(function (item) { playStore.push(item); });
```

💡 `forEach` — kai reikia **veiksmo**. `map` — kai reikia **naujo masyvo**.

## concat() — sujungimas

```js
let arr = [1, 2];
arr.concat([3, 4]);          // [1, 2, 3, 4]
arr.concat([3, 4], [5, 6]);  // [1, 2, 3, 4, 5, 6]
arr.concat([3, 4], 5, 6);    // [1, 2, 3, 4, 5, 6]  ← ir atskirus elementus
```

## filter() — atranka

```js
let users = [{ id: 1, name: "John" }, { id: 2, name: "Pete" }, { id: 3, name: "Mary" }];

let someUsers = users.filter((item) => item.id < 3);
someUsers.length;   // 2

[1, 8, 3, 12].filter((n) => n > 5);    // [8, 12]
[1, 2].filter((n) => n > 100);         // [] ← jei niekas netinka
```

## find() — pirmas tinkantis

```js
const array1 = [5, 12, 8, 130, 44];
array1.find((element) => element > 10);   // 12 ← ELEMENTAS, ne masyvas

// Callback: (currentValue, index, arr) => {...}

inventory.find(isCherries);               // { name: "cherries", quantity: 5 }
array1.find((n) => n > 1000);             // undefined ⚠️

array1.findIndex((n) => n > 10);          // 1   ← indeksas arba -1
array1.includes(8);                       // true
```

## sort() — rikiavimas

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();      // A–Z
fruits.reverse();   // Z–A
```

⚠️ Skaičiams **be callback neveikia**, nes rikiuojama kaip tekstas:

```js
[40, 100, 1, 5, 25, 10].sort();   // [1, 10, 100, 25, 40, 5] ⚠️

var points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) { return a - b; });   // ↑ didėjimo tvarka
points.sort((a, b) => b - a);                     // ↓ mažėjimo tvarka
```

Callback grąžina: **neigiamą** → `a` prieš `b` · **teigiamą** → `a` po `b` · **0** → tvarka nesikeičia.

```js
books.sort(function (a, b) {
  if (a.price > b.price) return -1;   // brangiausios viršuje
  if (a.price < b.price) return 1;
  return 0;
});

employees.sort((a, b) => new Date(a.joinedDate) - new Date(b.joinedDate));   // datos
```

## reduce() — viskas į vieną reikšmę

```js
array.reduce(callback, initialValue)
```

- `callback` (**reducer**) — funkcija, atliekanti skaičiavimus
- `initialValue` — pradinė reikšmė, **nebūtina**

```js
function callbackFn(previousValue, currentValue, currentIndex, array) { /**/ }
```

| | `previousValue` | `currentValue` |
|---|---|---|
| `initialValue` **nurodyta** | `initialValue` | `array[0]` |
| `initialValue` **nenurodyta** | `array[0]` | `array[1]` |

```js
var array = [1, 2, 3, 4, 5];
function productArray(totalResult, currValue) { return totalResult * currValue; }

array.reduce(productArray);      // 120  (1*2*3*4*5)
array.reduce(productArray, 2);   // 240  (2*1*2*3*4*5)

[1, 2, 3, 4, 5].reduce((prev, curr) => prev + curr, 0);   // 15 ← suma
```

```js
let total = shoppingCart.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue.qty * currentValue.price;
}, 0);   // ⚠️ 0 būtina — kitaip previousValue pirmu kartu būtų OBJEKTAS
```

`reduce()` eina **nuo pradžios**, `reduceRight()` — **nuo galo**.

## Dažniausios klaidos

| ⚠️ | Kodėl |
|---|---|
| `typeof []` → `"object"` | masyvui tikrinti naudok `Array.isArray()` |
| `arr2 = arr1` nekopijuoja | tai nuoroda; kopijai naudok `[...arr1]` arba `arr1.slice()` |
| `[1,2] === [1,2]` → `false` | lyginamos nuorodos, ne turinys |
| `[10, 9, 100].sort()` | be callback rikiuoja kaip tekstą |
| `forEach` rezultatas `undefined` | reikia naujo masyvo → `map` |
| `map` be `return` | gausi `[undefined, ...]` |
| `reduce` be `initialValue` | tuščiam masyvui → TypeError; objektų masyve `previousValue` bus objektas |
| `slice(1, 3)` neįtraukia 3 | `end` yra neįskaitytinai |

---

## Failai šiame aplanke

| Failas | Tema |
|---|---|
| [01-kurimas.js](01-kurimas.js) | `new Array()` ir `[]`, elementų pridėjimas |
| [02-pagrindai.js](02-pagrindai.js) | `length`, indeksai, `Array.isArray()` |
| [03-reference.js](03-reference.js) | masyvas kaip nuoroda į atmintį |
| [04-spread.js](04-spread.js) | spread operatorius `...` |
| [05-kopijavimas.js](05-kopijavimas.js) | `slice()` vs `[...arr]` |
| [06-rest.js](06-rest.js) | rest parameter `...args` |
| [07-push-pop.js](07-push-pop.js) | `push()`, `pop()` |
| [08-shift-unshift.js](08-shift-unshift.js) | `shift()`, `unshift()` |
| [09-splice.js](09-splice.js) | `splice()` |
| [10-slice.js](10-slice.js) | `slice()` |
| [11-map.js](11-map.js) | `map()` |
| [12-forEach.js](12-forEach.js) | `forEach()` |
| [13-concat.js](13-concat.js) | `concat()` |
| [14-filter.js](14-filter.js) | `filter()` |
| [15-find.js](15-find.js) | `find()`, `findIndex()`, `includes()` |
| [16-sort.js](16-sort.js) | `sort()`, `reverse()` |
| [17-reduce.js](17-reduce.js) | `reduce()`, `reduceRight()` |

⬅️ [05 · Ciklai](../05-ciklai/) · [Visos temos](../README.md) · [07 · Datos](../07-datos/) ➡️
