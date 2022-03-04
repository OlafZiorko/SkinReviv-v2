let btnBurger = document.querySelector(".burger__menu");
let btnBurgerDropDown = document.querySelector(".dropdown__burger__menu");
let dropDownMenu = document.querySelector(".dropdown__wrapper");

btnBurger.addEventListener("click", function () {
  if (dropDownMenu.classList.contains("show--menu")) {
    dropDownMenu.classList.remove("show--menu");
  } else {
    dropDownMenu.classList.add("show--menu");
  }
  burgerAnimation();
});

function burgerAnimation() {
  if (btnBurger.classList.contains("open")) {
    btnBurger.classList.remove("open");
  } else {
    btnBurger.classList.add("open");
  }
}

btnBurgerDropDown.addEventListener("click", function () {
  if (dropDownMenu.classList.contains("show--menu")) {
    dropDownMenu.classList.remove("show--menu");
  } else {
    dropDownMenu.classList.add("show--menu");
  }
  burgerAnimation();
});
