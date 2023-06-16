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
import ProjectPage, { loader as projectLoader } from "./routes/project-page"
import PROJECT_DATA from "./projectData";

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
            path: "project/:projectName",
            element: <ProjectPage projects={PROJECT_DATA}/>,
            loader: projectLoader,
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