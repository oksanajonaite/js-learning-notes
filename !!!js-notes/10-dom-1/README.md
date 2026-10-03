# 10 · DOM (I dalis): cheat sheet

> Šaltinis: `10_DOM_1.pptx` · Ankstesnė tema: [09 · Objektai](../09-objektai/)
>
> 🖥️ **Ši tema veikia tik naršyklėje**, todėl pavyzdžiai čia yra `.html`, ne `.js` — `node`
> neturi `document` objekto. Failą atidaryk **dvigubu paspaudimu** (arba dešiniuoju →
> *Open with* → naršyklė). Kiekviename faile yra mygtukai, kuriuos paspaudus matai rezultatą
> iš karto, ir juodas langelis su paaiškinimais.

## Kas yra DOM

**DOM – Document Object Model.** Tai būdas JavaScript pasiekti HTML elementus:

- leidžia keisti puslapio **turinį**
- leidžia keisti **stilių**
- leidžia **reaguoti į vartotojo veiksmus** (pvz. paspaudimą)

### window — root objektas

📄 [01-dom-medis.html](01-dom-medis.html)

Kai JS kodą paleidžiame naršyklėje, viskas yra `window` objekto viduje:

```
                    window
      ┌───────────────┼───────────────┐
     DOM             BOM          JavaScript
   document       navigator        Object
      ...          screen          Array
                   location        Function
                   frames            ...
                   history
                   XMLHttpRequest
```

### DOM medis

HTML elementai, jų tekstai, tarpai ir perėjimai į kitą eilutę (tarp elementų) sudaro **DOM medį**.
Elementai vadinami **mazgais (DOM nodes)**.

```html
<!DOCTYPE HTML>
<html>
<head>
  <title>About elk</title>
</head>
<body>
  The truth about elk.
</body>
</html>
```

```
▾ HTML
  ▾ HEAD
      #text ↵␣␣
    ▾ TITLE
        #text About elk
      #text ↵␣
    #text ↵␣↵
  ▾ BODY
      #text The truth about elk.
```

Jei HTML parašysime **be tarpų**, teksto mazgų tarp elementų nebelieka.
**Komentarai taip pat DOM elementai** (`#comment`).

Dažniausiai dirbame su:

- `document` – pagrindiniu DOM mazgu
- **element nodes** – HTML elementais
- **text nodes** – tekstas, enter ir tarpai
- kartais dar su komentarais

## Elementų radimas

📄 [02-elementu-radimas.html](02-elementu-radimas.html)

Norint dirbti su HTML elementais, nustatyti ar pakeisti jų parametrus, **juos reikia surasti**.

| Metodas | Pagal ką | Grąžina |
|---|---|---|
| `getElementById('id')` | id | **vieną** elementą arba `null` |
| `getElementsByTagName('p')` | žymės pavadinimą | **gyvą** kolekciją |
| `getElementsByClassName('intro')` | klasės pavadinimą | **gyvą** kolekciją |
| `querySelector('ul > li')` | css selektorių | **pirmą** atitinkantį |
| `querySelectorAll('ul > li')` | css selektorių | **statišką** kolekciją |

### Pagal id

```html
<div id="elem">
  <div id="elem-content">Element</div>
</div>

<script>
  // get the element
  let elem = document.getElementById('elem');

  // make its background red
  elem.style.background = 'red';
</script>
```

### Pagal elemento pavadinimą

```js
var x = document.getElementById("main");
var y = x.getElementsByTagName("p");
document.getElementById("demo").innerHTML =
  'The first paragraph (index 0) inside "main" is: ' + y[0].innerHTML;
```

> Kadangi elementų gali būti keli, grąžinama **elementų kolekcija**, ir norėdami rasti konkretų
> elementą nurodome jo **indeksą** (kaip masyve). Jei HTML'e pasikeičia elementų kiekis,
> rezultatas atsinaujina.

### Pagal klasės pavadinimą

```js
var x = document.getElementsByClassName("intro");
document.getElementById("demo").innerHTML =
  'The first paragraph (index 0) with class="intro": ' + x[0].innerHTML;
```

### Pagal css selektorių

```html
<ul><li>The</li><li>test</li></ul>
<ul><li>has</li><li>passed</li></ul>

<script>
  let elements = document.querySelectorAll('ul > li:last-child');

  for (let elem of elements) {
    alert(elem.innerHTML);   // "test", "passed"
  }
</script>
```

Grąžina kolekciją **visų** elementų, atitinkančių duotą css selektorių. Jei elementų skaičius
keičiasi, rezultatas **neatsinaujina**. Jei reikia **pirmo** atitinkančio css selektorių,
naudojame **`querySelector`**.

⚠️ Kolekcija **nėra masyvas** — ji neturi `map`, `filter`. Paversti: `Array.from(kolekcija)`.

## Turinio keitimas

📄 [03-turinio-keitimas.html](03-turinio-keitimas.html)

```html
<p id="p1">Hello World!</p>

<script>
  document.getElementById("p1").innerHTML = "New text!";    // PERRAŠO visą turinį
  document.getElementById("p1").innerHTML += "New text!";   // PAPILDO turinį
</script>
```

| Savybė | Ką grąžina / priima |
|---|---|
| `innerHTML` | HTML su žymėmis — jas **atpažįsta** |
| `textContent` | grynas tekstas ✅ saugiausia ir greičiausia |
| `innerText` | tekstas taip, kaip **matomas ekrane** (priklauso nuo CSS, lėtesnis) |

⚠️ Jei įrašai **vartotojo įvestą** tekstą, naudok `textContent` — kitaip kas nors gali įterpti savo kodą.

## Atributai

📄 [04-atributai.html](04-atributai.html)

```js
const div = document.createElement('div');
// create a new div referenced in the variable 'div'

div.setAttribute('id', 'theDiv');
// if id exists update it to 'theDiv' else create an id with value "theDiv"

div.getAttribute('id');
// returns value of specified attribute, in this case "theDiv"

div.removeAttribute('id');
// removes specified attribute
```

**Pridėjimas:**

```html
<button type="button" id="myBtn">Click Me</button>

<script>
  var btn = document.getElementById("myBtn");
  btn.setAttribute("class", "click-btn");
  btn.setAttribute("disabled", "");
</script>
```

**Gavimas:**

```js
var link = document.getElementById("myLink");
var href = link.getAttribute("href");     // https://www.google.com/
var target = link.getAttribute("target"); // _blank
```

**Keitimas ir šalinimas:**

```js
link.setAttribute("href", "https://www.tutorialrepublic.com");
link.removeAttribute("href");
```

**Per savybę (trumpesnis būdas):**

```html
<img id="myImage" src="smiley.gif">

<script>
  document.getElementById("myImage").src = "landscape.jpg";
</script>
```

💡 Veikia abu būdai, bet `setAttribute` tinka **bet kokiam** atributui, taip pat ir savo sugalvotam.

## Stiliaus savybių (CSS) keitimas

📄 [05-stilius.html](05-stilius.html)

JavaScript gali keisti HTML elemento stilių. Kai JavaScript suranda elementą, jis gali:
pakeisti spalvą, pakeisti tekstą, paslėpti arba parodyti elementą.

```js
div.style.color = 'blue';                                    // viena taisyklė
div.style.cssText = 'color: blue; background: white';        // kelios taisyklės
div.setAttribute('style', 'color: blue; background: white'); // kelios taisyklės
```

```html
<p id="p2">Hello World!</p>

<script>
  document.getElementById("p2").style.color = "blue";
</script>
```

### ⚠️ CSS savybės JS'e rašomos camelCase

JS kalboje kitaip užrašomos css savybės: **nenaudojant brūkšnio** `-`, o sujungiant žodžius ir
parašant juos **camelCase**. Pvz. `backgroundColor` (css `background-color`).
Brūkšnio nenaudojame, nes tai **atimties ženklas**.

| CSS | JavaScript |
|---|---|
| `background-color` | `style.backgroundColor` |
| `font-size` | `style.fontSize` |
| `border-radius` | `style.borderRadius` |

Visas sąrašas: <https://www.w3schools.com/jsref/dom_obj_style.asp>

### Pavyzdžiai, ką galima padaryti

```js
// ***JavaScript***
let root = document.getElementById("root");

root.style.backgroundColor = "lightblue";   // fono spalva
root.style.color = "red";                   // teksto spalva
root.style.fontSize = "50px";               // teksto dydis
root.style.display = "none";                // paslėpti elementą
root.textContent = "Naujas tekstas!";       // pakeisti tekstą
img.src = "kitasPaveikslelis.jpg";          // pakeisti paveikslėlį
root.style.borderRadius = "20px";           // užapvalinti kampus
```

### Keitimas paspaudus pelytę

```html
<h1 id="id1">My Heading 1</h1>

<button type="button"
onclick="document.getElementById('id1').style.color = 'red'">
Click Me!</button>
```

⚠️ Reikšmė visada yra **tekstas su vienetais**: `"50px"`, ne `50`.
⚠️ `elementas.style` mato tik **inline** stilių. Iš CSS failo atėjusį — `getComputedStyle(elementas)`.

## Klasės keitimas

📄 [06-klases.html](06-klases.html)

### .className — perrašymas

`.className` parodo, kokia elemento klasė. Galima šią savybę keisti.

```html
<body class="main page">
  <script>
    alert(document.body.className); // main page
  </script>
</body>
```

```js
let elem = document.getElementById("p1");
console.log(elem.className);   // išvedam į konsolę klasės vardą
elem.className = "bell";       // pakeičiam, perrašom klasės vardą
console.log(elem.className);   // išvedam naują klasės vardą
```

⚠️ Priskyrimas **ištrina visas** buvusias klases.

### .classList — pridėjimas ir kt.

`.classList` tai elemento **klasių sąrašas** (nes elementas gali turėti ne vieną klasę).

```js
div.classList.add('new');
// adds class "new" to your new div

div.classList.remove('new');
// remove "new" class from div

div.classList.toggle('active');
// if div doesn't have class "active" then add it, or if it does, then remove it
```

```js
let elem = document.getElementById("p1");
elem.classList.add("bell");        // prideda naują klasę
console.log(elem.classList[0]);    // parodo 1-ą klasę iš sąrašo, t.y. hell
```

Dar yra `classList.contains('x')` — ar tokia klasė yra.

💡 `toggle()` naudojamas dažniausiai: meniu atidarymas, tamsi tema, pažymėta eilutė.

## DOM įvykiai

📄 [07-ivykiai-on.html](07-ivykiai-on.html)

JavaScript gali reaguoti į įvairius **DOM elementų įvykius** ir vykdyti komandas, t.y. atlikti
tam tikrus veiksmus.

**Įvykiai:**

- **Pelės** įvykiai (click, dblclick, mousemove, mouseover, mousewheel)
- **Lietimo** įvykiai (planšetės, telefonai ir kt.) (touchstart, touchmove)
- **Klaviatūros** įvykiai (keypress, keyup)
- **Formos** įvykiai (focus, change, submit)
- **Window** įvykiai (scroll, resize)

### onclick

```html
<button id="myBtn">Try it</button>
<p id="demo"></p>

<script>
document.getElementById("myBtn").onclick = displayDate;

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
</script>
```

### onload

Objektas `navigator` saugo informaciją apie naršyklę. Šis kodas patikrina, ar cookies naršyklėje aktyvuoti.

```html
<body onload="checkCookies()">

<script>
function checkCookies() {
  var text = "";
  if (navigator.cookieEnabled == true) {
    text = "Cookies are enabled.";
  } else {
    text = "Cookies are not enabled.";
  }
  document.getElementById("demo").innerHTML = text;
}
</script>
```

### onchange

Atkreipk dėmesį, kaip paimama formos tekstinio lauko reikšmė: `document.getElementById("fname").value`

```html
<script>
function myFunction() {
  var x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}
</script>

Enter your name: <input type="text" id="fname" onchange="myFunction()">
```

### onmouseover, onmouseout

```html
<div onmouseover="mOver(this)" onmouseout="mOut(this)"
style="background-color:#D94A38;width:120px;height:20px;padding:40px;">
Mouse Over Me</div>

<script>
function mOver(obj) { obj.innerHTML = "Thank You" }
function mOut(obj)  { obj.innerHTML = "Mouse Over Me" }
</script>
```

💡 `this` čia reiškia **patį elementą**, ant kurio įvyko įvykis.

### onfocus ir onblur

`onfocus` — kai į formos teksto įvedimo lauką padedama pelė.
`onblur` — kai formos teksto įvedimo laukas praranda fokusą.

```html
<script>
function myFunction(x) {
  x.style.background = "yellow";
}
</script>

Enter your name: <input type="text" onfocus="myFunction(this)">
```

⚠️ Šio būdo trūkumas: `elem.onclick = f2` **perrašo** ankstesnį `elem.onclick = f1`.
Elementas gali turėti tik vieną tokį klausytoją.

## Įvykių klausymas — addEventListener

📄 [08-addeventlistener.html](08-addeventlistener.html)

Bet kuriam DOM elementui galima parašyti įvykių klausymo metodą.
**Tai šiuolaikinis būdas dirbti su įvykiais.**

```html
<button id="myBtn">Try it</button>

<script>
document.getElementById("myBtn").addEventListener("click", myFunction);

function myFunction() {
  alert("Hello World!");
}
</script>
```

Įvykis gali būti bet kuris iš sąrašo: <https://www.w3schools.com/jsref/dom_obj_event.asp>

⚠️ Funkcija paduodama **be skliaustų**: `myFunction`, ne `myFunction()`.

Privalumai prieš `on...`:

- galima pakabinti **kelis** klausytojus tam pačiam įvykiui
- galima **nuimti**: `removeEventListener("click", myFunction)` (tik įvardintą funkciją)

## Įvykių savybės ir metodai

📄 [09-event-objektas.html](09-event-objektas.html)

DOM įvykiai (events) gali turėti savybes ir metodus:
<https://www.w3schools.com/jsref/dom_obj_event.asp>

⚠️ Norint dirbti su įvykių savybėmis ar metodais, **įvykis turi būti perduodamas funkcijai**.

```html
<h2 onclick="showCoords(event)">Click this heading to get the x and y
coordinates of the mouse pointer when it was clicked.</h2>
<p id="demo"></p>

<script>
function showCoords(event) {
  var x = event.clientX;
  var y = event.clientY;
  var coords = "X coords: " + x + ", Y coords: " + y;
  document.getElementById("demo").innerHTML = coords;
}
</script>
```

### event.target

Vienas iš svarbiausių yra **`event.target`** — jo pagalba skriptas mato html elementą,
ant kurio vyksta įvykis, pvz. paspaudimas.

```js
document.body.addEventListener("click", (event) => {
  event.preventDefault();          // standartinio naršyklės elgesio stabdymas
  console.log(event.target);       // įvykio perdavimas callback funkcijai
  event.target.style.color = "red";
});
```

### matches()

Metodo `matches()` pagalba patikrinsime, ar paspaustas elementas turi id "my-button":

```js
document.addEventListener("click", function (event) {
  // Check if the event target is a specific element
  if (event.target.matches("#my-button")) {
    // Do something here
    console.log("The #my-button element was clicked!");
  }
});
```

### Koordinatės

| Savybė | Nuo ko skaičiuojama |
|---|---|
| `event.clientX/Y` | nuo matomos lango dalies |
| `event.pageX/Y` | nuo viso puslapio pradžios |
| `event.offsetX/Y` | nuo paties elemento kampo |

## Pavyzdys: taškiukai

📄 [10-taskiuku-demo.html](10-taskiuku-demo.html)

```html
<style>
  body { height: 200px; background: beige; }
  .dot {
    height: 8px; width: 8px;
    border-radius: 4px;   /* rounds corners */
    background: blue;
    position: absolute;
  }
</style>

<script>
  window.addEventListener("click", event => {
    let dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = (event.pageX - 4) + "px";
    dot.style.top = (event.pageY - 4) + "px";
    document.body.appendChild(dot);
  });
</script>
```

## Mokymosi aplinka

Interaktyvi JavaScript įvykių mokymosi aplinka: <https://domevents.dev/>

---

## Failai šiame aplanke

> Atidaryk dvigubu paspaudimu — jie veikia naršyklėje, ne per `node`.

| Failas | Tema |
|---|---|
| [01-dom-medis.html](01-dom-medis.html) | `window`, DOM/BOM, DOM medis, mazgų tipai |
| [02-elementu-radimas.html](02-elementu-radimas.html) | `getElementById`, `getElementsBy*`, `querySelector(All)` |
| [03-turinio-keitimas.html](03-turinio-keitimas.html) | `innerHTML`, `+=`, `textContent` vs `innerText` |
| [04-atributai.html](04-atributai.html) | `setAttribute`, `getAttribute`, `removeAttribute`, `.src` |
| [05-stilius.html](05-stilius.html) | `style.*`, camelCase, `cssText`, `getComputedStyle` |
| [06-klases.html](06-klases.html) | `className`, `classList` add/remove/toggle |
| [07-ivykiai-on.html](07-ivykiai-on.html) | `onclick`, `onload`, `onchange`, `onmouseover`, `onfocus`, `onblur` |
| [08-addeventlistener.html](08-addeventlistener.html) | `addEventListener`, keli klausytojai, `removeEventListener` |
| [09-event-objektas.html](09-event-objektas.html) | `event.target`, `clientX/Y`, `matches()`, `preventDefault()` |
| [10-taskiuku-demo.html](10-taskiuku-demo.html) | viskas kartu: `createElement` + `appendChild` + įvykis |
| [style.css](style.css) | bendras pavyzdžių stilius |

⬅️ [09 · Objektai](../09-objektai/) · [Visos temos](../README.md) · [11 · DOM (2 dalis)](../11-dom-2/) ➡️
