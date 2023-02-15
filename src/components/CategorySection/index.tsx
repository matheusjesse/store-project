import { useState } from "react";
import { CategoryCard } from "../CategoryCard";
import CategorySectionContainer from "./style";

export function CategorySection() {
    
    const [category, setCategory] = useState([
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing"
      ]);

    return(
        <CategorySectionContainer>
            <CategoryCard 
                
            />
        </CategorySectionContainer>
    )
}

export default CategorySection;
