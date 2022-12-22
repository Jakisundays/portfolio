import './App.css';
import { Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import { useState } from 'react';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/about/About';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  return (
  <>
  <SideBar isOpen={isOpen} toggle={toggle}/>
  <NavBar toggle={toggle}/>
    <Routes>
      <Route index path="/portfolio" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/work" element={<Portfolio />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer />
  </>
  );
}

export default App;
