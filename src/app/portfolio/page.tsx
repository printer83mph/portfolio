import Image from 'next/image';
import Link from 'next/link';
import { CSSProperties } from 'react';
import { HiArrowRight } from 'react-icons/hi2';
const portfolioBasePath = '/portfolio';

export const metadata = {
  title: 'Portfolio | Thomas Shaw',
};

const portfolioImages: {
  name: string;
  path: string;
  size: 'tall' | 'wide' | 'sq-small' | 'sq-big';
}[] = [
  {
    name: 'Mixer',
    path: 'mixer_square.png',
    size: 'sq-big',
  },
  {
    name: 'Chair',
    path: 'chair.jpeg',
    size: 'tall',
  },
  {
    name: 'A Cappella Fest Logo',
    path: 'a_cappella.jpeg',
    size: 'sq-small',
  },
  {
    name: 'Tennis Balls',
    path: 'tennis_balls.jpeg',
    size: 'wide',
  },
  {
    name: "World's Best Meeting Room",
    path: 'meeting_room.jpeg',
    size: 'wide',
  },
];

export default function PortfolioPage() {
  return (
    <main className="grid grid-flow-row-dense grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
      {portfolioImages.map(({ name, path, size }, index) => (
        <div
          key={name}
          className={`relative aspect-square h-full w-full overflow-hidden rounded-xl [animation:appear_.4s_ease-out_var(--appear-delay)_1_normal_backwards] ${
            {
              tall: 'lg:row-span-2 lg:aspect-[1/2]',
              wide: 'lg:col-span-2 lg:aspect-[2/1]',
              'sq-small': '',
              'sq-big': 'lg:col-span-2 lg:row-span-2',
            }[size]
          }`}
          style={{ '--appear-delay': `${index * 150}ms` } as CSSProperties}
        >
          <Image
            src={`${portfolioBasePath}/${path}`}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
      ))}
      <Link
        href="https://artstation.com/printer83mph/"
        target="_blank"
        className="flex aspect-square h-full w-full items-center justify-center gap-3 rounded-xl bg-neutral-800 [animation:appear_.4s_ease-out_.85s_1_normal_backwards] hover:text-white sm:text-neutral-400"
      >
        See more on ArtStation <HiArrowRight />
      </Link>
    </main>
  );
}
