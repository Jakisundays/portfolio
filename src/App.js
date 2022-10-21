import './App.css';
import HomePage from './Pages/HomePage';
import { Route, Routes } from "react-router-dom";
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import PortfolioPage from './Pages/PortfolioPage';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  return (
  <>
  <SideBar isOpen={isOpen} toggle={toggle}/>
  <NavBar toggle={toggle}/>
    <Routes>
      <Route index path="/portfolio" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/work" element={<PortfolioPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  </>
  );
}

export default App;
