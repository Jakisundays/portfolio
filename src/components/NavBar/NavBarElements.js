import styled from "styled-components";
import { Link } from "react-router-dom";


export const NavContainer = styled.nav`
    height: 70px;
    position: sticky;
    top: 0;
    z-index: 10;
    padding: 10px;
    background-color: var(--dark);
    width: 100%

    @media screen and (max-width: 960px){
        transition: 0.7s all ease;
    }

    @media screen and (max-width: 760px){
      border: none;
    }
`
export const NavMenu = styled.div`
    display: none;

    @media screen and (max-width: 760px){
        display: flex;
        justify-content: center;
        width: 100%;
        font-size: 2rem;
        cursor: pointer;
        margin-top: 8px;
        color: var(--primary);
    }
`

export const NavWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1rem;
    text-align: center;
    margin-left: -22px;
    height: 100%;

    @media screen and (max-width: 760px){
        display: none;
    }
`
export const NavPages = styled(Link)`
    text-decoration: none;
    font-size: 17px;
    background: transparent;
    border: none;
    padding: 1.25em 1em;
    color: var(--primary);
    text-transform: uppercase;
    position: relative;
    transition: .3s ease;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        height: 4px;
        width: 0;
        background-color: var(--light);
        transition: .2s ease;
      }
    
    &:hover{
        color: white;
        transition-delay: .3s;
    }

    &:hover::before {
        width: 100%;
      }

    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        height: 0;
        width: 100%;
        background-color: var(--primary);
        transition: .4s ease;
        z-index: -1;
      }
      
      &:hover::after {
        height: 100%;
        transition-delay: 0.4s;
        color: var(--secondary);
      }
    
`

export const NavLogo = styled(NavPages)``
export const NavResume = styled.a`
text-decoration: none;
    font-size: 17px;
    background: transparent;
    border: none;
    padding: 1.25em 1em;
    color: var(--primary);
    text-transform: uppercase;
    position: relative;
    transition: .3s ease;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        height: 4px;
        width: 0;
        background-color: var(--light);
        transition: .2s ease;
      }
    
    &:hover{
        color: white;
        transition-delay: .3s;
    }

    &:hover::before {
        width: 100%;
      }

    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        height: 0;
        width: 100%;
        background-color: var(--primary);
        transition: .4s ease;
        z-index: -1;
      }
      
      &:hover::after {
        height: 100%;
        transition-delay: 0.4s;
        color: var(--secondary);
      }
`
