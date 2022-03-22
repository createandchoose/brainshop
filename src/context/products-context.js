import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';

const productContext = createContext();
const useProduct = () => useContext(productContext);

const ProductProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const contextValue = {
    categories,
    products,
    loading,
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('/api/categories');
        setCategories(res.data.categories);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

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
    <productContext.Provider value={contextValue}>
      {children}
    </productContext.Provider>
  );
};

export { ProductProvider, useProduct };
