import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
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
  );
}