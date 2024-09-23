import { NavLink } from "react-router-dom";

const SignUpPage = () => {
  return (
    <div
      className="relative flex items-center justify-end h-screen bg-cover bg-center p-[100px]"
      style={{
        backgroundImage:
          "url('https://www.bentleymotors.com/content/dam/bm/websites/bmcom/bentleymotors-com/homepage/launch/Mulliner%20Article%20Teaser%204.jpg/_jcr_content/renditions/original.image_file.1024.439.file/Mulliner%20Article%20Teaser%204.jpg')",
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0  text-white font-bold text-[100px] flex justify-start items-center ml-[100px]">
        Drive My <span className="text-red-500">Car</span>
      </div>

      {/* Sign Up Form */}
      <div className="relative bg-transparent p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-white flex justify-center">Create Your Account</h2>

        <div className="mb-4">
          <label className="block text-white text-sm font-semibold mb-2" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your full name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-white text-sm font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-white text-sm font-semibold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Create a password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-white text-sm font-semibold mb-2" htmlFor="confirm-password">
            Confirm Password
          </label>
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

        <p className="mt-4 text-white text-sm text-center">
          Already have an account?{" "}
          <NavLink to={"/login"} className="text-blue-500 hover:underline">
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
