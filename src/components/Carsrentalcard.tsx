 
 

const CarRentalCard = () => {
  return (
    <div className="max-w-sm mx-3 bg-white shadow-md rounded-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src="https://placehold.co/400x300"
        alt="Black Maruti Suzuki Sx4 2020 car parked on the side of the road"
      />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold">Maruti Suzuki Sx4 2020</h2>
            <p className="text-gray-600">Manual. Petrol. 5 Seaters</p>
          </div>
          <div className="flex items-center">
            <span className="text-yellow-500">
              <i className="fas fa-star"></i>
            </span>
            <span className="ml-1 text-gray-800">4.8</span>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold">INR 169/hr</p>
          <p className="text-gray-500">INR 848 Excluding fees</p>
        </div>
        <button className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default CarRentalCard;
