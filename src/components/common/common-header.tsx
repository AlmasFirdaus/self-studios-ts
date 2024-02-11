import React from 'react';
import DesktopNav from '@/components/navbar/desktopNav';
import MobileBar from '@/components/navbar/mobileNav';
import MobileNav from '@/components/navbar/mobileNav';
import { CircleUserRound } from 'lucide-react';

const CommonHeader = () => {
  return (
    <header className="lg:fixed w-full top-0 z-50 bg-white py-4 lg:py-8">
      <nav className="container px-4 lg:px-6 flex justify-between items-center">
        <DesktopNav />
        <MobileNav />
        <div className="hidden lg:flex items-center">
          <button className="inline-flex gap-x-3 font-medium transition-colors ease-in-out duration-200 hover:text-gray-400">
            <CircleUserRound color="black" />
            Log In
          </button>
        </div>
      </nav>
    </header>
  );
};

export default CommonHeader;
