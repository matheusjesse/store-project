import { useContext, useEffect } from 'react';
import fetchProductLimit from 'src/api/getProducts';
import ProductContext from 'src/context/ProductsContext';
import { ProductContextType } from 'src/interface/productInterface';
import ProductCard from '../ProductCard';
import ProductSectionContainer from './style'

export function ProductsSection() {

    const {
        products,
        productsSave
      } = useContext(ProductContext) as ProductContextType;

    const fetchProducts = async () => {
        const data = await fetchProductLimit();
        productsSave(data);
    }

    useEffect(() => {
        fetchProducts();
    }, [])


    return(
        <ProductSectionContainer>
            <p>Test</p>
            {
                products && products.map(({title, price, image}) => (
                    <ProductCard 
                        titleCard={title}
                        priceCard={price}
                        imageCard={image}
                    />       
                ))
            }
        </ProductSectionContainer>
    )
}

export default ProductsSection;
