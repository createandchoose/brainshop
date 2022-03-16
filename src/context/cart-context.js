import React, { useReducer, createContext, useContext } from 'react';

const cartContext = createContext();
const useCart = () => useContext(cartContext);

const cartReducer = (state, action) => {
  console.log(state.cart);
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
        cartItems: state.cartItems + 1,
        totalPrice: state.totalPrice + action.payload.price,
      };
  }
};

const initialState = {
  cart: [],
  cartItems: 0,
  totalPrice: 0,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  console.log('cart: ', state.cart);
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
