import React from 'react'
import {AboutContainer, AboutTerminal, AboutMenu, FakeClose, FakeMinimize, FakeZoom, AboutScreen, AboutTopLine, AboutDesc, AboutSpan, AboutSpan2, AboutSkills, AboutLi} from './AboutComponents'

const About = () => {

  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'Python',
    'React.js',
    'Axios',
    'Redux',
    'Microsoft Office',
    'Node.js',
    'Express.js',
    'MongoDB',
    'socket.io',
    'JWT'
  ]


  return (
    <AboutContainer>
      <AboutTerminal>
        <AboutMenu>
          <FakeClose />
          <FakeMinimize />
          <FakeZoom />
        </AboutMenu>
        <AboutScreen>
          <AboutTopLine><AboutSpan>hire $ </AboutSpan> yo aboutJacob</AboutTopLine>
          <AboutDesc><AboutSpan>aboutJacob</AboutSpan> <AboutSpan2>(Master)</AboutSpan2> 
          <AboutSpan> $ </AboutSpan>Hello! I'm Jacob. I'm a Digital marketing student at Universidad de Palermo. I am courteous and enthusiastic, interested in computing, digital marketing and everything that is in its orbit. Specialized in front end development in interactive design in responsive websites.</AboutDesc>
        </AboutScreen>
      </AboutTerminal>

      <AboutTerminal>
        <AboutMenu>
          <FakeClose></FakeClose>
          <FakeMinimize></FakeMinimize>
          <FakeZoom></FakeZoom>
        </AboutMenu>
        <AboutScreen>
          <AboutTopLine><AboutSpan>jacobDominguez $ </AboutSpan> cd skills/tools</AboutTopLine>
          <AboutDesc><AboutSpan>skills / tools</AboutSpan> <AboutSpan2>(Master)</AboutSpan2> 
          <AboutSpan> Proficient with: </AboutSpan>
          <AboutSkills>
            {skills.map((skill, index) => 
              <AboutLi key={index}> {skill} </AboutLi>
            )}
           
          </AboutSkills>
          </AboutDesc>
        </AboutScreen>
      </AboutTerminal>
    </AboutContainer>
  )
}

export default About

