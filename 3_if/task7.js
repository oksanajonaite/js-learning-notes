"use strict";

/* 7. Trijų skaičių rikiavimas mažėjimo tvarka
Paprašykite vartotojo įvesti tris skaičius. 
Naudojant if sąlygas, surikiuokite juos nuo didžiausio iki mažiausio. Rezultatą parodykite su alert.*/

let a = Number(prompt("Enter a first number:"));
let b = Number(prompt("Enter a second number:"));
let c = Number(prompt("Enter a third number:"));

if (a >= b && b >= c) {
    alert(`${a}, ${b}, ${c}`);
} else if (a >= c && c >= b) {
    alert(`${a}, ${c}, ${b}`);
} else if (b >= a && a >= c) {
    alert(`${b}, ${a}, ${c}`);
} else if (b >= c && c >= a) {
    alert(`${b}, ${c}, ${a}`);
} else if (c >= a && a >= b) {
    alert(`${c}, ${a}, ${b}`);
} else {
    alert(`${c}, ${b}, ${a}`);
}