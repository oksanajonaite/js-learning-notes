"use strict";

/* 15. Akmuo, popierius, žirklės
Paprašykite dviejų žaidėjų įvesti rock, paper arba scissors. Jeigu:
 Laimėjo pirmas žaidėjas - išveskite į konsolę „Player 1“
 Laimėjo antras žaidėjas - išveskite į konsolę „Player 2“
 Lygiosios - „draw“*/

let player1 = prompt("Enter rock, paper or scissors");
let player2 = prompt("Enter rock, paper or scissors");

if (player1 === player2) {
    console.log("draw");
} else if (
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "paper" && player2 === "rock") ||
    (player1 === "scissors" && player2 === "paper")
) {
    console.log("Player 1");
} else {
    console.log("Player 2");
}