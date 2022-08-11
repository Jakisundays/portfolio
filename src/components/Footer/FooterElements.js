import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
`
export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
export const FooterDisplay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const FooterImg = styled.img`
    max-width: 85px;
` 
export const FooterName = styled(Link)`
    color: black;
    text-decoration: none;
    text-align: center;
` 
export const FooterYear = styled.p`
    position: relative;
    left: 35px;
    bottom: 35px;
    color: black;
    text-align: center;
` 

export const SpanF = styled.span`
    color: blue;
    font-weight: bold;
`