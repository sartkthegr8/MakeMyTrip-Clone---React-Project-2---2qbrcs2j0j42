import React from 'react'
import Navbar from './navbar/Navbar'
import Offer from './Offer'
import Header from './header/Header'
import Abovefooter from './footer/Abovefooter'

import Footer from './footer/Footer'
import Upfooter from './footer/Upfooter'

function Home() {
  return (
    <div>
        <Navbar/>
        <Header/>
        {/* <Offer/> */}
        {/* <Abovefooter/> */}
        <Upfooter/>
       
        <Footer/>
    </div>
  )
}

export default Home