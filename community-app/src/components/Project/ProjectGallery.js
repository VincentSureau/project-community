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
  <div id="project-gallery" className="bg-project d-flex justify-content-center align-items-center">
    <div id="project-gallery-wrapper">
      <ProjectsCarousel />
    </div>
  </div>


);

/**
 * Export
 */
export default ProjectGallery;
