import React from 'react';

export default function CartItem() {
  return (
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
          <button class="btn btn-danger t-c-1">Move to wishlist</button>
          <button class="btn outline-danger t-c-2">Remove from cart</button>
        </div>
      </div>
    </section>
  );
}
