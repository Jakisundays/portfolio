import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    border: 1px solid red;
`
export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid green;
`
export const FooterDisplay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid blue;
`
export const FooterImg = styled.img`
    border: solid red;
    max-width: 100px;
` 
export const FooterName = styled(Link)`
    color: black;
    text-align: center;
    border: solid red;
` 
export const FooterYear = styled.p`
    color: black;
    text-align: center;
    border: solid red;
` 