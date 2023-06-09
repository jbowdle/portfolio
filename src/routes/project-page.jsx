import { useLoaderData } from "react-router";

export async function loader({ params }) {
  const projectName = params.projectName;
  return projectName;
}

export default function ProjectInfo(props) {
  const projectName = useLoaderData();

  const projectData = props.projects.find((project) => {
    if (project.name === projectName) {
      return project
    }
  });

  // changes dashes in project name to allow for better display
  const displayName = projectData.name.replaceAll("-", " ");

  const pageTitle = `John Bowdle's Portfolio - ${displayName}`;
  if (document.title !== pageTitle) {
    document.title = pageTitle;
  }

  return (
    // example HTML
    <div>
      <div className="project-gallery">
        <img src={`../../${projectData.image}`}/>
      </div>
      <div className="project-info">
        <h1>Proj: {displayName}</h1>
        <div>
          <p>{projectData.desc}</p>
          <a href={projectData.repoLink}>Link to Project Repo</a>
          <a href={projectData.deployedLink}>Link to deployed Project</a>
        </div>
      </div>
    </div>
  )
}