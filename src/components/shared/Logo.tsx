import { Rotate3d } from 'lucide-react';
import React from 'react';

const Logo = () => {
 return (
  <div className='flex items-center gap-2' aria-label="SecondGo logo">
   <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 via-fuchsia-500 to-cyan-500 shadow-sm">
    <Rotate3d className='h-6 w-6 text-white' strokeWidth={2.50} />
   </span>
   <span className='font-bold text-2xl bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent'>
    SecondGo
   </span>
  </div>
 );
}

export default Logo;
