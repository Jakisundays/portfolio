import React, { useState } from 'react';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';
import SideBar from '../components/SideBar/SideBar';

const ContactPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
   <>
    <SideBar isOpen={isOpen} toggle={toggle}/>
    <NavBar toggle={toggle}/>
    <Contact />
    <Footer />
   </>
  )
}

export default ContactPage
