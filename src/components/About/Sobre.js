import React from "react";
import styled from "styled-components";
import backgroundImage from "../../images/bg-popup.png";
import backImgDesk from "../../images/fundo-sobre.png"
import LightEffect from "../EfectMouse/EfectMouse";
import { useState } from "react";
//import ButtonContato from "../ButtonContato/ButtonContato";

const ContainerSobre = styled.section`
    background: url(${backImgDesk}) center/cover;
    background-repeat: no-repeat;
    background-position: center;
    max-width: 1200px;
    margin: 0 auto;
    
    @media screen and (max-width: 768px) {
        background: url(${backgroundImage}) center/cover;
        background-repeat: no-repeat;
        background-position: center;
    }
    
`
const TextoSobre = styled.div`
    @media screen and (max-width: 768px) {
        //margin-top: 30px;
        margin-left: 120px;
    }
`
const TituloSobre = styled.h1`
    font-family: 'PROXON';
    font-size: 14px;
    letter-spacing: 5px;
    @media screen and (max-width: 768px) {
        margin-top: -100px;
    }
`
const SubTituloSobre = styled.h2`
    font-family: 'PROXON';
    font-size: 40px;
    letter-spacing: 1.5px;
    width: 400px;

    @media screen and (max-width: 768px) {
        font-size: 35px;
    }
`
const ParagrafoSobre = styled.p`
    font-family: 'Montserrat';
    font-weight: 200;
    font-size: 14px;
    width: 350px;

    @media screen and (max-width: 768px) {
        width: 260px;
        font-size: 12px;
    }
`
const Cont = styled.div`
    padding: 100px;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 768px){
        justify-content: space-around;
    }
    align-items: center;
    height: 88vh;
    widht: 100vw;
    color: #fff;
    flex-wrap: wrap;
`

function Sobre () {

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    return (
        <ContainerSobre  onMouseMove={handleMouseMove}>
            <Cont>
                <LightEffect style={{ top: mousePosition.y, left: mousePosition.x}} />
                <TextoSobre>
                    <TituloSobre> História </TituloSobre>
                    <SubTituloSobre>Como tudo começou</SubTituloSobre>
                    <ParagrafoSobre>
                        <b>Eu sou o William, </b> estou no 9º periodo de Engenharia de Controle e Automação na Universidade Federal de Lavras. Atualmente, trabalho com desenvolvimento web e engenharia de software, busco aplicar meu aprendizado de forma inovadora e que gere resultados para os clientes.
                    </ParagrafoSobre>
                </TextoSobre>
                {/*<ButtonContato/>*/}
                <div></div>
            </Cont>
        </ContainerSobre>
 
    )
}

export default Sobre;