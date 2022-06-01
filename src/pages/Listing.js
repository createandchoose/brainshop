import { ProductItem, Sidebar } from 'components';
import { useProduct } from 'context/products-context';
import { BigLoader } from 'components/Loader';
import { useCart } from 'context/cart-context';
import { useFilter } from 'context/filter-context';
import { addToWishlist, removeFromWishlist } from 'utils/wishlist-utils';
import { useAuth } from 'context/auth-context';
export default function Listing() {
  const { auth } = useAuth();
  const { products, loading } = useProduct();
  const { state, dispatch } = useCart();
  const { filterData } = useFilter();

  return (
    <div className="list__grid-container">
      {/* SideBar */}
      <Sidebar />

      {/* Items */}
      <main className="list__content centered-row p-2">
        {filterData.map(item => (
          <ProductItem key={item._id} item={item}>
            {state.wishlist.find(i => i._id === item._id) ? (
              <i
                onClick={() =>
                  removeFromWishlist(item._id, dispatch, auth.token)
                }
                className="far fa-heart f-8 p-4 fas"
              ></i>
            ) : (
              <i
                onClick={() => addToWishlist(item, dispatch, auth.token)}
                className="far fa-heart f-8 p-4"
              ></i>
            )}
          </ProductItem>
        ))}
        {loading && (
          <div className="position-loader">
            <BigLoader />
          </div>
        )}
      </main>
    </div>
  );
}
