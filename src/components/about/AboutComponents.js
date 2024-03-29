import styled from "styled-components";



const Button = styled.div`
    height: 12px;
    width: 12px;
    border-radius: 50%;
    border: 1px solid #000;
    position: relative;
    top: 1px;
    left: 6px;
    background-color: #ff3b47;
    border-color: #9d252b;
    display: inline-block;
`

const P = styled.p`
    margin: 0.65rem 0;
    text-align: left;
    font-size: 1.25em;
    white-space: normal;
    overflow: hidden;
    color: #f8f8f8;
`

const Span = styled.span`
    font-weight: bold;
`

export const AboutContainer = styled.section`
    min-height: 81vh;
    background-color: var(--dark);
    padding: 10px;
    @media (min-height: 1000px){
        min-height: 90vh;
    }
`

export const AboutTerminal = styled.div`
    margin: 2px auto 18px auto;
    max-width: 550px;
    background-color: rgb(39, 36, 47);
    border-radius: 5px;
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 40%);


    @media (max-width: 375px){
        max-width: 370px;
    }

`

export const AboutMenu = styled.div`
    font-size: 1rem;
    height: 25px;
    background-color: rgb(140, 140, 140);
    margin: 0 auto;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
`
export const FakeClose = styled(Button)``
export const FakeMinimize = styled(Button)`
    left: 11px;
    background-color: #ffc100;
    border-color: #9d802c;
`
export const FakeZoom = styled(Button)`
    left: 16px;
    background-color: #00d742;
    border-color: #049931;
`

export const AboutScreen = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 13px;
`
export const AboutTopLine = styled(P)`
`
export const AboutDesc = styled(P)`
`

export const AboutSpan = styled(Span)`
    color: var(--light);
`
export const AboutSpan2 = styled(Span)`
    color: yellow;
`

export const AboutSkills = styled.ul`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 27vh;
    justify-content: center;
    align-items: start;
    list-style-type: none;
    @media (max-width: 768px){
        height: 35vh;
    }
`

export const AboutLi = styled.li`
    margin-top: 10px;
`

     