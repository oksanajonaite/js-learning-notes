"use strict";

// 4. Kurjeris

function courierStats(amounts) {
  let over100 = 0;
  let total = 0;
  let count = 0;
  let i = 0;

  console.log("Įveskite sumą:");
  while (amounts[i] !== 0) { //ciklas sukasi tol, kol dabartine suma nera 0.
    console.log(amounts[i]);

    if (amounts[i] > 100) {
      over100++;
    }
    total += amounts[i];
    count++;
    i++;
  }
  console.log(0);

  let average = count > 0 ? total / count : 0;

  console.log("1. " + over100);
  console.log("2. " + average);
  console.log("3. " + count);
}

courierStats([110, 80, 50, 0]);
console.log("-----");
courierStats([60, 90, 150, 200, 0]);

/*
Įveskite sumą:
110
80
50
0
1. 1
2. 80
3. 3
-----
Įveskite sumą:
60
90
150
200
0
1. 2
2. 125
3. 4*/