 
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Rating from '@mui/material/Rating';

const CarCard = ({ car }:any) => {

    const [value, setValue] =useState<number | null>(2);

    
    return (
        <div className="border rounded p-4">
            <img src={car.image} alt={car.name} className="w-full mb-4 rounded" />
            <h3 className="font-semibold">{car.name}</h3>
            <p>{car.details}</p>
            <div className="flex items-center mb-2">
                <span className="text-yellow-500"><i className="fas fa-star"></i></span>
                <span className="ml-1">{car.rating}</span>
                <Rating
        name="simple-controlled"
        value={value}
        onChange={(newValue:any) => {
          setValue(newValue);
        }}
      />
            </div>
            <p>{car.price}</p>
            <p className="text-gray-500">{car.excludingFees}</p>
            <NavLink to={'/carbooking'}>
            <button className="w-full mt-2 p-2 bg-red-500 text-white rounded">Book Now</button></NavLink>
        </div>
    );
};

export default CarCard;
