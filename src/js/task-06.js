"use strict";
// Numărul de caractere admis trebuie specificat în
//  atributul data-length.
// Dacă este introdus numărul corect de caractere,
//  atunci border-ul devine verde, în caz contrar - roșu.
// Pentru a adăuga stilurile necesare, utilizați
// clasele CSS valid și invalid pe care le-am adăugat deja
// la fișierele sursă ale acestui exercițiu.
const input = document.querySelector("#validation-input");
input.addEventListener("blur", (e) => {
  if (e.target.value.length === Number(input.getAttribute("data-length")))
    input.className = "valid";
  else input.className = "invalid";
  input.classLi;

  console.log(e.target.value.length);
  console.log(input.getAttribute("data-length"));
});
