import React from 'react';
import { NavContainer, NavLogo, NavWrapper, NavResume, NavMenu } from '../NavBar/NavBarElements'
import { FaBars } from 'react-icons/fa'


const NavBar = ({toggle}) => {
  return (
    <NavContainer>
        <NavMenu onClick={toggle}>
            <FaBars />
        </NavMenu>
        <NavWrapper>
            <NavPages to='about'>About</NavPages>
            <NavPages to='contact'>Contact</NavPages>
            <NavLogo to='home'>Jacobs Logo</NavLogo>
            <NavPages to='portfolio'>Portfolio</NavPages>
            <NavResume>Resume download</NavResume>
        </NavWrapper>
    </NavContainer>
  )
}

export default NavBar