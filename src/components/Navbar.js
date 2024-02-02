import React from 'react'
import logoImage from '../utils/logo@2x.png';

function Navbar() {
  return (
    <div>
         <nav>
        <ul>
          <li><img src={logoImage} alt="MakeMyTrip Logo" /></li>
          <li>Flights</li>
          <li>Hotels</li>
          <li>Home</li>
          <li>Flights</li>
          <li>Hotels</li>
          <li>Home</li>
          <li>Flights</li>
          <li>Hotels</li>         
        </ul>
      </nav>
    </div>
  )
}

export default Navbar