import styled, { keyframes } from "styled-components";



const Button = styled.div`
    height: 10px;
    width: 10px;
    border-radius: 50%;
    border: 1px solid #000;
    position: relative;
    top: 6px;
    left: 6px;
    background-color: #ff3b47;
    border-color: #9d252b;
    display: inline-block;
`

const P = styled.p`
    position: relative;
    left: 50%;
    margin-left: -8.5em;
    text-align: left;
    font-size: 1.25em;
    font-family: monospace;
    white-space: normal;
    overflow: hidden;
    width: 0;
`

const Span = styled.span`
    color: #fff;
    font-weight: bold;
`

export const AboutContainer = styled.section``

export const AboutTerminal = styled.div``

export const AboutMenu = styled.div`
    width: 550px;
    box-sizing: border-box;
    height: 25px;
    background-color: #bbb;
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
    background-color: #151515;
    box-sizing: border-box;
    width: 550px;
    margin: 0 auto;
    padding: 20px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
`
export const AboutTopLine = styled(P)`
  
`
export const AboutDesc = styled(P)``
export const AboutEnd = styled(P)``
export const AboutFinish = styled(P)``

export const AboutSpan = styled(Span)``
export const AboutSpan2 = styled(Span)``
export const AboutSpan3 = styled(Span)``
export const AboutSpan4 = styled(Span)``



     