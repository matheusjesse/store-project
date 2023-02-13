import HomeContainer from "./style";
import Header from "src/components/Header";

export function Home() { 
    return (
        <>
            <Header />
            <HomeContainer>
                <h1>O melhor lugar para fazer as suas comprars!</h1>
            </HomeContainer>
        </>
    )
}

export default Home;
