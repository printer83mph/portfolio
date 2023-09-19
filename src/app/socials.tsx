'use client';

import { HiDocumentText, HiEnvelope, HiPhone } from 'react-icons/hi2';
import { FaLinkedin, FaGithub, FaArtstation } from 'react-icons/fa6';
import { IconType } from 'react-icons';
import Link from 'next/link';
import { ReactNode } from 'react';

const className = 'group flex flex-row items-center gap-4 pl-1';
function Social({
  icon: Icon,
  children,
  href,
}: {
  icon: IconType;
  children: ReactNode;
  href?: string;
}) {
  const contents = (
    <>
      <Icon className="text-neutral-500 group-hover:text-white" />
      <span
        className={`text-neutral-400 group-hover:text-white ${
          href ? 'group-hover:underline' : ''
        }`}
      >
        {children}
      </span>
    </>
  );
  return (
    <li key={href}>
      {href ? (
        <Link href={href} className={className} target="_blank">
          {contents}
        </Link>
      ) : (
        <div className={`${className} select-text`}>{contents}</div>
      )}
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
      <Social icon={HiPhone}>
        <span className="tabular-nums">+1 (484) 535-1382</span>
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
