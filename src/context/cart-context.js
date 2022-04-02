import React, { useReducer, createContext, useContext } from 'react';
import { cartReducer } from 'utils/cart-utils';
const cartContext = createContext();
const useCart = () => useContext(cartContext);

const initialState = {
  cart: [],
  wishlist: [],
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const ContextValues = {
    state,
    dispatch,
  };

  return (
    <cartContext.Provider value={ContextValues}>
      {children}
    </cartContext.Provider>
  );
};

export { CartProvider, useCart };
