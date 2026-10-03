"use strict";

//10. convert a string in abbreviated form

function abbrev_name(str) {
  let words = str.trim().split(" "); //suskaido eilute i zodziu masyva

  if (words.length > 1) {
    let lastInitial = words[words.length - 1].charAt(0);
    return `${words[0]} ${lastInitial}.`;
  }

  return words[0];
}

console.log(abbrev_name("Robin Singh")); //Robin S.
console.log(abbrev_name("Robin Kumar Singh")); //Robin S.
console.log(abbrev_name("Robin")); //Robin