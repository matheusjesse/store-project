import styled from "styled-components";

const ProductCardContainer = styled.div`
    width: 168px;
    height: 278px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 8px;
    margin-right: 18px;
    margin-bottom: 28px;
    justify-content: center;
    border-radius: 4px;
    box-shadow: 0px 0px 8px -4px black;
    
    .title-item {
        width: 148px;
        height: 58px;
        font-size: 0.9em;
        color: #201f1f;
        text-align: left;
        font-family: Arial, Helvetica, sans-serif;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        

    }

    .image-item {
        height: 172px;
        width: 148px;
        margin-bottom: 4px;
        border-radius: 12px;
        margin-top: 10px;
    }

    .price-item {
        width: 148px;
        text-align: center;
        color: #201f1f;
        font-size: 1.3em;
        font-weight: 800;
        box-shadow: 0px -4px 4px -6px gray;
    }

    .price-item::before {
        content: "R$";
        margin-right: 4px;
    }

`;

export default ProductCardContainer;
