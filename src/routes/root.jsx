import { Outlet, NavLink } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Root(props) {
  return (
    <div id="page-container">
      <Header />
      <main>
        <section className="section-main">
          <Outlet projects={props.projects}/>
        </section>
      </main>
      <Footer />
    </div>
  );
}