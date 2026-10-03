"use strict";


// for...of
// for every fruit of fruits

const vaisiai = ["Obuolys", "Bananas", "Kriause"];

for (const vaisius of vaisiai) {
    console.log("Vaisius:", vaisius);
}

// for...in
//skirtas objektas, einame per key, kad lengvau gauti value

const auto = {marke: "Audi", spalva: "Juoda", metai: 2022};

for (const savybe in auto) {
    console.log(savybe + ": " + auto[savybe]);
}

