import { Link, useParams } from 'react-router-dom';
import { useProduct } from 'context/products-context';
import { ProductPage } from 'components/ProductPage';

function ProductDetail() {
  const { productId } = useParams();
  const { products } = useProduct();

  function getProductDetails(products, productId) {
    return products.find(product => product._id === productId);
  }

  const specificproduct = getProductDetails(products, productId);
  console.log(specificproduct);
  return (
    <div className="product-page-wrapper center-flex">
      <ProductPage item={specificproduct} />
    </div>
  );
}

export { ProductDetail };
