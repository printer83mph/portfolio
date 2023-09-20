'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CSSProperties, useRef } from 'react';
import { IconType } from 'react-icons';
import { BiLogoTypescript } from 'react-icons/bi';
import {
  SiCplusplus,
  SiMongodb,
  SiNextdotjs,
  SiOpengl,
  SiReact,
  SiSocketdotio,
  SiThreedotjs,
  SiVite,
  SiWebgl,
} from 'react-icons/si';
import { useIntersectionObserver } from 'usehooks-ts';

const techIcons = {
  typescript: BiLogoTypescript,
  react: SiReact,
  three: SiThreedotjs,
  nextjs: SiNextdotjs,
  mongo: SiMongodb,
  vite: SiVite,
  cplusplus: SiCplusplus,
  opengl: SiOpengl,
  webgl: SiWebgl,
  socketio: SiSocketdotio,
};

export type Tech = keyof typeof techIcons;

export type ProjectViewProps = {
  name: string;
  projectSlug: string;
  techStack?: Tech[];
  color: string;
  previewImage: string;
  appearDelay: string;
  underConstruction?: boolean;
};

export default function ProjectView({
  name,
  projectSlug,
  techStack,
  color,
  previewImage,
  appearDelay,
  underConstruction,
}: ProjectViewProps) {
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
        className={`group relative flex h-72 flex-row items-center justify-start overflow-hidden rounded-xl max-sm:transition-[height] max-sm:duration-500 ${
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
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--project-color)] to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="relative ml-8 transition-transform duration-300 group-hover:translate-x-2">
          <h2 className="font-semibold tracking-[-.015em] text-white">
            {name}
          </h2>
          {techStack && (
            <div className="-mb-6 mt-4 flex flex-row items-center gap-4 text-2xl">
              {techStack.map((tech) => {
                const Icon = techIcons[tech] as IconType;
                return <Icon key={tech} />;
              })}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}
