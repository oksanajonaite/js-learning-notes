# 09 · Objektai: cheat sheet

> Šaltinis: `9_objektai.pptx` · Ankstesnė tema: [08 · Strings](../08-strings/)
>
> 🖥️ Kiekvienai temai šiame aplanke yra paleidžiamas `.js` failas:
> ```bash
> node 09-objektai/12-destrukturizavimas.js
> ```
> Laukiamas rezultatas surašytas komentaruose — gali pirma **atspėti**, tada paleisti ir pasitikrinti.

## Kas yra objektas

📄 [01-kas-yra-objektas.js](01-kas-yra-objektas.js)

**Objektas** — duomenų tipas, skirtas saugoti sudėtingesnės struktūros duomenis. Objektai programavimo kalboje yra analogai realiame gyvenime esantiems objektams: automobilis, katė, studentas, segtuvas.

Objektai turi **savybes** ir **metodus**:

- **Savybės** apibūdina, **koks** objektas yra: koks pavadinimas, kiek metų, kas gamintojas, kokia spalva.
- **Metodai** reiškia veiksmą, elgseną ir aprašo, **ką objektas moka daryti**: judėti, keisti spalvą, kalbėti. Metodai aprašomi **funkcijomis**.

| Objektas | Savybės | Metodai |
|---|---|---|
| 🚗 | `car.name = Fiat` | `car.start()` |
| | `car.model = 500` | `car.drive()` |
| | `car.weight = 850kg` | `car.brake()` |
| | `car.color = white` | `car.stop()` |

**Klasė (class)** yra ruošinys objektams kurti.

## 4 kūrimo būdai

| # | Būdas | Failas |
|---|---|---|
| 1 | **Object literal** `{}` ← dažniausiai naudojamas | [02](02-object-literal.js) |
| 2 | Su raktažodžiu **`new`** | [03](03-kurimas-new.js) |
| 3 | **Funkcijų** pagalba (senesnis) | [04](04-kurimas-funkcija.js) |
| 4 | **Klasių** pagalba (moderniausias) | [05](05-kurimas-klase.js) |

### 1. Object literal

📄 [02-object-literal.js](02-object-literal.js)

```js
var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
```

> Raktinis žodis **`this`** rodo į metodo savininką, t.y. į objektą.

**Anatomija:**

```js
const myObject = {
  city: "Madrid",        // city = property name (key) · "Madrid" = property value
  greet() {              // greet = metodas
    console.log(`Greetings from ${this.city}`);
  },
};
myObject.city;    // Madrid
myObject.greet(); // Greetings from Madrid
```

> Objektai savybes ir metodus **paveldi iš prototipų**, kurie pasiekiami per `__proto__`.

**Kūrimas iš kintamųjų (shorthand):**

```js
const userName = "John";
const age = 42;
const logedIn = true;

const myObj = { userName, age, logedIn };
// { userName: 'John', age: 42, logedIn: true }
```

⚠️ Metodui **nenaudok arrow funkcijos** — ji neturi savo `this`.

### 2. Su raktažodžiu `new`

📄 [03-kurimas-new.js](03-kurimas-new.js)

Sukuriamas tuščias objektas, o paskui jam priskiriamos savybės:

```js
var person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.speak = function() {
  let sent = `Mano vardas ${person.firstName}. Taip.`;
  console.log(sent);   // arba veiksmas
  return sent;         // arba grąžinama reikšmė
};
```

ℹ️ `new Object()` ir `{}` duoda tą patį, todėl praktikoje naudojamas `{}`.

### 3. Funkcijos pagalba

📄 [04-kurimas-funkcija.js](04-kurimas-funkcija.js)

- Funkcijos vardas rašomas iš **didžiosios** raidės.
- Konstruktoriaus pagalba sukuriami **to paties tipo** objektai, jų gali būti keletas.
- Tai **senesnis** būdas kurti objektus JS kalboje.

```js
// Constructor function for Person objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.name = function() {
    return this.firstName + " " + this.lastName;
  };
}

var myFather = new Person("John", "Doe", 50, "blue");
myFather.name();   // "John Doe"
```

⚠️ Taip sukurtam objektui **negalime pridėti nei metodo, nei savybės tiesiogiai**:

```js
Person.nationality = "English";    // ❌ neveikia
```

Savybių ir metodų pridėjimui naudojami **prototipai**:

```js
Person.prototype.nationality = "English";   // ✅
myFather.nationality;                       // "English"

Person.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};
```

> Visi objektai paveldi savybes iš prototipo. **Prototipas yra objekto pirmtakas.**

### 4. Klasės pagalba

📄 [05-kurimas-klase.js](05-kurimas-klase.js)

- JavaScript klasės — **naujausias** būdas objektams kurti.
- Klasė — šablonas, pagal kurį galime sukurti daug to paties tipo objektų.
- Klasės JavaScript'e yra nuo **ES6** versijos.
- Klasės vardas rašomas iš **didžiosios** raidės.

```js
class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    alert(this.name);
  }
}

// Usage:
let user = new User("John");
user.sayHi();
```

Išvedus objektą į konsolę matome savybes, konstruktorių ir metodus (`prototype`):

```
Hero {name: "Varg", level: 1}
  __proto__:
    constructor: class Hero
    greet: f greet()
```

## Darbas su objektais

📄 [06-savybes-metodai.js](06-savybes-metodai.js)

```js
const gimli = {
  name: "Gimli",
  race: "dwarf",
  weapon: "axe",
  greet: function() {
    return `Hi, my name is ${this.name}!`;
  },
};

gimli.weapon;    // "axe"       ← savybės iškvietimas
gimli.greet();   // "Hi, my name is Gimli!" ← metodo iškvietimas (su skliaustais!)
```

| Veiksmas | Kaip |
|---|---|
| **Pridėti** savybę | `gimli.age = 139;` |
| **Pridėti** metodą | `gimli.fight = function() {...}` |
| **Keisti** savybę | `gimli.weapon = "battle axe";` |
| **Šalinti** savybę | `delete gimli.weapon;` |

> Priskyrimu keičiamos tik **savybės**.

**Per laužtinius skliaustus:**

```js
const myCar = { make: "BMW", model: "X1", year: 2000 };

myCar['make']  = 'Ford';
myCar['model'] = 'Mustang';
myCar['year']  = 1969;
```

**Nurodant savybes per kintamuosius:**

```js
let propertyName = "make";
myCar[propertyName] = "Ford";     // Audi -> Ford

propertyName = "model";
myCar[propertyName] = "Focus";    // Mustang -> Focus

// { make: 'Ford', model: 'Focus', year: 2010 }
```

⚠️ `myCar.propertyName` ieškotų savybės, kurios vardas tiesiog „propertyName“.

## Object.keys()

📄 [07-object-keys-values.js](07-object-keys-values.js)

Sukuria objekto savybių **pavadinimų (keys)** masyvą. Gali būti naudojamas išvesti savybes su pavadinimais (keys and values).

```js
const employees = {
  boss: 'Michael', secretary: 'Pam', sales: 'Jim', accountant: 'Oscar'
};

const keys = Object.keys(employees);
// ["boss", "secretary", "sales", "accountant"]

Object.keys(employees).forEach(key => {
  let value = employees[key];
  console.log(`${key}: ${value}`);
});
// boss: Michael
// secretary: Pam ...
```

Pasinaudojant `Object.keys()` galima nustatyti objekto **dydį** — kiek jis turi savybių:

```js
Object.keys(employees).length;   // 4
employees.length;                // undefined ⚠️ objektas neturi .length
```

## Object.values()

📄 [07-object-keys-values.js](07-object-keys-values.js)

Sukuria objekto savybių **reikšmių (values)** masyvą.

```js
const session = { id: 1, time: `26-July-2018`, device: 'mobile', browser: 'Chrome' };

const values = Object.values(session);
// [1, "26-July-2018", "mobile", "Chrome"]
```

> `Object.keys()` ir `Object.values()` yra skirti objekto duomenims paimti. Trečias giminaitis — `Object.entries()`, grąžinantis poras `[raktas, reikšmė]`.

## Object.create()

📄 [08-object-create.js](08-object-create.js)

Sukuria objektą iš turimo objekto ir **susieja** jį (perduoda savybes ir metodus) su jau esamu objektu — **prototipu**.

```js
const job = {
  position: 'cashier',
  type: 'hourly',
  isAvailable: true,
  showDetails() { /* ... */ }
};

const barista = Object.create(job);
barista.position = "barista";
barista.showDetails();
// The barista position is hourly and is accepting applications.
```

> Objektas `barista` turi **vieną** savybę: `position`, bet visas kitas galima pasiekti per prototipą.

## Object.assign()

📄 [09-object-assign.js](09-object-assign.js)

Skirtas objekto duomenims (savybėms ir reikšmėms) **nukopijuoti** iš vieno objekto į kitą.

```js
const name = { firstName: 'Philip', lastName: 'Fry' };
const details = { job: 'Delivery Boy', employer: 'Planet Express' };

const character = Object.assign(name, details);
// {firstName: "Philip", lastName: "Fry", job: "Delivery Boy", employer: "Planet Express"}
```

**Objekto kopijavimas į tuščią:**

```js
const character = Object.assign({}, name);   // kopijuojamos savybės į naują objektą
character.nationality = "LT";
```

⚠️ `Object.assign(obj1, obj2)` **pakeičia** `obj1`. Saugi kopija — `Object.assign({}, obj)`.
⚠️ Kopija **paviršinė** (shallow): vidiniai objektai lieka bendri. Giliai kopijai — `structuredClone(obj)`.

## Spread operatorius (...)

📄 [10-spread.js](10-spread.js)

```js
const circle = { radius: 10 };

const coloredCircle = {
  ...circle,
  color: 'black'
};
// { radius: 10, color: 'black' }
```

**Objektų jungimui:**

```js
const style = { backgroundColor: 'red' };

const solidCircle = {
  ...circle,
  ...style
};
// { radius: 10, backgroundColor: 'red' }
```

⚠️ Jei savybės sutampa, laimi **paskutinė** — todėl spread patogus numatytosioms reikšmėms.

**Perduodant funkcijoms parametrus:**

```js
const numbers = [1, 3, 5, 7];

function addNumbers(a, b, c, d) {
  return a + b + c + d;
}

console.log(addNumbers(...numbers));   // Rezultatas: 16
```

## Rest operatorius (...)

📄 [11-rest.js](11-rest.js)

Naudojamas **paduodant parametrus funkcijai**. Trys taškiukai prieš atskirus parametrus funkcijoje juos **sujungia į masyvą**.

```js
// Use rest to enclose the rest of specific user-supplied values into an array:
function myBio(firstName, lastName, ...otherInfo) {
  return otherInfo;
}

myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male");
// ["CodeSweetly", "Web Developer", "Male"]
```

💡 **Spread ar rest?** Žiūrim, kur yra trys taškai:

| Vieta | Kas tai |
|---|---|
| Funkcijos **aprašyme**, destruktūrizuojant | **rest** — surenka į vieną |
| **Iškvietime**, kuriant objektą/masyvą | **spread** — išskaido |

## Objektų destruktūrizavimas

📄 [12-destrukturizavimas.js](12-destrukturizavimas.js)

Patogus ir greitas objekto savybių „išpakavimas“ tiesiai į atskirus kintamuosius. Sutrumpina kodą, pašalina pasikartojantį objekto pavadinimo rašymą — kodas tampa švaresnis.

```js
let user = {
  vardas: "Jonas",
  amzius: 25,
  miestas: "Vilnius"
}

/*
let vardas = user.vardas;
let amzius = user.amzius;
let miestas = user.miestas;
*/

let { vardas, amzius, miestas } = user;

console.log(vardas);    // Jonas
console.log(amzius);    // 25
console.log(miestas);   // Vilnius
```

```js
const { vardas: userName } = user;        // kitoks kintamojo vardas
const { salis = "Lietuva" } = user;       // numatytoji reikšmė
function f({ vardas, amzius }) {}          // funkcijos parametruose ← labai dažna
const { slaptazodis, ...kita } = user;    // kartu su rest
```

---

## Failai šiame aplanke

| Failas | Tema |
|---|---|
| [01-kas-yra-objektas.js](01-kas-yra-objektas.js) | savybės, metodai, kam reikia objektų |
| [02-object-literal.js](02-object-literal.js) | `{}`, `this`, shorthand iš kintamųjų |
| [03-kurimas-new.js](03-kurimas-new.js) | `new Object()` |
| [04-kurimas-funkcija.js](04-kurimas-funkcija.js) | funkcija-konstruktorius, `prototype` |
| [05-kurimas-klase.js](05-kurimas-klase.js) | `class`, `constructor`, `extends` |
| [06-savybes-metodai.js](06-savybes-metodai.js) | pridėjimas, keitimas, `delete`, `[]` |
| [07-object-keys-values.js](07-object-keys-values.js) | `Object.keys/values/entries`, objekto dydis |
| [08-object-create.js](08-object-create.js) | `Object.create()`, prototipų grandinė |
| [09-object-assign.js](09-object-assign.js) | `Object.assign()`, shallow vs deep kopija |
| [10-spread.js](10-spread.js) | `...` objektams ir funkcijų argumentams |
| [11-rest.js](11-rest.js) | `...args`, spread vs rest |
| [12-destrukturizavimas.js](12-destrukturizavimas.js) | `let { a, b } = obj` |

⬅️ [08 · Strings](../08-strings/) · [Visos temos](../README.md) · [10 · DOM (I dalis)](../10-dom-1/) ➡️
