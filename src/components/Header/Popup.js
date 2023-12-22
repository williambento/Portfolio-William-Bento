import React from "react";
import styled from 'styled-components';
import ButtonContato from "../ButtonContato/ButtonContato";
import backgroundImage from "../../images/bg-popup.png";
import { useState } from "react";
import LightEffect from "../EfectMouse/EfectMouse";
import Header from "./Header";

const PopupContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: top;
    z-index: 999;

    @media screen and (max-width: 768px) {
        background: url(${backgroundImage}) center/cover;
        background-repeat: no-repeat;
        background-position: center;
    }
`
const PopupContent = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 10px;
    border-radius: 8px;
    margin-top: 20px;
    padding: 10px 60px;
    display: flex;
    flex-direction: column;
`
const LinksPopUp = styled.a`
    text-align: left;
    margin-top: 15px;
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 14px;
    //color: var(--color-ligth);
    color: #fff;
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
    margin-top: 0px;
    display: flex;
    flex-direction: column;
`

function Popup({ onClose }) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    return (
        <PopupContainer onMouseMove={handleMouseMove}>
            <Header/>
            <PopupContent>
                <LightEffect style={{ top: mousePosition.y, left: mousePosition.x}} />
                <Links>
                    <LinksPopUp href="#about" onClick={onClose}>Sobre</LinksPopUp>
                    <LinksPopUp href="#portfolio" onClick={onClose}>Portfólio</LinksPopUp>
                    <LinksPopUp href="#experience" onClick={onClose}>Experiência</LinksPopUp>
                    <ButtonContato/>
                </Links>
            </PopupContent>
        </PopupContainer>
    );
}

export default Popup;
