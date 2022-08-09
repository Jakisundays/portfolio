import styled from "styled-components";
import { Link } from "react-router-dom";


export const NavContainer = styled.nav`
    border: 2px solid red;
    height: 70px;
    position: sticky;
    top: 0;
    z-index: 10;
    padding: 10px;

    @media screen and (max-width: 960px){
        transition: 0.7s all ease;
    }
`
export const NavMenu = styled.div`
    display: none;

    @media screen and (max-width: 760px){
        display: flex;
        justify-content: space-around;
        width: 100%;

        font-size: 1.8rem;
        cursor: pointer;
        color: black;
        border: 1px solid black;
    }
`

export const NavWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1rem;
    text-align: center;
    margin-left: -22px;
    border: 2px solid green;

    @media screen and (max-width: 760px){
        display: none;
    }
`
export const NavPages = styled(Link)`
    color: black;
    border: 1px solid black;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 23px;

    &.active{
        border-botton: 3px solid #01bf71;
    }
`
export const NavLogo = styled(NavPages)``
export const NavResume = styled.button``