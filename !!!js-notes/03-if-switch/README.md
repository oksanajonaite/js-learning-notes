# 03 · Sąlygos: if, switch: cheat sheet

> Šaltinis: `3d_if, switch.pptx` · Ankstesnė tema: [02 · Operatoriai](../02-operatoriai/)
>
> 🖥️ Kiekvienai temai šiame aplanke yra paleidžiamas `.js` failas:
> ```bash
> node 03-if-switch/07-switch.js
> ```
> Laukiamas rezultatas surašytas komentaruose — gali pirma **atspėti**, tada paleisti ir pasitikrinti.

## if / else if / else

📄 [01-if-else.js](01-if-else.js)

```js
if (a > 10) {
  console.log("daugiau nei 10");
} else if (a > 0 && a <= 10) {       // tikrinama, tik jei pirma sąlyga false
  console.log("nuo 1 iki 10");
} else if (a === 0) {
  console.log("lygu 0");
} else {                              // jei NĖ VIENA sąlyga netiko
  console.log("mažiau nei 0");
}
```

- Įvykdomas **tik pirmas** tinkantis blokas, likę praleidžiami.
- `else if` ir `else` yra **nebūtini**.
- Jei bloke tik viena eilutė, `{}` galima nerašyti: `if (ok) alert("Taip!");`. Bet **geriau visada rašyk**.

### Sudėtinis (nested) if

📄 [02-nested-if.js](02-nested-if.js)

```js
if (operation === "<") {
  if (val1 < val2) console.log("Val1 < val2");
  else             console.log("Val1 >= val2");
}
```

💡 Jei kiekvienam lygiui `else` nereikia, nested `if` dažnai sutrumpėja į vieną `if (a && b)`.

### prompt + if ⚠️

📄 [03-prompt-if.js](03-prompt-if.js)

```js
let year = prompt("Kada išleistas ES2015?");  // "2015" ← STRING
year == 2015;          // true  (== pakeičia tipą)
year === 2015;         // false ⚠️
Number(year) === 2015; // true  ✅
```

⚠️ Paspaudus **Cancel** `prompt` grąžina `null` — tai ne tas pats, kas tuščias laukas `""`.

## Truthy / falsy

📄 [04-truthy-falsy.js](04-truthy-falsy.js)

`if (x)` pirmiausia paverčia `x` į boolean:

| Falsy (→ `false`) | Truthy (→ `true`) |
|---|---|
| `0`, `""`, `null`, `undefined`, `NaN`, `false` | **visa kita**: `1`, `"0"`, `" "`, `"false"`, `[]`, `{}` |

```js
if (0) {}          // nevykdomas
if ("labas") {}    // vykdomas
if (user) {}       // „jei user egzistuoja“
if (arr.length === 0) {}   // ✅ taip tikrinam tuščią masyvą, ne if (arr)
```

## Ternary (trumpas if/else)

📄 [05-ternary.js](05-ternary.js)

```js
const status = age >= 18 ? "Suaugęs" : "Nepilnametis";
`Rasta ${n} ${n === 1 ? "elementas" : "elementai"}`;   // patogu tekste
```

## Optional chaining `?.`

📄 [06-optional-chaining.js](06-optional-chaining.js)

Jei kairėje pusėje yra `null` arba `undefined`, **nesukelia klaidos**, o grąžina `undefined`:

```js
// vietoj šito:
if (user) {
  if (user.contact) {
    return user.contact.email;
  }
}
// rašyk:
return user?.contact?.email;

arr?.[0];        // veikia ir su masyvais
obj.veikti?.();  // ir su funkcijomis
```

Dažnai derinamas su `??` (numatytoji reikšmė):

```js
user?.contact?.email ?? "el. pašto nėra";

0 || "numatyta";   // "numatyta" ⚠️ || reaguoja į visas falsy
0 ?? "numatyta";   // 0 ✅ ?? reaguoja tik į null/undefined
```

## switch

📄 [07-switch.js](07-switch.js)

```js
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;              // ⚠️ be break vykdomi ir TOLESNI case
  case 6:
    day = "Saturday";
    break;
  default:              // jei netiko nė vienas case (nebūtinas)
    day = "Workday";
}
```

- `switch` lygina per **`===`**, todėl `"1"` nesutaps su `case 1`.
- Keli `case` tam pačiam kodui:
  ```js
  case 0:
  case 6:
    day = "Weekend";
    break;
  ```
- Funkcijoje `return` veikia kaip `break` — `break` tada nebereikia.

## Kada ką naudoti

| Situacija | Naudok |
|---|---|
| Intervalai, sudėtingos sąlygos (`>`, `&&`) | `if / else if` |
| Viena reikšmė lyginama su daug konkrečių variantų | `switch` |
| Paprastas „arba–arba“ priskyrimas | ternary `? :` |
| Gilus objekto savybės pasiekimas | `?.` |

---

## Failai šiame aplanke

| Failas | Tema |
|---|---|
| [01-if-else.js](01-if-else.js) | `if`, `else if`, `else`, `{}` spąstai |
| [02-nested-if.js](02-nested-if.js) | `if` `if` viduje, kada jį keisti į `&&` |
| [03-prompt-if.js](03-prompt-if.js) | `prompt` grąžina string, `null` po Cancel |
| [04-truthy-falsy.js](04-truthy-falsy.js) | 6 falsy reikšmės, visa kita truthy |
| [05-ternary.js](05-ternary.js) | `? :` |
| [06-optional-chaining.js](06-optional-chaining.js) | `?.` ir `??` |
| [07-switch.js](07-switch.js) | `switch`, `break`, keli `case` |

⬅️ [02 · Operatoriai](../02-operatoriai/) · [Visos temos](../README.md) · [04 · Funkcijos](../04-funkcijos/) ➡️
