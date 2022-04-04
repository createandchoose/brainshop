export const initialState = {
  isMenuOpen: false,
  sortBy: undefined,
  outOfStock: true,
  fastDelivery: false,
  categories: [],
  rangeValue: 1000,
  ratings: [false, false, false, false, false],
  searchValue: '',
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

    case 'CATEGORY_FILTER':
      return {
        ...state,
        categories: state.categories.includes(action.payload)
          ? state.categories.filter(item => item !== action.payload)
          : [...state.categories, action.payload],
      };

    case 'RANGE':
      return {
        ...state,
        rangeValue: Number(action.payload),
      };

    case 'SEARCH':
      return {
        ...state,
        searchValue: action.payload,
      };

    case 'SIDEBAR_TOGGLE':
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };
    default:
      return state;
  }
};
