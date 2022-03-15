import React from 'react';

export default function Cart() {
  return (
    <div class="cart__grid-container">
      <div class="cart__cards m-v-8">
        <p class="heading-3 center-text">
          My Cart <span class="f-8">(2)</span>
        </p>

        <section class="cart__card-container box-shadow-right">
          <div class="cart__img-div">
            <img
              src="https://ih1.redbubble.net/image.1607396529.2307/st,small,507x507-pad,600x600,f8f8f8.jpg"
              alt="jacket-img"
              class="cart-img"
            />
          </div>
          <div class="cart__text-div p-6">
            <h2>Men Premium Jacket</h2>
            <p class="l-h-3">
              <span class="price f-7">Rs. 2000</span>
              <span class="line-through p-h-2 f-6">Rs. 7095</span>
              <span class="t-c-3 f-bold">(30% OFF)</span>
            </p>
            <p className="f-8 f-bold">Quantity: </p>
            <div className="CartItem-controls">
              <button className="CartItem-removeOne">&ndash;</button>
              <span className="CartItem-count">1</span>
              <button className="CartItem-addOne">+</button>
            </div>
            <div class="call-to-action cart__buttons-div">
              <button class="btn btn-danger t-c-1">Buy Now</button>
              <button class="btn outline-danger t-c-2">Move to wishlist</button>
            </div>
          </div>
        </section>
      </div>

      {/* <!-- item-summart --> */}
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
    </div>
  );
}
