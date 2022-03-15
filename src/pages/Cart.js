import React from 'react';
import { useProduct } from '../context/products-context';

export default function Cart() {
  const { output } = useProduct();
  console.log(output, 'in cart');
  return (
    <div>
      <h2>Cart</h2>
    </div>
  );
}
