import React from 'react';

function CarsFilter() {
  return (
    <div className="background-image flex flex-col justify-center items-center text-white h-[550px]"
         style={{ backgroundImage: "url('https://img.freepik.com/free-photo/sports-car-races-through-dark-blurred-motion-generative-ai_188544-12490.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="overlay bg-black bg-opacity-50 p-8 rounded-lg text-center">
        <h2 className="text-sm font-light">BOOK ANY CAR AT LOWER PRICE</h2>
        <h1 className="text-5xl font-bold mt-2">CAR RENTALS</h1>
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          {/* Pick-up Location */}
          <div className="flex-1">
            <label className="block text-gray-700 text-sm font-bold mb-2">Pick-up Location</label>
            <select className="w-full p-2 border rounded text-gray-700">
              <option>Pick-up Location</option>
              <option value="new-york">New York</option>
              <option value="los-angeles">Los Angeles</option>
              <option value="chicago">Chicago</option>
              <option value="houston">Houston</option>
              <option value="miami">Miami</option>
            </select>
          </div>

          {/* Pick-up Date */}
          <div className="flex-1">
            <label className="block text-gray-700 text-sm font-bold mb-2">Pick-up Date</label>
            <div className="relative">
              <input type="date" className="w-full p-2 border rounded text-gray-700" />
              <i className="fas fa-calendar-alt absolute right-3 top-3 text-gray-400"></i>
            </div>
          </div>

          {/* Drop-off Date */}
          <div className="flex-1">
            <label className="block text-gray-700 text-sm font-bold mb-2">Drop-off Date</label>
            <div className="relative">
              <input type="date" className="w-full p-2 border rounded text-gray-700" />
              <i className="fas fa-calendar-alt absolute right-3 top-3 text-gray-400"></i>
            </div>
          </div>

          {/* Car Type */}
          <div className="flex-1">
            <label className="block text-gray-700 text-sm font-bold mb-2">Car Type</label>
            <select className="w-full p-2 border rounded text-gray-700">
              <option>Cars</option>
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
              <option value="convertible">Convertible</option>
              <option value="truck">Truck</option>
              <option value="minivan">Minivan</option>
            </select>
          </div>

          {/* Find a Car Button */}
          <div className="flex items-end">
            <button className="bg-red-400 hover:bg-red-500 text-white p-2 rounded font-bold px-6">Find a Car</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarsFilter;
