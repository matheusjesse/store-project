import styled from "styled-components"

const HeaderContainer = styled.div`
    height: 100px;
    background: rgb(189,9,9);
    background: linear-gradient(57deg, rgba(189,9,9,1) 0%, rgba(190,11,11,1) 50%, rgba(189,9,9,1) 100%);
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .main-menu {
        width: 268px;
        display: flex;
        justify-content: space-around;        
        list-style: none;
        font-size: 1.1em;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 508;
    }
`

export default HeaderContainer;
