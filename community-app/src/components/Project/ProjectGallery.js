/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components
import ProjectsCarousel from '../Home/ProjectsCarousel';

// Styles
import './project.scss';

/**
 * Code
 */
const ProjectGallery = () => (
  <div id="project-gallery" className="bg-project-darker d-flex justify-content-center align-items-center">
    <section id="project-gallery-wrapper">
      <h1 className="text-uppercase text-white">Le projet en images</h1>
      <ProjectsCarousel />
    </section>
  </div>
);

/**
 * Export
 */
export default ProjectGallery;
