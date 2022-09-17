import styled from "styled-components";
import { FaTimes } from 'react-icons/fa'
import { Link as LinkR} from 'react-router-dom'

export const SideBarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: var(--dark);
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '100%')};
`

export const CloseIcon = styled(FaTimes)`
    color: var(--light);
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    left: 1.5rem;
    background: transparent;
    font-size: 2.6rem;
    cursor: pointer;
    outline: none;
`

export const SideBarWrapper = styled.div`
    color: var(--primary);
`

export const SideBarMenu = styled.ul`
    display: grid;
    grid-template-column: 1fr;
    grid-template-rows: repeat(5, 80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(5, 60px);   
    }
`

export const SideBarLink = styled(LinkR)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decorations: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: white;
    cursor: pointer;
    &:hover {
        color: var(--primary);
        transition: 0.2s ease-in-out;
    }
`

export const SideBarButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    transition: 0.2s ease-in-out;
    color: white;
    cursor: pointer;
    background-color: transparent;
    border: none;

    &:hover {
        color: var(--primary);
        transition: 0.2s ease-in-out;
    }
`