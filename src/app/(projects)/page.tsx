import ProjectView, { ProjectViewProps } from './project-view';

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
  // TODO: more projects
  // {
  //   name: 'Mini Minecraft',
  //   projectSlug: 'mini-minecraft',
  //   techStack: ['cplusplus', 'opengl'],
  //   color: 'rgb(65, 131, 75)',
  //   previewImage: 'https://placekitten.com/1280/960',
  // },
  // {
  //   name: 'AntsWorld',
  //   projectSlug: 'antsworld',
  //   techStack: ['react', 'vite', 'socketio'],
  //   color: 'rgb(80, 80, 80)',
  //   previewImage: 'https://placekitten.com/1280/960',
  // },
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
    </main>
  );
}
