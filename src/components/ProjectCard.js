import React from "react";

function ProjectCard(props) {
  // changes dashes in project name to allow for better display
  const displayName = props.name.replaceAll("-", " ");

  return (
    <li className="project-card">
      <a href={`/project/${props.name}`}>
        <div className="image-div">
          <img src={props.image} alt={props.alt}></img>
        </div>
        <div className="title-card">
          <p>{displayName}</p>
        </div>
        <div className="tags">
          <ul>
            <li>tags go here</li>
          </ul>
        </div>
      </a>
    </li>
  );
}

export default ProjectCard;