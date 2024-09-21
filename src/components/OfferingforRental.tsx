 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarRental = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true, // Enable center mode to add spacing
        centerPadding: '20px', // Add padding around center item
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const cars = [
        {
            id: 1,
            name: 'Maruti Suzuki Sx4 2020',
            features: 'Manual. Petrol. 5 Seaters',
            rating: 4.8,
            availableFrom: '15 February',
            price: 'INR 169/hr',
            location: 'Hyderabad',
            image: 'https://images.pexels.com/photos/100656/pexels-photo-100656.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            id: 2,
            name: 'Toyota Corolla 2021',
            features: 'Automatic. Diesel. 5 Seaters',
            rating: 4.7,
            availableFrom: '20 February',
            price: 'INR 189/hr',
            location: 'Bangalore',
            image: 'https://images.pexels.com/photos/977003/pexels-photo-977003.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            id: 3,
            name: 'Honda City 2020',
            features: 'Manual. Petrol. 5 Seaters',
            rating: 4.9,
            availableFrom: '25 February',
            price: 'INR 199/hr',
            location: 'Chennai',
            image: 'https://images.pexels.com/photos/119435/pexels-photo-119435.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            id: 4,
            name: 'Ford Mustang 2021',
            features: 'Automatic. Petrol. 4 Seaters',
            rating: 4.6,
            availableFrom: '28 February',
            price: 'INR 250/hr',
            location: 'Mumbai',
            image: 'https://images.pexels.com/photos/100656/pexels-photo-100656.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            id: 5,
            name: 'Hyundai Creta 2021',
            features: 'Manual. Diesel. 5 Seaters',
            rating: 4.7,
            availableFrom: '10 March',
            price: 'INR 210/hr',
            location: 'Pune',
            image: 'https://images.pexels.com/photos/977003/pexels-photo-977003.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
    ];

    return (
        <div className="flex flex-col items-center py-10">
            <h2 className="text-lg text-gray-500">Check out our new cars</h2>
            <h1 className="text-3xl font-bold text-red-500 mb-8">Cars We're Offering for Rentals</h1>
            <Slider {...settings} className="w-full max-w-5xl">
                {cars.map(car => (
                    <div key={car.id} className="border rounded-lg shadow-lg overflow-hidden mx-2">
                        <img src={car.image} alt={car.name} className="w-full h-40 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-bold">{car.name}</h3>
                            <p className="text-gray-500">{car.features}</p>
                            <div className="flex items-center justify-between mt-2">
                                <div className="flex items-center">
                                    <i className="fas fa-star text-yellow-500"></i>
                                    <span className="ml-1 text-gray-700">{car.rating}</span>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="text-gray-500">Available from {car.availableFrom}</p>
                                <p className="text-gray-500">{car.price}</p>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <p className="text-gray-700">{car.location}</p>
                            </div>
                            <button className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg">Book Now</button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CarRental;
