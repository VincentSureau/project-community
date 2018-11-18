/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components
import ArrowDown from '../ArrowDown';
import ProjectPresentation from './ProjectPresentation';
import ProjectGallery from './ProjectGallery';
// Styles
import './project.scss';


/**
 * Code
 */
const Project = () => (
  <div id="project">
    <section id="project-presentation" className="d-flex flex-column justify-content-center align-items-center bg-h-100vh bg-project">
      <h1>Productize</h1>
      <div id="project-project-pc">
        <div id="project-project-pc-screen">
          <img src="/src/images/project1.png" alt="" />
        </div>
      </div>
      <ArrowDown />
    </section>
    <ProjectPresentation />
    <ProjectGallery />
  </div>

);

/**
 * Export
 */
export default Project;
