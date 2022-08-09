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
                    <SideBarLink to='/' onClick={toggle}>Inicio</SideBarLink>
                    <SideBarLink to='/about' onClick={toggle}>Nosotros</SideBarLink>
                    <SideBarLink to='/contact' onClick={toggle}>FAQ</SideBarLink>
                    <SideBarLink to='/portfolio' onClick={toggle}>Contactanos</SideBarLink>
                    <SideBarButton>resume</SideBarButton>
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarWrapper>
    </SideBarContainer>
  )
}

export default SideBar
