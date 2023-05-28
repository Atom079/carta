"use strict";
window.addEventListener("DOMContentLoaded", () => {
  const btns = document.querySelectorAll("button"),
    links = document.querySelectorAll("a");

  function PreventerDefault(value) {
    value.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("Test 1 Done 👍");
      });
    });
  }
  PreventerDefault(btns);
  PreventerDefault(links);
});
