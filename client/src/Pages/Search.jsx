import { Button } from '@/components/ui/button';
import React from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const Search = ({ filter, setFilter }) => {
  return (
    <div className="container mx-auto p-4 sm:p-6">
      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        {/* Location Icon */}
        <HiOutlineLocationMarker className="text-blue-600" size={25} />

        {/* Search Input */}
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full sm:flex-grow border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-300"
          placeholder="Search by title, city, or address..."
        />

        {/* Search Button */}
        <Button className="w-full sm:w-auto bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
          Search
        </Button>
      </div>
    </div>
  );
};

export default Search;