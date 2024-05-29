import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { blue, green, orange, purple } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { projectID } from "../../constants";

const JWT = JSON.parse(localStorage.getItem("authToken"));

function BookingHistory() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [showFlights, setShowFlights] = useState(true);
  const [showTrains, setShowTrains] = useState(true);
  const [showBuses, setShowBuses] = useState(true);
  const [showHotels, setShowHotels] = useState(true);

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
        navigate("/");
      }
    } catch (error) {
      console.log(error);
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
          airlineTicketno: booking.flight.airline,
          source: booking.flight.source,
          destination: booking.flight.destination,
          departureTime: booking.flight.departureTime,
          arrivalTime: booking.flight.arrivalTime,
          ticketPrice: booking.flight.ticketPrice,
        };
      case "train":
        return {
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
          // rooms: booking.hotel.rooms.map((room) => ({
          //   roomNumber: room.roomNumber,
          //   roomType: room.roomType,
          //   costPerNight: room.costPerNight,
          //   roomSize: room.roomSize,
          //   bedDetail: room.bedDetail,
          //   price: room.price,
          //   cancellationPolicy: room.cancellationPolicy,
          // })),
        };
      default:
        return {};
    }
  }

  const getAvatarColor = (type) => {
    switch (type) {
      case "bus":
        return orange[500];
      case "flight":
        return blue[500];
      case "train":
        return green[500];
      case "hotel":
        return purple[500];
      default:
        return grey[500];
    }
  };

  const getAvatarLetter = (type) => {
    return type.charAt(0).toUpperCase();
  };

  return (
    <div style={{ paddingTop: "70px" }}>
      <FormGroup row>
        <FormControlLabel
          control={<Checkbox checked={showFlights} onChange={() => setShowFlights(!showFlights)} />}
          label="Flights"
        />
        <FormControlLabel
          control={<Checkbox checked={showTrains} onChange={() => setShowTrains(!showTrains)} />}
          label="Trains"
        />
        <FormControlLabel
          control={<Checkbox checked={showBuses} onChange={() => setShowBuses(!showBuses)} />}
          label="Buses"
        />
        <FormControlLabel
          control={<Checkbox checked={showHotels} onChange={() => setShowHotels(!showHotels)} />}
          label="Hotels"
        />
      </FormGroup>

      {bookings
        .filter((booking) => {
          if (booking.type === "flight" && showFlights) return true;
          if (booking.type === "train" && showTrains) return true;
          if (booking.type === "bus" && showBuses) return true;
          if (booking.type === "hotel" && showHotels) return true;
          return false;
        })
        .map((booking, index) => (
          <Card
            key={index}
            variant="outlined"
            sx={{
              mb: 2,
              borderRadius: 10,
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
            }}
          >
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: getAvatarColor(booking.type) }}>
                  {getAvatarLetter(booking.type)}
                </Avatar>
              }
              title={<Typography variant="h6">{booking.type.toUpperCase()}</Typography>}
              subheader={<Typography variant="body2" color="textSecondary">{booking.status}</Typography>}
              sx={{ backgroundColor: "#f5f5f5", padding: "16px 24px" }}
            />
            <CardContent sx={{ padding: "24px" }}>
              <Typography variant="body1" gutterBottom>
                <strong>Details:</strong>
              </Typography>
              {booking.type === "hotel" && booking.details.rooms ? (
                <ul style={{ listStyleType: "none", paddingLeft: 20 }}>
                  {booking.details.rooms.map((room, roomIndex) => (
                    <li key={roomIndex} style={{ marginBottom: "16px" }}>
                      <Typography variant="body2">
                        <strong>Room {room.roomNumber}:</strong>
                      </Typography>
                      <ul>
                        <li>
                          <strong>Type:</strong> {room.roomType}
                        </li>
                        <li>
                          <strong>Cost Per Night:</strong> {room.costPerNight}
                        </li>
                        <li>
                          <strong>Room Size:</strong> {room.roomSize}
                        </li>
                        <li>
                          <strong>Bed Detail:</strong> {room.bedDetail}
                        </li>
                        <li>
                          <strong>Price:</strong> {room.price}
                        </li>
                        <li>
                          <strong>Cancellation Policy:</strong> {room.cancellationPolicy}
                        </li>
                      </ul>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul style={{ listStyleType: "none", paddingLeft: 20 }}>
                  {Object.entries(booking.details).map(([key, value]) => (
                    <li key={key}>
                      <Typography variant="body2">
                        <strong>{key}:</strong> {value}
                      </Typography>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        ))}
    </div>
  );
}

export default BookingHistory;
