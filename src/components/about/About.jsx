import React from 'react'

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
          <AboutTopLine>$ yo aboutJacob<AboutSpan>_</AboutSpan></AboutTopLine>
          <AboutDesc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, ullam.<AboutSpan2>_</AboutSpan2></AboutDesc>
          <AboutEnd>Lorem ipsum dolor sit amet.<AboutSpan3>_</AboutSpan3></AboutEnd>
          <AboutFinish><AboutSpan4>_</AboutSpan4></AboutFinish>
        </AboutScreen>
      </AboutTerminal>
    </AboutContainer>
  )
}

export default About

