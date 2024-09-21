import { NavLink } from "react-router-dom";

const SignUpPage = () => {
    return (
      <div className="flex h-[551px]">
        {/* Left Side Image */}
        <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('https://images.news18.com/ibnlive/uploads/2023/04/classic-car.jpg')" }}>
          <div className="flex items-center justify-center h-full bg-opacity-30">
            <h1 className="text-white text-4xl font-bold">Drive My Car</h1>
          </div>
        </div>
        
        {/* Right Side Sign Up Form */}
        <div className="w-1/2 flex items-center justify-center bg-white">
          <form className="w-3/4 max-w-sm">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Create Your Account</h2>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>
  
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
                placeholder="Create a password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>
  
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm your password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>
  
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4">
              Sign Up
            </button>
  
            <p className="mt-4 text-gray-600 text-sm text-center">
              Already have an account? <NavLink to={'/login'} className="text-blue-500 hover:underline">Login</NavLink>
            </p>
          </form>
        </div>
      </div>
    );
  };
  
  export default SignUpPage;
  