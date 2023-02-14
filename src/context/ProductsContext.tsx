import { createContext } from 'react';
import { ProductContextType } from 'src/interface/productInterface';

const ProductContext = createContext<ProductContextType | null>(null);

export default ProductContext;