import { v4 as uuid } from 'uuid';

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: 't-shirt',
    description:
      'a short-sleeved casual top, generally made of cotton, having the shape of a T when spread out flat.',
  },
  {
    _id: uuid(),
    categoryName: 'hoodie',
    description: 'a hooded sweatshirt, jacket, or other top.',
  },
  {
    _id: uuid(),
    categoryName: 'sticker',
    description:
      'an adhesive label or notice, generally printed or illustrated.',
  },

  {
    _id: uuid(),
    categoryName: 'book',
    description:
      'a written or printed work consisting of pages glued or sewn together along one side and bound in covers.',
  },
];
