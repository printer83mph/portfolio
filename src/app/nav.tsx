'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

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
        className={`block px-4 py-2 text-lg transition-colors ${
          isActive ? '' : 'text-neutral-400'
        }`}
      >
        {children}
      </Link>
    </li>
  );
}

export default function Nav() {
  return (
    <nav className="space-y-4">
      <h1 className="text-5xl font-bold tracking-tight">Thomas Shaw</h1>
      <ul className="-ml-4">
        <NavItem href="/about">About</NavItem>
        <NavItem href="/" exact>
          Projects
        </NavItem>
        <NavItem href="/portfolio">Portfolio</NavItem>
      </ul>
    </nav>
  );
}
