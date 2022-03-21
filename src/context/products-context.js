import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';

const productContext = createContext();
const useProduct = () => useContext(productContext);

const ProductProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('/api/categories');
        console.log(res.status);
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
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <productContext.Provider value={{ products, categories, loading }}>
      {children}
    </productContext.Provider>
  );
};

export { ProductProvider, useProduct };
