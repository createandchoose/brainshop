import { useCart } from 'context/cart-context';
import { EmptyCart } from 'components';

export default function Wishlist() {
  const { state } = useCart();
  return (
    <>
      {state.wishlist.length === 0 ? (
        <EmptyCart>wishlist</EmptyCart>
      ) : (
        <div></div>
      )}
    </>
  );
}
