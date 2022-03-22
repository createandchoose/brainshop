import { v4 as uuid } from 'uuid';

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: 'T-Shirt',
    imageLink:
      'https://ih1.redbubble.net/image.1341023847.2843/ssrco,classic_tee,mens,fafafa:ca443f4786,front_alt,square_product,600x600.u2.jpg',
    description:
      'a short-sleeved casual top, generally made of cotton, having the shape of a T when spread out flat.',
    altText: 't-shirt',
  },
  {
    _id: uuid(),
    categoryName: 'Hoodie',
    imageLink:
      'https://ih1.redbubble.net/image.440168075.0092/ssrco,mhoodie,mens,fafafa:ca443f4786,front,square_product,x600-bg,f8f8f8.1u4.jpg',
    description: 'a hooded sweatshirt, jacket, or other top.',
    altText: 'hoodie',
  },
  {
    _id: uuid(),
    categoryName: 'Sticker',
    imageLink:
      'https://ih1.redbubble.net/image.520904037.1781/st,small,507x507-pad,600x600,f8f8f8.u1.jpg',
    description:
      'an adhesive label or notice, generally printed or illustrated.',
    altText: 'sticker',
  },

  {
    _id: uuid(),
    categoryName: 'Books',
    imageLink:
      'https://ih1.redbubble.net/image.493083052.7417/sn,x1000-pad,1000x1000,f8f8f8.u1.jpg',
    description:
      'a written or printed work consisting of pages glued or sewn together along one side and bound in covers.',
    altText: 'books',
  },
  {
    _id: uuid(),
    categoryName: 'Art',
    imageLink:
      'https://ih1.redbubble.net/image.892503035.9604/st,small,507x507-pad,600x600,f8f8f8.jpg',
    description: 'a way of expression.',

    altText: 'Art',
  },
];
