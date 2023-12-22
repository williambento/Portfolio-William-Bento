import React from "react";
import styled from 'styled-components';
import iconeNavbar from '../../images/barra-de-menu.png';
import Popup from "./Popup";
import { useState } from "react";
import Logo from "../Logo/Logo";
import ButtonContato from "../ButtonContato/ButtonContato";

const HeaderContainerDesktop = styled.header`
    background-color: var(--color-fundo);
    min-height: 12vh;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
const HeaderContainerMobile = styled.header`
    background-color: var(--color-fundo);
    min-height: 12vh;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (min-width: 768px) {
       display: none;
    }
`
const Links = styled.div`
    display: flex;
    color: var(--color-ligth);
`
const LinkOpcao = styled.nav`
    padding: 20px;
    font-family: 'Montserrat';
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1px;
    cursor: pointer;

    &:hover {
        color: var(--color-medium);
    }
`
const ImgNavBar = styled.img`
    width: 40px;
    //heigth: 40px;
    cursor: pointer;
    transition: 0.3s;

    &:hover{
        scale: 1.1;
    }
`

function Header () {

    const [isPopupOpen, setPopupOpen] = useState(false);
    const togglePopup = () => {
        setPopupOpen(!isPopupOpen);
    };
    const closePopup = () => {
        setPopupOpen(false);
    };

    return (
        <>
            <HeaderContainerDesktop>
                <Logo/>
                <Links>
                    <LinkOpcao> SOBRE </LinkOpcao>
                    <LinkOpcao> PORTFÓLIO </LinkOpcao>
                    <LinkOpcao> EXPERIÊNCIA </LinkOpcao>
                </Links>
                <ButtonContato/>
            </HeaderContainerDesktop>
            <HeaderContainerMobile>
                <Logo/>
                <ImgNavBar src={iconeNavbar} alt="icone nav bar" onClick={togglePopup} />
            </HeaderContainerMobile>
            {isPopupOpen && <Popup onClose={closePopup} />}
        </>
    )
}

export default Header;