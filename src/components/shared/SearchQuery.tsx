import React from 'react';
import { Input } from '../ui/input';
import { Search } from 'lucide-react';

const SearchQuery = () => {
 return (
  <div className='relative w-1/3 hidden md:block'>
   <Search className='w-5 h-5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2' />
   <Input placeholder='Discover great finds...' className='pl-10 h-10 rounded-full'/>
  </div>
 );
}

export default SearchQuery;
