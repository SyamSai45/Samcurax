import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ClynixAppPage from './pages/ClynixAppPage';
import PartnershipPage from './pages/Partnershippage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ClynixAppPage />} />
        <Route path="/partnerships" element={<PartnershipPage />} />
        <Route path="/about" element={<PartnershipPage />} />
        <Route path="/services" element={<PartnershipPage />} />
        <Route path="/careers" element={<PartnershipPage />} />
        <Route path="/contact" element={<PartnershipPage />} />
      </Routes>
    </Router>
  );
}

export default App;