import React from 'react';
import { useCart } from '../context/cart-context';

export default function ProductItem({ item }) {
  const { dispatch } = useCart();
  const {
    id,
    image,
    productName,
    name,
    price,
    inStock,
    fastDelivery,
    rating,
    seller,
    newRelease,
  } = item;

  return (
    <article className="card-container m-4 ecom__card-container">
      <figure className="card-image-container">
        <img
          loading="lazy"
          src={image}
          width="100%"
          height="auto"
          alt={productName}
          className="card-image"
        />
      </figure>
      <main className="card-body l-h-1">
        <h3 className="f-7 l-h-4">{name}</h3>
        <p className="l-h-3">
          <span className="price f-7">Rs. {parseInt(price)}</span>
          <span className="line-through m-h-1">
            Rs. {parseInt(price) + 200}
          </span>
          <span className="t-c-3 f-bold m-h-1">(30% OFF)</span>
        </p>
        {inStock && <p className="f-7 t-c-4"> In Stock </p>}
        {!inStock && (
          <div className="card-text-overlay position z-index-md">
            <span className="f-8 t-c-1">Out of stock</span>
          </div>
        )}

        {fastDelivery ? (
          <p className="f-7 t-c-2 f-bold"> Fast Delivery </p>
        ) : (
          <p className="f-7 t-c-2 f-bold"> 3 days minimum </p>
        )}

        <div className="read-only-wrapper top-center flex">
          <span className="f-8 p-h-2">{rating}</span>
          <div className="read-only-rating p-4"></div>
          <span className="f-8 p-h-2">Rating</span>
          <span className="f-bold t-c-3">Sold By : ({seller})</span>
        </div>
      </main>
      <div className="call-to-action">
        <button className="btn btn-danger m-h-3 t-c-1">Buy Now</button>
        <button
          onClick={() => dispatch({ type: 'ADD_TO_CART', payload: item })}
          className="btn outline-danger m-h-3 t-c-2"
        >
          Add to cart
        </button>
      </div>
      {newRelease && (
        <span className="card-badge special-badge f-5 p-3 t-c-1">
          New Release
        </span>
      )}
      <span
        className={`card-badge card-dismiss-icon ${
          newRelease && 'card-heart-icon'
        }`}
      >
        <i className="far fa-heart f-8 p-4"></i>
      </span>
    </article>
  );
}
