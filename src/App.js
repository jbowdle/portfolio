import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";

function App(props) {
  const projectList = props.projects.map((project) => (
    <ProjectCard id={project.id} name={project.name} key={project.id}/>
  ));

  return (
    <div>
      <header>
        <h1>John Bowdle's Portfolio</h1>
        <Nav />
      </header>
      <main>
        {projectList}
      </main>
      <Footer /> 
    </div>
  );
}

export default App;
