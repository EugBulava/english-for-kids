const SWITCHER = document.querySelector('switcher');
const TOGGLE_SWITCH = document.querySelector('switcher a');
const SWITCHER_TEXT = document.querySelector('switcher span');
const SWITCHER_TEXT_PLAY = document.querySelector('switcher .mode-text-play');
const BURGER_MENU = document.querySelector('.burger-menu');
let mode = false;
const switchMode = function switchMode(targetEl) {
  if (targetEl === SWITCHER || targetEl === TOGGLE_SWITCH
    || targetEl === SWITCHER_TEXT || targetEl === SWITCHER_TEXT_PLAY) {
    if (mode === false) {
      mode = true;
      SWITCHER_TEXT.classList.add('active-switch-text');
      SWITCHER.classList.add('play-mode-color');
      BURGER_MENU.classList.add('play-mode-color');
      document.querySelectorAll('.category').forEach((a) => {
        a.classList.add('play-mode-color');
      });
      document.querySelectorAll('.card').forEach((a) => {
        a.classList.add('play-mode-color');
      });
      sessionStorage.setItem('mode', true);
    } else {
      mode = false;
      SWITCHER_TEXT.classList.remove('active-switch-text');
      SWITCHER.classList.remove('play-mode-color');
      BURGER_MENU.classList.remove('play-mode-color');
      document.querySelectorAll('.category').forEach((a) => {
        a.classList.remove('play-mode-color');
      });
      document.querySelectorAll('.card').forEach((a) => {
        a.classList.remove('play-mode-color');
      });
      sessionStorage.setItem('mode', false);
    }
  }
};

export default switchMode;
