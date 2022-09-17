import './App.css';
import HomePage from './Pages/HomePage';
import { Route, Routes } from "react-router-dom";
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import PortfolioPage from './Pages/PortfolioPage';

function App() {
  return (
    <Routes>
      <Route index path="/portfolio" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/work" element={<PortfolioPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default App;
