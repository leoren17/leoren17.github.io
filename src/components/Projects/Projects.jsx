import React from "react";
import "./projects.css";

const Projects = () => {
  return (
    <section id="projects">
      <h1 class="title">My Projects</h1>
      <div className="project-grid">
        <div className="project-container">
          <img src="/movie-app.png" alt="" className="project-img" />
          <div className="description">
            <h5 className="p-title">Movie Search</h5>
            <ul className="list">
              <li>Responsive movie searching website </li>
              <li>Uses the OMDb API to fetch real-time movie data</li>
              <li>React, JavaScript, CSS, HTML</li>
            </ul>
            <div className="buttons">
              <a href="https://github.com/leoren17/movie-app" target="_blank">
                <button className="btn btn-color-2">Github</button>
              </a>
            </div>
          </div>
        </div>

        <div className="project-container">
          <img src="/calculator.png" alt="" className="project-img" />
          <div className="description">
            <h5 className="p-title">Calculator</h5>
            <ul className="list">
              <li>Simple Calculator using Immediate Execution Logic</li>
              <li>Uses Regex to define filters that match patterns in user inputs</li>
              <li>React, JavaScript, CSS, HTML</li>
            </ul>
            <div className="buttons">
              <a href="https://github.com/leoren17/calculator" target="_blank">
                <button className="btn btn-color-2">Github</button>
              </a>
              <a href="https://leoren17.github.io/calculator/" target="_blank">
                <button className="btn btn-color-2">Website</button>
              </a>
            </div>
          </div>
        </div>

        <div className="project-container">
          <img src="/biz.png" alt="" className="project-img" />
          <div className="description">
            <h5 className="p-title">Biz Wiz</h5>
            <ul className="list">
              <li>E-commerce website </li>
              <li>Implemented REST APIs to retrieve, send, update, and delete user data</li>
              <li>React, JavaScript, CSS, HTML, Django </li>
            </ul>
            <div className="buttons">
              <a href="https://github.com/leoren17/team-project-16-biz-wiz" target="_blank">
                <button className="btn btn-color-2">Github</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
