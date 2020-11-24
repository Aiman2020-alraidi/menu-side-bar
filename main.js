"use strict";
const mobileBar = document.querySelector(".mobile");
const btn = document.querySelector(".nav-toggle");
const backBtn = document.querySelector(".back");

btn.addEventListener("click", (e) => {
  const rotate = btn.classList;
  mobileBar.style.left = 0;
  if (rotate.contains("rotate")) {
    rotate.remove("rotate");
  } else {
    rotate.add("rotate");
  }
});

backBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const rotate = backBtn.classList;
  mobileBar.style.left = -100 + "%";
  if (rotate.contains("rotate")) {
    rotate.remove("rotate");
  } else {
    rotate.add("rotate");
  }
});
