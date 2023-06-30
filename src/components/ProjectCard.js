import React from "react";

export default function Project(props) {
  // changes dashes in project name to allow for better display
  const displayName = props.name.replaceAll("-", " ");

  return (
    <li className="project-card">
      {/* remove /portfolio/# if not using hashrouter */}
      <a href={`/portfolio/#/project/${props.name}`}>
        <div className="title-card">
          <p>{displayName}</p>
        </div>
        <div className="image-div">
          <img src={`${props.image}`} alt={props.alt}></img>
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