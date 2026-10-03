"use strict";

// 9. Create a “short description” for products

function createShortDescriptions(items) {
  const result = [];

  for (let i = 0; i < items.length; i++) {
    result.push(createShortLine(items[i]));
  }

  return result;
}

function createShortLine(product) {
  let shortText = product.description;

  if (product.description.length > 25) {
    shortText = product.description.slice(0, 25).trim() + "...";
  }

  return `${product.name} (${product.price}€): ${shortText}`;
}


const items = [
  { name: "Phone", description: "A very nice smartphone with good camera", price: 500 },
  { name: "Laptop", description: "Powerful laptop for work and games", price: 1200 }
];

console.log(createShortDescriptions(items));

/*
[
  'Phone (500€): A very nice smartphone wi...',
  'Laptop (1200€): Powerful laptop for work...'
]
  */
