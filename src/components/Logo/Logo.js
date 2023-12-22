import React from "react";
import styled from "styled-components";

const LogoContainer = styled.div`
    color: #fff;
    font-family: 'PROXON';
    margin-top: 3px;
    font-size: 40px;
`;

function Logo () {
    return (
        <LogoContainer>
            UISAX
        </LogoContainer>
    )
}

export default Logo;