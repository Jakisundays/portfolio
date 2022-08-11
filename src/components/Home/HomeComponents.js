import styled, { keyframes } from "styled-components";
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';

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
    min-height: 95vh;
    flex-grow: 1;
    gap: 40px;

    @media (max-width: 940px){
        flex-direction: column;
        gap: 0;
    }
`

export const HomeBox = styled.div`
    display: block;
`
export const HomeAvatar = styled.img`
    background: linear-gradient(135deg, rgb(11, 15, 74), rgb(166,104,255));
    width: 35vh;
    height: 35hv;
    border-radius: 50%;
    padding: 0.75rem;
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 40%);
    
    @media (max-width: 600px){
        margin-bottom: 0px;
    }
`


export const HomeH1 = styled.h1`
    font-size: 2rem;
    text-align: center;
    
    
    @media (max-width: 940px){
        font-size: 3rem;
        text-align: left;
    }
`
export const HomeName = styled.span`
    background: linear-gradient(135deg, rgb(11, 15, 74), rgb(166,104,255));
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
    font-size: 1.25rem;
    text-align: center;
    

    @media (max-width: 940px){
        font-size: 2rem;
        text-align: left;
    }
`

export const HomeInfo = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    margin-bottom: 20px;
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
    color: rgb(11, 15, 74);
    transition: color 200ms ease;

    &:hover{
        color: rgb(166,104,255);
        transition: color 200ms ease;
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
export const Ig = styled(AiOutlineInstagram)`
    text-decoration: none;
    font-size: 3rem;
`

