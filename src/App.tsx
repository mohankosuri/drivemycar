import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'; // Import useNavigate
import Home from "./screens/Home";
import Contact from "./screens/Contact";
import AboutUs from "./screens/AboutUs";
import Cars from "./screens/Cars";
import Navbar from "./components/Navbar";
import CarBooking from "./components/Carbooking";
import LoginPage from "./components/Loginpage";
import SignUpPage from "./components/Sighuppage";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

interface Profile {
  name: string;
  email: string;
  picture: string;
}

export default function App() {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<Profile | null>(null);  
  const navigate = useNavigate(); 

  const login = useGoogleLogin({
    onSuccess: (codeResponse: any) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  });

  useEffect(() => {
    if (user) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json'
          }
        })
        .then((res) => {
          setProfile(res.data);
          navigate('/');  
        })
        .catch((err) => console.log(err));
    }
  }, [user, navigate]);

  useEffect(() => {
    if (profile) {
      
      navigate('/');
    }
  }, [profile, navigate]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
    setUser(null);  
    navigate('/login'); 
  };

  return (
    <div>
      {profile ? (
        <div>
          <Navbar profile={profile} login={login} logOut={logOut} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/carbooking" element={<CarBooking />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </div>
      ) : (
        <div>
           
          <Routes>
            <Route path='/login' element={<LoginPage login={login}/>}></Route>
            <Route path='/signup' element={<SignUpPage/>}></Route>
          </Routes>
        </div>
      )}
    </div>
  );
}
