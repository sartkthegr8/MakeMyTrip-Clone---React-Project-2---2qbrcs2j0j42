import React from 'react';
// import logoImage from '../utils/logo@2x.png';


function Navbar() {
  return (
    <div className="bg-gray-800 text-white py-2">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* <li><img src={logoImage} alt="MakeMyTrip Logo" /></li> */}
        <div>
          <a href="#"></a>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300">List Your Property</a>
          <span className="text-gray-400">|</span>
          <a href="#" className="hover:text-gray-300">Introducing myBiz</a>
          <span className="text-gray-400">|</span>
          <a href="#" className="hover:text-gray-300">My Trips</a>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300">Start earning today!</a>
          <span className="text-gray-400">|</span>
          <a href="#" className="hover:text-gray-300">Business Travel Solution</a>
          <span className="text-gray-400">|</span>
          <a href="#" className="hover:text-gray-300">Manage your bookings</a>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300">Login or Create Account</a>
          <span className="text-gray-400">|</span>
          <a href="#" className="hover:text-gray-300">IN</a>
          <span className="text-gray-400">|</span>
          <a href="#" className="hover:text-gray-300">ENG</a>
          <span className="text-gray-400">|</span>
          <a href="#" className="hover:text-gray-300">INR</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
