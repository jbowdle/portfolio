import ProjectCard from "../components/ProjectCard";

const PROJECT_DATA = [
  { id: "project-0", image: "assets/placeholder.png", alt: "Placeholder image for an example project", name: "Example Project 1" },
  { id: "project-1", image: "assets/placeholder.png", alt: "Placeholder image for an example project", name: "Example Project 2" },
  { id: "project-2", image: "assets/placeholder.png", alt: "Placeholder image for an example project", name: "Example Project 3" },
  { id: "project-3", image: "assets/placeholder.png", alt: "Placeholder image for an example project", name: "Example Project 4" },
  { id: "project-4", image: "assets/placeholder.png", alt: "Placeholder image for an example project", name: "Example Project 5" },
  { id: "project-5", image: "assets/placeholder.png", alt: "Placeholder image for an example project", name: "Example Project 6" },
]

export default function Projects() {
  const projectList = PROJECT_DATA.map((project) => (
    <ProjectCard id={project.id} image={project.image} alt={project.alt} name={project.name} key={project.id}/>
  ));

  return (
    <ul className="project-container">
      {projectList}
    </ul>
  )
}