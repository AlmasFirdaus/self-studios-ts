import ShowPricelist from '@/components/pricelist/show-pricelist';
import SlideImage from '@/components/pricelist/slider-image';
import { Button } from '@/components/ui/button';
import { pricelists } from '@/lib/data/pricelists';
import React from 'react';

const Page = () => {
  return (
    <section>
      <div className="lg:hidden flex justify-center items-center my-14">
        <h1 className="font-bold font-serif text-3xl leading-relaxed">Pricelist</h1>
      </div>
      <div>
        <ShowPricelist pricelists={pricelists} />
      </div>
      <div className="flex flex-col justify-center items-center gap-14">
        <Button variant={'outline'} type="button" className="text-white bg-[#2C2C2B] text-lg py-7 px-12">
          Book Now
        </Button>
        <h3 className="text-2xl">Background Selection</h3>
      </div>
      <div className="flex justify-center items-center mt-8 mb-4">
        <SlideImage />
      </div>
    </section>
  );
};

export default Page;
