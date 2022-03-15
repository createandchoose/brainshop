import React from 'react';
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';

export default function Cart() {
  return (
    <div class="cart__grid-container">
      <div class="cart__cards m-v-8">
        <p class="heading-3 center-text">
          My Cart <span class="f-8">(2)</span>
        </p>

        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>

      {/* <!-- item-summart --> */}
      <CartSummary />
    </div>
  );
}
