"use strict";

const billInput = document.getElementById("billInput");
const percentLabel = document.getElementById("percentLabel");
const tipSlider = document.getElementById("tipSlider");
const tipOutput = document.getElementById("tipOutput");
const totalOutput = document.getElementById("totalOutput");


function calculate() {
      const bill = Number(billInput.value);
      const percent = Number(tipSlider.value);

      const tip = bill * percent / 100;
      const total = bill + tip;

      percentLabel.textContent = percent + "%";
      tipOutput.textContent = tip.toFixed(2) + " Eur";
      totalOutput.textContent = total.toFixed(2) + " Eur";
    }

    billInput.addEventListener("input", calculate);
    tipSlider.addEventListener("input", calculate);

    calculate();
