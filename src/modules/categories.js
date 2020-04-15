class Categories {
  constructor(options) {
    this.title = options.title;
    this.urlImg = options.urlImg;
    this.id = options.id;
    this.name = options.name;
    this.href = 'cards.html';
    this.class = 'category';
  }
}

const categories = {
  actionA: new Categories({
    name: 'actionA',
    title: 'Action (set A)',
    urlImg: 'img/dance.jpg',
    id: 0,
  }),

  actionB: new Categories({
    name: 'actionB',
    title: 'Action (set B)',
    urlImg: 'img/swim.jpg',
    id: 1,
  }),

  actionC: new Categories({
    name: 'actionC',
    title: 'Action (set C)',
    urlImg: 'img/drop.jpg',
    id: 2,
  }),

  adjective: new Categories({
    name: 'adjective',
    title: 'Adjective',
    urlImg: 'img/friendly.jpg',
    id: 3,
  }),

  animalA: new Categories({
    name: 'animalA',
    title: 'Animal (set A)',
    urlImg: 'img/cat.jpg',
    id: 4,
  }),

  animalB: new Categories({
    name: 'animalB',
    title: 'Animal (set B)',
    urlImg: 'img/bird.jpg',
    id: 5,
  }),

  clothes: new Categories({
    name: 'clothes',
    title: 'Clothes',
    urlImg: 'img/blouse.jpg',
    id: 6,
  }),

  emotion: new Categories({
    name: 'emotion',
    title: 'Emotion',
    urlImg: 'img/smile.jpg',
    id: 7,
  }),
};

export default categories;
