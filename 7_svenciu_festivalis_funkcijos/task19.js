"use strict";

// 19. Asmeninės šventės analizė (arrow function)

const myHoliday = (vardas, menuo, megstamasSkaicius) => {
  let zinute;
  
  if (menuo === megstamasSkaicius) {
    zinute = "Mistinis sutapimas!";
  } else if (menuo > 6) {
    zinute = "Vasaros nuotaikos";
  } else {
    zinute = "Pavasario vėjai";
  }

  return `${vardas}, ${zinute}`;
};

console.log(myHoliday("Oksana", 7, 7));
console.log(myHoliday("Oksana", 8, 7));
console.log(myHoliday("Oksana", 4, 6));