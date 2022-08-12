import styled from "styled-components";

export const ContactContainer = styled.section`
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--dark);


    @media (max-width: 840px){
        height: auto;
    }

    &:after{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-size: cover;
        filter: blur(50px);
        z-index: -1;
    }

`
export const ContactWrapper = styled.div`
    display: flex;
    text-align: center;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0px 0px 19px 5px rgba(0,0,0,0.19);
    margin: 29px 0;

    @media (max-width: 840px){
        flex-direction: column;
    }
`


export const ContactImg = styled.img`
    background-size: cover;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-right: 2px outset #2ecc71;
`

export const ContactInfo = styled.form`
    padding: 25px 40px;
    display: flex;
    flex-direction: column;
`
export const ContactH2 = styled.h2`
    position: relative;
    padding: 0 0 10px;
    margin-bottom: 10px;
    text-align: center;

    &:after{
        content: '';
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        height: 4px;
        width: 50px;
        border-radius: 2px;
        background-color: #2ecc71;
    }
`

export const ContactInput = styled.input`
    line-height: 28px;
    border: 2px solid transparent;
    border-bottom-color: #2ecc71;
    padding: .7rem 0;
    margin: .4rem 0;
    outline: none;
    background-color: transparent;
    color: black;
    transition: .3s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:focus, &:hover {
        outline: none;
        border-radius: 4px;
        border-color: #2ecc71;
       }
       
    &::placeholder {
        color: #777;
       }
       
    &:focus::placeholder {
        opacity: 0;
        transition: opacity .3s;
       }
`
export const ContactMsg = styled.textarea`
    min-height: 130px;
    border-color: #2ecc71;
    margin: 10px 0;
    line-height: 28px;
    border: 2px solid transparent;
    border-bottom-color: #2ecc71;
    color: black;
    transition: .3s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:focus, &:hover {
        outline: none;
        border-radius: 4px;
        border-color: #2ecc71;
       }
       
    &::placeholder {
        color: #777;
       }
       
    &:focus::placeholder {
        opacity: 0;
        transition: opacity .3s;
       }
`
export const ContactButton = styled.button`
    font-size: 18px;
    letter-spacing: 2px;
    text-transform: uppercase;
    display: inline-block;
    text-align: center;
    font-weight: bold;
    padding: 0.7em 2em;
    border: 3px solid var(--dark);
    border-radius: 2px;
    position: relative;
    box-shadow: 0 2px 10px var(--light), 0 3px 6px var(--secondary);
    color: var(--dark);
    text-decoration: none;
    transition: 0.3s ease all;
    z-index: 1;
    margin-bottom: 15px;

    &:before {
    transition: 0.5s all ease;
    position: absolute;
    top: 0;
    left: 50%;
    right: 50%;
    bottom: 0;
    opacity: 0;
    content: '';
    background-color: var(--light);
    z-index: -1;
    }

    &:hover, &:focus {
    color: white;
    }

    &:hover:before, &:focus:before {
    transition: 0.5s all ease;
    left: 0;
    right: 0;
    opacity: 1;
    }

    &:active {
    transform: scale(0.9);
`
