import React from 'react';

import { CartItem, EmptyCart, CartSummary } from 'components';

import { useCart } from 'context/cart-context';
import { Helmet } from 'react-helmet';

export default function Cart() {
  const { state } = useCart();
  return (
    <>
      <Helmet>
        <title>Cart</title>
      </Helmet>
      {state.cart.length === 0 ? (
        <EmptyCart>cart</EmptyCart>
      ) : (
        <div class="cart__grid-container">
          <div class="cart__cards m-v-8">
            <p class="heading-3 center-text">
              My Cart <span class="f-8">({state.cart.length})</span>
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
