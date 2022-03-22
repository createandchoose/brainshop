import { useCart } from 'context/cart-context';
import { EmptyCart } from 'components';
import { WishListItem } from 'components/WishListItem';

export default function Wishlist() {
  const { state } = useCart();
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
              <WishListItem key={item.id} item={item} />
            ))}
          </div>
        </>
      )}
    </>
  );
}
