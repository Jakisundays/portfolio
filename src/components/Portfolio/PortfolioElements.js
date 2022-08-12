import styled from "styled-components";
import { Link } from "react-router-dom";

export const PortfolioContainer = styled.section`
    min-height: 95vh;
    background-color: var(--dark);
    padding: 40px 0;
`
export const PortfolioWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    width: 70vw;
    padding: 15px;
    background-color: white;
    box-shadow: var(--light) 0px 2px 4px, var(--light) 0px 7px 13px -3px, var(--light) 0px -3px 0px inset;
    transition: border-radius cubic-bezier(0.075, 0.82, 0.165, 1) 1s,
                transform cubic-bezier(0.075, 0.82, 0.165, 1) 1s;


    &:hover {
    border-bottom-right-radius: 50px;
    border-top-left-radius: 50px;
    transform: scale(1.05);
    }
`
export const PortfolioImg = styled.img`
    max-width: 75%;
`
export const PortfolioH1 = styled.h1`
    font-size: 32px;
    color: var(--dark);
`

export const PortfolioDesc = styled.p`
    padding: 18px;
`

export const PortfolioDemo = styled(Link)`
    font-size: 18px;
    letter-spacing: 2px;
    text-transform: uppercase;
    display: inline-block;
    text-align: center;
    font-weight: bold;
    padding: 0.7em 2em;
    border: 3px solid var(--dark);
    border-radius: 2px;
    position: relative;
    box-shadow: 0 2px 10px var(--light), 0 3px 6px var(--secondary);
    color: var(--dark);
    text-decoration: none;
    transition: 0.3s ease all;
    z-index: 1;
    margin-bottom: 15px;

    &:before {
    transition: 0.5s all ease;
    position: absolute;
    top: 0;
    left: 50%;
    right: 50%;
    bottom: 0;
    opacity: 0;
    content: '';
    background-color: var(--light);
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
