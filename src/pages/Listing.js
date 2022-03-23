import { ProductItem, Sidebar } from 'components';
import { useProduct } from 'context/products-context';
import { BigLoader } from 'components/Loader';
import { useCart } from 'context/cart-context';
import { useFilter } from 'context/filter-context';
export default function Listing() {
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
          <ProductItem key={item.id} item={item}>
            {state.wishlist.find(i => i.id === item.id) ? (
              <i
                onClick={() =>
                  dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: item })
                }
                className="far fa-heart f-8 p-4 fas"
              ></i>
            ) : (
              <i
                onClick={() =>
                  dispatch({ type: 'ADD_TO_WISHLIST', payload: item })
                }
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
