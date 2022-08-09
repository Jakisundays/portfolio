import React, { useState } from 'react';
import NavBar from '../components/NavBar/NavBar';
import SideBar from '../components/SideBar/SideBar';
import Portfolio from '../components/Portfolio/Portfolio';
import Footer from '../components/Footer/Footer';

const PortfolioPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
   <>
    <SideBar isOpen={isOpen} toggle={toggle}/>
    <NavBar toggle={toggle}/>
    <Portfolio />
    <Footer />
   </>
  )
}

export default PortfolioPage
