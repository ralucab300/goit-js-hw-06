"use strict";
const spanix = document.querySelector("#text");
const inputix = document.querySelector("#font-size-control");
inputix.addEventListener("input", (e) => {
  spanix.style.fontSize = `${e.target.value}px`;
});
