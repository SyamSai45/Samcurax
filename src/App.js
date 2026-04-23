import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PartnershipPage from './pages/Partnershippage';
import ServicesPage from './pages/ServicesPage';
import CareerPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import AppPage from './pages/Apppage';
import HomePage from './pages/HomePage';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/partnerships" element={<PartnershipPage />} />
        <Route path="/about" element={<PartnershipPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/careers" element={<CareerPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/clynix" element={<AppPage />} />
      </Routes>
    </Router>
  );
}

export default App;