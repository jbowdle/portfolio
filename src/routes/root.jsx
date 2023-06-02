export default function Root() {
  return (
    <div>
      <header>
        <h1>John Bowdle</h1>
        <div className="burger">
          <nav>
            <a>About</a>
            <i className="burger-bar"></i>
            <a>Coding Projects</a>
            <i className="burger-bar"></i>
            <a>Resume</a>
            <i className="burger-bar"></i>
          </nav>
        </div>
      </header>
      <aside>
        
      </aside>
      <main>
        <section className="section-main">
          <ul className="project-container">
            {/* {projectList} */}
          </ul>
        </section>
      </main>
      <footer>
        <p>Github: <a href="https://github.com/jbowdle">jbowdle</a></p>
      </footer>
    </div>
  );
}