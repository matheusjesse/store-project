import { useState } from 'react';
import { IProduct } from 'src/interface/productInterface';
import ProductContext from './ProductsContext';

function ProductsProvider({ children }: any) {   
  const [products, setProducts] = useState<IProduct[]>([]);

  const productsSave = (product: IProduct[]) => {
    setProducts(product);
  }

  return (
    <ProductContext.Provider value={ {products, productsSave} }>
      { children }
    </ProductContext.Provider>
  );
}

export default ProductsProvider;