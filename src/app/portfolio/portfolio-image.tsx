'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { CSSProperties, useState } from 'react';

export type PortfolioImage = {
  name: string;
  path: string;
  size: 'tall' | 'wide' | 'sq-small' | 'sq-big';
};

const portfolioBasePath = '/portfolio';

export function PortfolioImage({
  size,
  path,
  name,
  index,
}: PortfolioImage & { index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={`relative aspect-square h-full w-full overflow-hidden rounded-xl [animation:appear_.4s_ease-out_var(--appear-delay)_1_normal_backwards] ${
          {
            tall: 'lg:row-span-2 lg:aspect-[1/2]',
            wide: 'lg:col-span-2 lg:aspect-[2/1]',
            'sq-small': '',
            'sq-big': 'lg:col-span-2 lg:row-span-2',
          }[size]
        }`}
        style={{ '--appear-delay': `${index * 150}ms` } as CSSProperties}
        onClick={() => setOpen(true)}
      >
        <Image
          src={`${portfolioBasePath}/${path}`}
          alt={name}
          fill
          className="object-cover"
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.button
            type="button"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-10 bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Image
              src={`${portfolioBasePath}/${path}`}
              alt={name}
              fill
              className="object-contain"
            />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
