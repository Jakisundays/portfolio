import React from 'react'
import { SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarMenu, SideBarLink, SideBarButton } from './SideBarElements'
import cv from '/Users/jacobdominguez/Documents/codiyapa/portfolio/src/images/Resume English.pdf'


const SideBar = ({isOpen, toggle}) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
        <Icon>
            <CloseIcon onClick={toggle}/>
        </Icon>
        <SideBarWrapper>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to='/' onClick={toggle}>Home</SideBarLink>
                    <SideBarLink to='/about' onClick={toggle}>About</SideBarLink>
                    <SideBarLink to='/contact' onClick={toggle}>Contact</SideBarLink>
                    <SideBarLink to='/work' onClick={toggle}>Portfolio</SideBarLink>
                    <SideBarButton href={cv} download> Download CV </SideBarButton>
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarWrapper>
    </SideBarContainer>
  )
}

export default SideBar
