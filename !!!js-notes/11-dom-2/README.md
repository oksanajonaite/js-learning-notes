# 11 · DOM (2 dalis): cheat sheet

> Šaltinis: `11_DOM_2.pptx` · Ankstesnė tema: [10 · DOM (I dalis)](../10-dom-1/)
>
> 🖥️ **Ši tema veikia tik naršyklėje**, todėl pavyzdžiai čia yra `.html`, ne `.js` — `node`
> neturi `document` objekto. Failą atidaryk **dvigubu paspaudimu**. Kiekviename faile yra
> mygtukai, kuriuos paspaudus matai rezultatą iš karto, ir juodas langelis su paaiškinimais.

## Greita lentelė

| Noriu... | Metodas | Failas |
|---|---|---|
| sukurti elementą | `document.createElement("p")` | [01](01-kurimas.html) |
| sukurti tekstą | `document.createTextNode("...")` | [01](01-kurimas.html) |
| pridėti į galą | `parent.appendChild(el)` | [01](01-kurimas.html) |
| įterpti prieš kitą | `parent.insertBefore(naujas, senas)` | [02](02-insertbefore.html) |
| pašalinti | `el.remove()` | [03](03-salinimas.html) |
| pakeisti | `parent.replaceChild(naujas, senas)` | [04](04-pakeitimas.html) |
| nueiti pas kaimyną | `el.nextElementSibling` | [06](06-navigacija.html) |
| paimti formos reikšmę | `input.value` | [07](07-formos.html) |

## Elementų kūrimas

📄 [01-kurimas.html](01-kurimas.html)

**1. Teksto kūrimas:**

```js
var node = document.createTextNode("This is new.");
```

**2. HTML elemento kūrimas:**

```js
var para = document.createElement("p");
```

**3. Teksto ir elemento sujungimas**
(analogiškai vyksta ir dviejų elementų sujungimas, naujas elementas pridedamas tėvinio elemento gale)

```js
para.appendChild(node);
//  ↑              ↑
// prie kurio    kurį elementą
// elemento      jungiame
```

### Pilnas pavyzdys

```html
<div id="div1">
<p id="p1">This is a paragraph.</p>
<p id="p2">This is another paragraph.</p>
</div>

<script>
var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);
var element = document.getElementById("div1");
element.appendChild(para);
</script>
```

‼️ **Naujai sukurtas elementas nematomas puslapyje, kol jis nepridedamas prie jau esamo
elemento** (`appendChild`).

💡 Jei elementas tuščias, vietoj `createTextNode` + `appendChild` trumpiau rašyti
`para.textContent = "This is new."`.

ℹ️ Naujesni metodai: `append()` (kelis iš karto, galima ir tekstą), `prepend()` (į pradžią).

## insertBefore — vietos nurodymas

📄 [02-insertbefore.html](02-insertbefore.html)

Įterpiant naują elementą, galima nurodyti jo vietą:

```js
element.insertBefore(para, child);
//  ↑                  ↑      ↑
// Į kurį            Kurį   Prieš kurį
// elementą          elem.  elementą
// įterpiam          įterpiam
```

```html
<div id="div1">
<p id="p1">This is a paragraph.</p>
<p id="p2">This is another paragraph.</p>
</div>

<script>
var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);

var element = document.getElementById("div1");
var child = document.getElementById("p1");
element.insertBefore(para, child);
</script>
```

💡 Jei antras argumentas `null` — elementas dedamas **į galą**, t.y. veikia kaip `appendChild`.

ℹ️ Naujesni būdai, kuriems nereikia tėvinio elemento:

```js
child.before(para);        // prieš child
child.after(para);         // po child
child.replaceWith(para);   // vietoje child
```

## Elementų šalinimas

📄 [03-salinimas.html](03-salinimas.html)

```html
<div>
<p id="p1">This is a paragraph.</p>
<p id="p2">This is another paragraph.</p>
</div>

<button onclick="myFunction()">Remove Element</button>

<script>
function myFunction() {
  var elmnt = document.getElementById("p1");
  elmnt.remove();
}
</script>
```

Senesnis būdas — per tėvinį elementą:

```js
parent.removeChild(child);            // GRĄŽINA pašalintą elementą
child.parentNode.removeChild(child);  // kai tėvo kintamojo neturim
```

Visų vaikų išvalymas:

```js
element.innerHTML = "";          // greičiausia
element.replaceChildren();       // naujausia
```

## Elementų pakeitimas

📄 [04-pakeitimas.html](04-pakeitimas.html)

```html
<div id="div1">
<p id="p1">This is a paragraph.</p>
<p id="p2">This is another paragraph.</p>
</div>

<script>
var parent = document.getElementById("div1");
var child = document.getElementById("p1");
var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);
parent.replaceChild(para, child);
</script>
```

```js
parent.replaceChild(para, child);
//  ↑                 ↑      ↑
// Kuriame elem.    Kuo    Kurį elem.
// vyks pokyčiai    keisim keisim
//                 (naujas)(senas)
```

⚠️ Argumentų tvarka: **pirma NAUJAS, paskui SENAS**.

| Noriu pakeisti... | Naudoju |
|---|---|
| tik tekstą | `elem.textContent = "..."` |
| vidinį HTML | `elem.innerHTML = "..."` |
| visą elementą | `elem.replaceWith(naujas)` |
| visus vaikus | `elem.replaceChildren(a, b)` |

## Praktinis pavyzdys

📄 [05-pavyzdys.html](05-pavyzdys.html)

```html
<!-- your html file: -->
<body>
  <h1>
     THE TITLE OF YOUR WEBPAGE
  </h1>
  <div id="container"></div>
</body>
```

```js
// your javascript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);
```

Kodėl ne `innerHTML`?

| | `innerHTML` | `createElement` |
|---|---|---|
| Rašymas | trumpesnis | ilgesnis |
| Vartotojo tekstas | ⚠️ pavojinga | ✅ saugu |
| Esami vaikai | ⚠️ perkuriami | ✅ nepaliečiami |
| Įvykių klausytojai | ⚠️ dingsta | ✅ išlieka |

## Navigavimas DOM medžiu

📄 [06-navigacija.html](06-navigacija.html)

```html
<ul>
<li>node</li>
<li><span>node</span><a href="#">node</a><p>node</p></li>
<li>node</li>
</ul>
```

```
                        <ul>
         parentNode ↗   parentNode ↑   ↖ parentNode
    <li> ←previousSibling→ <li> ←nextSibling→ <li>
                             ↓
          childNodes[0]  childNodes[1]  childNodes[2]
             <span>        <a>           <p>
           firstChild                   lastChild
```

### ⚠️ Du rinkiniai savybių

| Imami **visi** mazgai<br>(elementai, tekstai ir enter) | Imami **tik html elementai** |
|---|---|
| `childNodes` | `children` |
| `firstChild` | `firstElementChild` |
| `lastChild` | `lastElementChild` |
| `nextSibling` | `nextElementSibling` |
| `previousSibling` | `previousElementSibling` |
| `parentNode` | `parentElement` |

💡 Praktikoje beveik visada reikia **Element** versijų — kitaip pataikysi į tarpą tarp žymių,
o ne į elementą.

### Pavyzdys

```html
<div id="main">
    <h1 id="title">My Heading</h1>
    <p id="hint"><span>This is some text.</span></p><hr>
</div>

<script>
var title = document.getElementById("title");
alert(title.previousSibling.nodeName);  // Outputs: #text

var hint = document.getElementById("hint");
alert(hint.nextSibling.nodeName);       // Outputs: HR
</script>
```

**`nodeName`** yra read-only savybė, grąžinanti node vardą kaip string.

`nodeType`: `1` = elementas · `3` = tekstas · `8` = komentaras

## Darbas su formomis

📄 [07-formos.html](07-formos.html)

### preventDefault()

Kad paspaudus submit mygtuką puslapis nepersikrautų, reikia pridėti
**`event.preventDefault()`** metodą.

```js
form.addEventListener('submit', (event) => {
    // stop form submission
    event.preventDefault();
});
```

### Formos elementų pasiekimas

Galimas su bet kuriuo iš DOM metodų: `getElementsByName()`, `getElementById()`, `querySelector()`

```js
const form = document.getElementById('signup');
```

arba:

```js
form.elements[1];         // by index
form.elements['email'];   // by name
form.elements['email'];   // by id
```

### Reikšmių pasiekimas

Formos elementų reikšmės pasiekiamos su savybe **`value`**:

```js
const form = document.getElementById('signup');
const name = form.elements['name'];
const email = form.elements['email'];

// getting the element's value
let fullName = name.value;
let emailAddress = email.value;
```

arba

```js
var age = document.getElementById("age").value;
```

⚠️ `value` **visada grąžina tekstą**, net ir iš `type="number"`. Skaičiavimams — `Number(...)`.

| Tipas | Kaip paimti reikšmę |
|---|---|
| `text`, `email`, `password` | `input.value` → string |
| `number` | `Number(input.value)` ⚠️ |
| `checkbox` | `input.checked` → true/false ⚠️ **ne** `value` |
| `select` | `select.value` |
| `radio` | `document.querySelector('input[name=x]:checked').value` |

### Tipinė schema

```js
form.addEventListener('submit', (event) => {
  event.preventDefault();                            // 1. sustabdom persikrovimą
  const vardas = form.elements['name'].value.trim(); // 2. paimam reikšmes
  if (vardas === "") { return; }                     // 3. patikrinam
  console.log("Siunčiam:", vardas);                  // 4. darom, ko reikia
});
```

---

## Failai šiame aplanke

> Atidaryk dvigubu paspaudimu — jie veikia naršyklėje, ne per `node`.

| Failas | Tema |
|---|---|
| [01-kurimas.html](01-kurimas.html) | `createElement`, `createTextNode`, `appendChild`, `append`/`prepend` |
| [02-insertbefore.html](02-insertbefore.html) | `insertBefore`, `before()`, `after()` |
| [03-salinimas.html](03-salinimas.html) | `remove()`, `removeChild()`, visų vaikų valymas |
| [04-pakeitimas.html](04-pakeitimas.html) | `replaceChild()`, `replaceWith()` |
| [05-pavyzdys.html](05-pavyzdys.html) | konteineris + turinys, sąrašo kūrimas ciklu |
| [06-navigacija.html](06-navigacija.html) | `parentNode`, `childNodes`, `nextElementSibling`, `nodeName` |
| [07-formos.html](07-formos.html) | `preventDefault()`, `form.elements`, `value`, `checked` |
| [style.css](style.css) | bendras pavyzdžių stilius |

⬅️ [10 · DOM (I dalis)](../10-dom-1/) · [Visos temos](../README.md)
