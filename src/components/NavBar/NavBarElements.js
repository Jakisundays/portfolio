import styled from "styled-components";
import { Link } from "react-router-dom";


export const NavContainer = styled.nav`
    height: 70px;
    position: sticky;
    top: 0;
    z-index: 10;
    padding: 10px;
    border-bottom: outset;
    background-color: white;
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

    @media screen and (max-width: 760px){
        display: none;
    }
`
export const NavPages = styled(Link)`
    text-decoration: none;
    font-size: 17px;
    background: transparent;
    border: none;
    padding: 1em 1.5em;
    color: black;
    text-transform: uppercase;
    position: relative;
    transition: .5s ease;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        height: 2px;
        width: 0;
        background-color: blue;
        transition: .5s ease;
      }
    
    &:hover{
        color: white;
        transition-delay: .5s;
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
        background-color: black;
        transition: .4s ease;
        z-index: -1;
      }
      
      &:hover::after {
        height: 100%;
        transition-delay: 0.4s;
        color: aliceblue;
      }
    
`

export const NavLogo = styled(NavPages)``
export const NavResume = styled.button`
text-decoration: none;
font-size: 17px;
background: transparent;
border: none;
padding: 1em 1.5em;
color: black;
text-transform: uppercase;
position: relative;
transition: .5s ease;

&::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0;
    background-color: blue;
    transition: .5s ease;
  }

&:hover{
    color: white;
    transition-delay: .5s;
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
    background-color: black;
    transition: .4s ease;
    z-index: -1;
  }
  
  &:hover::after {
    height: 100%;
    transition-delay: 0.4s;
    color: aliceblue;
  }
`
