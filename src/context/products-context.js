import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';

const productContext = createContext();
const useProduct = () => useContext(productContext);

const ProductProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

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

  return (
    <productContext.Provider value={{ products, categories, setProducts }}>
      {children}
    </productContext.Provider>
  );
};

export { ProductProvider, useProduct };
