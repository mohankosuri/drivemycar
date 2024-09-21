import React from 'react';
 // Ensure font-awesome is installed in your project

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8">
      {/* Header Section */}
      <div className="flex justify-around border-b border-gray-700 pb-4">
        <div className="font-bold text-orange-500">ABOUT US</div>
        <div className="font-bold">COMPANY PROFILE</div>
        <div className="font-bold">CAREERS</div>
        <div className="font-bold">HELP & SUPPORT</div>
      </div>

      {/* Content Section */}
      <div className="text-center py-8">
        <p className="mb-4">
          Drive My Car is the leading marketplace for car sharing in emerging markets, with over 20,000 cars on its technology-driven platform across India, Indonesia, and Egypt. Drive My Car empowers host entrepreneurs to safely and easily share their cars to earn additional passive income. Guests in the Drive My Car community enjoy a diverse, affordable selection of cars to unlock memorable driving experiences with friends and family. Founded in 2013 and headquartered in Bengaluru, India, Drive My Car employs over 250 people and operates in over 45 cities across India, Indonesia, and Egypt. Uri Levine, the co-founder of mobility unicorns Waze and Moovit, currently serves as Drive My Car's Chairman of the Board.
        </p>
        <p className="mb-4">
        Drive My Car is the leading marketplace for car sharing in emerging markets, with over 20,000 cars on its technology-driven platform across India, Indonesia, and Egypt. Drive My Car empowers host entrepreneurs to safely and easily share their cars to earn additional passive income.
        </p>
        <p className="mb-8">
        Drive My Car is the leading marketplace for car sharing in emerging markets, with over 20,000 cars on its technology-driven platform across India, Indonesia, and Egypt.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center mb-8">
          <p className="mr-4">Let's keep in touch</p>
          <i className="fab fa-instagram fa-2x mx-2"></i>
          <i className="fab fa-twitter fa-2x mx-2"></i>
        </div>

        {/* Download Section */}
        <div className="mb-4">
          <p className="font-bold">DOWNLOAD Drive My Car APP</p>
          <p>We have incredible offers, discounts & much more in our app.</p>
          <div className="flex justify-center mt-4">
            <img src="https://1000logos.net/wp-content/uploads/2020/08/App-Store-Logo-2013.png" alt="App Store Icon" className="mx-2 w-24 h-16" />
            <img src="https://cdn-icons-png.flaticon.com/512/732/732208.png" alt="Google Play Icon" className="mx-2 w-16 h-16" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
