import React from 'react';

import { CartItem, CartSummary, EmptyCart } from 'components';

import { useCart } from 'context/cart-context';

export default function Cart() {
  const { cartData, state } = useCart();
  return (
    <>
      {state.cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <div class="cart__grid-container">
          <div class="cart__cards m-v-8">
            <p class="heading-3 center-text">
              My Cart <span class="f-8">({cartData.length})</span>
            </p>

            {cartData.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <CartSummary />
        </div>
      )}
    </>
  );
}
