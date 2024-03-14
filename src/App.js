import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

import FlightList from './components/Flights/FlightList';
import HotelList from './components/Hotels/HotelList';
import TrainList from "./components/Trains/TrainList"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from "./components/auth/Register"
import Book from './components/Book/Book';
import DataApp from './components/DataApp';
import Footer from './components/Footer';
import TopNavbar from './components/TopNavbar';
import TopFooter from './components/TopFooter';
import AvailableTick from './components/AvailableTick';

function App() {
  return (
    <>
    <BrowserRouter>  
      <DataApp>
      <div className="App">
              <TopNavbar/>
              <Navbar/>

              <Routes>
                  <Route path="/" element={ <><FlightList/></> }/>
                  <Route path="/flight" element={<><FlightList/></>}/>
                  <Route path="/hotel" element={<><HotelList/></>}/>
                  <Route path="/train" element={ <><TrainList/></>}/>
                  <Route path="/search" element={ <><AvailableTick/></>}/>
                  <Route path="/book" element={ <Book/>}/>
                  <Route path="/login" element={ <Login/>}/>
                  <Route path="/register" element={ <Register/>}/>
                  
              </Routes>
              <TopFooter/>
              <Footer/>


              
      </div>
      </DataApp>

     </BrowserRouter>
    </>
  
  );
}

export default App;
