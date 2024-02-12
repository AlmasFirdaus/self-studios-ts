import { cn } from '@/lib/utils';
import { studio } from '@/types/studio';
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
          <div key={index}>
            <p>{studio.class}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationShowcase;
