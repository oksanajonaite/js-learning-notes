"use strict";

// 2. Filter and sort products with multiple conditions

const filterAndSort = (products) => {
  const productsInStock = products.filter((product) => product.inStock); //filtruojame inStock produktus
  const productsFiltered = productsInStock.filter( //filtruojame pagal kaina
    (product) => product.price >= 10,
  );
  const productsSorted = productsFiltered.sort((a, b) => a.price - b.price); //rusiuojame pagal kaina
  const titles = productsSorted.map((product) => product.title); //is objekto masyvo paversia i masyva
  return titles;
};

const products = [
  { title: "Monitor", price: 120, inStock: true },
  { title: "Keyboard", price: 40, inStock: true },
  { title: "Mouse", price: 15, inStock: false },
  { title: "USB Cable", price: 5, inStock: true },
];
console.log(filterAndSort(products)); // [ 'Keyboard', 'Monitor' ]