"use strict";

//12. function to parameterize a string. SLUG formatas

function string_parameterize(str) {
  return str
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") //pasalina viska kas nera raide
    .replace(/[\s-]+/g, "-");
}

console.log(string_parameterize("Robin Singh from USA.")); //robin-singh-from-usa

/*
function string_parameterize(str) {
  const allowed = "abcdefghijklmnopqrstuvwxyz0123456789 ";

  const cleaned = str
    .toLowerCase()
    .split("")
    .filter(char => allowed.includes(char))
    .join("");

  return cleaned
    .split(" ")
    .filter(word => word !== "")
    .join("-");
}

console.log(string_parameterize("Robin Singh from USA.")); //robin-singh-from-usa*/