import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const PROJECT_DATA = [
  { id: "project-0", name: "Example Project 1" },
  { id: "project-1", name: "Example Project 2" },
  { id: "project-2", name: "Example Project 3" },
  { id: "project-3", name: "Example Project 4" },
  { id: "project-4", name: "Example Project 5" },
  { id: "project-5", name: "Example Project 6" },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App projects={PROJECT_DATA}/>
  </React.StrictMode>
);