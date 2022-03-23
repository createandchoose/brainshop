import React from 'react';
import CartSvg from 'assets/emptyCart.svg';
function EmptyCart({ children }) {
  return (
    <section className="hero">
      <img className="hero-img" src={CartSvg} />

      <h1 className="heading-3 center-text">
        Empty {children}!! Add Something
        <span className="t-c-3 f-bold"> &nbsp;Cool</span> to your {children}.
      </h1>
    </section>
  );
}

export { EmptyCart };
