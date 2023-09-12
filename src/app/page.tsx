import Link from 'next/link';

function NavItem({ href, name }: { href: string; name: string }) {
  return (
    <li className="inline-block">
      <Link href={href} className="px-4 py-2">
        {name}
      </Link>
    </li>
  );
}

const pages = [
  { href: '/about', name: 'About' },
  { href: '/', name: 'Projects' },
  { href: '/portfolio', name: 'Portfolio' },
];

export default function Home() {
  return (
    <main className="container mx-auto min-h-screen py-14">
      <nav className="flex items-end gap-12">
        <h1 className="text-4xl font-semibold tracking-tight">Thomas Shaw</h1>
        <ul className="space-x-2">
          {pages.map((page) => (
            <NavItem key={page.href} {...page} />
          ))}
        </ul>
      </nav>
    </main>
  );
}
