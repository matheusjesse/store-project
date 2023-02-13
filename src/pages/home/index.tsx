import HomeContainer from "./style";
import Header from "src/components/Header";

export function Home() { 
    return (
        <>
            <Header />
            <HomeContainer>
                <h1>Home</h1>
            </HomeContainer>
        </>
    )
}

export default Home;
