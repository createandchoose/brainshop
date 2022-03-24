const sortItems = (state, data) => {
  switch (state.sortBy) {
    case 'a':
      return [...data].sort((a, b) => a.price - b.price);

    case 'b':
      return [...data].sort((a, b) => b.price - a.price);

    case 'c':
      return [...data].sort((a, b) => a.rating - b.rating);
    case 'd':
      return [...data].sort((a, b) => b.rating - a.rating);
    case '4':
      return [...data].filter(item => item.rating >= 4);
    case '3':
      return [...data].filter(item => item.rating >= 3);
    case '2':
      return [...data].filter(item => item.rating >= 2);
    case '1':
      return [...data].filter(item => item.rating >= 1);
    default:
      return data;
  }
};

const includeOutOfStock = (state, data) => {
  if (!state.outOfStock) {
    return [...data].filter(item => item.inStock);
  }
  return data;
};

const icnludeFastDelivery = (state, data) => {
  return state.fastDelivery
    ? [...data].filter(item => item.fastDelivery)
    : data;
};

const filterCategories = (state, data) => {
  return state.categories.length === 0
    ? data
    : [...data].filter(item => state.categories.includes(item.categoryName));
};

const sliderFilter = (state, data) => {
  return [...data].filter(item => item.price <= state.rangeValue);
};

const filterTitles = [
  {
    value: 'a',
    filterTitleName: 'Price - Low to High',
  },
  {
    value: 'b',
    filterTitleName: 'Price - High to Low',
  },
  {
    value: 'c',
    filterTitleName: 'Ratings - Low to High',
  },
  {
    value: 'd',
    filterTitleName: 'Ratings - High to Low',
  },
];

function checkObj(dispatch) {
  return [
    {
      checkboxTitle: 'Include Out Of Stock',
      dispatchFunction: e =>
        dispatch({ type: 'OUT_OF_STOCK', payload: e.target.checked }),
      name: 'outOfStock',
      type: 'single',
    },
    {
      checkboxTitle: 'Fast Delivery Only',
      dispatchFunction: e =>
        dispatch({ type: 'FAST_DELIVERY', payload: e.target.checked }),
      name: 'fastDelivery',
      type: 'single',
    },
    {
      checkboxTitle: 'Books',
      dispatchFunction: () =>
        dispatch({ type: 'CATEGORY_FILTER', payload: 'book' }),
      name: 'book',
    },
    {
      checkboxTitle: 'T-Shirts',
      dispatchFunction: () =>
        dispatch({ type: 'CATEGORY_FILTER', payload: 't-shirt' }),
      name: 't-shirt',
    },

    {
      checkboxTitle: 'Hoodies',
      dispatchFunction: () =>
        dispatch({ type: 'CATEGORY_FILTER', payload: 'hoodie' }),
      name: 'hoodie',
    },
    {
      checkboxTitle: 'Stickers',
      dispatchFunction: () =>
        dispatch({ type: 'CATEGORY_FILTER', payload: 'sticker' }),
      name: 'sticker',
    },
    {
      checkboxTitle: 'Art',
      dispatchFunction: () =>
        dispatch({ type: 'CATEGORY_FILTER', payload: 'art' }),
      name: 'art',
    },
  ];
}

export {
  sortItems,
  includeOutOfStock,
  icnludeFastDelivery,
  sliderFilter,
  filterTitles,
  filterCategories,
  checkObj,
};
