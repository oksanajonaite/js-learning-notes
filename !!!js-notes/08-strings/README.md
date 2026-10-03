# 08 · Strings (darbas su tekstais): cheat sheet

> Šaltinis: `8_Strings.pptx` · Ankstesnė tema: [07 · Datos](../07-datos/)
>
> 🖥️ Kiekvienai temai šiame aplanke yra paleidžiamas `.js` failas:
> ```bash
> node 08-strings/07-split-join.js
> ```
> Laukiamas rezultatas surašytas komentaruose — gali pirma **atspėti**, tada paleisti ir pasitikrinti.

## Dažniausiai naudojami String metodai

| Metodas | Ką daro | Failas |
|---|---|---|
| `charAt(index)` | grąžina simbolį iš nurodytos pozicijos | [03](03-ilgis-indeksai.js) |
| `concat()` | sujungia du ar daugiau tekstų | [05](05-sujungimas.js) |
| `replace()` | pakeičia tekstą kitu (**pirmą** rastą) | [06](06-replace.js) |
| `split()` | paverčia tekstą masyvu | [07](07-split-join.js) |
| `substr(start, length)` | grąžina teksto dalį ⚠️ pasenęs | [08](08-istraukimas.js) |
| `substring(start, end)` | grąžina teksto dalį | [08](08-istraukimas.js) |
| `slice(start, end)` | grąžina teksto dalį ✅ rinkis šį | [08](08-istraukimas.js) |
| `toLowerCase()` | paverčia mažosiomis raidėmis | [10](10-keitimas.js) |
| `toUpperCase()` | paverčia didžiosiomis raidėmis | [10](10-keitimas.js) |
| `trim()` | nukerpa tarpus iš kraštų | [10](10-keitimas.js) |
| `includes()` | ar tekstas yra kito dalis → `true`/`false` | [09](09-paieska.js) |
| `search()` | ieško regex atitikties, grąžina poziciją | [09](09-paieska.js) |

⚠️ **Visi metodai grąžina NAUJĄ tekstą** — originalas niekada nekinta.

## Kabutės ir kėlimas į naują eilutę

📄 [01-kabutes-escape.js](01-kabutes-escape.js)

```js
// Paprastos kabutės → nauja eilutė su \n
let guestList = "Guests:\n * John\n * Pete\n * Mary";

// Backticks → tiesiog spaudi Enter
let str2 = `Hello
World`;
```

Kabučių „escape“, kai naudojam paprastas kabutes:

```js
alert('I\'m the Walrus!');   // I'm the Walrus!
```

Naudojant backticks kabutės escape simboliu **nežymimos**:

```js
alert(`I'm the Walrus!`);    // I'm the Walrus!
```

> Kabutės žymimos **tik tada**, kai string'ui aprašyti naudojamos kabutės sutampa su tekste esančiomis kabutėmis. Paprasčiausias sprendimas — pasirinkti kitokias kabutes: `"I'm the Walrus!"`.

## Specialieji simboliai

📄 [02-specialieji-simboliai.js](02-specialieji-simboliai.js)

| Simbolis | Reikšmė |
|---|---|
| `\n` | New line — nauja eilutė |
| `\r` | Carriage return. Windows failuose naujai eilutei naudojama `\r\n`, kitose OS — tik `\n`. Dauguma Windows programų supranta ir `\n` |
| `\'` , `\"` | Kabutės |
| `\\` | Pats backslash |
| `\t` | Tab |
| `\b`, `\f`, `\v` | Backspace, Form Feed, Vertical Tab — palikti dėl suderinamumo, nebenaudojami |

```js
"C:\Users";    // "C:Users" ⚠️ backslash dingo
"C:\\Users";   // "C:\Users" ✅
"a\nb".length; // 3 ← \n yra VIENAS simbolis
```

## Ilgis ir simbolių pasiekimas

📄 [03-ilgis-indeksai.js](03-ilgis-indeksai.js)

```js
let str = "My name";
alert(str.length);   // 7 ← tarpas irgi skaičiuojamas
```

**Kiekvienas simbolis ir tarpas turi indeksą.** Indeksai prasideda nuo `0`, pozicijos — nuo `1`:

```
 J  a  v  a  s  c  r  i  p  t
 0  1  2  3  4  5  6  7  8  9    ← index
 1  2  3  4  5  6  7  8  9 10    ← position
```

⚠️ 5-a pozicija = **4-as indeksas**.

```js
let str = `Hello`;

str[0];                  // "H" ← pirmas simbolis
str.charAt(0);           // "H" ← tas pats
str[str.length - 1];     // "o" ← paskutinis
str.at(-1);              // "o" ← naujesnis būdas

str[99];                 // undefined
str.charAt(99);          // "" ⚠️ tuščias tekstas, ne undefined
```

## String yra nekeičiami (immutable)

📄 [04-immutable.js](04-immutable.js)

```js
let str = 'Hi';
str[0] = 'h';      // ❌ error — neveikia
alert(str[0]);     // "H" — nepasikeitė
```

Reikia **kurti naujus**, naudoti sujungimą:

```js
let str = 'Hi';
str = 'h' + str[1];   // ✅ replace the string
alert(str);           // "hi"
```

⚠️ Todėl pamiršus priskyrimą rezultatas dingsta:

```js
zodis.toUpperCase();              // rezultatas niekur nepateko
const didz = zodis.toUpperCase(); // ✅
```

## Sujungimas

📄 [05-sujungimas.js](05-sujungimas.js)

```js
let text1 = "Hello";
let text2 = "world!";
let result = text1.concat(" ", text2);   // "Hello world!"

text1 + " " + text2;                     // tas pats, naudojama dažniau
`${vardas} yra ${amzius} metų`;          // patogiausia su kintamaisiais

"-".repeat(20);                          // "--------------------"
["a", "b"].join(" ");                    // "a b" ← masyvui patogiau join
```

## replace() ir replaceAll()

📄 [06-replace.js](06-replace.js)

```js
let text = "Visit Microsoft!";
let result = text.replace("Microsoft", "W3Schools");   // "Visit W3Schools!"
```

> Skriptas suras tekste „Microsoft“ ir pakeis į „W3Schools“. Jei žodžių yra keli, pakeis **pirmąjį** rastą.

Jei norime pakeisti **visus** atitikmenis, naudojame `replaceAll()`:

```js
let result = "1 abc 2 abc 3".replaceAll("abc", "xyz");
// result is "1 xyz 2 xyz 3"
```

⚠️ `replace` yra **case sensitive**. Regex alternatyvos: `/abc/g` (visus), `/abc/i` (nepaisant dydžio).

## split() ir join()

📄 [07-split-join.js](07-split-join.js)

`split()` skirtas tekstams **išskaidyti į masyvą**:

```js
const greeting = "What a beautiful world";
const arr = greeting.split(' ');      // ' ' ← splitter (skirtukas)
// ["What", "a", "beautiful", "world"]

const arr2 = greeting.split('');      // skirtukas — tuščias tekstas
// ['W', 'h', 'a', 't', ' ', 'a', ...]
```

`split()` dažnai naudojamas kartu su masyvo metodu `join()`:

```js
const sentence = "Hello world this is JavaScript";

const words = sentence.split(" ");
// ["Hello", "world", "this", "is", "JavaScript"]

const dashed = words.join("-");
// "Hello-world-this-is-JavaScript"
```

💡 `split` → `map` → `join` yra dažna grandinėlė teksto pertvarkymui.

## Teksto dalies ištraukimas

📄 [08-istraukimas.js](08-istraukimas.js)

`substring()` ir `slice()` grąžina nurodytą teksto dalį, esančią **tarp nurodytų indeksų**:

```js
str.substring(indexStart, indexEnd)
str.slice(beginIndex, endIndex)
```

```js
const message = "JavaScript is fun.";
message.substring(0, 10);   // "JavaScript" ← nuo 0 iki 10

const str = "JavaScript is a very absurd programming language.";
str.slice(28);      // "programming language." ← nuo 28 iki galo
str.slice(4, 15);   // "Script is a"
```

| | `slice()` | `substring()` |
|---|---|---|
| Neigiami indeksai | ✅ `t.slice(-6)` → `"Script"` | ❌ virsta nuliu |
| Kai `start > end` | grąžina `""` | ⚠️ sukeičia argumentus vietomis |

💡 Praktikoje rinkis **`slice()`** — elgiasi taip pat kaip masyvo `slice()`.
⚠️ `substr(start, length)` yra pasenęs (deprecated) — antras argumentas ten yra **ilgis**, ne indeksas.

Skirtumai išsamiai: <https://thispointer.com/difference-between-slice-and-substring-in-javascript/>

## Paieška tekste

📄 [09-paieska.js](09-paieska.js)

`includes()` patikrina, ar nurodytas tekstas yra kito teksto dalis, grąžina `true` arba `false`:

```js
let sentence = "Java is to JavaScript what Car is to Carpet.";

sentence.includes("Java");      // true
sentence.includes("java");      // false ⚠️ case sensitive
sentence.includes("Java", 20);  // false ← antras argumentas: nuo kurios pozicijos
sentence.includes("whose");     // false
sentence.includes("");          // true ⚠️
```

`search()` ieško **regex** atitikties tekste. Grąžina pirmosios atitikties indeksą arba `-1`, jei atitikimų nerado:

```js
let string1 = "JavaScript JavaScript1";
let regExp = /(JavaScript)\d/;      // 'JavaScript', po kurio eina skaitmuo
let index = string1.search(regExp);
console.log(index);                 // 11
```

| Ieškai | Naudok |
|---|---|
| ar yra? | `includes()` → `true`/`false` |
| kurioje vietoje? | `indexOf()` → indeksas arba `-1` |
| kurioje vietoje pagal šabloną | `search(regex)` |
| ar prasideda / baigiasi | `startsWith()` / `endsWith()` |

## Raidžių dydis, tarpai, papildymas

📄 [10-keitimas.js](10-keitimas.js)

```js
t.toUpperCase();          // "LABAS RYTAS"
t.toLowerCase();          // "labas rytas"
ivestis.toLowerCase() === "ana";   // palyginimas nepaisant dydžio

"   labas   ".trim();     // "labas" ← tik iš KRAŠTŲ
"a   b".trim();           // "a   b" ⚠️ viduryje nekeičia

"5".padStart(2, "0");     // "05" ← patogu datoms
"Ana".padEnd(10, ".");    // "Ana......."
"=".repeat(30);           // "=============================="
```

---

## Daugiau string metodų

- <https://www.programiz.com/javascript/library/string>
- <https://www.javascripttutorial.net/javascript-string-methods/>
- <https://youtu.be/x16Z_U1tGrc>

---

## Failai šiame aplanke

| Failas | Tema |
|---|---|
| [01-kabutes-escape.js](01-kabutes-escape.js) | 3 kabučių tipai, escape, backticks |
| [02-specialieji-simboliai.js](02-specialieji-simboliai.js) | `\n`, `\t`, `\\`, `\'` |
| [03-ilgis-indeksai.js](03-ilgis-indeksai.js) | `length`, `[i]`, `charAt()`, `at()` |
| [04-immutable.js](04-immutable.js) | tekstas nekeičiamas, kodėl reikia priskyrimo |
| [05-sujungimas.js](05-sujungimas.js) | `concat()`, `+`, template literal, `repeat()` |
| [06-replace.js](06-replace.js) | `replace()`, `replaceAll()`, regex `/g` `/i` |
| [07-split-join.js](07-split-join.js) | `split()`, `join()` |
| [08-istraukimas.js](08-istraukimas.js) | `slice()`, `substring()`, `substr()` |
| [09-paieska.js](09-paieska.js) | `includes()`, `indexOf()`, `search()`, `startsWith()` |
| [10-keitimas.js](10-keitimas.js) | `toUpperCase()`, `trim()`, `padStart()` |

⬅️ [07 · Datos](../07-datos/) · [Visos temos](../README.md) · [09 · Objektai](../09-objektai/) ➡️
