# JavaScript konspektai

Kiekviena tema — atskiras aplankas. Jame:

- **`README.md`** — cheat sheet kartojimui (atsidaro automatiškai, kai atidarai aplanką)
- **`NN-*.js`** — paleidžiami pavyzdžiai, po vieną failą kiekvienai potemei

```bash
node 06-masyvai/11-map.js
```

Laukiamas rezultatas surašytas komentaruose, tad gali pirma **atspėti**, tada paleisti ir pasitikrinti.

| # | Tema | Ką rasi |
|---|---|---|
| 01 | [Įvadas](01-ivadas/) | kintamieji, duomenų tipai, tekstas, operatoriai, klaidos |
| 02 | [Operatoriai](02-operatoriai/) | `typeof`, tipų keitimas, `===`, `&&`, `prompt` |
| 03 | [If, switch](03-if-switch/) | `if/else`, truthy/falsy, ternary, `?.`, `switch` |
| 04 | [Funkcijos](04-funkcijos/) | 3 aprašymo būdai, callback, IIFE, nested |
| 05 | [Ciklai](05-ciklai/) | `for`, `while`, `for...of`, `for...in`, `break` |
| 06 | [Masyvai](06-masyvai/) | 11 metodų, spread/rest, reference |
| 07 | [Datos](07-datos/) | `new Date()`, timestamp, get/set, palyginimas, formatavimas |
| 08 | [Strings](08-strings/) | kabutės, indeksai, `slice`, `split`, `replace`, paieška |
| 09 | [Objektai](09-objektai/) | 4 kūrimo būdai, `Object.keys`, spread/rest, destruktūrizavimas |
| 10 | [DOM (I dalis)](10-dom-1/) | elementų radimas, turinys, stilius, klasės, įvykiai 🌐 |
| 11 | [DOM (2 dalis)](11-dom-2/) | elementų kūrimas, šalinimas, navigacija medžiu, formos 🌐 |

🌐 = pavyzdžiai yra `.html` failai, atidaromi naršyklėje (DOM per `node` neveikia).

## Greita paieška

| Ieškai... | Eik į |
|---|---|
| `let` vs `const` vs `var` | [01-ivadas/01-kintamieji.js](01-ivadas/01-kintamieji.js) |
| kodėl `"5" + 3` yra `"53"` | [02-operatoriai/03-tipu-keitimas-auto.js](02-operatoriai/03-tipu-keitimas-auto.js) |
| kas yra falsy | [03-if-switch/04-truthy-falsy.js](03-if-switch/04-truthy-falsy.js) |
| arrow funkcijos | [04-funkcijos/03-trys-budai.js](04-funkcijos/03-trys-budai.js) |
| kas yra callback | [04-funkcijos/04-metodas-callback.js](04-funkcijos/04-metodas-callback.js) |
| `for...of` ar `for...in` | [05-ciklai/04-for-of.js](05-ciklai/04-for-of.js) |
| `map`, `filter`, `reduce` | [06-masyvai/](06-masyvai/) |
| ar metodas keičia originalą | [06-masyvai/README.md](06-masyvai/README.md) (pirma lentelė) |
| kodėl `getMonth()` grąžina 8 | [07-datos/03-get-metodai.js](07-datos/03-get-metodai.js) |
| kaip palyginti dvi datas | [07-datos/05-palyginimas.js](07-datos/05-palyginimas.js) |
| `slice` ar `substring` | [08-strings/08-istraukimas.js](08-strings/08-istraukimas.js) |
| tekstą paversti masyvu | [08-strings/07-split-join.js](08-strings/07-split-join.js) |
| `class` ar funkcija-konstruktorius | [09-objektai/05-kurimas-klase.js](09-objektai/05-kurimas-klase.js) |
| `{ a, b } = obj` ką reiškia | [09-objektai/12-destrukturizavimas.js](09-objektai/12-destrukturizavimas.js) |
| kaip surasti HTML elementą | [10-dom-1/02-elementu-radimas.html](10-dom-1/02-elementu-radimas.html) |
| `addEventListener` | [10-dom-1/08-addeventlistener.html](10-dom-1/08-addeventlistener.html) |
| kodėl `backgroundColor`, ne `background-color` | [10-dom-1/05-stilius.html](10-dom-1/05-stilius.html) |
| kaip sukurti naują HTML elementą | [11-dom-2/01-kurimas.html](11-dom-2/01-kurimas.html) |
| `childNodes` ar `children` | [11-dom-2/06-navigacija.html](11-dom-2/06-navigacija.html) |
| kaip paimti reikšmę iš formos | [11-dom-2/07-formos.html](11-dom-2/07-formos.html) |
