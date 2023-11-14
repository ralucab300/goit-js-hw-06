const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// Va crea un element <li> separat. Asigurați-vă
// că folosiți metoda document.createElement().
// Adăugați numele ingredientului ca conținut text.
// Adăugați clasa item la element.
// Apoi va insera toate elementele <li>
// dintr-o singură operație în lista ul#ingredients.
for (const ingredient of ingredients) {
  const li = document.createElement("li");

  li.textContent = ingredient;
  li.classList.add("item");
  document.getElementById("ingredients").appendChild(li);
}
