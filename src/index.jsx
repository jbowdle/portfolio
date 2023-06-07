import React from "react";
import ReactDOM from "react-dom/client";
import { 
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import About from "./routes/about";
import Portfolio from "./routes/portfolio";
import Resume from "./routes/resume";
import ProjectPage from "./routes/project-page"

const PROJECT_DATA = [
  { id: "project-0", image: "assets/placeholder.png", alt: "Placeholder image for an example project", name: "Example Project 1" },
  { id: "project-1", image: "assets/placeholder.png", alt: "Placeholder image for an example project", name: "Example Project 2" },
  { id: "project-2", image: "assets/placeholder.png", alt: "Placeholder image for an example project", name: "Example Project 3" },
  { id: "project-3", image: "assets/placeholder.png", alt: "Placeholder image for an example project", name: "Example Project 4" },
  { id: "project-4", image: "assets/placeholder.png", alt: "Placeholder image for an example project", name: "Example Project 5" },
  { id: "project-5", image: "assets/placeholder.png", alt: "Placeholder image for an example project", name: "Example Project 6" },
]

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <About />},
          {
            path: "project-portfolio",
            element: <Portfolio projects={PROJECT_DATA}/>,
          },
          {
            path: "resume",
            element: <Resume />,
          },
          {
            path: "project",
            element: <ProjectPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )