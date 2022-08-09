import React from 'react'
import { FooterContainer, FooterDisplay, FooterName, FooterWrapper, FooterYear, FooterImg } from './FooterElements'
import EmojiGif from '/Users/jacobdominguez/Documents/codiyapa/portfolio/src/images/pp.jpeg';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterDisplay>
          <FooterImg src={EmojiGif} />
          <FooterName to='/'>Jacob Dominguez</FooterName>
        </FooterDisplay>
        <FooterYear>2022</FooterYear>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
