const CATIGORIES = document.getElementsByClassName('category');
const LINKS = document.querySelectorAll('.nav-li a');
const goToPageCards = function goToPageCards(targetEl) {
  if (targetEl === CATIGORIES[0] || targetEl === document.getElementsByTagName('img')[0] || targetEl === document.getElementsByClassName('name-of-category')[0]) {
    localStorage.setItem('page', 'actionA');
    localStorage.setItem('pageNumber', 1);
  } else if (targetEl === CATIGORIES[1] || targetEl === document.getElementsByTagName('img')[1] || targetEl === document.getElementsByClassName('name-of-category')[1]) {
    localStorage.setItem('page', 'actionB');
    localStorage.setItem('pageNumber', 2);
  } else if (targetEl === CATIGORIES[2] || targetEl === document.getElementsByTagName('img')[2] || targetEl === document.getElementsByClassName('name-of-category')[2]) {
    localStorage.setItem('page', 'actionC');
    localStorage.setItem('pageNumber', 3);
  } else if (targetEl === CATIGORIES[3] || targetEl === document.getElementsByTagName('img')[3] || targetEl === document.getElementsByClassName('name-of-category')[3]) {
    localStorage.setItem('page', 'adjective');
    localStorage.setItem('pageNumber', 4);
  } else if (targetEl === CATIGORIES[4] || targetEl === document.getElementsByTagName('img')[4] || targetEl === document.getElementsByClassName('name-of-category')[4]) {
    localStorage.setItem('page', 'animalA');
    localStorage.setItem('pageNumber', 5);
  } else if (targetEl === CATIGORIES[5] || targetEl === document.getElementsByTagName('img')[5] || targetEl === document.getElementsByClassName('name-of-category')[5]) {
    localStorage.setItem('page', 'animalB');
    localStorage.setItem('pageNumber', 6);
  } else if (targetEl === CATIGORIES[6] || targetEl === document.getElementsByTagName('img')[6] || targetEl === document.getElementsByClassName('name-of-category')[6]) {
    localStorage.setItem('page', 'clothes');
    localStorage.setItem('pageNumber', 7);
  } else if (targetEl === CATIGORIES[7] || targetEl === document.getElementsByTagName('img')[7] || targetEl === document.getElementsByClassName('name-of-category')[7]) {
    localStorage.setItem('page', 'emotion');
    localStorage.setItem('pageNumber', 8);
  }

  if (targetEl === LINKS[1]) {
    localStorage.setItem('page', 'actionA');
    localStorage.setItem('pageNumber', 1);
  } else if (targetEl === LINKS[2]) {
    localStorage.setItem('page', 'actionB');
    localStorage.setItem('pageNumber', 2);
  } else if (targetEl === LINKS[3]) {
    localStorage.setItem('page', 'actionC');
    localStorage.setItem('pageNumber', 3);
  } else if (targetEl === LINKS[4]) {
    localStorage.setItem('page', 'adjective');
    localStorage.setItem('pageNumber', 4);
  } else if (targetEl === LINKS[5]) {
    localStorage.setItem('page', 'animalA');
    localStorage.setItem('pageNumber', 5);
  } else if (targetEl === LINKS[6]) {
    localStorage.setItem('page', 'animalB');
    localStorage.setItem('pageNumber', 6);
  } else if (targetEl === LINKS[7]) {
    localStorage.setItem('page', 'clothes');
    localStorage.setItem('pageNumber', 7);
  } else if (targetEl === LINKS[8]) {
    localStorage.setItem('page', 'emotion');
    localStorage.setItem('pageNumber', 8);
  }
};

export default goToPageCards;
