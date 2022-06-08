import ProjectsPage from "./projects/ProjectsPage";
import React from "react";

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <ProjectsPage />
      </div>
    );
  }
}
