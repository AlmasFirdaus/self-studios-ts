import { pricelist } from '@/types/pricelist';
import React from 'react';
import PricelistRules from './pricelist-rules';
import PricelistOption from './pricelist-option';

type Props = {
  pricelists: pricelist[];
};

const ShowPricelist = ({ pricelists }: Props) => {
  return (
    <div className="w-full container flex flex-col justify-center items-center my-10">
      {pricelists?.map((pricelist, index) => (
        <div key={index} className="w-full lg:mx-0 lg:w-1/2 flex flex-col justify-center items-start">
          <div className="w-full">
            <h2 className="font-bold leading-relaxed tracking-wide">{pricelist?.heading}</h2>
          </div>

          <div className="w-full">{pricelist?.rules && <PricelistRules rules={pricelist.rules} price={pricelist.price} />}</div>

          <div className="w-full">{pricelist?.options && <PricelistOption options={pricelist.options} />}</div>
        </div>
      ))}
    </div>
  );
};

export default ShowPricelist;
