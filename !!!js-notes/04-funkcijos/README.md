# 04 · Funkcijos: cheat sheet

> Šaltinis: `4_funkcijos.pptx` · Ankstesnė tema: [03 · If, switch](../03-if-switch/)
>
> 🖥️ Kiekvienai temai šiame aplanke yra paleidžiamas `.js` failas:
> ```bash
> node 04-funkcijos/03-trys-budai.js
> ```
> Laukiamas rezultatas surašytas komentaruose — gali pirma **atspėti**, tada paleisti ir pasitikrinti.

## Kas yra funkcija

📄 [01-kas-yra-funkcija.js](01-kas-yra-funkcija.js)

💡 **Funkcija = receptas.** Užsirašai vieną kartą ir gamini kiek nori kartų, vis su kitais ingredientais.

```js
function pasisveikinti(vardas) {    // receptas užrašytas, bet dar NIEKAS neįvyko
  return "Labas, " + vardas;
}

pasisveikinti("Oksana");            // "Labas, Oksana" ← tik iškvietus suveikia
pasisveikinti("Jonas");             // "Labas, Jonas"
```

## Anatomija

📄 [02-anatomija.js](02-anatomija.js)

```js
//  raktažodis  vardas      parametrai   numatytoji reikšmė
function calculateBill(meal, taxRate = 0.05) {
  const total = meal * (1 + taxRate);   // kūnas
  return total;                         // grąžinama reikšmė
}

const myTotal = calculateBill(100, 0.13);  // iškvietimas su argumentais → 113
calculateBill(100);                        // taxRate = 0.05 → 105
```

| Sąvoka | Kas tai |
|---|---|
| **Parametrai** | kintamieji aprašyme: `(meal, taxRate)` (recepto ingredientų sąrašas) |
| **Argumentai** | tikros reikšmės iškvietime: `(100, 0.13)` (tikri ingredientai) |
| **`return`** | grąžina rezultatą ir **nutraukia** funkciją. Be jo funkcija grąžina `undefined` |
| `sum` vs `sum()` | `sum` yra pati funkcija, `sum()` ją **iškviečia** |

⚠️ Trūkstami argumentai tampa `undefined`, pertekliniai — tiesiog ignoruojami.

## 3 būdai aprašyti funkciją

📄 [03-trys-budai.js](03-trys-budai.js)

💡 Tai trys būdai užrašyti **tą patį receptą**. Visi daro visiškai tą patį.

```js
// 1. Function declaration
function sum(a, b) {
  return a + b;
}

// 2. Function expression (funkcija priskiriama kintamajam)
const sum = function (a, b) {
  return a + b;
};

// 3. Arrow function (trumpiausias)
const sum = (a, b) => a + b;             // viena eilutė: return automatinis
const sum = (a, b) => {                  // su {} return rašyti PRIVALOMA
  return a + b;
};
const sayHi = () => alert("Hello");      // be parametrų: ()
const double = n => n * 2;               // vienas parametras: skliaustai nebūtini
```

| | Declaration | Expression / Arrow |
|---|---|---|
| Galima kviesti **prieš** aprašymą | ✅ (hoisting) | ❌ |

## Funkcija, metodas, callback

📄 [04-metodas-callback.js](04-metodas-callback.js)

Visi trys yra **funkcijos**. Skiriasi tik tai, **kur funkcija yra ir kaip ji naudojama**.

| | Kas tai | Pavyzdys |
|---|---|---|
| **Funkcija** | receptas | `dvigubinti(5)` |
| **Metodas** | receptas, **priklausantis** objektui, kviečiamas per **tašką** | `kainos.map(...)`, `"labas".toUpperCase()` |
| **Callback** | receptas, **paduotas kitai funkcijai** kaip ingredientas | `kainos.map(dvigubinti)` |

```js
const kainos = [10, 20, 30];
const dvigubinti = x => x * 2;

dvigubinti(5);           // 10 ← čia paprasta funkcija
kainos.map(dvigubinti);  // ← ta pati funkcija čia yra callback (paduodam BE ())
```

## Callback funkcijos

📄 [05-map-callback.js](05-map-callback.js)

**Callback** yra funkcija, **perduodama kitai funkcijai kaip argumentas**. Funkcija, kuri priima callback'ą (pvz., `map`), vadinama **higher-order function (HOF)**.

### `map`: įdėtas į JS masyvo metodas

💡 **`map` = Excel formulės nutempimas žemyn.** Ta pati formulė pritaikoma kiekvienam elementui ir gaunamas **naujas** masyvas.

```js
const kainos = [10, 20, 30];                       // A stulpelis
const dvigubos = kainos.map(kaina => kaina * 2);   // formulė =A1*2
// [20, 40, 60]                                    // B stulpelis

// be map: kiekvieną ranka, o su 1000 elementų taip neįmanoma
const dvigubos2 = [kainos[0] * 2, kainos[1] * 2, kainos[2] * 2];
```

### Sinchroninis vs asinchroninis

📄 [06-sinchroninis-asinchroninis.js](06-sinchroninis-asinchroninis.js)

| | Sinchroninis | Asinchroninis |
|---|---|---|
| Kada vykdomas | **iškart**, kodas laukia | **vėliau**, kodas eina toliau |
| 💡 Palyginimas | kavinėje stovi prie kasos, kol padarys kavą | restorane gauni pypsintį pultelį ir eini sėsti |
| Pavyzdžiai | `map`, `filter`, `find`, `forEach` | `setTimeout`, duomenys iš serverio |

```js
console.log("1");
[10, 20].forEach(x => console.log(x));
console.log("2");
// 1, 10, 20, 2       ← sinchroninis: eilės tvarka
```

```js
console.log("1");
setTimeout(() => console.log("2"), 1000);   // po 1 s
console.log("3");
// 1, 3, 2            ← asinchroninis: „2“ atsiranda vėliau
```

Kam reikia asinchroniškumo? Jei puslapis lauktų, kol atsiųs duomenis iš serverio, jis **„užšaltų“**.

## Self-invoking (IIFE)

📄 [07-iife.js](07-iife.js)

Funkcija, kuri **iškviečiama iškart ją sukūrus**. Veikia tik su function expression.

💡 Receptas, kurį užrašai ir iškart pagamini, nes antrą kartą jo nereikės. Dabar naudojama retai, bet sutiksi senesniame kode.

```js
(function () {
  console.log("Iškviesta iškart!");
})();
// (function () {...}) ← funkcija skliaustuose
//                  () ← „iškviesk dabar“

(function (message) {
  console.log(message);
})("Hello, hello");     // su argumentu
```

## Nested funkcijos

📄 [08-nested.js](08-nested.js)

💡 **Dėžutė dėžutėje.** Iš mažosios matai, kas yra didžiojoje, bet iš lauko į mažąją neįlįsi.

- Vidinė funkcija **mato** išorinės funkcijos kintamuosius.
- Iš išorės vidinės funkcijos **nematyti**.

```js
function isorine() {
  const vardas = "Oksana";

  function vidine() {
    console.log("Labas, " + vardas);   // ✅ mato išorinį kintamąjį
  }

  vidine();
}

isorine();   // "Labas, Oksana"
vidine();    // ❌ ReferenceError: vidine is not defined
```

Funkcija gali ir **grąžinti** funkciją — vidinė „prisimena“ išorinės kintamuosius. Tai vadinama **closure**.

---

## Failai šiame aplanke

| Failas | Tema |
|---|---|
| [01-kas-yra-funkcija.js](01-kas-yra-funkcija.js) | kam reikia funkcijų, `sum` vs `sum()` |
| [02-anatomija.js](02-anatomija.js) | parametrai, argumentai, `return`, numatytosios reikšmės |
| [03-trys-budai.js](03-trys-budai.js) | declaration, expression, arrow, hoisting |
| [04-metodas-callback.js](04-metodas-callback.js) | funkcija vs metodas vs callback |
| [05-map-callback.js](05-map-callback.js) | `map` ir kiti callback'ą priimantys metodai |
| [06-sinchroninis-asinchroninis.js](06-sinchroninis-asinchroninis.js) | `setTimeout`, vykdymo tvarka |
| [07-iife.js](07-iife.js) | self-invoking funkcija |
| [08-nested.js](08-nested.js) | funkcija funkcijoje, closure |

⬅️ [03 · If, switch](../03-if-switch/) · [Visos temos](../README.md) · [05 · Ciklai](../05-ciklai/) ➡️
