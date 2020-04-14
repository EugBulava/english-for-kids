
import categories from './modules/categories';

function CreateCategory(category) {
  const CREATE_CATEGORY_A = document.createElement('a');
  CREATE_CATEGORY_A.className = category.class;
  CREATE_CATEGORY_A.href = category.href;

  const CREATE_CATEGORY_IMAGE = document.createElement('img');
  CREATE_CATEGORY_IMAGE.src = category.urlImg;

  const CREATE_CATEGORY_NAME = document.createElement('span');
  CREATE_CATEGORY_NAME.innerText = category.name;
  CREATE_CATEGORY_NAME.className = 'name-of-category';

  document.querySelector('.categories').append(CREATE_CATEGORY_A);
  document.getElementsByClassName('category')[category.id].append(CREATE_CATEGORY_NAME);
  document.getElementsByClassName('category')[category.id].prepend(CREATE_CATEGORY_IMAGE);
}

CreateCategory(categories.actionA);
CreateCategory(categories.actionB);
CreateCategory(categories.actionC);
CreateCategory(categories.adjective);
CreateCategory(categories.animalA);
CreateCategory(categories.animalB);
CreateCategory(categories.clothes);
CreateCategory(categories.emotion);
