import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi2';

import PortfolioPiece, { PortfolioPieceInfo } from './portfolio-image';

export const metadata = {
  title: 'Portfolio | Thomas Shaw',
};

const portfolioImages: PortfolioPieceInfo[] = [
  {
    name: 'Sculpt - Morgan Yu',
    size: 'sq-small',
    type: 'image',
    path: 'm_yu_01.webp',
  },
  {
    name: 'Modeling, Shading, Animation - Leekman',
    size: 'sq-big',
    type: 'video',
    url: 'https://youtu.be/Azxawmvyhqs',
  },
  {
    name: 'Grungy Basement Background',
    size: 'sq-small',
    type: 'image',
    path: 'beast_background_01.webp',
  },
  {
    name: 'Modeling/Shading - Mixer',
    size: 'sq-big',
    type: 'image',
    path: 'mixer_square.webp',
  },
  {
    name: 'Modeling/Shading - Office Chair',
    size: 'tall',
    type: 'image',
    path: 'chair.webp',
  },
  {
    name: 'Modeling/Shading - A Cappella Fest Logo',
    size: 'sq-small',
    type: 'image',
    path: 'a_cappella.webp',
  },
  {
    name: 'Procedural Modeling, Shading - Tennis Balls',
    size: 'wide',
    type: 'image',
    path: 'tennis_balls.webp',
  },
  {
    name: "Environment Art - World's Best Meeting Room",
    size: 'wide',
    type: 'image',
    path: 'meeting_room.webp',
  },
];

export default function PortfolioPage() {
  return (
    <main className="grid grid-flow-row-dense grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
      {portfolioImages.map((img, index) => (
        <PortfolioPiece key={img.name} {...img} index={index} />
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
