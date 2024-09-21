import React from 'react';

const CarTypes = () => {
  const carData = [
    { name: 'Sedan', imgSrc: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { name: 'Hatchback', imgSrc: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'SUV', imgSrc: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Convertible', imgSrc: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { name: 'Jeep', imgSrc: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=600' }
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[300px] bg-gray-100 p-[100px]">
      <h2 className="text-gray-500 text-lg mb-2 font-bold">Select Car Types</h2>
      <h1 className="text-red-500 text-2xl font-bold mb-6">We're Offering Popular Car Models</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {carData.map((car, index) => (
          <div key={index} className="relative">
            <img
              src={car.imgSrc}
              alt={`${car.name} car`}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
              <span className="text-white text-lg font-semibold">{car.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarTypes;
