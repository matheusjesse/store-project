import React, { useState, useMemo } from 'react';
import ProductContext from './ProductsContext';

function ProductsProvider({ children }: any) {  
  const [products, setProducts] = useState([]);

  const context = useMemo(() => ({
    products,
    setProducts
  }), [
    products
  ]);

  return (
    <ProductContext.Provider value={ context }>
      { children }
    </ProductContext.Provider>
  );
}

export default ProductsProvider;