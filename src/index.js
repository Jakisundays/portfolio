import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import PortfolioPage from './Pages/PortfolioPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/portfolio" element={<App />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/work" element={<PortfolioPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  </BrowserRouter>
);
