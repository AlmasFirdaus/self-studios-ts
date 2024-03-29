'use client';
import * as React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { backgroundPhotos } from '@/lib/data/photos';
import Image from 'next/image';

export default function SlideImage() {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className='w-full'>
      <CarouselContent>
        {backgroundPhotos?.map((photo, index) => (
          <CarouselItem key={index} className='basis-1/2 md:basis-1/3'>
            <div className=''>
              <Card>
                <CardContent className='flex aspect-[9/14] md:aspect-[3/4] items-center justify-center relative'>
                  <Image src={photo.src} alt={photo.title} sizes='100%,100$' className='object-cover object-center' fill priority />
                  <div className='absolute top-0 left-0 w-full h-full transition-colors ease-in-out duration-200 hover:bg-black/30 rounded-md' />
                  <p className='absolute text-lg md:text-6xl text-white shadow-inner capitalize'>{photo.title}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
