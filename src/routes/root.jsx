import { Outlet, NavLink } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <header>
        <h1>John Bowdle</h1>
        <div className="burger">
          <nav>
            <NavLink 
              to="/" 
              className={({ isActive, isPending }) => 
                isPending ? "pending" : isActive ? "active" : ""
              } 
            >
              About
            </NavLink>
            <i className="burger-bar"></i>
            <NavLink 
              to="/project-portfolio" 
              className={({ isActive, isPending }) => 
                isPending ? "pending" : isActive ? "active" : ""
              } 
            >
              Project Portfolio
            </NavLink>
            <i className="burger-bar"></i>
            <NavLink 
              to="/resume" 
              className={({ isActive, isPending }) => 
                isPending ? "pending" : isActive ? "active" : ""
              } 
            >
              Resume
            </NavLink>
            <i className="burger-bar"></i>
          </nav>
        </div>
      </header>
      <aside>
        
      </aside>
      <main>
        <section className="section-main">
          <Outlet />
        </section>
      </main>
      <footer>
        <p>Github: <a href="https://github.com/jbowdle">jbowdle</a></p>
      </footer>
    </div>
  );
}