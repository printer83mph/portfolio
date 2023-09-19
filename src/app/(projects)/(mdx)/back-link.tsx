'use client';

import Link from 'next/link';
import { HiArrowLeft } from 'react-icons/hi2';

export default function BackLink() {
  return (
    <Link
      href="/"
      className="flex flex-row items-center gap-2 text-neutral-400 hover:text-white"
    >
      <HiArrowLeft />
      Projects
    </Link>
  );
}
