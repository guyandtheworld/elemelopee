import Image from 'next/image';
import Link from 'next/link';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const Hero = () => (
  <Background color="bg-white-100">
    <nav className="flex justify-between items-center">
      <div></div>
      <Image
        src="/assets/images/tiger.svg" // replace "your-logo.svg" with your actual file name
        alt="elemelopee" // replace "Your Company Name" with your actual company name
        width={150} // adjust width as needed
        height={150} // adjust height as needed
      />
      <ul>
        <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </a>
          </Link>
        </li>
      </ul>
    </nav>

    <Section yPadding="pt-20 pb-32">
      <div className="flex justify-center items-center mb-1">
        <Image
          src="/assets/images/hero.jpeg"
          alt="Descriptive text"
          width={800}
          height={800}
        />
      </div>

      <p className="text-center font-pacifico italic text-xs mt-0">
        Illustrated by Namita Sunil
      </p>
      <p className="text-center font-YDGothic text-lg mt-3 tracking-widest">
        The lesser celebrated brotherhood -{' '}
      </p>
      <p className="text-center font-YDGothic text-5xl mt-0 tracking-widest">
        Sisterhood
      </p>
    </Section>
  </Background>
);

export { Hero };
