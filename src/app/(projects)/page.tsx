import ProjectView from './project-view';

const projects = [
  {
    name: 'SDF Playground',
    projectSlug: 'sdf-playground',
    color: 'rgb(255, 0, 0)',
    previewImage: 'troll',
    underConstruction: true,
  },
  {
    name: 'Minier Minecraft',
    projectSlug: 'minier-minecraft',
    color: 'rgb(0, 150, 150)',
    previewImage: 'troll',
  },
  {
    name: 'Government Cheese',
    projectSlug: 'govcheese',
    color: 'rgb(170, 170, 0)',
    previewImage: 'troll',
  },
  {
    name: 'AntsWorld',
    projectSlug: 'antsworld',
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
