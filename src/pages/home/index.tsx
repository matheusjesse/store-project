import HomeContainer from "./style";
import Header from "src/components/Header";
import ProductsSection from "src/components/ProductsSection";
import CategorySection from "src/components/CategorySection";
import FilterSection from "src/components/FilterSection";

export function Home() { 
    return (
        <>
            <Header />
            <HomeContainer>
                <FilterSection />
                <ProductsSection />
                <CategorySection />
            </HomeContainer>
        </>
    )
}

export default Home;
