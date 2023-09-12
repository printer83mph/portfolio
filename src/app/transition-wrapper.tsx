'use client';

import { ReactNode } from 'react';
import { AnimatePresence } from 'framer-motion';

export default function TransitionWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return <AnimatePresence initial={false}>{children}</AnimatePresence>;
}
