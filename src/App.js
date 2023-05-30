import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <div>
      <header>
        <h1>John Bowdle's Portfolio</h1>
        <Nav />
      </header>
      <main>
        <ProjectCard name="example 1" />
        <ProjectCard name="example 2" />
      </main>
      <Footer /> 
    </div>
  );
}

export default App;
