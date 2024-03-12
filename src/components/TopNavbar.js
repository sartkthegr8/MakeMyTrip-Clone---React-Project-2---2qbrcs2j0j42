import React from 'react';
import './TopNavbar.css'; // Importing the external CSS file

function TopNavbar() {
  return (
    <div className="top-navbar">
      <div className="container">
        <div className="logo">
          <a href="/"><img src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/logo@2x.png" alt="MakeMyTrip Logo" /></a>
        </div>
        <div className="nav-links">
          <a href="#" className="nav-link">List Your Property</a>
          <span className="separator">|</span>
          <a href="#" className="nav-link">Introducing myBiz</a>
          <span className="separator">|</span>
          <a href="#" className="nav-link">My Trips</a>
        </div>
        <div className="nav-links">
          <a href="#" className="nav-link">Start earning today!</a>
          <span className="separator">|</span>
          <a href="#" className="nav-link">Business Travel Solution</a>
          <span className="separator">|</span>
          <a href="#" className="nav-link">Manage your bookings</a>
        </div>
        <div className="nav-links">
          <a href="#" className="nav-link">Login or Create Account</a>
          <span className="separator">|</span>
          <a href="#" className="nav-link">IN</a>
          <span className="separator">|</span>
          <a href="#" className="nav-link">ENG</a>
          <span className="separator">|</span>
          <a href="#" className="nav-link">INR</a>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
