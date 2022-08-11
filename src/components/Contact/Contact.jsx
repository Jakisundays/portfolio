import React from 'react'
import { ContactButton, ContactContainer, ContactH2, ContactImg, ContactInfo, ContactInput, ContactMsg, ContactWrapper } from './ContactElements'
import map from '/Users/jacobdominguez/Documents/codiyapa/portfolio/src/images/pp.jpeg'

const Contact = () => {
  return (
    <ContactContainer>
      <ContactWrapper>
        <ContactImg src={map} />
        <ContactInfo>
          <ContactH2>Contact me</ContactH2>
          <ContactInput src='type' placeholder='Name' />
          <ContactInput src='type' placeholder='Email' />
          <ContactInput src='type' placeholder='Phone' />
          <ContactMsg placeholder="Message"></ContactMsg>
          <ContactButton>Send</ContactButton>
        </ContactInfo>
      </ContactWrapper>
    </ContactContainer>
  )
}

export default Contact
