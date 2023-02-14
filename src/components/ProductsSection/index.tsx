import { useContext, useEffect } from 'react';
// import fetchProductLimit from 'src/api/getProducts';
import ProductContext from 'src/context/ProductsContext';
import { ProductContextType } from 'src/interface/productInterface';
import productsMock from 'src/mocks/mockProducts';
import ProductCard from '../ProductCard';
import ProductSectionContainer from './style'

export function ProductsSection() {

    const {
        products,
        productsSave
      } = useContext(ProductContext) as ProductContextType;

    const fetchProducts = async () => {
        // const data = await fetchProductLimit();
        productsSave(productsMock);
    }

    useEffect(() => {
        fetchProducts();
    }, [])


    return(
        <ProductSectionContainer>
            {
                products && products.map(({title, price, image}) => (
                    <ProductCard 
                        titleCard={title}
                        priceCard={price.toFixed(2)}
                        imageCard={image}
                    />       
                ))
            }
        </ProductSectionContainer>
    )
}

export default ProductsSection;
