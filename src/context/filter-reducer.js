export const initialState = {
  sortBy: undefined,
  outOfStock: true,
  fastDelivery: false,
  rangeValue: 1000,
  ratings: [false, false, false, false, false],
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case 'CLEAR':
      return initialState;

    case 'SORT_BY':
      return {
        ...state,
        sortBy: action.payload,
      };

    case 'OUT_OF_STOCK':
      return {
        ...state,
        outOfStock: action.payload,
      };

    case 'FAST_DELIVERY':
      return {
        ...state,
        fastDelivery: action.payload,
      };

    case 'RANGE':
      return {
        ...state,
        rangeValue: Number(action.payload),
      };

    case 'RATINGS':
      const values = action.payload - 1;
      const modifiedArray = [...state.ratings];

      modifiedArray[values] = !modifiedArray[values];

      return { ...state, ratings: modifiedArray };

    default:
      return state;
  }
};
