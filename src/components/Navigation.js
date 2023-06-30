import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      {/* active and pending classes are used to highlight the current page */}
      <NavLink 
        to="/" 
        className={({ isActive, isPending }) => 
          isPending ? "pending" : isActive ? "active" : ""
        } 
      >
        About
      </NavLink>
      <div>/</div>
      <NavLink 
        to="/project-portfolio" 
        className={({ isActive, isPending }) => 
          isPending ? "pending" : isActive ? "active" : ""
        } 
      >
        Project Portfolio
      </NavLink>
      <div>/</div>
      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Contact
      </NavLink>
      <div>/</div>
      <NavLink 
        to="/resume" 
        className={({ isActive, isPending }) => 
          isPending ? "pending" : isActive ? "active" : ""
        } 
      >
        Resume
      </NavLink>
    </nav>
  );
}