import React from 'react';

import { CartItem, EmptyCart, CartSummary } from 'components';

import { useCart } from 'context/cart-context';

export default function Cart() {
  const { state } = useCart();
  return (
    <>
      {state.cart.length === 0 ? (
        <EmptyCart>cart</EmptyCart>
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
  );
}
