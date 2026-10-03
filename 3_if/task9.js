"use strict";

/* 9. Mėgstamo skaičiaus spėjimas
Paprašykite vartotojo įvesti du skaičius. Pirmas - mėgstamas skaičius. Antras - spėjimas. Jei spėjimas:
 didesnis → išvesk „Too high“
 mažesnis → „Too low“
 lygus → „You got it!“*/

let favorite = Number(prompt("Enter your favorite number:"));
let guess = Number(prompt("Guess the number:"));

if (guess > favorite) {
    console.log("Too high");
} else if (guess < favorite) {
    console.log("Too low");
} else {
    console.log("You got it!");
}