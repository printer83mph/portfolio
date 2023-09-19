import Image from 'next/image';
import { CSSProperties } from 'react';
const portfolioBasePath = '/portfolio';

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
    name: 'Mixer',
    path: 'mixer_square.png',
    size: 'sq-small',
  },
  {
    name: 'Mixer',
    path: 'mixer_square.png',
    size: 'tall',
  },
  {
    name: 'Mixer',
    path: 'mixer_square.png',
    size: 'tall',
  },
  {
    name: 'Mixer',
    path: 'mixer_square.png',
    size: 'sq-small',
  },
  {
    name: 'Mixer',
    path: 'mixer_square.png',
    size: 'sq-big',
  },
  {
    name: 'Mixer',
    path: 'mixer_square.png',
    size: 'sq-small',
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
    </main>
  );
}
