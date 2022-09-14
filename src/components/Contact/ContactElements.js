import styled from "styled-components";

export const ContactContainer = styled.section`
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--dark);


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

    @media (min-height: 850px){
        min-height: 90vh;
    }

`
export const ContactWrapper = styled.div`
    display: flex;
    text-align: center;
    border-radius: 30px;
    background-color: #fff;
    margin: 20px 10px;

    @media (max-width: 760px){
        flex-direction: column;
        width: 80%;
    }
`

export const ContactImg = styled.img`
    background-size: cover;
    width: 50%;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

    @media (max-width: 760px){
        display: none;
    }
`

export const ContactInfo = styled.form`
    padding: 25px 40px;
    display: flex;
    flex-direction: column;
    width: 100%;
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
        background-color: var(--primary);
    }
`

export const ContactInput = styled.input`
    line-height: 28px;
    border: 2px solid transparent;
    border-bottom-color: var(--primary);
    padding: .7rem 0;
    margin: .4rem 0;
    outline: none;
    background-color: transparent;
    color: black;
    transition: .3s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:focus, &:hover {
        outline: none;
        border-radius: 4px;
        border-color: var(--primary);
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
    border-color: var(--primary);
    margin: 10px 0;
    line-height: 28px;
    border: 2px solid transparent;
    border-bottom-color: var(--primary);
    color: black;
    transition: .3s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:focus, &:hover {
        outline: none;
        border-radius: 4px;
        border-color: var(--primary);
       }
       
    &::placeholder {
        color: #777;
       }
       
    &:focus::placeholder {
        opacity: 0;
        transition: opacity .3s;
       }
`
export const ContactButton = styled.input`
    font-size: 18px;
    align-self: center;
    width: 100px;
    letter-spacing: 2px;
    display: inline-block;
    text-align: center;
    font-weight: bold;
    padding: 0.5em 0.2em;
    border: 3px solid var(--primary);
    border-radius: 2px;
    position: relative;
    box-shadow: 0 2px 10px var(--light), 0 3px 6px var(--secondary);
    color: var(--dark);
    text-decoration: none;
    transition: 0.3s ease all;
    background-color: var(--primary);

    &:before {
    transition: 0.5s all ease;
    position: absolute;
    top: 0;
    left: 50%;
    right: 50%;
    bottom: 0;
    opacity: 0;
    content: '';
    z-index: -1;
    }

    &:hover, &:focus {
    color: white;
    }

    &:hover:before, &:focus:before {
    transition: 0.3s all ease;
    left: 0;
    right: 0;
    opacity: 1;
    }

    &:active {
    transform: scale(0.9);
    }
`
