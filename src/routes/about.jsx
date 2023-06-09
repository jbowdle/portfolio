// serves as the index page

export default function About() {
  const pageTitle = "John Bowdle's Portfolio - About";

  if (document.title !== pageTitle) {
    document.title = pageTitle;
  }

  return (
    <div>
      <h1>About Me</h1>
    </div>
  )
}