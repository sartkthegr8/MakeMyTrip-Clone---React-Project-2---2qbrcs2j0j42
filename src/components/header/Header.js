import React from 'react';
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import TrainIcon from "@mui/icons-material/Train";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import MoneyIcon from "@mui/icons-material/Money";


function Header() {
  return (
    <div className="flex justify-center">
      <nav>
        <ul className="flex flex-wrap justify-center space-x-4">          
          <li><FlightIcon /> Flights</li>
          <li><HotelIcon /> Hotels</li>
          <li><HomeWorkIcon /> Homestays & Villas</li>
          <li><HolidayVillageIcon /> Holiday Packages</li>
          <li><TrainIcon /> Trains</li>
          <li><DirectionsBusFilledIcon /> Buses</li>
          <li><LocalTaxiIcon /> Cabs</li>
          <li><MoneyIcon /> Forex Card & Currency</li>         
          <li><CreditCardIcon /> Travel Insurance</li>          
        </ul>
      </nav>
    </div>
  );
}

export default Header;
