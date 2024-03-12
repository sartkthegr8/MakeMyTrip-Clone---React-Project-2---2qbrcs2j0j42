import React from 'react';
import './TopFooter.css'; // Importing the CSS file for styling

function TopFooter() {
  return (
    <div className="top-footer">
      {/* First column */}
      <div className="footer-column">
        <h3 className="footer-heading">PRODUCT OFFERING</h3>
        <p className="footer-text">
          Flights International Flights Charter Flights Hotels International
          Hotels
        </p>
        {/* Rest of the offering items */}
      </div>

      {/* Second column */}
      <div className="footer-column">
        <h3 className="footer-heading">MAKEMYTRIP</h3>
        <p className="footer-text">
          About Us Investor Relations Careers MMT Foundation
        </p>
      </div>

      {/* Third column */}
      <div className="footer-column">
        <h3 className="footer-heading">ABOUT THIS SITE</h3>
        <p className="footer-text">
          Contact Us Payment Security Privacy Policy User Agreement Terms of
          Service
        </p>
      </div>

      {/* Quick links */}
      <div className="footer-column">
        <h3 className="footer-heading">QUICK LINKS</h3>
        <p className="footer-text">
          Delhi Chennai Flights Delhi Mumbai Flights ... (your quick links
          content)
        </p>
      </div>

      {/* Important links */}
      <div className="footer-column">
        <h3 className="footer-heading">IMPORTANT LINKS</h3>
        <p className="footer-text">
          Cheap Flights Flight Status Kumbh Mela ... (your important links
          content)
        </p>
      </div>

      {/* Two sections */}
      <div className="footer-section">
        {/* Why MakeMyTrip */}
        <div className="footer-subsection">
          <h3 className="footer-subheading">Why MakeMyTrip?</h3>
          <p className="footer-subtext">
            Established in 2000, MakeMyTrip has since positioned itself as one
            of the leading companies, providing great offers, competitive
            airfares, exclusive discounts, and a seamless online booking
            experience to many of its customers...
          </p>
        </div>

        {/* Booking Flights with MakeMyTrip */}
        <div className="footer-subsection">
          <h3 className="footer-subheading">Booking Flights with MakeMyTrip</h3>
          <p className="footer-subtext">
            At MakeMyTrip, you can find the best deals and cheap air tickets
            to any place you want by booking your tickets on our website or
            app...
          </p>
        </div>

        {/* Domestic Flights with MakeMyTrip */}
        <div className="footer-subsection">
          <h3 className="footer-subheading">Domestic Flights with MakeMyTrip</h3>
          <p className="footer-subtext">
            MakeMyTrip is India's leading player for flight bookings and has a
            dominant position in the domestic flights sector...
          </p>
        </div>
      </div>
    </div>
  );
}

export default TopFooter;
