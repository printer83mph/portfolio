import ProjectView, { ProjectViewProps } from './project-view';

const projects: Omit<ProjectViewProps, 'appearDelay'>[] = [
  {
    name: 'SDF Playground',
    projectSlug: 'sdf-playground',
    techStack: ['typescript', 'webgl'],
    color: 'rgb(140, 46, 123)',
    previewImage: 'troll',
    underConstruction: true,
  },
  {
    name: 'Minier Minecraft',
    projectSlug: 'minier-minecraft',
    techStack: ['typescript', 'three'],
    color: 'rgb(23, 155, 152)',
    previewImage: 'troll',
  },
  {
    name: 'Mini Minecraft',
    projectSlug: 'mini-minecraft',
    techStack: ['cplusplus', 'opengl'],
    color: 'rgb(65, 131, 75)',
    previewImage: 'troll',
  },
  {
    name: 'Government Cheese',
    projectSlug: 'govcheese',
    techStack: ['nextjs', 'react', 'mongo'],
    color: 'rgb(179, 109, 71)',
    previewImage: 'troll',
  },
  {
    name: 'AntsWorld',
    projectSlug: 'antsworld',
    techStack: ['react', 'vite', 'socketio'],
    color: 'rgb(80, 80, 80)',
    previewImage: 'troll',
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
    </main>
  );
}
