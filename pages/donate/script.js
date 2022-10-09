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

// Donate Amount
document
  .querySelector(".donate__qty")
  .addEventListener("change", function (event) {
    document.getElementById("dollars").value = event.target.value;
  });

document.addEventListener("DOMContentLoaded", function () {
  let getCount = document.querySelector("#dollars"),
    radioItem = document.querySelectorAll(".amount__radio");

  getCount.addEventListener("change", function () {
    radioItem.forEach((item) => {
      if (item.value == this.value) {
        item.checked = true;
      } else {
        item.checked = false;
      }
    });
  });
});
