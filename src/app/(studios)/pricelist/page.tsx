import ShowPricelist from '@/components/pricelist/show-pricelist';
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
    </section>
  );
};

export default Page;
