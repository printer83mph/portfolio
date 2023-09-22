'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { IconType } from 'react-icons';
import { FaArtstation, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { HiDocumentText, HiEnvelope } from 'react-icons/hi2';

const className = 'group flex flex-row items-center gap-4 pl-1';
function Social({
  icon: Icon,
  children,
  href,
}: {
  icon: IconType;
  children: ReactNode;
  href: string;
}) {
  return (
    <li key={href}>
      <Link href={href} className={className} target="_blank">
        <Icon className="text-neutral-500 group-hover:text-white" />
        <span
          className={`text-neutral-400 group-hover:text-white ${
            href ? 'group-hover:underline' : ''
          }`}
        >
          {children}
        </span>
      </Link>
    </li>
  );
}

export default function Socials() {
  return (
    <ul className="space-y-3">
      <Social
        icon={HiDocumentText}
        href="https://drive.google.com/uc?export=download&id=1374ZE8m_Ps-GNkAej4Qxx2YU6ntBQ1FA"
      >
        Resume 2023
      </Social>
      <Social icon={HiEnvelope} href="mailto:thomas@tlshaw.me">
        thomas@tlshaw.me
      </Social>
      <div className="h-1.5" />
      <Social
        icon={FaLinkedin}
        href="https://www.linkedin.com/in/thomas-shaw-54468b222/"
      >
        Thomas Shaw
      </Social>
      <Social icon={FaGithub} href="https://github.com/printer83mph">
        printer83mph
      </Social>
      <Social icon={FaArtstation} href="https://artstation.com/printer83mph">
        printer83mph
      </Social>
    </ul>
  );
}
