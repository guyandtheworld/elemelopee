import Link from 'next/link';

import { Button } from '../button/Button';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <div className="flex items-center justify-center mb-4">
      <img
        src="/assets/images/bird.svg"
        className="mr-2 h-12 w-12"
        alt="bird logo"
      />
      <h1 className="font-specialElite text-4xl text-blue-800 tracking-widest border-b border-dotted border-black">
        Studio Elemelopee
      </h1>
    </div>

    <div className="flex justify-center flex-no-wrap gap-6 pt-20 pb-20">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl mb-4 text-black">Work</h2>
        <Link href="/work">
          <a>
            <img src="/assets/images/girl3.png" alt="Woman" />
            <h2 className="mt-4 text-black">Queerness in Craft</h2>
          </a>
        </Link>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-2xl mb-4 text-black">Store</h2>
        <Link href="/store">
          <a>
            <img src="/assets/images/book1.png" alt="Book" />
            <h2 className="mt-4 text-black">Make it yours!</h2>
          </a>
        </Link>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-2xl mb-4 text-black">Community</h2>
        <Link href="/community">
          <a>
            <img src="/assets/images/craftsperson1.png" alt="Man" />
            <h2 className="mt-4 text-black">Meet our collaborators</h2>
          </a>
        </Link>
      </div>
    </div>

    <div className="flex bg-gray-100 p-6">
      <div className="flex-1">
        <img
          src="/assets/images/nails.png"
          width="200"
          height="500"
          alt="Your alt text"
        />
      </div>

      <div className="flex-2 flex flex-col items-center justify-center bg-gray-100">
        <h2 className="font-franklinGothic text-2xl mb-4 text-black tracking-widest">
          The lost key
        </h2>
        <p className="mb-4 font-franklinGothic italic text-black">
          I was putting myself out there.
        </p>
        <p className="mb-4 font-franklinGothic italic text-black">
          I had gathered all keys that were perfect in their own unique way, but
          could not find their real locks.
        </p>
        <p className="mb-4 font-franklinGothic italic text-black">
          Is it so that some are not meant to? I could see myself in them,
          trying relentlessly to make myself{' '}
        </p>
        <p className="mb-4 font-franklinGothic italic text-black">
          {' '}
          understand that you are unique in your own way, and yet failing.
        </p>
        <p className="mb-4 font-franklinGothic italic text-black">
          But this light is what keeps me alive. Whether we light up or not
          doesnt matter;
        </p>
        <p className="mb-4 font-franklinGothic italic text-black">
          we already leave a certain impression.
        </p>

        <Link href="/yourPath">
          <a>
            <Button>Find out more</Button>
          </a>
        </Link>
      </div>
    </div>

    <h1 className="text-center font-YDGothic text-4xl mt-10 text-black">
      Post-Covid Concepts
    </h1>

    <div className="flex justify-center flex-no-wrap gap-6 pt-20 pb-20">
      <div className="flex flex-col items-center">
        <Link href="/work">
          <a>
            <img src="/assets/images/dress.png" alt="Woman" />
            <h2 className="mt-4 text-black">Queerness in Craft</h2>
          </a>
        </Link>
      </div>

      <div className="flex flex-col items-center">
        <Link href="/store">
          <a>
            <img src="/assets/images/dress1.png" alt="Book" />
            <h2 className="mt-4 text-black">Make it yours!</h2>
          </a>
        </Link>
      </div>

      <div className="flex flex-col items-center">
        <Link href="/community">
          <a>
            <img src="/assets/images/dress2.png" alt="Man" />
            <h2 className="mt-4 text-black">Meet our collaborators</h2>
          </a>
        </Link>
      </div>
    </div>
  </Section>
);

export { Banner };
