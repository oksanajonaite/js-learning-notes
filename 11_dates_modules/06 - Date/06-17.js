/*
 Write a JavaScript function to convert a Unix timestamp to time. Unix-Tai laikas, užrašytas vienu skaičiumi: kiek sekundžių praėjo nuo 1970-01-01 00:00 UTC.

Test Data :
console.log(Unix_timestamp(1412743274));
"6:41:14"
*/
"use strict";

function Unix_timestamp(timestamp) {
  const date = new Date(timestamp * 1000); //Unix skaiciuojamas sekundemis, js date milisek, todel reikia *1000

  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}

console.log(Unix_timestamp(1412743274)); //7:41:14