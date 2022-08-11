import React from 'react'
import { PortfolioCode, PortfolioContainer, PortfolioDemo, PortfolioH1, PortfolioImg, PortfolioWrapper } from './PortfolioElements'
import img from '/Users/jacobdominguez/Documents/codiyapa/portfolio/src/images/mockup.png';
import { Gi3DGlasses } from "react-icons/gi";
import { VscCode } from "react-icons/vsc";


const Portfolio = () => {
  return (
    <PortfolioContainer>
      <PortfolioWrapper>
        <PortfolioImg src={img} />
        <PortfolioH1>Project</PortfolioH1>
        <PortfolioDemo to='/' ><Gi3DGlasses /> Live Demo</PortfolioDemo>
        <PortfolioCode to='/' ><VscCode /> Source Code</PortfolioCode>
      </PortfolioWrapper>
    </PortfolioContainer>
  )
}

export default Portfolio

