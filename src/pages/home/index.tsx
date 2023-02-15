import HomeContainer from "./style";
import Header from "src/components/Header";
import ProductsSection from "src/components/ProductsSection";
import CategorySection from "src/components/CategorySection";

export function Home() { 
    return (
        <>
            <Header />
            <HomeContainer>
                <h1>O melhor lugar para fazer as suas comprars!</h1>
                <ProductsSection />
                <CategorySection />
            </HomeContainer>
        </>
    )
}

export default Home;
