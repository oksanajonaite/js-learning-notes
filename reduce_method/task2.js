"use strict";

// 2. Turn an array of numbers into a long string of all those numbers

function stringConcat(arr) {
  //acc kaupiklis accumulator, iki siol kaupiama reiksme, n dabartinis masyvo elementas
  return arr.reduce((acc, n) => acc + n, "");
}

console.log(stringConcat([1, 2, 3])); // 123


/*
function stringConcat(arr) {
  return arr.join("");
}
  */