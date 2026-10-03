"use strict";

// 10. `apverstiMokymosiTvarkarastį`

function apverstiMokymosiTvarkarasti (subjects) {
  subjects.reverse();
  return subjects;
}

let subjects = [
  "JavaScript",
  "Java",
  "Python",
  "C#",
  "Duomenų bazės",
  "HTML/CSS",
  "Operacinės sistemos",
];


console.log(apverstiMokymosiTvarkarasti(subjects));
/*
PS C:\Users\Lenovo\Desktop\TECHIN\JS\JS_kartojimas> node task10
[
  'Operacinės sistemos',
  'HTML/CSS',
  'Duomenų bazės',
  'C#',
  'Python',
  'Java',
  'JavaScript'
]
  */