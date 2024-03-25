import PhotoShowcase from '@/components/photo/photo-showcase';
import { photos } from '@/lib/data/photos';
import React from 'react';

const page = () => {
  return (
    <section className='mt-40'>
      <PhotoShowcase photos={photos} />
      <div className='flex flex-col justify-center items-center my-10'>
        <div className='mx-6 md:w-6/12 lg:w-4/12 text-center space-y-8 font-sans text-gray-500'>
          <p>A Self Portrait Photo Studio, suitable for couple or your family photoshoot. Take the picture by yourself!</p>
          <p>Self Photo | Foto Studio | Self Studios</p>
        </div>
      </div>
    </section>
  );
};

export default page;
