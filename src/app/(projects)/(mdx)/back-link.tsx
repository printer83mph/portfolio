'use client';

import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function BackLink() {
  return (
    <Link
      href="/"
      className="flex flex-row items-center gap-2 text-neutral-400 hover:text-white"
    >
      <Icon icon="mdi:arrow-left" />
      Projects
    </Link>
  );
}
