import React from 'react';
import { useCart } from 'context/cart-context';

function CartItem({ item }) {
  const { image, productName, name, price, seller, count } = item;
  const { dispatch } = useCart();
  return (
    <section class="cart__card-container box-shadow-right">
      <div class="cart__img-div">
        <img src={image} alt={productName} class="cart-img" />
      </div>
      <div class="cart__text-div p-6">
        <h2>{name}</h2>
        <p className="l-h-3">
          <span className="price f-7">Rs. {parseInt(price)}</span>
          <span className="line-through m-h-1">
            Rs. {parseInt(price) + 200}
          </span>
          <span className="t-c-3 f-bold m-h-1">(30% OFF)</span>
          <p className="f-bold t-c-3">Sold By : ({seller})</p>
        </p>
        <p className="f-8 f-bold">Quantity: </p>
        <div className="CartItem-controls">
          <button
            onClick={() => dispatch({ type: 'DECREASE_COUNT', payload: item })}
            className="CartItem-removeOne"
            disabled={count > 1 ? false : true}
          >
            &ndash;
          </button>
          <span className="CartItem-count">{count}</span>
          <button
            onClick={() =>
              dispatch({
                type: 'INCREASE_ITEM_COUNT',
                payload: item,
              })
            }
            className="CartItem-addOne"
          >
            +
          </button>
        </div>
        <div class="call-to-action cart__buttons-div">
          <button class="btn btn-danger t-c-1">Move to wishlist</button>
          <button
            onClick={() =>
              dispatch({ type: 'REMOVE_FROM_CART', payload: item })
            }
            class="btn outline-danger t-c-2"
          >
            Remove from cart
          </button>
        </div>
      </div>
    </section>
  );
}

export { CartItem };
