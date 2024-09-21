import React from 'react';
import { NavLink } from 'react-router-dom';

const CarCard = ({ car }:any) => {
    return (
        <div className="border rounded p-4">
            <img src={car.image} alt={car.name} className="w-full mb-4 rounded" />
            <h3 className="font-semibold">{car.name}</h3>
            <p>{car.details}</p>
            <div className="flex items-center mb-2">
                <span className="text-yellow-500"><i className="fas fa-star"></i></span>
                <span className="ml-1">{car.rating}</span>
            </div>
            <p>{car.price}</p>
            <p className="text-gray-500">{car.excludingFees}</p>
            <NavLink to={'/carbooking'}>
            <button className="w-full mt-2 p-2 bg-red-500 text-white rounded">Book Now</button></NavLink>
        </div>
    );
};

export default CarCard;
