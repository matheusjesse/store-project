import ProductCardContainer from "./style";

export function ProductCard() {
    return(
        <ProductCardContainer>
            <h1 className="title-item">Title</h1>
            <p className="image-item">Image</p>
            <p className="price-item">R$ 20,00</p>
        </ ProductCardContainer>
    )
}

export default ProductCard;
