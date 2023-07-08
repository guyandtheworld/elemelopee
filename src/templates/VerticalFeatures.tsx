import Link from 'next/link';

import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section>
    <div className="grid grid-cols-2 gap-0">
      <div className="col-span-1">
        <img
          src="/assets/images/model2.png"
          alt="First feature alt text"
          className="w-full h-full"
        />
      </div>
      <div className="col-span-1 bg-pink-200 flex items-center justify-center">
        <Link href="/collection">
          <a className="text-lg font-bold text-4xl tracking-wide text-black">
            Shop the Collection
          </a>
        </Link>
      </div>
    </div>
    <div className="grid grid-cols-1 gap-0 relative">
      <img
        src="/assets/images/model1.jpeg"
        alt="Second feature alt text"
        className="w-full h-full"
      />
      <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
        <Link href="/house-dress">
          <a className="text-6xl font-bold tracking-widest text-gray-300">
            House Dress
          </a>
        </Link>
      </div>
    </div>
  </Section>
);

export { VerticalFeatures };
