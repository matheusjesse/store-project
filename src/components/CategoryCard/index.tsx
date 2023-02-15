import CategoryCardContainer from "./style";

export function CategoryCard({categoryImage, categoryName}: {categoryImage: string, categoryName: string}) {    

    return(
        <CategoryCardContainer>
            <img src={categoryImage} alt={categoryName} />
            <h1>{categoryName}</h1>
        </CategoryCardContainer>
    )
}