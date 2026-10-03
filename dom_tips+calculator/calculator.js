"use strict";

// tipAmount = bill * tipPercent / 100
// total = bill + tipAmount

const billInput = document.getElementById("bill");
const tipPercentInput = document.getElementById("tipPercent");
const button = document.getElementById("calculateButton");

button.addEventListener("click", () => {
  const bill = Number(billInput.value);
  const tipPercent = Number(tipPercentInput.value);

  const tipAmount = (bill * tipPercent) / 100;
  const total = bill + tipAmount;

document.getElementById("tipAmount").textContent = tipAmount.toFixed(2);
document.getElementById("total").textContent = total.toFixed(2);
});
