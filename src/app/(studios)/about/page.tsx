import Image from 'next/image';
import React from 'react';

const page = () => {
  return (
    <section className='mt-14'>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
          <span className='font-medium text-lg order-last md:order-first'>The Full Storyy</span>
          <h1 className='font-semibold md:font-bold text-3xl md:text-5xl/relaxed my-2 '>About</h1>
        </div>
        <div className='mx-8 md:mx-0 md:w-5/12 font-sans text-sm md:text-lg/relaxed text-center mt-6 space-y-4'>
          <p>
            <span className='font-semibold'>Se/f</span> <span className='font-medium'>Studios </span>
            is a self portrait photo studio that offers new experience inspired by the concept of classic and minimalism lifestyle.
          </p>
          <p>With the evolving of trends and way of life that becoming more complex, living in a basic life is preferable. Less is more.</p>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 mt-12'>
        <div className='w-full h-full aspect-square lg:aspect-video relative flex-1'>
          <Image src={`/images/grey.jpg`} alt='images' sizes='100%,100%' className='aspect-square lg:aspect-video object-cover object-center' fill priority />
        </div>
        <div className='w-full aspect-square lg:aspect-video flex flex-col flex-1 justify-center items-center md:border-y-2'>
          <div className='mx-8 md:mx-0 md:w-2/3 text-center'>
            <p className='font-semibold text-3xl md:text-4xl mb-11'>Our Belief</p>
            <div className='text-sm space-y-5 md:text-base'>
              <p>We believe that a piece of photo will tell a lot of story and keep the memory remains.</p>
              <p>Thus, we want to make it more remarkable and special by offering a classic yet timeless photo experience for yours truly</p>
            </div>
          </div>
        </div>
        <div className='w-full py-10 md:py-0 aspect-square lg:aspect-video flex flex-col flex-1 justify-center items-center md:border-y-2 order-1 md:order-none'>
          <div className='mx-8 md:mx-0 md:w-2/3 text-center'>
            <p className='font-semibold text-3xl md:text-4xl mb-11'>Our Service</p>
            <div className='text-sm space-y-5 md:text-base'>
              <p>Everyone deserves a good photo to make the memory everlasting.</p>
              <p>
                We offer you a professional studio session that produce high quality photo result yet affordable for everyone. We want to make the experience even more momentous since all of the process is operated by{' '}
                <span className='font-semibold'>Se/f</span>{' '}
              </p>
            </div>
          </div>
        </div>
        <div className='w-full aspect-square lg:aspect-video relative flex-1'>
          <Image src={`/images/girls.jpg`} alt='images' sizes='100%,100%' className='aspect-video object-cover object-center' fill />
        </div>
      </div>
    </section>
  );
};

export default page;
