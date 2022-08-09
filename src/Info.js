import {Gh, Lk, Ig} from './components/Home/HomeComponents';

export const info = [
    {
        name: 'Jacob',
        fullName: 'Jacob Dominguez',
        year: '2022',
        resume: 'aqui va la cosa para descargar',
        profilePicture: require('./images/pp.jpeg'),
        bio: [{
            emoji: '⛽',
            text: 'fueled by discipline'
        },
        {
            emoji: "👨‍🎓",
            text: "Ecommerce Student at Universidad de Palermo"
        },
        {
            emoji: "📧",
            text: "JacobGuillermooo@Gmail.com"
        }],
        social: [{
            link: 'instagram.com',
            icon: <Ig />
        },
        {
            link: 'linkedin.com',
            icon: <Lk />
        },
        {
            link: 'github.com',
            icon: <Gh />
        }],
        footerImg: require('./images/pp.jpeg') 

    }
]

{info.social.map((link, icon) =>{
    <SocialLink to={link}>
        {icon}
    </SocialLink>
})}