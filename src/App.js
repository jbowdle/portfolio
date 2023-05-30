import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";

function App(props) {
  const projectList = props.projects.map((project) => (
    <ProjectCard id={project.id} image={project.image} alt={project.alt} name={project.name} key={project.id}/>
  ));

  return (
    <div>
      <header>
        <h1>John Bowdle's Portfolio</h1>
        <Nav />
      </header>
      <main>
        <section class="section-main">
          <ul class="project-container">
            {projectList}
          </ul>
        </section>
      </main>
      <Footer /> 
    </div>
  );
}

export default App;
