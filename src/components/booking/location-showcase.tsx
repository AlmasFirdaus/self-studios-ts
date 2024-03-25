import { cn } from '@/lib/utils';
import { studio } from '@/types/studio';
import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';

type Props = {
  studios: studio[];
  gridConfig: string;
};

const LocationShowcase = ({ studios, gridConfig }: Props) => {
  return (
    <div className='md:w-2/3 container'>
      <div className={cn('grid gap-5', gridConfig)}>
        {studios?.map((studio, index) => (
          <div key={index} className='w-full h-full min-h-72 flex flex-col shadow-md'>
            <div key={index} className='w-full flex aspect-[4/3] relative justify-center items-center'>
              <Image src={studio.image} alt='images' sizes='100%,100%' className='w-full aspect-auto object-cover object-center' fill priority />
              <div className='absolute top-0 left-0 w-full h-full transition-colors ease-in-out duration-200 bg-black/15 hover:bg-black/30 rounded-md' />
              <p className='absolute text-2xl/loose md:text-3xl/loose tracking-wider text-white shadow-inner capitalize'>{studio.class}</p>
            </div>
            <div className='flex flex-1 flex-col justify-around items-center text-center m-8 md:m-10 gap-8'>
              <h3 className='capitalize text-xl'>{studio.place}</h3>
              <p className='capitalize text-sm'>{studio.address}</p>
              <Button variant={'outline'} className='bg-studio-primary text-white'>
                Book Here
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationShowcase;
