const BURGER_MENU = document.querySelector('.burger-menu');
const BURGER_BUTTON = document.querySelector('.burger-button');
const BURGER_BUTTON_SPAN = document.querySelector('.burger-button span');
const NAV_MENU = document.querySelector('.nav');
let menuIsActive = false;

const burgerFunction = function makeBurgerMenu(targetEl) {
  if (targetEl === BURGER_BUTTON || targetEl === BURGER_BUTTON_SPAN) {
    if (menuIsActive === false) {
      BURGER_MENU.classList.add('active-burger-menu');
      BURGER_BUTTON.classList.add('active-burger-button');
      menuIsActive = true;
    } else {
      BURGER_MENU.classList.remove('active-burger-menu');
      BURGER_BUTTON.classList.remove('active-burger-button');
      menuIsActive = false;
    }
  } else if (targetEl !== BURGER_MENU && targetEl !== NAV_MENU) {
    if (menuIsActive === true) {
      BURGER_MENU.classList.remove('active-burger-menu');
      BURGER_BUTTON.classList.remove('active-burger-button');
      menuIsActive = false;
    }
  }
};

export default burgerFunction;
