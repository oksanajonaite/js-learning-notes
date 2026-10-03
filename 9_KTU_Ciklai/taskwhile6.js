"use strict";

// 6. Skaiciuotuvas

function calculator(operation, numbers) {
  console.log("1 - suma, 2 - atimtis, 3 - daugyba, 4 - didžiausia reikšmė, 5 - mažiausia reikšmė");
  console.log("Įveskite veiksmą: " + operation);

  if (numbers[0] === 0) {
    console.log("Neįvesta skaičių.");
    return;
  }

  let result = numbers[0];
  console.log(numbers[0]);
  let i = 1;

  while (numbers[i] !== 0) {
    let n = numbers[i];
    console.log(n);

    if (operation === 1) {
      result += n;
    } else if (operation === 2) {
      result -= n;
    } else if (operation === 3) {
      result *= n;
    } else if (operation === 4) {
      if (n > result) result = n;
    } else if (operation === 5) {
      if (n < result) result = n;
    }
    i++;
  }
  console.log(0);

  let labels = ["", "sum", "diff", "product", "max", "min"];
  console.log(labels[operation] + ": " + result);
}

calculator(4, [15, 20, 70, -20, 0]);
console.log("-----");
calculator(1, [12, 10, 50, 0]);

/*
1 - suma, 2 - atimtis, 3 - daugyba, 4 - didžiausia reikšmė, 5 - mažiausia reikšmė
Įveskite veiksmą: 4
15
20
70
-20
0
max: 70
-----
1 - suma, 2 - atimtis, 3 - daugyba, 4 - didžiausia reikšmė, 5 - mažiausia reikšmė
Įveskite veiksmą: 1
12
10
50
0
sum: 72
*/