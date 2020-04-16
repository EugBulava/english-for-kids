
import categories from './modules/categories';
import burgerFunction from './modules/burger-menu';
import switchMode from './modules/switcher';
import cards from './modules/cards';
import goToPageCards from './modules/goToPageCards';

function CreateCategory(category) {
  const CREATE_CATEGORY_A = document.createElement('a');
  CREATE_CATEGORY_A.className = category.class;
  CREATE_CATEGORY_A.href = category.href;

  const CREATE_CATEGORY_IMAGE = document.createElement('img');
  CREATE_CATEGORY_IMAGE.src = category.urlImg;

  const CREATE_CATEGORY_NAME = document.createElement('span');
  CREATE_CATEGORY_NAME.innerText = category.title;
  CREATE_CATEGORY_NAME.className = 'name-of-category';

  document.querySelector('.categories').append(CREATE_CATEGORY_A);
  document.getElementsByClassName('category')[category.id].append(CREATE_CATEGORY_NAME);
  document.getElementsByClassName('category')[category.id].prepend(CREATE_CATEGORY_IMAGE);
}

function initCategories() {
  const arrNamesOfCategories = Object.keys(categories);
  for (let i = 0; i < arrNamesOfCategories.length; i += 1) {
    CreateCategory(categories[arrNamesOfCategories[i]]);
  }
}

function initCards(card) {
  const CARDS_BLOCK = document.getElementsByClassName('cards-block');
  for (let i = 0; i < cards.length; i += 1) {
    for (let j = 0; j < cards[i].length; j += 1) {
      const CREATE_CARD_DIV = document.createElement('div');
      CREATE_CARD_DIV.className = 'card';

      const CREATE_CARD_IMAGE = document.createElement('img');
      CREATE_CARD_IMAGE.src = card[i][j].image;

      const CREATE_CARD_NAME = document.createElement('span');
      CREATE_CARD_NAME.innerText = card[i][j].word;
      CREATE_CARD_NAME.className = 'name-of-card';

      CARDS_BLOCK[i].append(CREATE_CARD_DIV);
      CARDS_BLOCK[i].getElementsByClassName('card')[j].append(CREATE_CARD_NAME);
      CARDS_BLOCK[i].getElementsByClassName('card')[j].append(CREATE_CARD_IMAGE);
    }
  }
}

const SWITCHER = document.querySelector('switcher');
const SWITCHER_TEXT = document.querySelector('switcher span');
const BURGER_MENU = document.querySelector('.burger-menu');

if (window.location.pathname === '/src/index.html') {
  initCategories();
  document.querySelector('.link').classList.add('active-link-menu');
  if (sessionStorage.getItem('mode') === 'true') {
    SWITCHER_TEXT.classList.add('active-switch-text');
    SWITCHER.classList.add('play-mode-color');
    BURGER_MENU.classList.add('play-mode-color');
    document.querySelectorAll('.category').forEach((a) => {
      a.classList.add('play-mode-color');
    });
  }
}

if (window.location.pathname === '/src/cards.html') {
  initCards(cards);
  if (sessionStorage.getItem('mode') === 'true') {
    SWITCHER_TEXT.classList.add('active-switch-text');
    SWITCHER.classList.add('play-mode-color');
    BURGER_MENU.classList.add('play-mode-color');
    document.querySelectorAll('.category').forEach((a) => {
      a.classList.add('play-mode-color');
    });
    document.querySelectorAll('.card').forEach((a) => {
      a.classList.add('play-mode-color');
    });
  }

  document.querySelectorAll('.cards-block').forEach((block) => {
    block.classList.add('hidden');
  });

  document.querySelector(`.${localStorage.getItem('page')}`).classList.remove('hidden');
  document.querySelectorAll('.nav-li a')[localStorage.getItem('pageNumber')].classList.add('active-link-menu');
}

const ALL_LINKS = document.querySelectorAll('.link');
if (window.location.pathname === '/src/stats.html') {
  ALL_LINKS[ALL_LINKS.length - 1].classList.add('active-link-menu');
  if (sessionStorage.getItem('mode') === 'true') {
    SWITCHER_TEXT.classList.add('active-switch-text');
    SWITCHER.classList.add('play-mode-color');
    BURGER_MENU.classList.add('play-mode-color');
    document.querySelectorAll('.category').forEach((a) => {
      a.classList.add('play-mode-color');
    });
  }
}

document.body.addEventListener('click', (event) => {
  burgerFunction(event.target);
  switchMode(event.target);
  goToPageCards(event.target);
});
