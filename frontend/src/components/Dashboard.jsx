import React from 'react';
import NavbarDemo from './Navbar';
import HeroSection from './Herosection';
import '../css/Dashboard.css';
import CenterContent from './CenterContent';
import ZigzagList from './ZigZagList';
import ScrollFloat from './ScrollFloat/ScrollFloat';


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
