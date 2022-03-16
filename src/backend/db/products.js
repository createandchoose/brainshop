import { v4 as uuid } from 'uuid';
import { sample } from 'lodash';
/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: 'Medical Human Anatomy Illustration Notebook',
    seller: 'DictionaryArt',
    price: _.random(500, 1000),
    rating: _.sample([1, 2, 3, 4, 5]),
    inStock: Math.random() < 0.7,
    fastDelivery: Math.random() < 0.7,
    image:
      'https://ih1.redbubble.net/image.2841078988.8218/sn,x600-pad,600x600,f8f8f8.jpg',
    newRelease: Math.random() < 0.3,
    productName: 'Anatomy Illustration Notebook',
    categoryName: 'book',
  },

  {
    _id: uuid(),
    name: 'brain space Lightweight Hoodie',
    seller: 'efficientwear',
    price: _.random(500, 1000),
    rating: _.sample([1, 2, 3, 4, 5]),
    inStock: Math.random() < 0.7,
    fastDelivery: Math.random() < 0.7,
    image:
      'https://ih1.redbubble.net/image.365829389.2597/ssrco,lightweight_hoodie,mens,101010:01c5ca27c6,front,square_product,x600-bg,f8f8f8.2u3.jpg',
    newRelease: Math.random() < 0.3,
    productName: 'Lightweight Hoodie',
    categoryName: 'hoodie',
  },

  {
    _id: uuid(),
    name: 'brain einstien Lightweight Hoodie',
    seller: 'efficientwear',
    price: _.random(500, 1000),
    rating: _.sample([1, 2, 3, 4, 5]),
    inStock: Math.random() < 0.7,
    fastDelivery: Math.random() < 0.7,
    image:
      'https://ih1.redbubble.net/image.1191847522.2759/ssrco,mhoodiez,mens,101010:01c5ca27c6,front,square_product,600x600-bg,f8f8f8.jpg',
    newRelease: Math.random() < 0.3,
    productName: 'einstien Hoodie',
    categoryName: 'hoodie',
  },

  {
    _id: uuid(),
    name: 'brain anatomy diagram sticker',
    seller: 'DictionaryArt',
    price: _.random(500, 1000),
    rating: _.sample([1, 2, 3, 4, 5]),
    inStock: Math.random() < 0.7,
    fastDelivery: Math.random() < 0.7,
    image:
      'https://ih1.redbubble.net/image.1637122642.1448/st,small,507x507-pad,600x600,f8f8f8.jpg',
    newRelease: Math.random() < 0.3,
    productName: 'brain anatomy diagram Sticker',

    categoryName: 'sticker',
  },

  {
    _id: uuid(),
    name: 'brain with flowers on top sticker',
    seller: 'DictionaryArt',
    price: _.random(500, 1000),
    rating: _.sample([1, 2, 3, 4, 5]),
    inStock: Math.random() < 0.7,
    fastDelivery: Math.random() < 0.7,
    image:
      'https://ih1.redbubble.net/image.538599443.6522/st,small,507x507-pad,600x600,f8f8f8.u6.jpg',
    newRelease: Math.random() < 0.3,
    productName: 'brain with flowers sticker',

    categoryName: 'sticker',
  },

  {
    _id: uuid(),
    name: 'half brain + flower on newspaper',
    seller: 'DictionaryArt',
    price: _.random(500, 1000),
    rating: _.sample([1, 2, 3, 4, 5]),
    inStock: Math.random() < 0.7,
    fastDelivery: Math.random() < 0.7,
    image:
      'https://ih1.redbubble.net/image.817080846.4595/st,small,507x507-pad,600x600,f8f8f8.u1.jpg',
    newRelease: Math.random() < 0.3,
    productName: 'half brain + flower on newspaper',

    categoryName: 'sticker',
  },

  {
    _id: uuid(),
    name: 'Brain sticker on maroon T-Shirt',
    seller: 'WALCAME',
    price: _.random(500, 1000),
    rating: _.sample([1, 2, 3, 4, 5]),
    inStock: Math.random() < 0.7,
    fastDelivery: Math.random() < 0.7,
    image:
      'https://ih1.redbubble.net/image.408348801.3357/ssrco,slim_fit_t_shirt,womens,5a1f32:a6197194c6,front,square_product,600x600.u4.jpg',
    newRelease: Math.random() < 0.3,
    productName: 'Brain T-Shirt',

    categoryName: 't-shirt',
  },

  {
    _id: uuid(),
    name: 'Blue butterflies Mental health  Sticker',
    seller: 'DictionaryArt',
    price: _.random(500, 1000),
    rating: _.sample([1, 2, 3, 4, 5]),
    inStock: Math.random() < 0.7,
    fastDelivery: Math.random() < 0.7,
    image:
      'https://ih1.redbubble.net/image.1607396529.2307/st,small,507x507-pad,600x600,f8f8f8.jpg',
    newRelease: Math.random() < 0.3,
    productName: 'Blue butterflies Mental health  Sticker',
    categoryName: 'sticker',
  },
];
