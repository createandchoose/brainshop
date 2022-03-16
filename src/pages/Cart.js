import React from 'react';
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';
import EmptyCart from '../components/EmptyCart';
import { useCart } from '../context/cart-context';

const cartReducer = (accum, item) => {
  const existingItem = accum.find(i => i.id === item.id); // returns null the first time
  if (!existingItem) {
    return [...accum, { ...item, count: 1 }];
  } else {
    existingItem.count++;
  }

  return accum;
};

// cart returns an array of object

export default function Cart() {
  const { state } = useCart();
  const cart = state.cart.reduce(cartReducer, []);
  return (
    <>
      {state.cartItems === 0 ? (
        <EmptyCart />
      ) : (
        <div class="cart__grid-container">
          <div class="cart__cards m-v-8">
            <p class="heading-3 center-text">
              My Cart <span class="f-8">({state.cartItems})</span>
            </p>

            {cart.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <CartSummary />
        </div>
      )}
    </>
  );
}

/*
 <>
      {state.CartItems < 0 ? (
        <EmptyCart />
      ) : (
        <div class="cart__grid-container">
          <div class="cart__cards m-v-8">
            <p class="heading-3 center-text">
              My Cart <span class="f-8">({state.cartItems})</span>
            </p>

            {state.cart.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <CartSummary />
        </div>
      )}
    </>

*/
