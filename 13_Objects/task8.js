"use strict";

const tiles = [
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 }
];

function maximumScore(tiles) {
    let total = 0;

    for (const tile of tiles) {
        total += tile.score;
    }

    return total;
}

console.log(`The player's maximum score: ${maximumScore(tiles)}`);
//The player's maximum score: 28