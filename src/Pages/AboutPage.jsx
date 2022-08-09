import React, { useState } from 'react';

import NavBar from '../components/NavBar/NavBar';
import SideBar from '../components/SideBar/SideBar';
import About from '../components/about/About';
import Footer from '../components/Footer/Footer';

const AboutPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
   <>
    <SideBar isOpen={isOpen} toggle={toggle}/>
    <NavBar toggle={toggle}/>
    <About />
    <Footer />
   </>
  )
}

export default AboutPage
