import Home from "./screens/Home"
import Contact from "./screens/Contact"
import AboutUs from "./screens/AboutUs"
import Cars from "./screens/Cars"
import Navbar from "./components/Navbar"
import { Routes,Route } from 'react-router-dom'
import CarBooking from "./components/Carbooking"
import LoginPage from "./components/Loginpage"
import SignUpPage from "./components/Sighuppage"

export default function App() {
  return (
    <div>
       <Navbar/>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/about" element={<AboutUs/>} />
            <Route path="/cars" element={<Cars/>} />
            <Route path="/carbooking" element={<CarBooking/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/signup" element={<SignUpPage/>} />
        </Routes>
    </div>
  )
}