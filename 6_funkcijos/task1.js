"use strict";

function celsiusToFahrenheit(temp) {
  let result = temp*1.8 + 32;
  return result;
}

let fahrenheit = celsiusToFahrenheit(100);
console.log(fahrenheit);

/* 1. be tarpinio kintamojo
function celsiusToFahrenheit(temp) {
  return temp * 1.8 + 32;

 2. function expression
const celsiusToFahrenheit = function (temp) {
  return temp * 1.8 + 32;
};

3. arrow funkcija
const celsiusToFahrenheit = (temp) => {
  return temp * 1.8 + 32;
}; 

4. arrow trumpa
const celsiusToFahrenheit = (temp) => temp * 1.8 + 32;

iskvietimas lieka vienodas:
const fahrenheit = celsiusToFahrenheit(100);
console.log(fahrenheit);*/

