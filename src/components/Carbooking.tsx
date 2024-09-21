import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const CarBooking = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex items-center mb-4 cursor-pointer">
      <FontAwesomeIcon icon={faArrowLeft}/> 
        <span className="text-lg"> <NavLink to={'/cars'} className="mx-2">Back</NavLink></span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Main Content */}
        <div className="md:col-span-2">
          <img
            src="https://placehold.co/800x400"
            alt="Hyundai Verna Facelift 2024"
            className="w-full rounded-lg mb-4"
          />
          <div className="grid grid-cols-4 gap-2 mb-4">
            <img
              src="https://placehold.co/150x100"
              alt="Car image 1"
              className="w-full rounded-lg"
            />
            <img
              src="https://placehold.co/150x100"
              alt="Car image 2"
              className="w-full rounded-lg"
            />
            <img
              src="https://placehold.co/150x100"
              alt="Car image 3"
              className="w-full rounded-lg"
            />
            <img
              src="https://placehold.co/150x100"
              alt="Car image 4"
              className="w-full rounded-lg"
            />
          </div>
          <h1 className="text-2xl font-bold mb-2">Hyundai Verna Facelift 2024</h1>
          <p className="text-gray-600 mb-4">Hyundai Verna | Manual | Petrol | 5 Seats</p>
          <div className="flex items-center mb-4">
            <i className="fas fa-car text-xl mr-2"></i>
            <i className="fas fa-gas-pump text-xl mr-2"></i>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <i className="fas fa-car text-red-500 text-2xl mb-2"></i>
                <p>Body: Sedan</p>
              </div>
              <div>
                <i className="fas fa-tachometer-alt text-red-500 text-2xl mb-2"></i>
                <p>Mileage: 15 kmpl</p>
              </div>
              <div>
                <i className="fas fa-calendar-alt text-red-500 text-2xl mb-2"></i>
                <p>Year: 2024</p>
              </div>
              <div>
                <i className="fas fa-cogs text-red-500 text-2xl mb-2"></i>
                <p>Engine: 1199 CC</p>
              </div>
              <div>
                <i className="fas fa-chair text-red-500 text-2xl mb-2"></i>
                <p>Seating: 5</p>
              </div>
              <div>
                <i className="fas fa-cogs text-red-500 text-2xl mb-2"></i>
                <p>Gear: Manual</p>
              </div>
              <div>
                <i className="fas fa-snowflake text-red-500 text-2xl mb-2"></i>
                <p>AC: Manual</p>
              </div>
              <div>
                <i className="fas fa-gas-pump text-red-500 text-2xl mb-2"></i>
                <p>Fuel: Petrol</p>
              </div>
            </div>
          </div>
          <h2 className="text-xl font-bold mb-2">Ratings and reviews</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img
                src="https://placehold.co/100x100"
                alt="Reviewer"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <p className="font-bold">Lavanya, Chennai</p>
                <p>
                  Booked a car for a family trip which was very comfortable and in great
                  condition
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-2 h-2 bg-red-500 rounded-full mx-1"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full mx-1"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full mx-1"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full mx-1"></div>
            </div>
          </div>
        </div>
        {/* Booking Form */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Booking form</h2>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Pick-up Date</label>
            <input type="date" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Drop-off Date</label>
            <input type="date" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Wallet & Offers</label>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>Apply Coupon</span>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Trip Protection Package</label>
            <div className="flex items-center mb-2">
              <input type="radio" name="package" className="mr-2" />
              <span>Basic (INR 109)</span>
            </div>
            <div className="flex items-center mb-2">
              <input type="radio" name="package" className="mr-2" defaultChecked />
              <span>Standard (INR 119)</span>
            </div>
            <div className="flex items-center mb-2">
              <input type="radio" name="package" className="mr-2" />
              <span>Peace of Mind (INR 189)</span>
            </div>
          </div>
          <div className="text-right mb-4">
            <span className="text-xl font-bold">INR 1,520</span>
          </div>
          <button className="w-full bg-red-500 text-white py-2 rounded">
            LOGIN TO CONTINUE FOR PAYMENT
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarBooking;
