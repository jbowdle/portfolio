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
    <div>
      <div className="project-gallery">
        <img src={`../../${projectData.image}`} alt={projectData.alt}/>
      </div>
      <div className="project-info">
        <h1>{displayName}</h1>
        <div>
          <p>{projectData.desc}</p>
          <a href={projectData.repoLink}>Project Repo</a>
          {/* <a href={projectData.deployedLink}>Deployed Project</a> */}
        </div>
      </div>
    </div>
  )
}