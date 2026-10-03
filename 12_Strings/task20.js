"use strict";

//20. to humanize number.

function humanize_format(num) {
  if (typeof num !== "number") return;

  const lastTwo = num % 100;
  const lastOne = num % 10;

  if (lastTwo >= 11 && lastTwo <= 13) return num + "th";

  if (lastOne === 1) return num + "st";
  if (lastOne === 2) return num + "nd";
  if (lastOne === 3) return num + "rd";
  return num + "th";
}

console.log(humanize_format()); //undefined
console.log(humanize_format(1)); //1st
console.log(humanize_format(8)); //8th
console.log(humanize_format(301)); //301st
console.log(humanize_format(402)); //402nd
console.log(humanize_format(12)); //12th