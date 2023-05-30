import React from "react";

function ProjectCard(props) {
  return (
    <li className="project-card">
      <div className="image-div">
        <img src={props.image} alt={props.alt}></img>
      </div>
      <div className="title-card">
        <p>{props.name}</p>
      </div>
    </li>
  );
}

export default ProjectCard;