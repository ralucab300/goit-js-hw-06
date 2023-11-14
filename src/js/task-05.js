"use strict";
// Scrieți un script care, atunci când se
//  introduce un text în input#name-input
//  (evenimentul input), înlocuiește
//  valoarea lui span#name-output cu valoarea curentă din
//  input#name-input. Dacă input-ul este gol
// , în acel span se va afișa "Anonymous".\
const input = document.getElementById("name-input");
input.addEventListener("input", (e) => {
  document.getElementById("name-output").textContent = e.target.value;
  if (e.target.value === "")
    document.getElementById("name-output").textContent = "Anonymous";
});
