import React, { useState, useEffect } from 'react';
import axios from 'axios';

const productContext = React.createContext();
const useProduct = () => React.useContext(productContext);

const ProductProvider = ({ children }) => {
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
  const [output, setOutput] = useState([]);
  console.log('output Array', output);
  return (
    <productContext.Provider value={{ output }}>
      {children}
    </productContext.Provider>
  );
};

export { ProductProvider, useProduct };
