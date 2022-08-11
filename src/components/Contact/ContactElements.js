import styled from "styled-components";

export const ContactContainer = styled.section`
    position: relative;
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;

    &:after{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: url("img/bg.jpg") no-repeat center;
        background-size: cover;
        filter: blur(50px);
        z-index: -1;
    }

`
export const ContactWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #fff;
    box-shadow: 0px 0px 19px 5px rgba(0,0,0,0.19);
`

export const ContactImg = styled.img`
    background-size: cover;
    height: 100%;
`

export const ContactInfo = styled.form`
    padding: 25px 40px;
`
export const ContactH2 = styled.h2`
    position: relative;
    padding: 0 0 10px;
    margin-bottom: 10px;

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
    padding: .4rem 0;
    margin: .4rem 0;
    outline: none;
    background-color: transparent;
    color: black;
    transition: .3s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:focus, &:hover {
        outline: none;

        border-radius: 10px;
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
    min-height: 150px;
    border-color: #2ecc71;
`
export const ContactButton = styled.button`
    width: 100%;
    padding: 0.5rem 1rem;
    background-color: #2ecc71;
    color: #fff;
    font-size: 1.1rem;
    border: none;
    outline: none;
    cursor: pointer;
    transition: .3s;
`
