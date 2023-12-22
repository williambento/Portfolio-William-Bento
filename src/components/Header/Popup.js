import React from "react";
import styled from 'styled-components';
import Logo from "../Logo/Logo";
import ButtonContato from "../ButtonContato/ButtonContato";
import backgroundImage from "../../images/bg-popup.png";
import { useState } from "react";
import { keyframes } from 'styled-components';

const shakeAnimation = keyframes`
  0% { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
  25% { transform: translate(-50%, -50%) rotate(-5deg) scale(1); }
  50% { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
  75% { transform: translate(-50%, -50%) rotate(5deg) scale(1); }
  100% { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
`
const PopupContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: left;
    background: url(${backgroundImage}) center/cover;
    background-repeat: no-repeat;
    background-position: center;
    align-items: top;
    z-index: 999;
`
const PopupContent = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 10px;
    border-radius: 8px;
    margin-top: 20px;
    padding: 50px;
    display: flex;
    flex-direction: column;
`
const LinksPopUp = styled.a`
    text-align: left;
    margin-top: 15px;
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 14px;
    color: var(--color-ligth);
    text-decoration: none;
    cursor: pointer;
    transition: .3s;

    &:hover{
        color: var(--color-medium);
        scale: 1.1;
        transform: translate(8px);
    }
`
const Links = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
`
const LightEffect = styled.div`
    position: absolute;
    width: 200px; /* Ajuste o tamanho conforme necessário */
    height: 200px; /* Ajuste o tamanho conforme necessário */
    background: radial-gradient(circle, rgba(0, 216, 230, 0.1) 10%, rgba(0, 0, 0, 0) 60%);
    border-radius: 50%; /* Reduzindo ainda mais o border-radius para uma forma mais irregular */
    pointer-events: none;
    z-index: 1;
    animation: ${shakeAnimation} 2s infinite; /* Adicionando a animação de balanço */
    transition: top 0.1s ease, left 0.1s ease;
`

function Popup({ onClose }) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };
    return (
        <PopupContainer onMouseMove={handleMouseMove}>
            <PopupContent>
                <LightEffect style={{ top: mousePosition.y, left: mousePosition.x}} />
                <Logo
                    logoColor="var(--color-fundo)"
                />
                <Links>
                    <LinksPopUp href="#about" onClick={onClose}>SOBRE</LinksPopUp>
                    <LinksPopUp href="#portfolio" onClick={onClose}>PORTFÓLIO</LinksPopUp>
                    <LinksPopUp href="#experience" onClick={onClose}>EXPERIÊNCIA</LinksPopUp>
                    <ButtonContato/>
                </Links>
            </PopupContent>
        </PopupContainer>
    );
}

export default Popup;
