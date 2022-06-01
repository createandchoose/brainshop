import { useCart } from 'context/cart-context';
import { useNavigate } from 'react-router-dom';
import { addToWishlist } from 'utils/wishlist-utils';
import { useAuth } from 'context/auth-context';

function ProductPage({ item }) {
  const { auth } = useAuth();
  let navigate = useNavigate();
  const { state, dispatch } = useCart();
  const {
    _id,
    image,
    productName,
    name,
    price,
    inStock,
    fastDelivery,
    rating,
    seller,
  } = item;

  return (
    <main className="product-card box-shadow-light ">
      <div className="product-card__image-box center-flex">
        <img className="product-card__image" src={image} alt={productName} />
      </div>
      <div className="product-card__details center-flex p-6 ">
        <p className="l-h-4 t-c-1 product-card__name margin-reset ">
          {name}{' '}
          <p className="product-card__seller f-bold margin-reset">{seller}</p>
        </p>

        <div class="interactive-wrapper m-r-auto flex p-5">
          {[1, 2, 3, 4, 5].map(item => (
            <i
              class={`rating__star product-card__rating ${
                item <= rating ? 'fas' : 'far'
              } fa-star`}
            ></i>
          ))}
          <span className="f-6 t-c-2">{`(${
            Math.floor(Math.random() * 30) + 5
          } reviews)`}</span>
        </div>

        <div className="product-card__price m-r-auto p-4 w-100">
          <span className="price heading-4 t-c-1">Rs. {parseInt(price)}</span>
          <span className="line-through m-h-1 f-5">
            Rs. {parseInt(price) + 200}
          </span>
          <span className="t-c-2 f-6 f-bold m-h-1">(30% OFF)</span>
        </div>

        <div className="product-card__information w-100">
          {fastDelivery && (
            <p className="f-6 margin-reset p-3">
              {' '}
              <span className="p-h-2">
                <i class="fa fa-truck"></i>
              </span>{' '}
              Fast delivery available
            </p>
          )}
          <p className="f-6 margin-reset p-3">
            <span className="p-h-2">
              <i class="fa fa-check"></i>
            </span>
            Price displayed is inclusive of GST
          </p>
          <p className="f-6 margin-reset p-3">
            <span className="p-h-2">
              {inStock ? (
                <i class="fas fa-check-double"></i>
              ) : (
                <i class="fas fa-times-circle"></i>
              )}
            </span>
            Currently {inStock ? 'in' : 'out of'} stock
          </p>
        </div>

        <div className="product-card__cta m-v-4 w-100">
          {state.cart.find(item => item._id === _id) ? (
            <button
              onClick={() => navigate('/cart')}
              className="btn btn-primary m-h-3 t-c-1"
            >
              Go to cart
            </button>
          ) : inStock ? (
            <button
              onClick={() =>
                dispatch({
                  type: 'ADD_TO_CART',
                  payload: item,
                })
              }
              className="btn btn-primary m-h-3 t-c-1"
            >
              Add to Cart
            </button>
          ) : (
            <button disabled={true} className="btn btn-primary m-h-3 t-c-1">
              Out of stock
            </button>
          )}
          {state.wishlist.find(item => item._id === _id) ? (
            <button
              onClick={() => navigate('/wishlist')}
              className="btn btn-primary m-h-3 t-c-1"
            >
              Go to wishlist
            </button>
          ) : (
            <button
              onClick={() => addToWishlist(item, dispatch, auth.token)}
              className="btn btn-primary m-h-3 t-c-1"
            >
              Move to wishlist
            </button>
          )}
        </div>
      </div>
    </main>
  );
}

export { ProductPage };
