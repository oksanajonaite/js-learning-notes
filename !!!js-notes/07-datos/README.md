# 07 · Datos: cheat sheet

> Šaltinis: `7_datos.pptx` · Ankstesnė tema: [06 · Masyvai](../06-masyvai/)
>
> 🖥️ Kiekvienai temai šiame aplanke yra paleidžiamas `.js` failas:
> ```bash
> node 07-datos/03-get-metodai.js
> ```
> Laukiamas rezultatas surašytas komentaruose — gali pirma **atspėti**, tada paleisti ir pasitikrinti.

## 3 dalykai, kuriuos lengviausia supainioti

| ⚠️ | Taisyklė |
|---|---|
| `getMonth()` | **0–11**, ne 1–12. `0` = sausis, `11` = gruodis |
| `getDay()` vs `getDate()` | `getDay()` = savaitės diena **0–6** (`0` = sekmadienis) · `getDate()` = mėnesio diena **1–31** |
| `date1 === date2` | **visada `false`** — datos yra objektai. Lygink per `getTime()` |

## Timestamp

📄 [02-timestamp.js](02-timestamp.js)

**Timestamp** — sveikasis skaičius, nurodantis, kiek **milisekundžių** (1 sek = 1000 ms) praėjo nuo **1970-01-01, 00:00:00**. Datos prieš 1970-01-01 turi **neigiamą** timestamp.

```js
let Jan01_1970 = new Date(0);                  // 01.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);   // 02.01.1970 ← pridėjom 24 val
let Dec31_1969 = new Date(-24 * 3600 * 1000);  // 31.12.1969 ← neigiamas
```

```js
let today = new Date();
let timeSt = today.getTime();     // data → timestamp

Date.now();                       // dabarties timestamp be Date objekto
```

| Vienetas | ms |
|---|---|
| 1 sekundė | `1000` |
| 1 minutė | `60 000` |
| 1 valanda | `3 600 000` |
| 1 diena | `86 400 000` |

## Datos kūrimo būdai

📄 [01-kurimas.js](01-kurimas.js)

```js
// 1. Dabartis
let now = new Date();

// 2. Iš timestamp
let date = new Date(1607110465663);   // 2020-12-04T19:34:25.663Z

// 3. Iš date string
let date = new Date("2017-01-26");

// 4. Nurodant metus/mėn/dieną/val/min/sek/ms
new Date(2011, 0, 1, 0, 0, 0, 0);     // 1 Jan 2011, 00:00:00
new Date(2011, 0, 1);                 // tas pats — valandos ir kt. pagal nutylėjimą 0
new Date(2011, 0, 1, 2, 3, 4, 567);   // 1.01.2011, 02:03:04.567
```

⚠️ **Spąstai kuriant:**

```js
new Date("2017-01-26");      // UTC vidurnaktis → Lietuvoje rodo 02:00!
new Date("2017-01-26T00:00:00"); // be Z = vietinis laikas ✅

new Date("01/12/2018");      // Jan 12 ⚠️ amerikietiškas MM/DD/YYYY
new Date("2018-12-01");      // ✅ rašyk ISO formatu

new Date("2023-02-30");      // Mar 02 ⚠️ persiverčia
new Date("2023-13-01");      // Invalid Date
isNaN(new Date("blogai"));   // true ← taip tikrinam
```

## Informacijos gavimas (get)

📄 [03-get-metodai.js](03-get-metodai.js)

| Metodas | Ką grąžina |
|---|---|
| `getFullYear()` | metai 4 skaitmenimis (`yyyy`) |
| `getMonth()` | mėnuo **0–11** ⚠️ |
| `getDate()` | mėnesio diena **1–31** |
| `getDay()` | savaitės diena **0–6** ⚠️ (`0` = sekmadienis) |
| `getHours()` | valandos 0–23 |
| `getMinutes()` | minutės 0–59 |
| `getSeconds()` | sekundės 0–59 |
| `getMilliseconds()` | milisekundės 0–999 |
| `getTime()` | milisekundės nuo 1970-01-01 |
| `Date.now()` | dabarties timestamp (ES5) |

```js
const d = new Date(2026, 8, 22);   // 8 = rugsėjis

`Mėnuo: ${d.getMonth() + 1}`;      // 9 ← žmogui rodant reikia +1

const menesiai = ["sausio", "vasario", "kovo", /* ... */];
menesiai[d.getMonth()];            // "rugsėjo"
```

## Datos nustatymas / keitimas (set)

📄 [04-set-metodai.js](04-set-metodai.js)

| Metodas | Ką nustato |
|---|---|
| `setFullYear()` | metus (galima ir mėnesį, dieną) |
| `setMonth()` | mėnesį 0–11 |
| `setDate()` | mėnesio dieną 1–31 |
| `setHours()` | valandas 0–23 |
| `setMinutes()` | minutes 0–59 |
| `setSeconds()` | sekundes 0–59 |
| `setMilliseconds()` | milisekundes 0–999 |
| `setTime()` | viską iš timestamp |

```js
const d = new Date();
d.setFullYear(2020);
document.getElementById("demo").innerHTML = d;
```

⚠️ `set` metodai **keičia patį objektą** (kaip `push` masyvuose). Kopijai: `new Date(d.getTime())`.

💡 Datos **persiverčia automatiškai** — todėl „po N dienų“ skaičiuoti labai paprasta:

```js
const nauja = new Date(data.getTime());
nauja.setDate(nauja.getDate() + 10);   // veikia ir per mėnesio, ir per metų ribą
```

## Datų palyginimas

📄 [05-palyginimas.js](05-palyginimas.js)

Nors datos yra JS objektai, jas galima lyginti operatoriais `>`, `<`, `>=`, `<=`:

```js
var date1 = "01/12/2018";       // reikšmės dar yra STRING
var date2 = "12/12/2018";

date1 = new Date(date1);        // paverčiam į JavaScript datas
date2 = new Date(date2);

date1 > date2;    // false
date1 < date2;    // true
date1 >= date2;   // false
date1 <= date2;   // true
```

⚠️ **Su `==` ir `===` lyginti negalima** — lyginamos nuorodos, ne reikšmės:

```js
const a = new Date(2026, 0, 1);
const b = new Date(2026, 0, 1);

a === b;                      // false ⚠️
a.getTime() === b.getTime();  // true ✅
+a === +b;                    // true ✅ trumpiau
```

> Kodėl `>` `<` veikia, o `===` ne? Lyginant su `>` `<` JS automatiškai paverčia datą į **skaičių** (timestamp), o `===` tipo nekeičia.

```js
const skirtumasMs = pabaiga - pradzia;              // atimtis irgi duoda skaičių
Math.round(skirtumasMs / 86400000);                 // dienų skaičius
ivykiai.sort((x, y) => x.data - y.data);            // rikiavimas pagal datą
```

## Formatavimas

📄 [06-formatavimas.js](06-formatavimas.js)

```js
d.toDateString();                  // "Tue Sep 22 2026"
d.toISOString();                   // "2026-09-22T11:30:45.000Z" ⚠️ UTC laiku!
d.toLocaleDateString("lt-LT");     // "2026-09-22"
d.toLocaleString("lt-LT");         // "2026-09-22 14:30:45"

d.toLocaleDateString("lt-LT", { year: "numeric", month: "long", day: "numeric" });
// "2026 m. rugsėjo 22 d."

d.toLocaleDateString("sv-SE");     // "2026-09-22" ← patogu <input type="date">
```

⚠️ `toISOString()` rodo **UTC**, todėl ankstyvos ryto datos „pasislenka“ viena diena atgal.

## Moment.js

📄 [07-moment.js](07-moment.js)

JS biblioteka darbui su datomis: *„Parse, validate, manipulate and display dates and times in JavaScript“*

- Dokumentacija: <https://momentjs.com/docs/#/use-it/>
- Video pamoka: <https://www.youtube.com/watch?v=fB9KRePY9-w>

```js
moment().format("YYYY-MM-DD");   // "2026-09-22"
moment().add(7, "days");
moment(a).diff(moment(b), "days");
moment(data).fromNow();          // "3 days ago"
```

ℹ️ Moment.js oficialiai paskelbta **legacy** — naujuose projektuose autoriai rekomenduoja `day.js` (2 KB, tokia pati sintaksė) arba `date-fns`. Paprastiems dalykams užtenka įdėtų JS priemonių.

---

## Failai šiame aplanke

| Failas | Tema |
|---|---|
| [01-kurimas.js](01-kurimas.js) | 4 kūrimo būdai, formatų spąstai, `Invalid Date` |
| [02-timestamp.js](02-timestamp.js) | timestamp, `getTime()`, `Date.now()`, ms lentelė |
| [03-get-metodai.js](03-get-metodai.js) | `getFullYear`, `getMonth`, `getDay`, amžiaus skaičiavimas |
| [04-set-metodai.js](04-set-metodai.js) | `setFullYear`, `setDate`, kopijavimas, „po N dienų“ |
| [05-palyginimas.js](05-palyginimas.js) | `>` `<` veikia, `===` ne; skirtumas dienomis, rikiavimas |
| [06-formatavimas.js](06-formatavimas.js) | `toLocaleDateString`, `toISOString`, savas formatas |
| [07-moment.js](07-moment.js) | Moment.js ir tie patys veiksmai be bibliotekos |

⬅️ [06 · Masyvai](../06-masyvai/) · [Visos temos](../README.md) · [08 · Strings](../08-strings/) ➡️
