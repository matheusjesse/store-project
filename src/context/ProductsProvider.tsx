import React, { useState, useMemo } from 'react';
import { IProduct } from 'src/interface/productInterface';
import ProductContext from './ProductsContext';

function ProductsProvider({ children }: any) {  
  const [products, setProducts] = useState<IProduct[]>([]);

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