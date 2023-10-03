import ProjectView, { ProjectViewProps } from './project-view';

export const metadata = {
  title: 'Projects | Thomas Shaw',
};

const projects: Omit<ProjectViewProps, 'appearDelay'>[] = [
  {
    name: 'Minier Minecraft',
    projectSlug: 'minier-minecraft',
    techStack: ['typescript', 'three'],
    previewImage: '/projects/minier-minecraft/minecraft_02.webp',
  },
  {
    name: 'Government Cheese',
    projectSlug: 'govcheese',
    techStack: ['nextjs', 'react', 'mongo'],
    previewImage: '/projects/govcheese/splash.webp',
  },
  {
    name: 'SDF Playground',
    techStack: ['typescript', 'webgl'],
    previewImage: '/projects/under-construction/sdf-playground.webp',
    underConstruction: true,
    link: 'https://github.com/printer83mph/sdf-playground',
  },
  {
    name: 'Mini Minecraft',
    techStack: ['cplusplus', 'opengl'],
    previewImage: '/projects/under-construction/mini-minecraft.png',
    underConstruction: true,
  },
  {
    name: 'AntsWorld',
    techStack: ['typescript', 'react'],
    previewImage: '/projects/under-construction/antsworld.png',
    underConstruction: true,
    link: 'https://github.com/printer83mph/ants-world',
  },
  {
    name: 'SDF Ray Marching Engine',
    techStack: ['cplusplus', 'opengl'],
    previewImage: '/projects/under-construction/sdf-kirby.png',
    underConstruction: true,
  },
  {
    name: 'Procedural City',
    techStack: ['houdini', 'python', 'blender', 'unreal'],
    previewImage: '/projects/under-construction/procedural-city.png',
    underConstruction: true,
    link: 'https://youtu.be/1XRC1sz3-N8',
  },
  {
    name: 'Real-Time PBR Renderer',
    techStack: ['cplusplus', 'opengl'],
    previewImage: '/projects/under-construction/pbr-sphere.png',
    underConstruction: true,
  },
  {
    name: 'Monte Carlo Path Tracer',
    techStack: ['cplusplus', 'opengl'],
    previewImage: '/projects/under-construction/pathtracer.png',
    underConstruction: true,
  },
  {
    name: 'Mini Maya',
    techStack: ['cplusplus', 'opengl'],
    previewImage: '/projects/under-construction/mini-maya.png',
    underConstruction: true,
  },
];

export default function ProjectsPage() {
  return (
    <main>
      {projects.map((props, index) => (
        <ProjectView
          key={props.name}
          {...(props as ProjectViewProps)}
          appearDelay={`${index * 150}ms`}
        />
      ))}
      <div className="h-[10vh] max-h-[200px]" />
    </main>
  );
}
