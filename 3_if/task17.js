"use strict";

/* 17. Dienų skaičius mėnesyje
Paprašykite vartotojo įvesti mėnesio numerį (1 - 12). 
Išveskite į konsolę, kiek tame mėnesyje yra dienų. 
Laikome, kad vasaris - 29 dienos. Jei įvestis neteisinga - išveskite klaidos žinutę.*/

let month = Number(prompt("Enter a month number (1-12):"));

if (month == 1 || month == 3 || month == 5 || month == 7 ||
    month == 8 || month == 10 || month == 12) {
    console.log(31);
} else if (month == 4 || month == 6 || month == 9 || month == 11) {
    console.log(30);
} else if (month === 2) {
    console.log(29);
}