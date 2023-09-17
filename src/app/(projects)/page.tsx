import Link from 'next/link';
import { CSSProperties } from 'react';
import Image from 'next/image';

function ProjectView({
  name,
  projectSlug,
  color,
  previewImage,
}: {
  name: string;
  projectSlug: string;
  color: string;
  previewImage: string;
}) {
  return (
    <Link
      href={`/${projectSlug}`}
      style={{ '--project-color': color } as CSSProperties}
      className="group relative flex h-72 flex-col items-start justify-end overflow-hidden rounded-xl"
    >
      <div className="absolute inset-0">
        <Image
          fill
          className="object-cover"
          src="https://placekitten.com/1020/120"
          alt={name}
        />
      </div>
      <div className="absolute inset-0 bg-[var(--project-color)] opacity-40 transition-opacity duration-500 group-hover:opacity-20" />
      <h2 className="relative mb-4 ml-12 text-lg text-white">{name}</h2>
    </Link>
  );
}

export default function ProjectsPage() {
  return (
    <main className="space-y-4">
      <ProjectView
        name="SDF Playground"
        projectSlug="troll"
        color="rgb(255, 0, 0)"
        previewImage="troll"
      />
      <ProjectView
        name="Tiny Minecraft"
        projectSlug="troll"
        color="rgb(0, 150, 150)"
        previewImage="troll"
      />
      <ProjectView
        name="Government Cheese"
        projectSlug="troll"
        color="rgb(170, 170, 0)"
        previewImage="troll"
      />
    </main>
  );
}
