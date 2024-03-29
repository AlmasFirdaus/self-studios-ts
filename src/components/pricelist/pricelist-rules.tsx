import React from 'react';

type Props = {
  rules: string[];
  price?: number;
};

const PricelistRules = ({ rules, price }: Props) => {
  return (
    <div className='w-full my-4 flex md:justify-end md:gap-10'>
      <div className='w-full flex justify-between items-center leading-relaxed gap-2 md:gap-10'>
        <div className='hidden md:inline-flex md:flex-1' />
        <div className='flex flex-col gap-x-10 gap-2'>
          {rules?.map((rule, index) => (
            <div key={index} className='w-full flex flex-col md:flex-1'>
              <p>- {rule}</p>
            </div>
          ))}
        </div>
        <div className='w-32 h-[1px] bg-black' />
        <p className='flex w-8 justify-end items-end'>{price}K</p>
      </div>
    </div>
  );
};

export default PricelistRules;
