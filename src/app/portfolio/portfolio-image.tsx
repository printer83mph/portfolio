'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { CSSProperties, useState } from 'react';
import ReactPlayer from 'react-player/youtube';

export type PortfolioPieceInfo = {
  name: string;
  size: 'tall' | 'wide' | 'sq-small' | 'sq-big';
} & ({ type: 'video'; url: string } | { type: 'image'; path: string });

const portfolioBasePath = '/portfolio';

const sizeClassNames = {
  tall: 'lg:row-span-2 lg:aspect-[1/2]',
  wide: 'lg:col-span-2 lg:aspect-[2/1]',
  'sq-small': '',
  'sq-big': 'lg:col-span-2 lg:row-span-2',
};

export default function PortfolioPiece({
  size,
  name,
  index,
  ...props
}: PortfolioPieceInfo & { index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={`relative aspect-square h-full w-full overflow-hidden rounded-xl [animation:appear_.4s_ease-out_var(--appear-delay)_1_normal_backwards] ${sizeClassNames[size]}`}
        style={{ '--appear-delay': `${index * 150}ms` } as CSSProperties}
        onClick={() => setOpen(true)}
      >
        <AnimatePresence>
          {open || (
            <>
              {props.type === 'image' ? (
                <motion.img
                  src={`${portfolioBasePath}/${props.path}`}
                  alt={name}
                  className="h-full w-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1.0 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                />
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1.0 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                >
                  <ReactPlayer
                    url={props.url}
                    muted
                    playing
                    loop
                    width="100%"
                    height="100%"
                    className="absolute inset-0 scale-[134%]"
                    style={{ width: '100%', height: '100%' }}
                  />
                </motion.div>
              )}
              <motion.div
                className="absolute bottom-0 w-full bg-gradient-to-t from-black/40 to-black/0 px-10 pb-4 pt-20 text-center tracking-wide transition-opacity hover:opacity-[var(--opacity-transition)] xl:opacity-40"
                initial={{ '--opacity-transition': 0 } as any}
                animate={{ '--opacity-transition': 1 } as any}
                exit={{ '--opacity-transition': 0 } as any}
              >
                {name}
              </motion.div>
            </>
          )}
        </AnimatePresence>
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
            {props.type === 'image' ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={`${portfolioBasePath}/${props.path}`}
                alt={name}
                className="h-full w-full object-contain"
              />
            ) : (
              <ReactPlayer
                url={props.url}
                controls
                muted
                playing
                loop
                width="100%"
                height="100%"
                className="absolute inset-0 aspect-video px-4 py-20 xl:p-40"
                style={{ width: '100%', height: '100%' }}
              />
            )}
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
