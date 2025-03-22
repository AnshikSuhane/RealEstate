import { Button } from '@/components/ui/button'
import React from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'

const Search = ({ filter, setFilter }) => {
  return (
    <div className='flex items-center space-x-4 bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
      <HiOutlineLocationMarker className='text-blue-600' size={25} />
      <input 
        type='text' 
        value={filter} 
        onChange={(e) => setFilter(e.target.value)} 
        className='border border-gray-300 rounded-lg px-4 py-2 flex-grow outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-300'
        placeholder='Search...'
      />
      <Button className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300'>
        Search
      </Button>
    </div>
  )
}

export default Search