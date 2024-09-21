 
 
import { FaPhoneAlt, FaSearch } from 'react-icons/fa';
import Sidenav from './Sidenav';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="bg-black text-white flex items-center justify-between p-4">
      <div className="flex items-center">
        <Sidenav/>
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
        <NavLink to={'./login'}>
        <button className="bg-red-500 text-white px-4 py-2 rounded font-bold">Login/Signup</button></NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
