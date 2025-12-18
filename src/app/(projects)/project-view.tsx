'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CSSProperties, useRef } from 'react';
import { IconType } from 'react-icons';
import { BiLogoTypescript } from 'react-icons/bi';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import {
  SiBlender,
  SiCplusplus,
  SiFigma,
  SiHoudini,
  SiMongodb,
  SiNextdotjs,
  SiOpengl,
  SiPython,
  SiReact,
  SiSocketdotio,
  SiThreedotjs,
  SiUnrealengine,
  SiVite,
  SiWebgl,
} from 'react-icons/si';
import { TbCrane } from 'react-icons/tb';
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
  unreal: SiUnrealengine,
  houdini: SiHoudini,
  python: SiPython,
  blender: SiBlender,
  figma: SiFigma,
};

export type Tech = keyof typeof techIcons;

export type ProjectViewInfo = {
  name: string;
  techStack?: Tech[];
  previewImage: string;
} & (
  | { underConstruction: true; projectSlug?: undefined; link?: string }
  | { underConstruction?: false; projectSlug: string; link?: undefined }
);

export default function ProjectView({
  name,
  projectSlug,
  techStack,
  previewImage,
  appearDelay,
  underConstruction,
  link,
}: ProjectViewInfo & { appearDelay: string }) {
  const viewRef = useRef<HTMLDivElement>(undefined!);
  const entry = useIntersectionObserver(viewRef, {
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0,
  });
  const inMiddle = !!entry?.isIntersecting;

  const LinkIcon = link ? HiArrowTopRightOnSquare : TbCrane;

  return (
    <div
      ref={viewRef}
      className="select-none pb-4 [animation:appear_.4s_ease-out_var(--appear-delay)_1_normal_backwards]"
      style={{ '--appear-delay': appearDelay } as CSSProperties}
    >
      <Link
        href={
          underConstruction
            ? (link ?? '/under-construction')
            : `/${projectSlug}`
        }
        className={`group relative flex h-72 flex-row items-center justify-start overflow-hidden rounded-xl max-sm:transition-[height] max-sm:duration-500 ${
          inMiddle ? 'max-sm:h-80' : 'max-sm:h-72'
        }`}
      >
        <div className="absolute inset-0">
          <Image
            fill
            className={`scale-105 object-cover transition-all duration-500 xl:group-hover:scale-100 ${
              inMiddle ? 'max-xl:scale-100' : ''
            }`}
            src={previewImage}
            alt={name}
          />
        </div>
        {/* gradient div */}
        <div
          className={`absolute inset-0 from-black/100 to-transparent opacity-100 duration-500 md:bg-gradient-to-r md:opacity-60 md:transition-opacity md:group-hover:opacity-50 ${
            inMiddle ? 'max-md:bg-black/40' : 'max-md:bg-black/60'
          }`}
        />
        {/* text + logo content */}
        <div
          className={`relative ml-8 drop-shadow-xl transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-105 ${
            inMiddle ? 'max-xl:translate-x-2 max-xl:scale-105' : ''
          }`}
        >
          <h2 className="text-3xl font-semibold tracking-tight text-white">
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
        {underConstruction && (
          <div
            className={`transition-500 absolute bottom-5 left-8 z-10 flex items-center gap-3 text-lg tracking-wide opacity-30 drop-shadow transition-all group-hover:opacity-100 ${
              inMiddle ? 'max-xl:opacity-100' : ''
            }`}
          >
            {underConstruction && (link ? 'Link' : 'Page Under Construction')}
            <LinkIcon />
          </div>
        )}
      </Link>
    </div>
  );
}
