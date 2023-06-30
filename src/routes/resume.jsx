export default function Resume() {
  const pageTitle = "John Bowdle's Portfolio - Resume";

  if (document.title !== pageTitle) {
    document.title = pageTitle;
  }

  // TODO: Transfer data from resume onto page, allowing it to be more easily viewed
  return (
    <div>
      <a href="./assets/john-bowdle-example-resume.docx" download="john-bowdle-resume">Download Resume</a>
      <h2>Developer Proficiencies</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>React Router</li>
        <li>MongoDB</li>
        <li>Node</li>
        <li>Express</li>
      </ul>
    </div>
  )
}