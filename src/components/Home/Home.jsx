import React from 'react'
import Emojis from './Emojis'
import { HomeContainer, HomeAvatar, HomeBox, HomeH1, HomeName, HomeHand, HomeH2, HomeInfo, HomeSocial, Gh, Lk, SocialLink } from './HomeComponents'
import me from '/Users/jacobdominguez/Documents/codiyapa/portfolio/src/images/pp1.png';


const Home = () => {
    const bio = [{
        emoji: '⛽',
        text: 'fueled by discipline'
    },
    {
        emoji: "👨‍🎓",
        text: "Ecommerce Student at Universidad de Palermo"
    },
    {
        emoji: "📧",
        text: "jacobguillermooo@gmail.com"
    }]

    

  return (
    <HomeContainer>
        <HomeAvatar src={me}  alt='image of developer' />
        <HomeBox>
                <HomeH1>Hola, I'm
                    <HomeName> Jacob </HomeName>
                    <HomeHand> 🤚</HomeHand>
                    
                </HomeH1>
                <HomeH2>I'm a Front End Developer</HomeH2>
                <HomeInfo>
                    {bio.map((bio, index) => (
                        <Emojis key={index} emoji={bio.emoji} text={bio.text} />
                    ))}
                </HomeInfo>
                <HomeSocial>
                        <SocialLink target="_blank" href='https://www.linkedin.com/in/jacobguillermo/'>
                            <Lk />
                        </SocialLink>
                        
                        <SocialLink  href='https://github.com/Jakisundays' target="_blank">
                            <Gh />
                        </SocialLink>
                </HomeSocial>
            </HomeBox>
    </HomeContainer>
  )
}

export default Home
