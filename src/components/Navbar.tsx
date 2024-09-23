import React, { useState } from 'react';
import { FaPhoneAlt, FaSearch } from 'react-icons/fa';
import Sidenav from './Sidenav';
import { NavLink } from 'react-router-dom';

interface Profile {
  name: string;
  email: string;
  picture: string;
}

interface NavbarProps {
  profile: Profile | null;
  login: () => void;
  logOut: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ profile, login, logOut }) => {
  // State to control the visibility of the profile dropdown
  const [showDropdown, setShowDropdown] = useState(false);

  // Function to toggle the dropdown visibility
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="bg-black text-white flex items-center justify-between p-4">
      <div className="flex items-center">
        <Sidenav />
        <NavLink to={'/'} className="mx-2">Home</NavLink>
        <NavLink to={'/cars'} className="mx-2">Cars</NavLink>
        <NavLink to={'/about'} className="mx-2">About us</NavLink>
        <NavLink to={'/contact'} className="mx-2">Contact</NavLink>
      </div>
      <div className="flex items-center">
        <FaPhoneAlt className="mr-2" />
        <div className="mr-4">
          <div>Call Anytime</div>
          <div>+91 9874563210</div>
        </div>
        <FaSearch className="text-xl mr-4" />

        {profile ? (
          <div className="relative flex items-center">
            {/* Profile picture */}
            <img
              src={profile.picture}
              alt={profile.name}
              className="w-10 h-10 rounded-full cursor-pointer mr-4"
              onClick={toggleDropdown}
            />
            {/* Profile dropdown */}
            {showDropdown && (
              <div className="absolute right-0 w-64 bg-white text-black rounded-lg shadow-lg z-10 mt-[200px] p-4">
                <div className="p-4 border-b border-gray-300">
                  <div className="font-bold">{profile.name}</div>
                  <div className="text-sm text-gray-500">{profile.email}</div>
                </div>
                <button
                  onClick={logOut}
                  className="w-full text-left px-4 py-2"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={login}
            className="bg-red-500 text-white px-4 py-2 rounded font-bold"
          >
            Login/Signup
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
