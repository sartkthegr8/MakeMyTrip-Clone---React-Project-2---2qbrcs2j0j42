import React from "react";

function Upfooter() {
  return (
    <>
      {/* First  */}
      <div>
        <h3 className="text-sm font-bold mb-2">PRODUCT OFFERING</h3>
        <p className="text-xs cursor-pointer text-gray-700 hover:text-blue-500">
          Flights International Flights Charter Flights Hotels International
          Hotels
        </p>
        {/* Rest of the offering items */}
      </div>

      {/* Second */}
      <div>
        <h3 className="text-sm font-bold mb-2">MAKEMYTRIP</h3>
        <p className="text-xs text-gray-700">
          About Us ,Investor Relations ,Careers ,Careers ,MMT Foundation
        </p>
      </div>

      {/* Third  */}
      <div>
        <h3 className="text-sm font-bold mb-2">ABOUT THIS SITE</h3>
        <p className="text-xs text-gray-700">
          Contact Us Payment Security,Privacy Policy,User Agreement,Terms of
          Service
        </p>
      </div>

      {/* Quick links */}
      <div>
        <h3 className="text-sm font-bold mb-2">QUICK LINKS</h3>
        <p className="text-xs text-gray-700">
          Delhi Chennai Flights, Delhi Mumbai Flights, ... (your quick links
          content)
        </p>
      </div>

      {/* Important links */}
      <div>
        <h3 className="text-sm font-bold mb-2">IMPORTANT LINKS</h3>
        <p className="text-sm text-gray-700">
          Cheap Flights, Flight Status, Kumbh Mela, ... (your important links
          content)
        </p>
      </div>

      {/* 2 section */}
      <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8">
        {/* Why MakeMyTrip */}
        <div>
          <h3 className="text-lg font-bold mb-2">Why MakeMyTrip?</h3>
          <p className="text-sm text-gray-700">
            Established in 2000, MakeMyTrip has since positioned itself as one
            of the leading companies, providing great offers, competitive
            airfares, exclusive discounts, and a seamless online booking
            experience to many of its customers...
          </p>
        </div>

        {/* Booking Flights with MakeMyTrip */}
        <div>
          <h3 className="text-lg font-bold mb-2">
            Booking Flights with MakeMyTrip
          </h3>
          <p className="text-sm text-gray-700">
            At MakeMyTrip, you can find the best of deals and cheap air tickets
            to any place you want by booking your tickets on our website or
            app...
          </p>
        </div>

        {/* Domestic Flights with MakeMyTrip */}
        <div>
          <h3 className="text-lg font-bold mb-2">
            Domestic Flights with MakeMyTrip
          </h3>
          <p className="text-sm text-gray-700">
            MakeMyTrip is India's leading player for flight bookings, and have a
            dominant position in the domestic flights sector...
          </p>
        </div>
      </div>
    </>
  );
}

export default Upfooter;
