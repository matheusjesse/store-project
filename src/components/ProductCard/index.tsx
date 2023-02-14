import ProductCardContainer from "./style";

export function ProductCard({titleCard, imageCard, priceCard}: {titleCard: string, imageCard:string, priceCard:number}) {
    return(
        <ProductCardContainer>
            <h1 className="title-item">{titleCard}</h1>
            <img className="image-item" src={imageCard} alt={titleCard} />
            <p className="price-item">{priceCard}</p>
        </ ProductCardContainer>
    )
}

export default ProductCard;
