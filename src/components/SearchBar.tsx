import  { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SearchBar = () => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    return (
        <div className="flex flex-col md:flex-row items-center mb-4 space-y-4 md:space-y-0 md:space-x-2">
            {/* Location Selection */}
            <div className="w-full md:w-1/3">
                <label className="block text-sm font-medium mb-1">Location</label>
                <input
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="Enter location..."
                />
            </div>

            {/* Start Date/Time */}
            <div className="w-full md:w-1/3">
                <label className="block text-sm font-medium mb-1">Start Date/Time</label>
                <DatePicker
                    selected={startDate}
                    onChange={(date: Date | null) => setStartDate(date)}
                    showTimeSelect
                    dateFormat="Pp"
                    className="w-full p-2 border rounded"
                    placeholderText="Select Start Date/Time"
                />
            </div>

            {/* End Date/Time */}
            <div className="w-full md:w-1/3">
                <label className="block text-sm font-medium mb-1">End Date/Time</label>
                <DatePicker
                    selected={endDate}
                    onChange={(date: Date | null) => setEndDate(date)}
                    showTimeSelect
                    dateFormat="Pp"
                    className="w-full p-2 border rounded"
                    placeholderText="Select End Date/Time"
                    minDate={startDate || undefined}  
                />
            </div>
        </div>
    );
};

export default SearchBar;
