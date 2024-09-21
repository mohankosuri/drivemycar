import { NavLink } from "react-router-dom";

const LoginPage = () => {
    return (
      <div className="flex h-[551px]">
        {/* Left Side Image */}
        <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('https://images.news18.com/ibnlive/uploads/2023/04/classic-car.jpg')" }}>
          <div className="flex items-center justify-center h-full bg-opacity-30">
            <h1 className="text-white text-4xl font-bold">Drive My Car</h1>
          </div>
        </div>
        
        {/* Right Side Login Form */}
        <div className="w-1/2 flex items-center justify-center bg-white">
          <form className="w-3/4 max-w-sm">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Login to Your Account</h2>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>
  
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">Password</label>
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
  
            {/* Google Login Button */}
            <button className="w-full flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
              <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 12v1.5l4 4h4.5v4.5h-5.5l-4-4-4 4H1.5v-4.5h4l4-4H3.5v-4.5h5l4 4z" />
              </svg>
              Login with Google
            </button>
  
            <p className="mt-4 text-gray-600 text-sm text-center">
              Don't have an account? <a href="#" className="text-blue-500 hover:underline"><NavLink to={'/signup'}>Sign up</NavLink></a>
            </p>
          </form>
        </div>
      </div>
    );
  };
  
  export default LoginPage;
  