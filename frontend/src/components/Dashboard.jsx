import React from 'react';
import NavbarDemo from './Navbar';
import HeroSection from './Herosection';
import '../css/Dashboard.css';
import CenterContent from './CenterContent';
import FlipCardGrid from './FlipCardGrid';
import ProfileCard from './ProfileCard';


function Dashboard() {
  return (
    <div className="container">
      <NavbarDemo />
      <HeroSection />
      <CenterContent />
      <ProfileCard />
      <FlipCardGrid />
    </div>
  );
}

export default Dashboard;
