import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";

// Clicking the burger icon will open and close nav
// function handleBurgerClick() {
//   const navLinks = document.querySelectorAll(".nav-link");
//   for (const link of navLinks){
//     if (link.style.display === "block") {
//       link.style.display = "none";
//     } else {
//       link.style.display = "block";
//     }
//   }
// }



// function collapseNav() {
//   const navLinks = document.querySelectorAll(".nav-link");
//   for (const link of navLinks){
//     if (link.style.display === "block") {
//       link.style.display = "none";
//     }
//   }
// }

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
