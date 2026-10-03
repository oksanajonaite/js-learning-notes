"use strict";

// 3. Parse CSV string into array of objects

function parseString(input) {
  const lines = input.split("\n");
  const keys = lines[0].split(",");
  const data = lines.slice(1);

  const result = data.map((row) => {
    const values = row.split(",");
    const object = {};

    for (let i = 0; i < keys.length; i++) {
      if (keys[i] === "age") {
        object[keys[i]] = Number(values[i]);
      } else {
        object[keys[i]] = values[i];
      }
    }

    return object;
  });

  return result;
}

const input =
  "name,age,city\nJonas,25,Vilnius\nOna,30,Kaunas\nPetras,22,Klaipeda";

console.log(parseString(input));
/*
[
  { name: 'Jonas', age: 25, city: 'Vilnius' },
  { name: 'Ona', age: 30, city: 'Kaunas' },
  { name: 'Petras', age: 22, city: 'Klaipeda' }
]
  */
