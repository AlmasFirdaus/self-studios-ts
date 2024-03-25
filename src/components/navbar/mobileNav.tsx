import React from 'react';

import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { links } from '@/lib/data/links';

const MobileNav = () => {
  return (
    <div className='w-full flex flex-col md:hidden'>
      <Sheet>
        <SheetTrigger asChild>
          <button>
            <Menu size={30} />
          </button>
        </SheetTrigger>
        <SheetContent side={'left'}>
          <SheetHeader className='mt-10'>
            <Link href={'/'} className='font-bold flex justify-center items-center gap-1 text-4xl'>
              Se/f <span className='font-medium'>Studios</span>
            </Link>
          </SheetHeader>
          <div className='flex flex-col mt-8 gap-8 items-center'>
            {links.map((link, index) => (
              <Link key={index} href={link.href} className='font-medium text-lg hover:text-gray-400 transition-colors ease-in-out duration-200'>
                {link.title}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
      <div className='flex justify-center items-center my-10'>
        <Link href={'/'} className='font-bold flex justify-center items-center gap-1 text-3xl'>
          Se/f <span className='font-medium'>Studios</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;
