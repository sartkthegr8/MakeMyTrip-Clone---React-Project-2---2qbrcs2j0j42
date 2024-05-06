import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import { projectID } from "../../constants";

const JWT = JSON.parse(localStorage.getItem("authToken"));

function BookingHistory() {
  const navigation = useNavigate();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getHistory();
  }, []);

  async function getHistory() {
    const url = `https://academics.newtonschool.co/api/v1/bookingportals/booking/`;
    try {
      if (JWT) {
        const data = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            projectID: projectID,
            Authorization: `Bearer ${JWT}`,
          },
        });
        const res = await data.json();
        const transformedBookings = res?.data?.map((booking) => ({
          userName: booking.user.name,
          type: booking.booking_type,
          details: getDetails(booking.booking_type, booking),
          status: booking.status,
        }));
        setBookings(transformedBookings);
      } else {
        navigation("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("hello");
    }
  }

  function getDetails(bookingType, booking) {
    switch (bookingType) {
      case "bus":
        return {
          name: booking.bus.name,
          type: booking.bus.type,
          source: booking.bus.source,
          destination: booking.bus.destination,
          departureTime: booking.bus.departureTime,
          arrivalTime: booking.bus.arrivalTime,
        };
      case "flight":
        return {
          // flightID: booking.flight.flightID,
          airlineTicketno: booking.flight.airline,
          source: booking.flight.source,
          destination: booking.flight.destination,
          departureTime: booking.flight.departureTime,
          arrivalTime: booking.flight.arrivalTime,
          ticketPrice: booking.flight.ticketPrice,
        };
      case "train":
        return {
          // Add train details here
          trainName: booking.train.trainName,
          trainNumber: booking.train.trainNumber,
          source: booking.train.source,
          destination: booking.train.destination,
          departureTime: booking.train.departureTime,
          arrivalTime: booking.train.arrivalTime,
          travelDuration: booking.train.travelDuration,
          fare: booking.train.fare,
        };

      case "hotel":
        return {
          hotelName: booking.hotel.name,
          location: booking.hotel.location,
          //   roomNumber: booking.hotel.roomNumber,
          // roomType: room.roomType,
          // costPerNight: room.costPerNight,
          // roomSize: room.roomSize,
          // bedDetail: room.bedDetail,
          // price: room.price,
        };

      default:
        return {};
    }
  }

  return (
    <div style={{ paddingTop: "70px" }}>
      {bookings.map((booking, index) => (
        <Card
          key={index}
          variant="outlined"
          sx={{
            mb: 1,
            borderRadius: 10,
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <CardContent>
            {/* <Typography variant="h6"><strong>User:</strong> {booking.userName}</Typography> */}
            <Typography variant="body1">
              <strong>Booking Type: </strong>
              {booking.type}
            </Typography>
            <Typography variant="body2">
              <strong>Status:</strong>
              {booking.status}
            </Typography>
            <Typography variant="body2">
              <strong>Details:</strong>
            </Typography>
            <ul style={{ listStyleType: "none", paddingLeft: 20 }}>
              {Object.entries(booking.details).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default BookingHistory;
