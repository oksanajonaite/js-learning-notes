"use strict";

// 9. Pirkiniai

function checkShopping(items) {
  let count = items.length;
  let totalPrice = 0;
  let totalWeight = 0;

  console.log("Kiek buvo pirkinių: " + count);
  for (let i = 0; i < count; i++) {
    console.log("Įveskite " + (i + 1) + " pirkinio kainą ir svorį: " + items[i].price + " " + items[i].weight);
    totalPrice += items[i].price;
    totalWeight += items[i].weight;
  }

  let averagePrice = Math.round(totalPrice / count);   // centais
  let litas = Math.floor(averagePrice / 100);
  let cents = averagePrice % 100;

  console.log("Pirkinio vidutinė kaina: " + litas + " Lt " + cents + " ct.");

  if (totalWeight <= 5000) {
    console.log("Petriukas galės parnešti pirkinius.");
  } else {
    console.log("Petriukas negalės parnešti pirkinių.");
  }
}

checkShopping([
  { price: 105, weight: 2000 },
  { price: 1655, weight: 2550 }
]);
console.log("-----");
checkShopping([
  { price: 105, weight: 3000 },
  { price: 2655, weight: 2550 }
]);

/*
Kiek buvo pirkinių: 2
Įveskite 1 pirkinio kainą ir svorį: 105 2000
Įveskite 2 pirkinio kainą ir svorį: 1655 2550
Pirkinio vidutinė kaina: 8 Lt 80 ct.
Petriukas galės parnešti pirkinius.
-----
Kiek buvo pirkinių: 2
Įveskite 1 pirkinio kainą ir svorį: 105 3000
Įveskite 2 pirkinio kainą ir svorį: 2655 2550
Pirkinio vidutinė kaina: 13 Lt 80 ct.
Petriukas negalės parnešti pirkinių.*/