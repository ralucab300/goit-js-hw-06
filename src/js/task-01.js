"use strict";

const n = document.querySelectorAll(".item");
console.log(`Number of categories: ${n.length}`);
for (let i = 0; i < n.length; i++) {
  console.log(`Category: ${n[i].children[0].textContent}`);
  console.log(`Elements: ${n[i].children[1].childElementCount}`);
}
