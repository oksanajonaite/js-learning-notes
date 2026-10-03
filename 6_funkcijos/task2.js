"use strict";

function calculateBMI(mass, height) {
  return mass / Math.pow(height, 2);
}

function compareBMI(markMass, MarkHeight, johnMass, johnHeight) {
  let markBMI = calculateBMI(markMass, MarkHeight);
  let johnBMI = calculateBMI(johnMass, johnHeight);

  let isMarkHigher = markBMI > johnBMI;

  return `Is Mark's BMI higher than John's? ${isMarkHigher}.`
}

console.log(compareBMI(70,1.85, 68, 1.87));