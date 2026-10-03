"use strict";

// 7. Add new property during mapping

function addVatToProduct(product) {
  const VAT = 0.21;
  const newProduct = { ...product };
  newProduct.priceWithVAT = product.price * (1 + VAT);
  return newProduct;
}

function addVat(items) {
  const result = items.map(addVatToProduct); //perduodame pacia funkcija, todel be ()
  return result;
}

const products = [
  { title: "Phone", price: 500 },
  { title: "Laptop", price: 1200 },
  { title: "Tablet", price: 800 }
];

console.log(addVat(products));

/*
[
  { title: 'Phone', price: 500, priceWithVAT: 605 },
  { title: 'Laptop', price: 1200, priceWithVAT: 1452 },
  { title: 'Tablet', price: 800, priceWithVAT: 968 }
]
  */