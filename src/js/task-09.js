function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector(".change-color");
const div = document.querySelector(".widget");
button.addEventListener("click", () => {
  let n = getRandomHexColor();
  document.body.style.backgroundColor = n;
  document.querySelector(".color").textContent = n;
});
