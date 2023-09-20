import ProjectView, { ProjectViewProps } from './project-view';
import { TbCrane } from 'react-icons/tb';

const projects: Omit<ProjectViewProps, 'appearDelay'>[] = [
  {
    name: 'SDF Playground',
    projectSlug: 'sdf-playground',
    techStack: ['typescript', 'webgl'],
    color: 'rgb(140, 46, 123)',
    previewImage: '/projects/sdf-playground/splash.png',
    underConstruction: true,
  },
  {
    name: 'Minier Minecraft',
    projectSlug: 'minier-minecraft',
    techStack: ['typescript', 'three'],
    color: 'rgb(23, 155, 152)',
    previewImage: '/projects/minier-minecraft/minecraft_02.png',
  },
  {
    name: 'Government Cheese',
    projectSlug: 'govcheese',
    techStack: ['nextjs', 'react', 'mongo'],
    color: 'rgb(179, 109, 71)',
    previewImage: '/projects/govcheese/splash.png',
  },
];

export default function ProjectsPage() {
  return (
    <main>
      {projects.map((props, index) => (
        <ProjectView
          key={props.projectSlug}
          {...props}
          appearDelay={`${index * 150}ms`}
        />
      ))}
      <div className="mt-12 flex items-center gap-4">
        <TbCrane className="text-2xl" /> More project pages - new and old - are
        under construction!
      </div>
    </main>
  );
}
