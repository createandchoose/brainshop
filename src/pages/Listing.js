import { ProductItem, Sidebar } from 'components';
import { useProduct } from 'context/products-context';
import { BigLoader } from 'components/Loader';

export default function Listing() {
  const { products, loading } = useProduct();
  return (
    <div className="list__grid-container">
      {/* SideBar */}
      <Sidebar />

      {/* Items */}
      <main className="list__content centered-row p-2">
        {products.map(item => (
          <ProductItem key={item.id} item={item} />
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
