import { links } from '@/lib/data/links';
import Link from 'next/link';
import React from 'react';

const DesktopNav = () => {
  return (
    <div className='hidden md:flex flex-1 justify-around items-center'>
      <Link href={'/'} className='font-bold flex justify-center items-center gap-1 text-4xl'>
        Se/f <span className='font-medium'>Studios</span>
      </Link>
      <div className='flex gap-x-5 capitalize'>
        {links.map((link, index) => (
          <Link key={index} href={link.href} className='font-medium text-lg hover:text-gray-400 transition-colors ease-in-out duration-200'>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DesktopNav;
