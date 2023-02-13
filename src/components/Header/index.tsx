import HeaderContainer from "./style"

export function Header() {
    
    return(
        <HeaderContainer>
            <ul className="main-menu">
                <li>Início</li>
                <li>Produtos</li>
                <li>Carrinho</li>
            </ul>
        </HeaderContainer>
    );
}

export default Header;
