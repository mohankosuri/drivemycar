import { NavLink } from "react-router-dom";
 
import Googlelogo from '../assets/google.png'

const LoginPage = ({login}:any) => {
  return (
    <div
      className="relative flex items-center justify-end h-screen bg-cover bg-center p-[100px]"
      style={{
        backgroundImage:
          "url('https://www.bentleymotors.com/content/dam/bm/websites/bmcom/bentleymotors-com/homepage/launch/Mulliner%20Article%20Teaser%204.jpg/_jcr_content/renditions/original.image_file.1024.439.file/Mulliner%20Article%20Teaser%204.jpg')",
      }}
    >
      
      <div className="absolute inset-0  text-white font-bold text-[100px] flex justify-start items-center ml-[100px]">
      Drive My <span className="text-red-500">Car</span>
      </div>

     
      <div className="relative bg-transparent p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-white flex justify-center">Login to Your Account</h2>

        
        <div className="mb-4">
              <label className="block text-white text-sm font-semibold mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-semibold mb-2" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>
            
  
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4">
              Login
            </button>

             

            <button className="w-full flex items-center justify-center bg-white text-black font-bold py-2 px-4 rounded" onClick={()=>login()}>
               <img src={Googlelogo} className="h-8 w-8"/>
              Login with Google
            </button>
  
            <p className="mt-4 text-white text-sm text-center">
              Don't have an account? <a href="#" className="text-blue-500 hover:underline"><NavLink to={'/signup'}>Sign up</NavLink></a>
            </p>
        

        
 

         

        
      </div>
    </div>
  );
};

export default LoginPage;
