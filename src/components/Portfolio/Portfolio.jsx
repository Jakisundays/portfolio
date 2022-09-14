import React from 'react'
import { PortfolioCode, PortfolioContainer, PortfolioDemo, PortfolioDesc, PortfolioH1, PortfolioImg, PortfolioWrapper } from './PortfolioElements'
import img from '/Users/jacobdominguez/Documents/codiyapa/portfolio/src/images/mockup.png';
// import img2 from '/Users/jacobdominguez/Documents/codiyapa/portfolio/src/images/mockup2.png';
import img3 from '/Users/jacobdominguez/Documents/codiyapa/portfolio/src/images/mockup3.png';
import { Gi3DGlasses } from "react-icons/gi";
import { VscCode } from "react-icons/vsc";


const Portfolio = () => {
  return (
    <PortfolioContainer>

      <PortfolioWrapper>
        <PortfolioImg src={img} />
        <PortfolioH1>Cotidiano</PortfolioH1>
        <PortfolioDesc>Variety of online tools for everyday use.</PortfolioDesc>
        <PortfolioDemo href='https://jakisundays.github.io/cotidiano/' target="_blank" ><Gi3DGlasses /> Live Demo</PortfolioDemo>
        <PortfolioCode href='https://github.com/Jakisundays/cotidiano' target="_blank" ><VscCode /> Source Code</PortfolioCode>
      </PortfolioWrapper>

      {/* <PortfolioWrapper>
        <PortfolioImg src={img2} />
        <PortfolioH1>Club Indomita</PortfolioH1>
        <PortfolioDesc>Landing page for news clients of Club Indomita, to allow them access to join Club Indomita's discord channel.</PortfolioDesc>
        <PortfolioDemo href='https://jakisundays.github.io/clubIndomita/'  target="_blank" ><Gi3DGlasses/> Live Demo</PortfolioDemo>
        <PortfolioCode href='https://github.com/Jakisundays/clubIndomita' target="_blank" ><VscCode /> Source Code</PortfolioCode>
      </PortfolioWrapper> */}

      <PortfolioWrapper>
        <PortfolioImg src={img3} />
        <PortfolioH1> Quiz App</PortfolioH1>
        <PortfolioDesc>Collection of number of different types of quizzes like technical, games, sports, etc. The user can access/play all of the quiz and can attempt any of the one. There will be limited number of questions and for each correct answer user will get a credit score. Created using React.js, Axios and Redux</PortfolioDesc>
        <PortfolioDemo href='https://jakisundays.github.io/Quiz/' target="_blank" ><Gi3DGlasses /> Live Demo</PortfolioDemo>
        <PortfolioCode href='https://github.com/Jakisundays/Quiz' target="_blank" ><VscCode /> Source Code</PortfolioCode>
      </PortfolioWrapper>

    </PortfolioContainer>
  )
}

export default Portfolio

