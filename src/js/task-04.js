"use strict";
// Declarați o variabilă counterValue ce va stoca
// valoarea curentă a contorului și asignați-i valoarea
//  0 pentru început.
// Adăugați click handler pe butoane, în interiorul
// cărora vei mări sau micșora valoarea contorului.
// Actualizați interfața cu noua valoare a variabilei
// counterValue.
let counterValue = 0;
const buton1 = document.querySelector('[data-action="decrement"]');
const buton2 = document.querySelector('[data-action="increment"]');
buton1.addEventListener("click", () => {
  counterValue -= 1;
  document.getElementById("value").textContent = counterValue;
});
buton2.addEventListener("click", () => {
  counterValue++;
  document.getElementById("value").textContent = counterValue;
});
