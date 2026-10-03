// 06 · Spread operatorius (...)
// Paleisti: node 06-masyvai/04-spread.js

// Spread IŠSKAIDO masyvą į atskirus elementus.

const arrValue = ["My", "name", "is", "Jack"];

console.log(arrValue);      // [ 'My', 'name', 'is', 'Jack' ] ← masyvas
console.log(...arrValue);   // My name is Jack                ← atskiri elementai

// --- Naujo masyvo sudarymas ---
const arr1 = ["one", "two"];
const arr2 = [...arr1, "three", "four", "five"];

console.log(arr2); // [ 'one', 'two', 'three', 'four', 'five' ]

// ⚠️ Be spread gautume masyvą masyve:
console.log([arr1, "three"]); // [ [ 'one', 'two' ], 'three' ]

// --- Perdavimas funkcijai kaip atskirų argumentų ---
const skaiciai = [5, 2, 9, 1];
console.log(Math.max(...skaiciai)); // 9
console.log(Math.max(skaiciai));    // NaN ⚠️ be spread neveikia
