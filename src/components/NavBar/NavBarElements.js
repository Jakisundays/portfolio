import styled from "styled-components";
import { Link } from "react-router-dom";


export const NavContainer = styled.nav`
    background: #000;
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
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavWrapper = styled.div`
    display: flex;
    justify-content: center;
    font-size: 1rem;
`
export const NavPages = styled(Link)``
export const NavLogo = styled(NavPages)``
export const NavResume = styled.button``