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
import { info } from "../../utils/info";

const Portfolio = () => {
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
