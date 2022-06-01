import { Link, useParams } from 'react-router-dom';
import { useProduct } from 'context/products-context';
import { ProductPage } from 'components/ProductPage';
import { EmptyCart } from 'components';

function ProductDetail() {
  const { productId } = useParams();
  const { products } = useProduct();

  function getProductDetails(products, productId) {
    return products.find(product => product._id === productId);
  }

  const specificproduct = getProductDetails(products, productId);
  return (
    <div className="product-page-wrapper center-flex">
      {specificproduct ? (
        <ProductPage item={specificproduct} />
      ) : (
        <EmptyCart>Product</EmptyCart>
      )}
    </div>
  );
}

export { ProductDetail };
