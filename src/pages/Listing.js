import React from 'react';
import CartItem from '../components/CartItem';
import Sidebar from '../components/Sidebar';
import { useProduct } from '../context/products-context';

export default function Listing() {
  const { output } = useProduct();
  return (
    <div className="list__grid-container">
      {/* SideBar */}
      <Sidebar />

      {/* Items */}
      <main class="list__content centered-row p-2">
        {output.map(item => (
          <CartItem key={item.id} {...item} />
        ))}
      </main>
    </div>
  );
}
