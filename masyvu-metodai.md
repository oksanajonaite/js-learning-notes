# JavaScript masyvų metodai

Prie kiekvieno nurodyta, ar metodas **keičia originalą** (mutuoja).

## Elementų pridėjimas ir šalinimas (KEIČIA originalą)

```javascript
const arr = [1, 2, 3];

arr.push(4);       // prideda gale → [1, 2, 3, 4]
arr.pop();         // pašalina paskutinį → [1, 2, 3]
arr.unshift(0);    // prideda pradžioje → [0, 1, 2, 3]
arr.shift();       // pašalina pirmą → [1, 2, 3]
arr.splice(1, 1);  // nuo indekso 1 pašalina 1 elementą → [1, 3]
```

## Rikiavimas ir apvertimas (KEIČIA originalą)

```javascript
["b", "c", "a"].sort();             // ["a", "b", "c"]
[1, 2, 3].reverse();                // [3, 2, 1]
[10, 2, 5].sort((a, b) => a - b);   // [2, 5, 10] (skaičiams reikia palyginimo funkcijos)
["Šuo", "Avis"].sort((a, b) => a.localeCompare(b, "lt")); // lietuviškas rikiavimas
```

## Naujo masyvo sukūrimas (originalas NESIKEIČIA)

```javascript
[1, 2, 3].map(n => n * 2);          // [2, 4, 6], kiekvieną elementą pakeičia
[1, 2, 3, 4].filter(n => n > 2);    // [3, 4], palieka tik tinkamus
[1, 2, 3, 4].slice(1, 3);           // [2, 3], iškerpa dalį (nuo 1 iki 3, 3 neįskaitant)
[1, 2].concat([3, 4]);              // [1, 2, 3, 4], sujungia masyvus
[[1, 2], [3]].flat();               // [1, 2, 3], išlygina įdėtus masyvus
```

## Paieška

```javascript
const nums = [5, 10, 15];

nums.includes(10);            // true, ar yra toks elementas
nums.indexOf(15);             // 2, elemento indeksas (-1, jei nėra)
nums.find(n => n > 7);        // 10, pirmas tinkantis elementas
nums.findIndex(n => n > 7);   // 1, jo indeksas
```

## Patikrinimai

```javascript
[1, 2, 3].some(n => n > 2);    // true, ar bent vienas tinka
[1, 2, 3].every(n => n > 0);   // true, ar visi tinka
```

## Perėjimas ir suma

```javascript
[1, 2, 3].forEach(n => console.log(n));        // atlieka veiksmą su kiekvienu, nieko negrąžina
[1, 2, 3].reduce((acc, n) => acc + n, 0);      // 6, sudeda į vieną reikšmę
```

## Kita

```javascript
["a", "b", "c"].join("-");   // "a-b-c", masyvas į tekstą
[1, 2, 3].length;            // 3, ilgis (tai savybė, ne metodas)
Array.isArray([1, 2]);       // true, ar tai masyvas
```

**Svarbiausia:** `map`, `filter`, `reduce` ir `find` naudosi nuolat. O `push`, `pop`, `splice`, `sort` ir `reverse` **keičia originalą**, todėl jei to nenori, pirmiausia padaryk kopiją: `[...arr].sort()`.

---

# Taisyklė: masyvai ir objektai yra nuorodos (reference)

## Pavyzdys

```javascript
const a = [1, 2];
const b = a;     // b NEGAUNA kopijos, tik nuorodą į tą patį masyvą
b[0] = 9;

console.log(a);  // [9, 2]  ← a pasikeitė!
console.log(b);  // [9, 2]
```

`a` ir `b` yra du pavadinimai **tam pačiam masyvui** atmintyje.

## Kodėl keičiasi, jei tai `const`?

`const` draudžia **pakeisti patį kintamąjį** (priskirti jam kitą reikšmę), bet **nedraudžia keisti turinio**, į kurį jis rodo.

```javascript
const a = [1, 2];

a[0] = 9;        // ✅ galima, keičiame masyvo vidų
a.push(3);       // ✅ galima, keičiame masyvo vidų
a = [5, 6];      // ❌ KLAIDA, bandome priskirti kitą masyvą kintamajam
```

Įsivaizduok: `const` yra užrakintas **adresas**, bet namas pagal tą adresą nėra užrakintas.

## Kaip padaryti tikrą kopiją

```javascript
const a = [1, 2];

const b = [...a];        // spread, nauja kopija
const c = a.slice();     // slice be argumentų, nauja kopija
const d = Array.from(a); // dar vienas būdas

b[0] = 9;
console.log(a);  // [1, 2]  ← a nepasikeitė
console.log(b);  // [9, 2]
```

## Dėmesio: įdėti masyvai/objektai

`[...a]` ir `slice()` daro **negilią** kopiją (angl. *shallow copy*). Jei viduje yra kiti masyvai ar objektai, jie vis tiek lieka bendri:

```javascript
const a = [[1, 2], [3, 4]];
const b = [...a];

b[0][0] = 9;
console.log(a);  // [[9, 2], [3, 4]]  ← a pasikeitė!
```

Gilią kopiją daro:

```javascript
const b = structuredClone(a);
```

## Jei nori, kad masyvo tikrai nebūtų galima keisti

```javascript
const a = Object.freeze([1, 2]);
a[0] = 9;        // tyliai nieko nedaro (strict režime meta klaidą)
console.log(a);  // [1, 2]
```

## Santrauka

| Situacija | Rezultatas |
|---|---|
| `const b = a` | ta pati nuoroda, keičiasi abu |
| `const b = [...a]` | nauja kopija (negili) |
| `const b = structuredClone(a)` | nauja kopija (gili) |
| `const a = [...]; a = kita` | klaida, `const` negalima perrašyti |
| `const a = [...]; a[0] = 9` | veikia, `const` nesaugo turinio |

Ta pati taisyklė galioja **objektams** (`{}`) ir funkcijoms. Paprasti tipai (skaičiai, tekstas, `true/false`) kopijuojami pagal reikšmę, todėl jiems tokios problemos nėra.
