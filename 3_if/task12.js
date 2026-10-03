"use strict";

/* 12. Ar galiu nusipirkti?
Paprašykite vartotojo prekės pavadinimo ir kiek jis turi pinigų.
Prekių kainos:
 MacBook Air – 999
 MacBook Pro – 1299
 Mac Pro – 2499
 Apple Sticker – 1
Jei užtenka pinigų - true, jei ne - false. Jei tokios prekės nėra - taip pat false.*/

let product = prompt("What product do you want to buy?");
let money = Number(prompt("How much money do you have?"));

let price;

if (product == "MacBook Air") {
    price = 999;
} else if (product == "MacBook Pro") {
    price = 1299;
} else if (product == "Mac Pro") {
    price = 2499;
} else if (product == "Apple Sticker") {
    price = 1;
}

if (price == undefined) {
    console.log(false);
} else {
    console.log(money >= price);
}