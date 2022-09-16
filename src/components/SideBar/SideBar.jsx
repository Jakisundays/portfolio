import React from 'react'
import { SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarMenu, SideBarLink, SideBarButton } from './SideBarElements'


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
                    <SideBarLink to='/about' onClick={toggle}>About</SideBarLink>
                    <SideBarLink to='/contact' onClick={toggle}>Contact</SideBarLink>
                    <SideBarLink to='/work' onClick={toggle}>Portfolio</SideBarLink>
                    <SideBarButton>Resume</SideBarButton>
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarWrapper>
    </SideBarContainer>
  )
}

export default SideBar
