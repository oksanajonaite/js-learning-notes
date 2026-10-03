/*querySelectoriui butinai reikia skliausteliuose nurodyti CSS selektoriu # reiskia id, . reiskia klase*/


let buttons = document.querySelectorAll('.color-btn');
let colorBox = document.getElementById('color-box'); //jei naudotume querySelector tai butu(#color-box)

buttons.forEach((button) => {
  // 1. Kiekvienam mygtukui uždedame click listener
  button.addEventListener('click', () => {

    // 2. Perskaitome spalvą iš data-color
    let color = button.dataset.color; //Jei HTML butu data-spalva="lightblue", reiketu rasyti button.dataset.spalva

    // 3. Nustatome dėžės fono spalvą
    colorBox.style.backgroundColor = color;

    // 4. Bonusas: nuimame "selected" nuo visų, uždedame ant paspausto
    buttons.forEach((btn) => btn.classList.remove('selected'));
    button.classList.add('selected');
  });
});