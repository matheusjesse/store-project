import styled from "styled-components";

const ProductCardContainer = styled.div`
    background-color: pink;
    width: 118px;
    height: 228px;
    display: flex;
    flex-wrap: wrap;
    
    .title-item {
        width: 118px;
        height: 38px;
        background-color: green;
        font-size: 0.9em;
    }

    .image-item {
        height: 172px;
        width: 118px;
        background-color: purple;
    }

    .price-item {
        background-color: orange;
        width: 118px;
    }

`;

export default ProductCardContainer;
