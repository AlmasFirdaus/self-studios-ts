import { PhotoDetail } from '@/types/photos-detail';
import Image from 'next/image';
import React from 'react';

interface Props {
  photos: PhotoDetail[];
}

const PhotoShowcase = ({ photos }: Props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      {photos.map((photo) => (
        <div key={photo.title} className="w-full aspect-square relative overflow-hidden">
          <Image src={photo.src} alt="images" sizes="100%,100%" className="grayscale aspect-square object-cover object-center transition-all ease-in-out duration-1000 hover:scale-110" fill priority />
        </div>
      ))}
    </div>
  );
};

export default PhotoShowcase;
