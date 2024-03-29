import './globals.css';

import type { Metadata } from 'next';
import { Schibsted_Grotesk } from 'next/font/google';

import Nav from './nav';

const fontSans = Schibsted_Grotesk({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  description:
    'UPenn student looking to build neat stuff with neat people. Check out all my work here!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fontSans.variable}`}>
      <body className="container mx-auto my-20 min-w-[342px] overflow-y-scroll bg-black px-2 text-lg font-light text-white">
        <Nav />
        <div className="mt-12 xl:ml-[26rem] xl:mt-0 2xl:ml-[28rem]">
          {children}
        </div>
      </body>
    </html>
  );
}
