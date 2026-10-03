"use strict";

// 4. Joninių žolelių ekspertas (arrow function)

const joniniuEkspertas = (z1, z2, z3, z4) => {
  let suma = z1 + z2 + z3 + z4;
  // let isvada;
  // if (suma > 20) isvada = "Jonines garantuotos!";
  // else isvada = "Dar reikia zoleliu...";
  let isvada = suma > 20 ? "Joninės garantuotos!" : "Dar reikia žolelių..."; //ternary
  return {suma, isvada };
};

console.log(joniniuEkspertas(8, 10, 2, 5)); //{ suma: 25, isvada: 'Joninės garantuotos!' }
console.log(joniniuEkspertas(5, 5, 5, 5)); //{ suma: 20, isvada: 'Dar reikia žolelių...' }
console.log(joniniuEkspertas(1, 1, 1, 1)); //{ suma: 4, isvada: 'Dar reikia žolelių...' }