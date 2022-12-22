import React from "react";
import {
  PortfolioCode,
  PortfolioContainer,
  PortfolioDemo,
  PortfolioDesc,
  PortfolioH1,
  PortfolioImg,
  PortfolioWrapper,
} from "./PortfolioElements";
import { Gi3DGlasses } from "react-icons/gi";
import { VscCode } from "react-icons/vsc";

const Portfolio = () => {
  const info = [
    {
      image: require("/Users/jacobdominguez/Documents/codiyapa/portfolio/src/images/mockup.png"),
      alt: "Cotidiano Mockup",
      h1: "Cotidiano",
      desc: "Variety of online tools for everyday use.",
      demoLink: "https://jakisundays.github.io/cotidiano/",
      codeLink: "https://github.com/Jakisundays/cotidiano",
    },
    {
      image: require("/Users/jacobdominguez/Documents/codiyapa/portfolio/src/images/mockup2.png"),
      alt: "Indomita Website",
      h1: "Club Indomita",
      desc: "Landing page for new clients of Club Indomita",
      demoLink: "https://jakisundays.github.io/clubIndomita/",
      codeLink: "https://github.com/Jakisundays/clubIndomita",
    },
    {
      image: require("/Users/jacobdominguez/Documents/codiyapa/portfolio/src/images/mockup3.png"),
      alt: "Quiz App Mockup",
      h1: "Quiz App",
      desc: "Collection of number of different types of quizzes like technical, games, sports, etc. The user can access/play all of the quiz and can attempt any of the one. There will be limited number of questions and for each correct answer user will get a credit score. Created using React.js, Axios and Redux",
      demoLink: "https://jakisundays.github.io/Quiz/",
      codeLink: "https://github.com/Jakisundays/Quiz",
    },
    {
      image: require("/Users/jacobdominguez/Documents/codiyapa/portfolio/src/images/batMockup.png"),
      alt: "Batman landing",
      h1: "Gotham: The video game",
      desc: "Fully functioning Gotham's landing page using Next13, Framer Motion, and Tailwind CSS",
      demoLink: "https://batman-landing.vercel.app/",
      codeLink: "https://github.com/Jakisundays/batman-landing",
    },
    {
      image: require("/Users/jacobdominguez/Documents/codiyapa/portfolio/src/images/carsMockup.png"),
      alt: "3D Machines",
      h1: "3D Machines",
      desc: "Racing videogame website trailer created with three.js and React.js.",
      demoLink: "https://jakisundays.github.io/3DMachines/",
      codeLink: "https://github.com/Jakisundays/3DMachines",
    },
  ];
  return (
    <PortfolioContainer>
      {info.reverse().map((obj, i) => (
        <PortfolioWrapper key={i}>
          <PortfolioImg src={obj.image} alt={obj.alt} />
          <PortfolioH1> {obj.h1} </PortfolioH1>
          <PortfolioDesc> {obj.desc} </PortfolioDesc>
          <PortfolioDemo href={obj.demoLink} target="_blank">
            <Gi3DGlasses /> Live Demo
          </PortfolioDemo>
          <PortfolioCode href={obj.codeLink} target="_blank">
            <VscCode /> Source Code
          </PortfolioCode>
        </PortfolioWrapper>
      ))}
    </PortfolioContainer>
  );
};

export default Portfolio;
