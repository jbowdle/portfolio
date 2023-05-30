import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const PROJECT_DATA = [
  { id: "project-0", image: "assets/placeholder.png", alt: "Placeholder image for an example project", name: "Example Project 1" },
  { id: "project-1", image: "assets/placeholder.png", alt: "Placeholder image for an example project", name: "Example Project 2" },
  { id: "project-2", image: "assets/placeholder.png", alt: "Placeholder image for an example project", name: "Example Project 3" },
  { id: "project-3", image: "assets/placeholder.png", alt: "Placeholder image for an example project", name: "Example Project 4" },
  { id: "project-4", image: "assets/placeholder.png", alt: "Placeholder image for an example project", name: "Example Project 5" },
  { id: "project-5", image: "assets/placeholder.png", alt: "Placeholder image for an example project", name: "Example Project 6" },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App projects={PROJECT_DATA}/>
  </React.StrictMode>
);