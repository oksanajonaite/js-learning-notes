"use strict";

// 8. Atvirukai

function countCardTypes(friends, cards) {
  let enough = 0;
  let i = 0;

  console.log("Keliems draugams Linas nori dovanoti atvirukus? " + friends);
  console.log("Kiek rūšių atvirukų yra parduotuvėje? " + cards.length);

  while (i < cards.length) {
    console.log("Kiek yra " + (i + 1) + " rūšies atvirukų? " + cards[i]);

    if (cards[i] >= friends) {
      enough++;
    }
    i++;
  }

  console.log(enough + " rūšių atvirukų užtektų visiems Lino draugams");
}

countCardTypes(7, [6, 10, 9]);
console.log("-----");
countCardTypes(5, [6, 10, 9]);

/*
Kiek yra 1 rūšies atvirukų? 6
Kiek yra 2 rūšies atvirukų? 10
Kiek yra 3 rūšies atvirukų? 9
2 rūšių atvirukų užtektų visiems Lino draugams
-----
Keliems draugams Linas nori dovanoti atvirukus? 5
Kiek rūšių atvirukų yra parduotuvėje? 3
Kiek yra 1 rūšies atvirukų? 6
Kiek yra 2 rūšies atvirukų? 10
Kiek yra 3 rūšies atvirukų? 9
3 rūšių atvirukų užtektų visiems Lino draugams
*/

/* falima naudoti ir for
function countCardTypes(friends, cards) {
  let enough = 0;

  console.log("Keliems draugams Linas nori dovanoti atvirukus? " + friends);
  console.log("Kiek rūšių atvirukų yra parduotuvėje? " + cards.length);

  for (let i = 0; i < cards.length; i++) {
    console.log("Kiek yra " + (i + 1) + " rūšies atvirukų? " + cards[i]);

    if (cards[i] >= friends) {
      enough++;
    }
  }

  console.log(enough + " rūšių atvirukų užtektų visiems Lino draugams");
}

countCardTypes(7, [6, 10, 9]);
console.log("-----");
countCardTypes(5, [6, 10, 9]);*/