import React, { useState, useEffect } from 'react';
import "./FlightList.css";
import FCard from './FCard';
import FHome from "./FHome";

function FlightList({ projectID }) {
  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [flightDetails, setFlightDetails] = useState(null);

  useEffect(() => {
    // Fetch flights data
    const fetchFlights = async () => {
      try {
        const response = await fetch(`https://academics.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights`);
        if (response.ok) {
          const data = await response.json();
          setFilteredFlights(data);
          setFlights(data);
        } else {
          throw new Error('Failed to fetch flights');
        }
      } catch (error) {
        console.error('Error fetching flights:', error);
      }
    };
    fetchFlights();
  }, []);

  // Function to fetch a single flight's data
  const fetchFlightDetails = async (flightId) => {
    try {
      const response = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/flight/${flightId}`, {
        headers: {
          projectID: projectID
        }
      });
      if (response.ok) {
        const data = await response.json();
        // Update flight details state with the fetched data
        setFlightDetails(data);
      } else {
        throw new Error('Failed to fetch flight details');
      }
    } catch (error) {
      console.error('Error fetching flight details:', error);
    }
  };

  // Call fetchFlightDetails function with the flightId when needed

  // Additional details
  const numberOfSeatsLeft = flightDetails ? flightDetails.seatsLeft : 0;
  const cabinBaggage = "7 kg (max dimension 55cm x 40cm x 20cm)";
  const checkInBaggage = "20 kg (max dimension 158cm)";
  const cancellationPolicy = "Free cancellation within 24 hours of booking";

  return (
    <>
      <FHome
        flights={flights}
        setFilteredFlights={setFilteredFlights}
      />
      <div className='flight__container'>
        <div className='flight'>
          <h3>Available Tickets</h3>
          <div className='flight__cards'>
            {filteredFlights.map((flight, index) => (
              <FCard
                key={index}
                flight={flight}
                fetchFlightDetails={fetchFlightDetails}
                // Pass any other necessary props to FCard component
              />
            ))}
          </div>
        </div>
        {/* Display additional details */}
        {flightDetails && (
          <div className="additional-details">
            <h3>Additional Details</h3>
            <p>Number of Seats Left: {numberOfSeatsLeft}</p>
            <p>Cabin Baggage: {cabinBaggage}</p>
            <p>Check-in Baggage: {checkInBaggage}</p>
            <p>Cancellation Policy: {cancellationPolicy}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default FlightList;
