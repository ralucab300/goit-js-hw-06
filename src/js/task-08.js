// Gestionarea trimiterii formularului form.login-form
//  trebuie să fie în
// cadrul evenimentului submit.
// La trimiterea formularului, pagina nu trebuie să se
// reîncarce.
// Dacă formularul are câmpuri goale, afișați un alert
// care avertizează că toate câmpurile trebuie completate.
// Dacă utilizatorul a completat toate câmpurile și a
// trimis formularul, colectați valorile câmpului într-un
// obiect în care numele câmpului va fi numele proprietății,
//  iar valoarea câmpului va fi valoarea proprietății.
//  Pentru a accesa elementele formularului, folosiți
//   proprietatea elements.
// Afișați obiectul cu datele introduse în consolă și
// ștergeți valorile câmpurilor din formular, folosind
//  metoda reset.
"use strict";

const form = document.querySelector(".login-form");
form.addEventListener("submit", (e) => {
  const obiect = {};
  e.preventDefault();

  const email = e.target.elements["email"];
  const password = e.target.elements["password"];
  if (email.value === "" || password.value === "")
    alert("Toate campurile trebuie completate!");
  else {
    obiect["email"] = email.value;
    obiect["password"] = password.value;
    console.log(obiect);
    e.target.reset();
  }
});
