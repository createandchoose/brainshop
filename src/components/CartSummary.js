import React from 'react';

export default function CartSummary() {
  return (
    <section class="cart__order-summary m-v-8">
      <main class="cart__sumary-content p-8">
        <header class="heading-4">Price Details</header>
        <hr />
        <div class="order-data">
          <p class="f-6">Price(2 items)</p>
          <p class="f-6">Rs 4999</p>
        </div>
        <div class="order-data">
          <p class="f-6">Discount</p>
          <p class="f-6">- Rs 1999</p>
        </div>
        <div class="order-data">
          <p class="f-6">Delivery Charges</p>
          <p class="f-6">Rs 499</p>
        </div>
        <hr />
        <div class="order-data">
          <p class="heading-3">Total Amount</p>
          <p class="heading-3">Rs 3499</p>
        </div>
        <hr />
        <p class="f-6">You Will Say Rs 1999 on this Order</p>
        <button class="btn btn-danger t-c-1 final-cta w-100">Buy Now</button>
      </main>
    </section>
  );
}
