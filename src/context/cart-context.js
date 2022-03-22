import React, { useReducer, createContext, useContext } from 'react';
import { cartReducer } from 'utils/cart-utils';

const cartContext = createContext();
const useCart = () => useContext(cartContext);

const initialState = {
  cart: [],
  cartItems: 0,
  totalPrice: 0,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  console.log(state.cart, 'cart');
  // let cartData = displayCart(state, state.cart);

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
