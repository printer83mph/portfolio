import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi2';

import { PortfolioImage } from './portfolio-image';

export const metadata = {
  title: 'Portfolio | Thomas Shaw',
};

const portfolioImages: PortfolioImage[] = [
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
      {portfolioImages.map((img, index) => (
        <PortfolioImage key={img.path} {...img} index={index} />
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
