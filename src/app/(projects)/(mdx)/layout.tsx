import { ReactNode } from 'react';
import BackLink from './back-link';

export default function ProjectLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <BackLink />
      <article className="prose prose-lg prose-neutral prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-a:underline prose-ol:list-decimal prose-ul:list-disc mt-4">
        {children}
      </article>
    </main>
  );
}
