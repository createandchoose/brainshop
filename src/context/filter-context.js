import React, { useReducer, createContext, useContext } from 'react';
import { filterReducer, initialState } from 'context/filter-reducer';
import {
  sortItems,
  includeOutOfStock,
  includeFastDelivery,
  filterCategories,
  sliderFilter,
  searchedRecipe,
} from 'utils/filter-utils';
import { useProduct } from 'context/products-context';

const filterContext = createContext();

const useFilter = () => useContext(filterContext);

const FilterProvider = ({ children }) => {
  const { products: data } = useProduct();
  const [state, dispatch] = useReducer(filterReducer, initialState);
  const composeReducer = (accum, func) => {
    accum = func(state, accum);
    return accum;
  };

  const compose = (...userFunctions) => {
    return data => {
      return userFunctions.reduce(composeReducer, data);
    };
  };

  const callFuncInOrder = compose(
    sortItems,
    includeOutOfStock,
    includeFastDelivery,
    filterCategories,
    sliderFilter,
    searchedRecipe
  );

  const filterData = callFuncInOrder(data);

  const contextValue = {
    state,
    dispatch,
    filterData,
  };

  return (
    <filterContext.Provider value={contextValue}>
      {children}
    </filterContext.Provider>
  );
};

export { FilterProvider, useFilter };
