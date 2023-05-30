import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <div>
      <header>

      </header>
      <nav>
        <a>Coding Projects</a>
        <a>Resume</a>
        <a>Bio</a>
      </nav>
      <main>
        <ProjectCard name="example 1" />
        <ProjectCard name="example 2" />
      </main>
      <footer>
        {/* Place contact info here */}
      </footer>
    </div>
  );
}

export default App;
