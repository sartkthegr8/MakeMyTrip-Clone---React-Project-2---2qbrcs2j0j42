import React, { useState, useEffect } from "react";
import "../Home.css";

function FHome({ from, setfrom, to, setTo, flightsProps, setFilteredFlights }) {
  const [flightOption, setFlightOption] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights"
        );
        const data = await response.json();
        setFlightOption(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  async function searchBuses(setIsLoading) {
    // const day = WEEKDAYS[new dayjs(searchParams.get("date")).day()];
    // const searchVal = JSON.stringify({
    // 	source: BUS_CITIES[source],
    // 	destination: BUS_CITIES[destination],
    // });
    const url = `https://academics.newtonschool.co/api/v1/bookingportals/flight?search=${JSON.stringify(
      { source: from, destination: to }
    )}&day=Mon`;
    try {
      const data = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          projectID: "f104bi07c490",
        },
      });
      const res = await data.json();
      console.log(res);
      // setBusRoutes(res.data.buses);
    } catch (error) {
      console.log(error);
      // setBusRoutes(null);
    } finally {
      // setIsLoading(false);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = flightsProps.filter(
      (data) => data.from === from && data.to === to
    );
    setFilteredFlights(result);
    searchBuses();
  };

  const handleFromChange = (event) => {
    setfrom(event.target.value);
  };

  const handleToChange = (event) => {
    setTo(event.target.value);
  };

  return (
    <div className="home__container">
      <div className="home">
        <p>Book International and Domestic Flights</p>
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <div className="from home__input">
              <p>FROM</p>
              <select onChange={handleFromChange} defaultValue="1">
                <option value="dehli">Select City</option>
                {flightOption.map((form, index) => (
                  <option key={index} value={form.from}>
                    {form.from}
                  </option>
                ))}
              </select>
            </div>
            <div className="to home__input">
              <p>TO</p>
              <select onChange={handleToChange} defaultValue="1">
                <option value="goa">Select City</option>
                {flightOption.map((to, index) => (
                  <option key={index} value={to.to}>
                    {to.to}
                  </option>
                ))}
              </select>
            </div>
            <div className="departure home__input">
              <p>DEPARTURE DATE</p>
              <input type="date" />
            </div>
          </div>
          <div>
            <button className="home__search">SEARCH</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FHome;
