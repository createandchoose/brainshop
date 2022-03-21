import React, { useState, useEffect } from 'react';
import { ProductItem, Sidebar } from 'components';
import { useProduct } from 'context/products-context';
import { BigLoader } from 'components/Loader';
import axios from 'axios';

export default function Listing() {
  const [loading, setLoading] = useState(true);
  const { setProducts, products } = useProduct();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('/api/products');
        setProducts(res.data.products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

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
            <p className="heading-3">Loading your products! Hang in with us</p>
          </div>
        )}
      </main>
    </div>
  );
}
