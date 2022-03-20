import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';

const productContext = createContext();
const useProduct = () => useContext(productContext);

const ProductProvider = ({ children }) => {
  const [output, setOutput] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('/api/products');
        console.log(res.data);
        setOutput(res.data.products);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <productContext.Provider value={{ output }}>
      {children}
    </productContext.Provider>
  );
};

export { ProductProvider, useProduct };
