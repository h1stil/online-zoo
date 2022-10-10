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

// Pets Carousel

const prevBtn = document.querySelector(".arrow_left");
const nextBtn = document.querySelector(".arrow_right");
const swiper = document.querySelector(".animals__swiper");
const containerLeft = document.querySelector(".animals__container_left");
const containerMain = document.querySelector(".animals__container");
const containerRight = document.querySelector(".animals__container_right");
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");
const card4 = document.querySelector(".card4");
const card5 = document.querySelector(".card5");
const card6 = document.querySelector(".card6");
const card7 = document.querySelector(".card7");
const cards = [card1, card2, card3, card4, card5, card6, card7];

const moveLeft = () => {
  if (window.innerWidth > 1550) swiper.classList.add("transition-left_desctop");
  if (window.innerWidth > 1200 && window.innerWidth <= 1550)
    swiper.classList.add("transition-left_normal");
  if (window.innerWidth > 980 && window.innerWidth <= 1200)
    swiper.classList.add("transition-left_small");
  if (window.innerWidth <= 980) swiper.classList.add("transition-left_mobile");
  nextBtn.setAttribute("disabled", "true");
  prevBtn.setAttribute("disabled", "true");
};

const moveRight = () => {
  if (window.innerWidth > 1550)
    swiper.classList.add("transition-right_desctop");
  if (window.innerWidth > 1200 && window.innerWidth <= 1550)
    swiper.classList.add("transition-right_normal");
  if (window.innerWidth > 980 && window.innerWidth <= 1200)
    swiper.classList.add("transition-right_small");
  if (window.innerWidth <= 980) swiper.classList.add("transition-right_mobile");
  nextBtn.setAttribute("disabled", "true");
  prevBtn.setAttribute("disabled", "true");
};

const generateLeft = () => {
  let randomCards = [];
  while (randomCards.length < 6) {
    let num = Math.floor(Math.random() * 7);
    randomCards.push(cards[num]);
    randomCards = [...new Set(randomCards)];
  }
  containerLeft.innerHTML = "";
  containerLeft.appendChild(randomCards[0]);
  containerLeft.appendChild(randomCards[1]);
  containerLeft.appendChild(randomCards[2]);
  containerLeft.appendChild(randomCards[3]);
  containerLeft.appendChild(randomCards[4]);
  containerLeft.appendChild(randomCards[5]);
};

const generateRight = () => {
  let randomCards = [];
  while (randomCards.length < 6) {
    let num = Math.floor(Math.random() * 7);
    randomCards.push(cards[num]);
    randomCards = [...new Set(randomCards)];
  }
  containerRight.innerHTML = "";
  containerRight.appendChild(randomCards[0]);
  containerRight.appendChild(randomCards[1]);
  containerRight.appendChild(randomCards[2]);
  containerRight.appendChild(randomCards[3]);
  containerRight.appendChild(randomCards[4]);
  containerRight.appendChild(randomCards[5]);
};

prevBtn.addEventListener("click", () => {
  generateLeft();
  moveLeft();
});

nextBtn.addEventListener("click", () => {
  generateRight();
  moveRight();
});

swiper.addEventListener("animationend", (event) => {
  if (
    event.animationName === "move-left_desctop" ||
    event.animationName === "move-left_normal" ||
    event.animationName === "move-left_small" ||
    event.animationName === "move-left_mobile"
  ) {
    swiper.classList.remove("transition-left_desctop");
    swiper.classList.remove("transition-left_normal");
    swiper.classList.remove("transition-left_small");
    swiper.classList.remove("transition-left_mobile");
    containerRight.innerHTML = containerLeft.innerHTML;
    containerMain.innerHTML = containerLeft.innerHTML;
  } else if (
    event.animationName === "move-right_desctop" ||
    event.animationName === "move-right_normal" ||
    event.animationName === "move-right_small" ||
    event.animationName === "move-right_mobile"
  ) {
    swiper.classList.remove("transition-right_desctop");
    swiper.classList.remove("transition-right_normal");
    swiper.classList.remove("transition-right_small");
    swiper.classList.remove("transition-right_mobile");
    containerLeft.innerHTML = containerRight.innerHTML;
    containerMain.innerHTML = containerRight.innerHTML;
  }
  prevBtn.removeAttribute("disabled");
  nextBtn.removeAttribute("disabled");
});
