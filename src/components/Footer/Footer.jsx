import React from 'react'
import { FooterContainer, FooterDisplay, FooterName, FooterWrapper, FooterYear, FooterImg, SpanF } from './FooterElements'
import EmojiGif from '/Users/jacobdominguez/Documents/codiyapa/portfolio/src/images/Footer.png';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterDisplay>
          <FooterImg src={EmojiGif} />
          <FooterName to='/'>Created by --<SpanF>Jacob Dominguez</SpanF></FooterName>
        </FooterDisplay>
        <FooterYear>© 2022</FooterYear>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer

