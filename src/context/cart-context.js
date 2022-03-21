import React, { useReducer, createContext, useContext } from 'react';
import { displayCart, cartReducer } from 'utils/cart-utils';

const cartContext = createContext();
const useCart = () => useContext(cartContext);

const initialState = {
  cart: [],
  cartItems: 0,
  totalPrice: 0,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  let cartData = displayCart(state, state.cart);

  console.log('cart: ', state.cart);
  const ContextValues = {
    state,
    dispatch,
    cartData,
  };

  return (
    <cartContext.Provider value={ContextValues}>
      {children}
    </cartContext.Provider>
  );
};

export { CartProvider, useCart };
