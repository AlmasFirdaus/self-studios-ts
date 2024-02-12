import LocationShowcase from '@/components/booking/location-showcase';
import { studios } from '@/lib/data/contacts';
import React from 'react';

const page = () => {
  return (
    <section>
      <h1 className="font-bold text-center text-3xl lg:text-5xl/relaxed mb-16">Our Studios Location</h1>
      <div>
        <LocationShowcase studios={studios} gridConfig="grid-cols-2 lg:grid-cols-3" />
      </div>
    </section>
  );
};

export default page;
