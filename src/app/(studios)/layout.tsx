import CommonFooter from '@/components/common/common-footer';
import CommonHeader from '@/components/common/common-header';
import React, { ReactNode } from 'react';

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <CommonHeader />
      <div className="lg:mt-48">{children}</div>
      <CommonFooter />
    </>
  );
};

export default HomeLayout;
