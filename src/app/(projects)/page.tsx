import ProjectView from './project-view';

export default function ProjectsPage() {
  return (
    <main>
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
      <ProjectView
        name="AntsWorld"
        projectSlug="troll"
        color="rgb(80, 80, 80)"
        previewImage="troll"
      />
    </main>
  );
}
