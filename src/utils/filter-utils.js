const sortItems = (state, data) => {
  switch (state.sortBy) {
    case 'a':
      return [...data].sort((a, b) => a.price - b.price);

    case 'b':
      return [...data].sort((a, b) => b.price - a.price);

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

const sliderFilter = (state, data) => {
  return [...data].filter(item => item.price <= state.rangeValue);
};

const ratingsFilter = (state, data) => {
  const checkrating = state.ratings.reduce((acc, curr) => acc || curr, false);
  if (checkrating) {
    let res = [...data].filter(item => {
      return state.ratings[item.ratings - 1];
    });
    console.log(res);
    return res;
  }
  return data;
};

export {
  sortItems,
  includeOutOfStock,
  icnludeFastDelivery,
  sliderFilter,
  ratingsFilter,
};
