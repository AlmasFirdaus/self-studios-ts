import LocationShowcase from '@/components/booking/location-showcase';
import { studios } from '@/lib/data/contacts';
import React from 'react';

const page = () => {
  return (
    <section className='min-h-screen'>
      <h1 className='font-bold text-center text-3xl md:text-5xl/relaxed mb-16'>Our Studios Location</h1>
      <div className='flex'>
        <LocationShowcase studios={studios} gridConfig='grid-cols-1 md:grid-cols-2 lg:grid-cols-3' />
      </div>
    </section>
  );
};

export default page;
