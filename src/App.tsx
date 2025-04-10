// App.tsx (Main Application)
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';  // Import the Landing Page component
import StationeryPage from './StationeryPage';  // Import the Stationery Page component
import PrintPage from './PrintPage';
import Navbar from './components/Navbar';  // Import the Navbar that will be used in both pages
import CartPage from './CartPage';
import ContactUs from './contactus';
import LoginPage from './LoginPage.tsx';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Route for Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Route for Stationery Page */}
        <Route path="/stationery" element={<StationeryPage />} />

        <Route path="/upload" element={<PrintPage />} />

        <Route path="/contact" element={<ContactUs />} />

        <Route path="/cart" element={<CartPage />} />

        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
