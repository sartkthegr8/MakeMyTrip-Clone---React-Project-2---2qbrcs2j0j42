import React, { useState, useEffect } from "react";
import "../Home.css";

function FHome({ projectID }) {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [departureDate, setDepartureDate] = useState("");
    const [numberOfTravelers, setNumberOfTravelers] = useState(1);
    const [travelClass, setTravelClass] = useState("Economy");
    const [offers, setOffers] = useState([]);
    const [filteredOffers, setFilteredOffers] = useState([]);

    useEffect(() => {
        const fetchOffers = async () => {
            try {
                const response = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/offers?filter={"type":"ALL"}`, {
                    headers: {
                        projectID: f104bi07c490
                    }
                });
                const data = await response.json();
                setOffers(data);
                setFilteredOffers(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchOffers();
    }, [projectID]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/flight?search={"source":"${from}","destination":"${to}"}&day=${departureDate}`, {
                headers: {
                    projectID: f104bi07c490
                }
            });
            if (!response.ok) {
                throw new Error('Failed to fetch flight details');
            }
            const searchData = await response.json();
            // Redirect user to search result page passing the searchData
            // Example: history.push('/search-results', { searchData });
        } catch (error) {
            console.error('Error performing search:', error);
        }
    };

    const handleFromChange = (event) => {
        setFrom(event.target.value);
    };

    const handleToChange = (event) => {
        setTo(event.target.value);
    };

    const handleDepartureDateChange = (event) => {
        setDepartureDate(event.target.value);
    };

    const handleNumberOfTravelersChange = (event) => {
        setNumberOfTravelers(event.target.value);
    };

    const handleTravelClassChange = (event) => {
        setTravelClass(event.target.value);
    };

    return (
        <div className="home__container">
            <div className="home">
                <p>Book International and Domestic Flights</p>
                <form onSubmit={handleSubmit}>
                    <div className="inputs">
                        <div className="from home__input">
                            <p>FROM (Enter city or airport)</p>
                            <input type="text" value={from} onChange={handleFromChange} placeholder="Enter city or airport" />
                        </div>
                        <div className="to home__input">
                            <p>TO (Enter city or airport)</p>
                            <input type="text" value={to} onChange={handleToChange} placeholder="Enter city or airport" />
                        </div>
                        <div className="departure home__input">
                            <p>DEPARTURE DATE</p>
                            <input type="date" value={departureDate} onChange={handleDepartureDateChange} />
                        </div>
                        <div className="number-of-travelers home__input">
                            <p>NUMBER OF TRAVELERS</p>
                            <input type="number" value={numberOfTravelers} onChange={handleNumberOfTravelersChange} />
                        </div>
                        <div className="travel-class home__input">
                            <p>CLASS</p>
                            <select value={travelClass} onChange={handleTravelClassChange}>
                                <option value="Economy">Economy</option>
                                <option value="Business">Business</option>
                                <option value="First Class">First Class</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <button className="home__search" type="submit">SEARCH</button>
                    </div>
                </form>
            </div>

            <div className="offers">
                <p>Offers</p>
                <div className="offer-categories">
                    <button onClick={() => setFilteredOffers(offers)}>All</button>
                    <button onClick={() => setFilteredOffers(offers.filter(offer => offer.type === "FLIGHTS"))}>Flights</button>
                    <button onClick={() => setFilteredOffers(offers.filter(offer => offer.type === "HOTELS"))}>Hotels</button>
                    <button onClick={() => setFilteredOffers(offers.filter(offer => offer.type === "BUS"))}>Bus</button>
                    <button onClick={() => setFilteredOffers(offers.filter(offer => offer.type === "RAILS"))}>Trains</button>
                </div>
                <div className="offer-list">
                    {filteredOffers.map((offer, index) => (
                        <div key={index} className="offer">
                            <h3>{offer.title}</h3>
                            <p>{offer.description}</p>
                            <p>{offer.discount}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FHome;
