import React from 'react'
import Navbar from '../components/Navbar'
import CarsFilter from '../components/CarsFilter'
import CarTypes from '../components/Cartypes'
import CarRental from '../components/OfferingforRental'
import StatsBanner from '../components/Statuscars'
import HowItWorks from '../components/Howitworks'
import Footer from '../components/Footer'
 

const Home = () => {
  return (
    <div>
       
       <CarsFilter/>
       <CarTypes/>
       <CarRental/>
       <StatsBanner/>
       <HowItWorks/>
       <Footer/>
        
    </div>
  )
}

export default Home