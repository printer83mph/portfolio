import Image from 'next/image';

import Socials from '../socials';

import ThomasImage from '@/resources/thomas.png';

export const metadata = {
  title: 'About | Thomas Shaw',
};

export default function AboutPage() {
  return (
    <main className="mx-auto flex flex-col items-center xl:block">
      <div className="flex flex-col items-center gap-8 xl:flex-row xl:gap-12">
        <Image
          src={ThomasImage}
          alt="Thomas"
          className="w-[20rem] select-none rounded-full"
        />
        <h1 className="select-none text-5xl font-extrabold tracking-tight xl:text-6xl">
          Hi there!
        </h1>
      </div>
      <div>
        <article className="prose prose-lg prose-invert mt-12">
          <p>
            I&apos;m a junior pursuing a degree in{' '}
            <a href="http://cg.cis.upenn.edu/dmd.html" target="_blank">
              Digital Media Design
            </a>
            , an interdisciplinary major that bridges computer science and fine
            arts. I&apos;m co-president of{' '}
            <a href="http://cg.cis.upenn.edu/siggraph/" target="_blank">
              Penn&apos;s SIGGRAPH chapter
            </a>
            , and I also manage and lecture a{' '}
            <a href="https://javascriptclass.org/" target="_blank">
              JavaScript course
            </a>{' '}
            at Penn.
          </p>
          <p>
            In my free time, I enjoy cooking, running, eating, and playing video
            games. Otherwise, you&apos;ll probably find me 3D modeling or
            programming.
          </p>
          <iframe
            className="mt-20 aspect-square w-full select-none md:aspect-video"
            src="https://www.youtube.com/embed/7_Y5wbHbbL8"
            title="Thomas Shaw - Technical Artist Demo Reel - Fall 2023"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </article>
        <div className="mt-20 block xl:hidden">
          <Socials />
        </div>
      </div>
    </main>
  );
}
