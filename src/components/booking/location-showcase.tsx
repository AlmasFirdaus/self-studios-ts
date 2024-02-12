import { cn } from '@/lib/utils';
import { studio } from '@/types/studio';
import Image from 'next/image';
import React from 'react';

type Props = {
  studios: studio[];
  gridConfig: string;
};

const LocationShowcase = ({ studios, gridConfig }: Props) => {
  return (
    <div className="w-full container flex justify-center items-center">
      <div className={cn('grid', gridConfig)}>
        {studios?.map((studio, index) => (
          <div key={index} className="">
            <div className="w-full relative aspect-square">
              <Image src={studio.image} alt={studio.class} sizes="100%,100%" className="aspect-square object-cover object-center" fill priority />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationShowcase;
