import HomeContainer from "./style";
import Header from "src/components/Header";
import ProductsSection from "src/components/ProductsSection";

export function Home() { 
    return (
        <>
            <Header />
            <HomeContainer>
                <h1>O melhor lugar para fazer as suas comprars!</h1>
                <ProductsSection />
            </HomeContainer>
        </>
    )
}

export default Home;
