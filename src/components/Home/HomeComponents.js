import styled, { keyframes } from "styled-components";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const movimiento = keyframes`
    0% { transform: rotate( 0.0deg) }
    10% { transform: rotate(14.0deg) }
    20% { transform: rotate(-8.0deg) }
    30% { transform: rotate(14.0deg) }
    40% { transform: rotate(-4.0deg) }
    50% { transform: rotate(10.0deg) }
    60% { transform: rotate( 0.0deg) }
    100% { transform: rotate( 0.0deg) }
`

export const HomeContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
    background-color: var(--dark);
    gap: 40px;

    @media (max-width: 940px){
        flex-direction: column;
        gap: 0;
    }

    @media (max-width: 375px){
        width: 375px;
    }

    @media (max-width: 360px){
        width: 360px;
    }

    @media (min-height: 1000px){
        min-height: 90vh;
    }
`

export const HomeBox = styled.div`
    display: block;
`
export const HomeAvatar = styled.img`
    background: linear-gradient(180deg, rgba(124,105,105,1) 0%, rgba(23,1,13,1) 31%);
    border: 2px solid linear-gradient(180deg, rgba(245,130,167,1) 21%, rgba(241,0,134,1) 48%, rgba(244,244,244,1) 81%);
    width: 34vh;
    border-radius: 50%;

    box-shadow: 0 0.5rem 1rem var(--light);
    
    @media (max-width: 600px){
        margin-bottom: 10px;
    }
`


export const HomeH1 = styled.h1`
    font-size: 3.5rem;
    text-align: center;
    color: white;
    
    @media (max-width: 940px){
        font-size: 3rem;
    }
`
export const HomeName = styled.span`
    background: linear-gradient(180deg, rgba(245,130,167,1) 21%, rgba(241,0,134,1) 48%, rgba(244,244,244,1) 81%);
    -webkit-background-clip: text;
    color: transparent;
`
export const HomeHand = styled.span`
    animation-name: ${movimiento};
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    transform-origin: 70% 70%;
    display: inline-block;
`
export const HomeH2 = styled.h2`
    font-size: 2.25rem;
    text-align: center;
    color: white;

    @media (max-width: 940px){
        font-size: 2rem;
    }
`

export const HomeInfo = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    margin-bottom: 20px;
    color: white;
`
export const HomeSocial = styled.div`
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    font-size: 2.5rem;

    @media (min-width: 940px){
        font-size: 2rem;
    }
`
export const SocialLink = styled.a`
    color: #1f1f1f;
    cursor: pointer;
    color: white;
    transition: color 200ms ease;

    &:hover{
        color: var(--primary);
        transition: color 400ms ease;
    }
`
export const Gh = styled( AiFillGithub)`
    text-decoration: none;
    font-size: 3rem;
`
export const Lk = styled(AiFillLinkedin)`
    text-decoration: none;
    font-size: 3rem;
`


