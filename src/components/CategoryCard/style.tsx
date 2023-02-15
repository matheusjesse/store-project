import styled from "styled-components";

const CategoryCardContainer = styled.div`
    width: 200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;

    .image-container {
        background-color: white;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 0px 8px -4px black;

    }
    img {
        width: 148px;
        height: 138px;
        
    }

    h1 {
        color: #111111;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 400;
    }
`
export default CategoryCardContainer;
