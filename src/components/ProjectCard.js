import React from "react";

function ProjectCard(props) {
  return (
    <li className="project-card">
      {/* TODO: let this accept specific pages through props */}
      <a href="/project">
        <div className="image-div">
          <img src={props.image} alt={props.alt}></img>
        </div>
        <div className="title-card">
          <p>{props.name}</p>
        </div>
      </a>
    </li>
  );
}

export default ProjectCard;