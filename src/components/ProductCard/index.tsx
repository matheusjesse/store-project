import ProductCardContainer from "./style";

export function ProductCard({titleCard, imageCard, priceCard}: {titleCard: string, imageCard:string, priceCard:string}) {
    return(
        <ProductCardContainer>
            <img className="image-item" src={imageCard} alt={titleCard} />
            <h1 className="title-item">{titleCard}</h1>
            <p className="price-item">{priceCard}</p>
        </ ProductCardContainer>
    )
}

export default ProductCard;
