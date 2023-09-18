'use client';

import { Icon } from '@iconify/react';
import Link from 'next/link';
import { ReactNode } from 'react';

const className = 'group flex flex-row items-center gap-4';
function Social({
  icon,
  children,
  href,
}: {
  icon: string;
  children: ReactNode;
  href?: string;
}) {
  const contents = (
    <>
      <Icon icon={icon} className="text-neutral-500 group-hover:text-white" />
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
      <Social icon="mdi:envelope" href="mailto:thomas@tlshaw.me">
        thomas@tlshaw.me
      </Social>
      <Social icon="mdi:phone">
        <span className="tabular-nums">+1 (484) 535-1382</span>
      </Social>
      <div className="h-1.5" />
      <Social
        icon="mdi:linkedin"
        href="https://www.linkedin.com/in/thomas-shaw-54468b222/"
      >
        Thomas Shaw
      </Social>
      <Social icon="mdi:github" href="https://github.com/printer83mph">
        printer83mph
      </Social>
      <Social icon="mdi:artstation" href="https://artstation.com/printer83mph">
        printer83mph
      </Social>
    </ul>
  );
}
