import React from 'react'
import {AboutContainer, AboutTerminal, AboutMenu, FakeClose, FakeMinimize, FakeZoom, AboutScreen, AboutTopLine, AboutDesc, AboutSpan, AboutSpan2} from './AboutComponents'

const About = () => {

  return (
    <AboutContainer>
      <AboutTerminal>
        <AboutMenu>
          <FakeClose></FakeClose>
          <FakeMinimize></FakeMinimize>
          <FakeZoom></FakeZoom>
        </AboutMenu>
        <AboutScreen>
          <AboutTopLine><AboutSpan>hire $ </AboutSpan> yo aboutJacob</AboutTopLine>
          <AboutDesc><AboutSpan>aboutJacob</AboutSpan> <AboutSpan2>(Master)</AboutSpan2> <AboutSpan> $ </AboutSpan>sit amet consectetur adipisicing elit. Velit rem quo, delectus tempore consequatur voluptatum mollitia nihil explicabo, adipisci repellendus amet natus fugiat perferendis ullam.</AboutDesc>
        </AboutScreen>
      </AboutTerminal>
    </AboutContainer>
  )
}

export default About

