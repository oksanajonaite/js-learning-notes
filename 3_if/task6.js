"use strict";

/* 6. Ar vienas skaičius yra kito kartotinis
Paprašykite vartotojo įvesti du skaičius n ir d.
 Jei d lygus 0 → išveskite “Division by zero is not allowed!!!“
 Jei n dalinasi iš d be liekanos → true
 Kitu atveju → false
Rezultatą išveskite į konsolę.*/

let n = Number(prompt("Enter a first number:"));
let d = Number(prompt("Enter a second number:"));

if (d == 0) {
    console.log("Division by zero is not allowed!!!");
} else if (n % d == 0) {
    console.log("true");
} else {
    console.log("false");
}