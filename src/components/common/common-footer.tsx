import { Instagram } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const CommonFooter = () => {
  return (
    <footer className='py-6'>
      <div className='flex flex-col md:flex-row justify-center md:justify-around items-center text-sm'>
        <p>
          © 2021 by <span className='font-semibold'>Se/f</span> Studios
        </p>
        <p className='inline-flex gap-2 justify-center items-center'>
          Follow us on Instagram
          <Link href={'https://www.instagram.com/'} target='_blank'>
            <Instagram />
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default CommonFooter;
