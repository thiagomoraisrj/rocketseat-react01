import React, { useState } from "react";

import "./App.css";
import backgroundImage from "./assets/background.jpeg";

import Header from "./components/Header";

function App() {
  const [projects, setProjects] = useState([
    "Desenvoldimento de App",
    "Font-end web",
  ]);

  function handleAddProject() {
    setProjects([...projects, `Novo projeto ${Date.now()}`]);
    console.log(projects);
  }

  return (
    <>
      <Header title="Projects" />

      <img src={backgroundImage} width={300} />

      <ul>
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>
      <button type="button" onClick={handleAddProject}>
        Adicionar Projeto
      </button>
    </>
  );
}

export default App;
