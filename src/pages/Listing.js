import React, { useState } from 'react';
import ProductItem from 'components/ProductItem';
import Sidebar from 'components/Sidebar';
import { useProduct } from 'context/products-context';

export default function Listing() {
  const { products, loading } = useProduct();

  return (
    <>
      {loading && <div className="loader loader-center" id="loader"></div>}

      <div className="list__grid-container">
        {/* SideBar */}
        <Sidebar />

        {/* Items */}
        <main className="list__content centered-row p-2">
          {products.map(item => (
            <ProductItem key={item.id} item={item} />
          ))}
        </main>
      </div>
    </>
  );
}
