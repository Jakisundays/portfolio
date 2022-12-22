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
                    <SideBarLink to='/portfolio' onClick={toggle}>Home</SideBarLink>
                    <SideBarLink to='/portfolio/about' onClick={toggle}>About</SideBarLink>
                    <SideBarLink to='/portfolio/contact' onClick={toggle}>Contact</SideBarLink>
                    <SideBarLink to='/portfolio/work' onClick={toggle}>Portfolio</SideBarLink>
                    <SideBarButton href={cv} download> Download CV </SideBarButton>
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarWrapper>
    </SideBarContainer>
  )
}

export default SideBar
