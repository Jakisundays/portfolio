import React from 'react';
import { NavContainer, NavLogo, NavWrapper, NavResume, NavMenu, NavPages } from '../NavBar/NavBarElements'
import { FaBars } from 'react-icons/fa';
import cv from '/Users/jacobdominguez/Documents/codiyapa/portfolio/src/images/Resume English.pdf'


const NavBar = ({toggle}) => {
  return (
    <NavContainer>
        <NavMenu onClick={toggle}>
            <FaBars />
        </NavMenu>
        <NavWrapper>
            <NavPages to='/portfolio/about'>About</NavPages>
            <NavPages to='/portfolio/contact'>Contact</NavPages>
            <NavLogo to='/portfolio'>Home</NavLogo>
            <NavPages to='/portfolio/work'>Portfolio</NavPages>
            <NavResume href={cv} download>Download CV</NavResume>
            
        </NavWrapper>
    </NavContainer>
  )
}

export default NavBar
