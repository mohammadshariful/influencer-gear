"use strict";
const navLinks = document.querySelector(".nav-links");
const openMenu = document.querySelector(".fa-bars");
const closeMenu = document.querySelector(".fa-times");

// toggle function

function toggle(state1, state2, size) {
  openMenu.style.display = state1;
  closeMenu.style.display = state2;
  navLinks.style.left = size;
}

openMenu.addEventListener("click", () => toggle("none", "block", "0"));

closeMenu.addEventListener("click", () => toggle("block", "none", "-300px"));
