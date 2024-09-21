 
import CarCard from '../components/CarCard';
import Filterscard from '../components/Filter';
import SearchBar from '../components/SearchBar';

const cars = [
    { name: 'Maruti Suzuki Sx4 2020', details: 'Manual, Petrol, 5 Seaters', rating: 4.8, price: 'INR 189/hr', excludingFees: 'INR 848 Excluding fees',image:"https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: 'Hyundai Creta 2021', details: 'Automatic, Diesel, 5 Seaters', rating: 4.5, price: 'INR 200/hr', excludingFees: 'INR 900 Excluding fees',image:"https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: 'Hyundai Creta 2021', details: 'Automatic, Diesel, 5 Seaters', rating: 4.5, price: 'INR 200/hr', excludingFees: 'INR 900 Excluding fees',image:"https://images.pexels.com/photos/100656/pexels-photo-100656.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: 'Hyundai Creta 2021', details: 'Automatic, Diesel, 5 Seaters', rating: 4.5, price: 'INR 200/hr', excludingFees: 'INR 900 Excluding fees' ,image:"https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=600"},
    // Add more cars here...
];

const Cars = () => {
    return (
        <div className="flex">
            <Filterscard />
            <div className="w-3/4 p-4">
                <SearchBar />
                <div className="grid grid-cols-3 gap-4">
                    {cars.map((car, index) => (
                        <CarCard key={index} car={car} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cars;
