import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface FilterButtonProps {
  icon?: any; // FontAwesomeIcon component prop type
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ icon, label, isActive, onClick }) => {
  return (
    <button
      className={`flex flex-col items-center justify-center border border-gray-500 rounded-lg p-2 w-20 h-20 ${
        isActive ? 'bg-gray-200' : ''
      }`}
      onClick={onClick}
    >
      {icon && <FontAwesomeIcon icon={icon} className="text-xl mb-1" />}
      <span>{label}</span>
    </button>
  );
};

export default FilterButton;
