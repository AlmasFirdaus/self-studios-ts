import { options } from '@/types/pricelist';
import React from 'react';

type Props = {
  options: options[];
};

const PricelistOption = ({ options }: Props) => {
  return (
    <div className='w-full'>
      {options?.map((option, index) => (
        <div key={index} className='w-full my-6 flex flex-col md:flex-row gap-5 md:gap-10'>
          <h4 className='inline-flex flex-1 font-semibold'>{option.name}</h4>
          <div className='flex flex-col justify-between leading-relaxed gap-2'>
            {option.selected?.map((select, index) => (
              <div key={index} className='flex items-center md:gap-x-10 gap-2'>
                <p className='w-full flex md:flex-1'>- {select.title}</p>
                <div className='w-32 h-[1px] bg-black' />
                <p className='flex w-8 justify-end items-end'>{select.price_selected}K</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricelistOption;
