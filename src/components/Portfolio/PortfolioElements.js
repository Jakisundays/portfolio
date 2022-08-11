import styled from "styled-components";
import { Link } from "react-router-dom";

export const PortfolioContainer = styled.section`
    min-height: 95vh;
    margin-bottom: 20px;
`
export const PortfolioWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px auto;
    align-items: center;
    justify-content: center;
    gap: 10px;
`
export const PortfolioImg = styled.img`
    max-width: 100%;
`
export const PortfolioH1 = styled.h1`
    font-size: 32px;
`

export const PortfolioDemo = styled(Link)`
    font-size: 18px;
    letter-spacing: 2px;
    text-transform: uppercase;
    display: inline-block;
    text-align: center;
    font-weight: bold;
    padding: 0.7em 2em;
    border: 3px solid #FF0072;
    border-radius: 2px;
    position: relative;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);
    color: #FF0072;
    text-decoration: none;
    transition: 0.3s ease all;
    z-index: 1;
    }

    &:before {
    transition: 0.5s all ease;
    position: absolute;
    top: 0;
    left: 50%;
    right: 50%;
    bottom: 0;
    opacity: 0;
    content: '';
    background-color: #FF0072;
    z-index: -1;
    }

    &:hover, &:focus {
    color: white;
    }

    &:hover:before, &:focus:before {
    transition: 0.5s all ease;
    left: 0;
    right: 0;
    opacity: 1;
    }

    &:active {
    transform: scale(0.9);
`
export const PortfolioCode = styled(PortfolioDemo)``