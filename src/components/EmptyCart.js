import React from 'react';
import CartSvg from 'assets/emptyCart.svg';
export default function EmptyCart() {
  return (
    <section className="hero">
      <img className="hero-img" src={CartSvg} />

      <h1 className="heading-3 center-text">
        Empty Cart!! Add Something
        <span className="t-c-3 f-bold"> &nbsp;Cool</span> to your cart.
      </h1>
    </section>
  );
}
