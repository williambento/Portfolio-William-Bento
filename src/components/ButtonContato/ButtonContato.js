import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
    width: 120px;
    height: 30px;
    color: var(--color-fundo);
    background-color: var(--color-ligth);
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 600;
    transition: .3s;
    font-family: 'PROXON';
    letter-spacing: 1px;

    &:hover{
        scale: 1.1;
        color: var(--color-medium);
        transform: translate(8px);
    }

    @media screen and (max-width: 768px) {
        margin-top: 40px;
    }
`

function ButtonContato () {
    return(
        <ButtonContainer>CONTATO</ButtonContainer>
    )
}

export default ButtonContato;