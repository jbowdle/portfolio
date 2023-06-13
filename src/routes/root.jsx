import { Outlet, NavLink } from "react-router-dom";

export default function Root(props) {
  return (
    <div>
      <header>
        <h1>John Bowdle</h1>
      </header>
      <nav>
        <NavLink 
          to="/" 
          className={({ isActive, isPending }) => 
            isPending ? "pending" : isActive ? "active" : ""
          } 
        >
          About
        </NavLink>
        <NavLink 
          to="/project-portfolio" 
          className={({ isActive, isPending }) => 
            isPending ? "pending" : isActive ? "active" : ""
          } 
        >
          Project Portfolio
        </NavLink>
        <NavLink 
          to="/resume" 
          className={({ isActive, isPending }) => 
            isPending ? "pending" : isActive ? "active" : ""
          } 
        >
          Resume
        </NavLink>
      </nav>
      <aside>
        
      </aside>
      <main>
        <section className="section-main">
          <Outlet projects={props.projects}/>
        </section>
      </main>
      <footer>
        <p>Github: <a href="https://github.com/jbowdle">jbowdle</a></p>
      </footer>
    </div>
  );
}