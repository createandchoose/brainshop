import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { makeServer } from './server';
import { BrowserRouter } from 'react-router-dom';
import { ProductProvider } from 'context/products-context';
import { CartProvider } from 'context/cart-context';
import { FilterProvider } from 'context/filter-context';
import { AuthProvider } from 'context/auth-context';
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <CartProvider>
          <FilterProvider>
            <AuthProvider>
              <App />
            </AuthProvider>
          </FilterProvider>
        </CartProvider>
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
