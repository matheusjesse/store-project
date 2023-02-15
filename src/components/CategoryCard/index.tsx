import CategoryCardContainer from "./style";

export function CategoryCard({categoryImage, categoryName}: {categoryImage: string, categoryName: string}) {    

    return(
        <CategoryCardContainer>
            <div className="image-container">
                <img src={categoryImage} alt={categoryName} />
            </div>
            <h1>{categoryName}</h1>
        </CategoryCardContainer>
    )
}