// serves as the index page

export default function About() {
  const pageTitle = "John Bowdle's Portfolio - About";

  if (document.title !== pageTitle) {
    document.title = pageTitle;
  }

  return (
    <div id="about">
      <img src="./assets/profile-pic-cropped.jpg" alt="John Bowdle" id="profile-pic"></img>
      <div id="bio">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet molestie massa. Cras semper iaculis erat id fringilla. Curabitur scelerisque lorem urna, quis tincidunt arcu malesuada nec. Vivamus massa diam, pretium vitae molestie nec, congue ac est. Integer feugiat eleifend nibh eu iaculis. Quisque tincidunt sapien a orci tempor imperdiet. Ut egestas, est a scelerisque dictum, ante orci congue mi, eu porttitor velit massa quis diam. Praesent sit amet tristique risus. Ut et tincidunt dolor. Vivamus cursus massa ac libero elementum, eu cursus libero eleifend. Ut elementum dolor lectus, non malesuada augue iaculis ornare. Duis suscipit nulla non ligula posuere, non dignissim nunc gravida. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam rhoncus lorem lorem, eget cursus lacus laoreet et. Vestibulum ut congue tortor, a ultricies nunc. Ut hendrerit efficitur magna, quis aliquet nibh venenatis a.
        </p>
        <p>
          Praesent venenatis, metus a vestibulum egestas, magna est tincidunt nulla, non euismod enim odio eget ipsum. Maecenas ut nisl quis urna egestas dictum. Vivamus purus orci, dictum at vestibulum quis, rutrum gravida lacus. Ut hendrerit sapien sit amet arcu mollis, vitae gravida nibh commodo. Nam et faucibus elit. Vestibulum nec ornare felis, in porta nunc. Nunc venenatis lobortis sagittis. Morbi sollicitudin felis eu metus consectetur, ac bibendum risus tempus. Maecenas justo est, placerat ut mi sed, auctor egestas nulla. Sed eget erat in felis euismod condimentum in at eros. Sed at mauris suscipit, ultrices tellus vitae, posuere turpis. Vivamus quis mollis tortor. Praesent malesuada lectus eget arcu gravida suscipit.
        </p>
      </div>
    </div>
  )
}