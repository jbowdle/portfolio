import Project from "../components/ProjectCard";

export default function Portfolio(props) {
  const pageTitle = "John Bowdle's Portfolio - Portfolio";

  if (document.title !== pageTitle) {
    document.title = pageTitle;
  }

  const projectList = props.projects.map((project) => (
    <Project id={project.id} image={project.image} alt={project.alt} name={project.name} key={project.id}/>
  ));

  return (
    <div className="portfolio-container">
      <h2>Web Development Portfolio</h2>
      <ul className="project-container">
        {projectList}
      </ul>
    </div>
    
  )
}