import { CategoryCard } from "../CategoryCard";
import CategorySectionContainer from "./style";
import jowelery from "../../assets/joweller.jpg"
import woman from "../../assets/woman.jpg";
import eletronics from "../../assets/eletronics.jpg";
import man from "../../assets/man.jpg"

export function CategorySection() {
    
    return(
        <CategorySectionContainer>
            <CategoryCard categoryImage={jowelery} categoryName="jewelery"/>
            <CategoryCard categoryImage={woman} categoryName="women's clothing"/>
            <CategoryCard categoryImage={eletronics} categoryName="electronics"/>
            <CategoryCard categoryImage={man} categoryName="men's clothing"/>
        </CategorySectionContainer>
    )
}

export default CategorySection;
