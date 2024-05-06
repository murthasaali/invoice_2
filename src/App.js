import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import InvoicePage from './pages/InvoicePage';
import './App.css';
import invoiceData from './Constants/Datas/InvoiceDatas';

function App() {
  useEffect(() => {
    // Store invoice data in localStorage when the component mounts
    localStorage.setItem('invoiceData', JSON.stringify(invoiceData));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/invoice" element={<InvoicePage />} />
      </Routes>
    </Router>
  );
}

export default App;
