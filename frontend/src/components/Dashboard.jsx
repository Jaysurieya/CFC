import React from 'react';
import NavbarDemo from './Navbar';
import HeroSection from './Herosection';
import '../css/Dashboard.css';
import CenterContent from './CenterContent';

function Dashboard() {
  return (
    <div className="container">
      <NavbarDemo />
      <HeroSection />
      <CenterContent />
    </div> 
  );
}

export default Dashboard;
