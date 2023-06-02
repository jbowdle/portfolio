import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";

const PROJECT_DATA = [
  { id: "project-0", image: "assets/placeholder.png", alt: "Placeholder image for an example project", name: "Example Project 1" },
  { id: "project-1", image: "assets/placeholder.png", alt: "Placeholder image for an example project", name: "Example Project 2" },
  { id: "project-2", image: "assets/placeholder.png", alt: "Placeholder image for an example project", name: "Example Project 3" },
  { id: "project-3", image: "assets/placeholder.png", alt: "Placeholder image for an example project", name: "Example Project 4" },
  { id: "project-4", image: "assets/placeholder.png", alt: "Placeholder image for an example project", name: "Example Project 5" },
  { id: "project-5", image: "assets/placeholder.png", alt: "Placeholder image for an example project", name: "Example Project 6" },
]

function App(props) {
  const projectList = props.projects.map((project) => (
    <ProjectCard id={project.id} image={project.image} alt={project.alt} name={project.name} key={project.id}/>
  ));

  return (
    <div>
      <header>
        <h1>John Bowdle</h1>
        <div className="burger">
          <Nav />
        </div>
      </header>
      <aside>
        
      </aside>
      <main>
        <section className="section-main">
          <ul className="project-container">
            {projectList}
          </ul>
        </section>
      </main>
      <Footer /> 
    </div>
  );
}

export default App;
