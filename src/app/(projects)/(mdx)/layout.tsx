import { ReactNode } from 'react';
import BackLink from './back-link';

export default function ProjectLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex-col items-center max-xl:flex">
      <div>
        <BackLink />
        <article className="prose prose-lg prose-neutral prose-invert mt-4 prose-headings:font-bold prose-headings:tracking-tight prose-a:underline prose-ol:list-decimal prose-ul:list-disc">
          {children}
        </article>
      </div>
    </main>
  );
}
