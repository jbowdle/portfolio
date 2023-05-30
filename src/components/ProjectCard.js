import React from "react";

function ProjectCard(props) {
  return (
    <li className="project">
      <div className="image-div">
        <p>img goes here</p>
      </div>
      <div className="title-card">
        <p>{props.name}</p>
      </div>
    </li>
  );
}

export default ProjectCard;