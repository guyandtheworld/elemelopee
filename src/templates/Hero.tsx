import Link from 'next/link';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const Hero = () => (
  <Background color="bg-white-100">
    <nav className="flex justify-between items-center">
      <div></div>
      <img
        src="/assets/images/tiger.svg"
        alt="elemelopee"
        width="150"
        height="150"
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

    <Section yPadding="pt-20 pb-10">
      <div className="flex justify-center items-center mb-1">
        <img
          src="/assets/images/hero.jpeg"
          alt="elemelopee"
          width="1000"
          height="1000"
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
