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
            element: <Portfolio />,
          },
          {
            path: "Resume",
            element: <Resume />,
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