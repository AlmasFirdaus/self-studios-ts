import { Instagram } from 'lucide-react';
import React from 'react';

const CommonFooter = () => {
  return (
    <footer className="py-6">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-around items-center text-sm">
        <p>
          © 2021 by <span className="font-semibold">Se/f</span> Studios
        </p>
        <p className="inline-flex gap-2 justify-center items-center">
          Follow us on Instagram
          <button>
            <Instagram />
          </button>
        </p>
      </div>
    </footer>
  );
};

export default CommonFooter;
