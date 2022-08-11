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
                    <SideBarLink to='/' onClick={toggle}>Home</SideBarLink>
                    <SideBarLink to='/about' onClick={toggle}>about</SideBarLink>
                    <SideBarLink to='/contact' onClick={toggle}>contact</SideBarLink>
                    <SideBarLink to='/portfolio' onClick={toggle}>portfolio</SideBarLink>
                    <SideBarButton>resume</SideBarButton>
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarWrapper>
    </SideBarContainer>
  )
}

export default SideBar
