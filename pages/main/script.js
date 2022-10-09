/* BURGER MENU */
let burgerBtn = document.querySelector(".burger__logo");
let burgerMenu = document.querySelector(".burger__menu");
let burgerOverlay = document.querySelector(".burger__overlay");
let burgerClose = document.querySelector(".top__x");

burgerBtn.addEventListener("click", () => {
  burgerMenu.classList.toggle("burger__active");
  burgerOverlay.classList.toggle("burger__active");
});

burgerOverlay.addEventListener("click", () => {
  burgerMenu.classList.toggle("burger__active");
  burgerOverlay.classList.toggle("burger__active");
});

burgerClose.addEventListener("click", () => {
  burgerMenu.classList.toggle("burger__active");
  burgerOverlay.classList.toggle("burger__active");
});

// POP-UP

let recallBtn = document.querySelectorAll(".container__item");
let recallStr = document.querySelectorAll(".container__text");
let recallOverlay = document.querySelector(".testimonials");
let recallArea = document.querySelector(".testimonials__swiper");

recallBtn.forEach((item, i) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
    recallStr[i].classList.toggle("active");
    recallOverlay.classList.toggle("active");
  });
});

// const popup = document.querySelector(".container__item");

// document.onclick = function (e) {
//   if (e.target.className != "active") {
//     popup.classList.toggle("active");
//   }
// };

// TESTIMOTIONALS SWIPER

document.addEventListener("DOMContentLoaded", function () {
  const testContainer = document.querySelector(".testimonials__swiper");
  testContainer.style.cursor = "grab";

  let pos;

  const mouseDownHandler = function (e) {
    testContainer.style.cursor = "grabbing";
    testContainer.style.userSelect = "none";
    pos = {
      left: testContainer.scrollLeft,
      top: testContainer.scrollTop,
      x: e.clientX,
      y: e.clientY,
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };

  const mouseMoveHandler = function (e) {
    const dy = e.clientY - pos.y;
    const dx = e.clientX - pos.x;
    testContainer.scrollTop = pos.top - dy;
    testContainer.scrollLeft = pos.left - dx;
  };

  const mouseUpHandler = function () {
    testContainer.style.cursor = "grab";
    testContainer.style.removeProperty("user-select");

    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
  };

  testContainer.addEventListener("mousedown", mouseDownHandler);
});
