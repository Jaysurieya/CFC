import React from 'react';
import NavbarDemo from './Navbar';
import HeroSection from './Herosection';
import '../css/Dashboard.css';

function Dashboard() {
  return (
    <div className="container">
      <NavbarDemo />
      <HeroSection />
    </div> 
  );
}

export default Dashboard;
