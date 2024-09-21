import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faStar, faMapMarkerAlt, faCogs, faCog, faGasPump, faChargingStation, faHome, faPlane,faS,faCarSide,faTruck,faMusic } from '@fortawesome/free-solid-svg-icons';
import FilterButton from './FilterButton';

const Filterscard = () => {
    return (
        <div className="w-1/4 p-4 border-r border-gray-300">
            <h2 className="text-xl font-bold mb-4">Filters</h2>
            <div>
        <h2 className="text-lg font-semibold mb-2">Car type</h2>
        <div className="flex space-x-2">
          <FilterButton icon={faCar} label="Hatchback" />
          <FilterButton icon={faCarSide} label="Suv" />
          <FilterButton icon={faTruck} label="Truck" />
        </div>
      </div>
            <div className="space-y-6">
      {/* Sort by */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Sort by</h2>
        <div className="flex space-x-2">
          <FilterButton icon={faCar} label="Relevance" />
          <FilterButton icon={faStar} label="Ratings" />
          <FilterButton icon={faMapMarkerAlt} label="Distance" />
        </div>
      </div>

      {/* Transmission */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Transmission</h2>
        <div className="flex space-x-2">
          <FilterButton icon={faCogs} label="Manual" />
          <FilterButton icon={faCog} label="Automatic" />
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Price Range</h2>
        <div className="flex items-center justify-between">
          <input type="range" min="600" max="2400" className="w-full" />
        </div>
        <div className="flex items-center justify-between mt-2">
          <input type="text" value="INR 600" readOnly className="border border-gray-300 rounded-lg p-2 w-24" />
          <span className="mx-2">-</span>
          <input type="text" value="INR 2400" readOnly className="border border-gray-300 rounded-lg p-2 w-24" />
        </div>
      </div>

      {/* Seating Type */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Seating type</h2>
        <div className="flex space-x-2">
          <FilterButton label="4/5 Seater" />
          <FilterButton label="6/7 Seater" />
        </div>
      </div>

      {/* Fuel Type */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Fuel Type</h2>
        <div className="flex space-x-2">
          <FilterButton icon={faGasPump} label="Petrol" />
          <FilterButton icon={faGasPump} label="Diesel" />
          <FilterButton icon={faChargingStation} label="EV Charge" />
        </div>
      </div>

      {/* Delivery Type */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Delivery Type</h2>
        <div className="flex space-x-2">
          <FilterButton icon={faHome} label="Home" isActive />
          <FilterButton icon={faPlane} label="Airport" />
        </div>
      </div>
    </div>
        </div>
    );
};

export default Filterscard;
