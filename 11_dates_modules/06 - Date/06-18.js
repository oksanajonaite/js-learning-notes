/*
Write a JavaScript program to calculate age. 

Test Data :
console.log(calculate_age(new Date(1982, 11, 4))); 
32
console.log(calculate_age(new Date(1962, 1, 1)));
53
*/

"use strict";
function calculate_age(birthDate) {
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  const monthDiff = today.getMonth() - birthDate.getMonth();
  const birthdayNotYet =
    monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate());

  if (birthdayNotYet) {
    age--;
  }

  return age;
}

console.log(calculate_age(new Date(1982, 11, 4))); //43
console.log(calculate_age(new Date(1962, 1, 1)));  //64

