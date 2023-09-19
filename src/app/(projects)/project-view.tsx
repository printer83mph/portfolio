'use client';

import Link from 'next/link';
import { CSSProperties, useRef } from 'react';
import Image from 'next/image';
import { useIntersectionObserver } from 'usehooks-ts';

export default function ProjectView({
  name,
  projectSlug,
  color,
  previewImage,
  appearDelay,
  underConstruction,
}: {
  name: string;
  projectSlug: string;
  color: string;
  previewImage: string;
  appearDelay: string;
  underConstruction?: boolean;
}) {
  const viewRef = useRef<HTMLDivElement>(undefined!);
  const entry = useIntersectionObserver(viewRef, {
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0,
  });
  const inMiddle = !!entry?.isIntersecting;

  return (
    <div
      ref={viewRef}
      className="select-none pb-4 [animation:appear_.4s_ease-out_var(--appear-delay)_1_normal_backwards]"
      style={{ '--appear-delay': appearDelay } as CSSProperties}
    >
      <Link
        href={`/${projectSlug}`}
        style={{ '--project-color': color } as CSSProperties}
        className={`group relative flex h-72 flex-col items-start justify-end overflow-hidden rounded-xl max-sm:transition-[height] max-sm:duration-500 ${
          inMiddle ? 'max-sm:h-80' : 'max-sm:h-72'
        }`}
      >
        <div className="absolute inset-0">
          <Image
            fill
            className="object-cover"
            src="https://placekitten.com/1020/120"
            alt={name}
          />
        </div>
        <div className="absolute inset-0 bg-[var(--project-color)] opacity-40 transition-opacity duration-500 group-hover:opacity-20" />
        <h2 className="relative mb-4 ml-12 text-white">{name}</h2>
      </Link>
    </div>
  );
}
