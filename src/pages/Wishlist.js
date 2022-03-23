import { useCart } from 'context/cart-context';
import { EmptyCart } from 'components';
import { ProductItem } from 'components';

export default function Wishlist() {
  const { state, dispatch } = useCart();
  return (
    <>
      {state.wishlist.length === 0 ? (
        <EmptyCart>wishlist</EmptyCart>
      ) : (
        <>
          <p class="heading-3 center-text">
            My Wishlist <span class="f-8">({state.wishlist.length})</span>
          </p>
          <div className="wishlist_container">
            {state.wishlist.map(item => (
              <ProductItem key={item.id} item={item}>
                <i
                  onClick={() =>
                    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: item })
                  }
                  className="fas fa-times f-8 p-4"
                ></i>
              </ProductItem>
            ))}
          </div>
        </>
      )}
    </>
  );
}
