import React from "react";
import styled from "styled-components";

const ContainerPortfolio = styled.section`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to right, #5c74f2, #333e79);

    display: flex;
    justify-content: center;
    align-items: center;
`
const PortfolioSecao = styled.div`
    max-width: 1200px;
    margin: 0;
`
const TituloPort = styled.h2`
    font-family: 'PROXON';
    font-size: 40px;
    letter-spacing: 1.5px;
    color: #fff;
    margin-top: 80px;
    @media screen and (max-width: 768px) {
        font-size: 35px;
    }
`
const ItemPrincipal = styled.div`
    width: 400px;
    height: 400px;
    background-color: #fff;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
`

function Portfolio () {
    return (
        <ContainerPortfolio>
            <PortfolioSecao>
                <TituloPort>Portfolio</TituloPort>
                <ItemPrincipal/>
            </PortfolioSecao>
        </ContainerPortfolio>

    )
}

export default Portfolio