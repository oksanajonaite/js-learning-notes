"use strict";

/*HOF yra filter (ir map). 
Jos yra HOF todėl, kad priima kitą funkciją kaip ingredientą. 
Tai vienintelė sąlyga: jei funkcija priima funkciją arba grąžina funkciją, ji yra higher-order function.

Callback yra isExpensive (ir getName). 
Jos yra callback'ai todėl, kad paduodamos kitam, kad tas jas iškviestų.

Svarbu: isExpensive pati savaime nėra callback. 
Ji tampa callback'u tik tuo momentu, kai ją paduodi į filter. Tai vaidmuo, o ne tipas:

Ar sinchroninė?
Taip, visiškai. Eilutės vykdomos griežtai iš eilės, nieko nelaukiant:*/

const products = [
  { name: "bread", price: 2.5 },
  { name: "milk", price: 1.2 },
  { name: "cheese", price: 8.9 },
  { name: "coffee", price: 12.4 }
];

// 1. Funkcija, kuri tikrina, ar prekė brangi
function isExpensive(product) {
  return product.price > 5;
}

// 2. Funkcija, kuri iš prekės paima pavadinimą
function getName(product) {
  return product.name;
}

// 3. Atrenkame brangias prekes
const expensiveProducts = products.filter(isExpensive);
console.log(expensiveProducts);
// [{ name: "cheese", price: 8.9 }, { name: "coffee", price: 12.4 }]

// 4. Iš atrinktų paimame tik pavadinimus
const expensiveNames = expensiveProducts.map(getName);
console.log(expensiveNames);
// ["cheese", "coffee"]

/*trumpoji versija paaiskinimas: 
const expensiveProducts = products.filter(function (product) {
  return product.price > 5;
});

const expensiveNames = expensiveProducts.map(function (product) {
  return product.name;
});

const expensiveProducts = products.filter((product) => product.price > 5);
const expensiveNames = expensiveProducts.map((product) => product.name);

const expensiveNames = products
  .filter((product) => product.price > 5)
  .map((product) => product.name);*/