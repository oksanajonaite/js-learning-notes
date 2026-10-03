"use strict";

// 18. `ivertinkSavaite`

function sujunkIrIsryskinkVeiklas (darbas, poilsis) {
  let poilsisDidziosiom = poilsis.map(elementas => elementas.toUpperCase());
  return darbas.concat(poilsisDidziosiom);
}


  let darbas = ["Mokytis JS", "Ateiti į pamokas", "Kartotis"];
  let poilsis = ["Miegas", "Serialai", "Maistas"];

  console.log(sujunkIrIsryskinkVeiklas(darbas,poilsis));
  /*
  'Mokytis JS',
  'Ateiti į pamokas',
  'Kartotis',
  'MIEGAS',
  'SERIALAI',
  'MAISTAS'
]
  arba

  function sujunkIrIsryskinkVeiklas(darbas, poilsis) {
  return [...darbas, ...poilsis.map(item => item.toUpperCase())];
}

*/