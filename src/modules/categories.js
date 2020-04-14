class Categories {
  constructor(options) {
    this.name = options.name;
    this.urlImg = options.urlImg;
    this.id = options.id;
    this.href = 'cards.html';
    this.class = 'category';
  }
}

const categories = {
  actionA: new Categories({
    name: 'Action (set A)',
    urlImg: 'img/dance.jpg',
    id: 0,
  }),

  actionB: new Categories({
    name: 'Action (set B)',
    urlImg: 'img/swim.jpg',
    id: 1,
  }),

  actionC: new Categories({
    name: 'Action (set C)',
    urlImg: 'img/drop.jpg',
    id: 2,
  }),

  adjective: new Categories({
    name: 'Adjective',
    urlImg: 'img/friendly.jpg',
    id: 3,
  }),

  animalA: new Categories({
    name: 'Animal (set A)',
    urlImg: 'img/cat.jpg',
    id: 4,
  }),

  animalB: new Categories({
    name: 'Animal (set B)',
    urlImg: 'img/bird.jpg',
    id: 5,
  }),

  clothes: new Categories({
    name: 'Clothes',
    urlImg: 'img/blouse.jpg',
    id: 6,
  }),

  emotion: new Categories({
    name: 'Emotion',
    urlImg: 'img/smile.jpg',
    id: 7,
  }),
};

export default categories;
