import React from "react";

function expandNav() {
  // TODO: clicking the entire burger, not just the down arrow, should be capable of expanding the nav
  const navLinks = document.querySelectorAll(".nav-link");
  for (const link of navLinks){
    // if (link.style.display === "none") did not function correctly.
    // This necessitated the use of the data values, but it may be good to look for a cleaner solution
    if (link.dataset.display === "hidden") {
      link.style.display = "block";
      link.dataset.display = "visible";
    }
  }

  const collapseBtn = document.querySelector("#collapse");
  const expandBtn = document.querySelector("#expand");

  collapseBtn.style.display = "block";
  expandBtn.style.display = "none";

  collapseBtn.dataset.display = "visible";
  expandBtn.dataset.display = "hidden";
}

function collapseNav() {
  const navLinks = document.querySelectorAll(".nav-link");
  for (const link of navLinks){
    if (link.style.display === "block") {
      link.style.display = "none";
      link.dataset.display = "hidden";
    }
  }

  const collapseBtn = document.querySelector("#collapse");
  const expandBtn = document.querySelector("#expand");

  collapseBtn.style.display = "none";
  expandBtn.style.display = "block";

  collapseBtn.dataset.display = "hidden";
  expandBtn.dataset.display = "visible";
}

function Nav(props) {
  return (
    <nav>
      {/* TODO: Collapse and expand buttons should be changed to arrows */}
      <button id="collapse" data-display="hidden" onClick={collapseNav}>Collapse</button>
      <a className="nav-link" data-display="hidden">About</a>
      <i className="burger-bar"></i>
      <a className="nav-link" data-display="hidden">Coding Projects</a>
      <i className="burger-bar"></i>
      <a className="nav-link" data-display="hidden">Resume</a>
      <i className="burger-bar"></i>
      <button id="expand" data-display="visible" onClick={expandNav}>Expand</button>
    </nav>
  );
}

export default Nav;