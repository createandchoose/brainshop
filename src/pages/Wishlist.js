import { useCart } from 'context/cart-context';
import { EmptyCart } from 'components';
import { ProductItem } from 'components';
import { useAuth } from 'context/auth-context';
import { useEffect } from 'react';
import axios from 'axios';

import { removeFromWishlist } from 'utils/wishlist-utils';

export default function Wishlist() {
  const { state, dispatch } = useCart();
  const { auth } = useAuth();

  useEffect(() => {
    if (!auth.isAuth) return;
    (async () => {
      try {
        const res = await axios.get('/api/user/wishlist', {
          headers: {
            authorization: localStorage.getItem('token'),
          },
        });
        console.log(res.data.wishlist, 'Get wishlist');
        dispatch({ type: 'SET_WISHLIST', payload: res.data.wishlist });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
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
                    removeFromWishlist(item._id, dispatch, auth.token)
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
