"use strict";

// 2. Blynų motyvacijos indeksas (arrow function)

const blynMotyvacija = (nuotaika, energija) => {

    const kepimoIndeksas = nuotaika * energija;

    if (kepimoIndeksas > 40) return "Kepk daug blynų!";
    if (kepimoIndeksas >= 20) return "Kepk kelis blynus.";
    return "Palik blynus rytojui...";
    };

console.log(blynMotyvacija(10, 10)); //Kepk daug blynų!
console.log(blynMotyvacija(5, 5)); //Kepk kelis blynus.
console.log(blynMotyvacija(2, 3)); //Palik blynus rytojui...