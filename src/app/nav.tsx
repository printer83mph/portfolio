'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

import Socials from './socials';

function NavItem({
  href,
  children,
  exact = false,
}: {
  href: string;
  children: ReactNode;
  exact?: boolean;
}) {
  const pathName = usePathname();
  const isActive = exact ? pathName === href : pathName.startsWith(href);

  return (
    <li className="inline-block">
      <Link
        href={href}
        className={`block px-4 py-2 transition-colors ${
          isActive ? '' : 'text-neutral-400'
        }`}
        onClick={() => {
          scrollTo({ top: 0 });
        }}
      >
        {children}
      </Link>
    </li>
  );
}

export default function Nav() {
  return (
    <nav className="flex select-none flex-col items-center xl:fixed xl:items-start xl:pl-4">
      <h1 className="text-4xl font-bold tracking-tight">Thomas Shaw</h1>
      <ul className="mt-4 flex flex-row xl:-ml-4">
        <NavItem href="/about">About</NavItem>
        <NavItem href="/" exact>
          Projects
        </NavItem>
        <NavItem href="/portfolio">Portfolio</NavItem>
      </ul>
      <div className="mt-8 hidden xl:block">
        <Socials />
      </div>
    </nav>
  );
}
