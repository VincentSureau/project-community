/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Components
import ProjectCarousel from './ProjectCarousel';

// Styles
import './project.scss';

/**
 * Code
 */
const ProjectGallery = ({ images }) => (
  <div id="project-gallery" className="bg-project-darker d-flex justify-content-center align-items-center">
    <section id="project-gallery-wrapper">
      <h1 className="text-uppercase text-white">Le projet en images</h1>
      <div id="project-gallery-pc">
        <div id="project-gallery-pc-screen">
          <ProjectCarousel images={images} />
        </div>
      </div>
    </section>
  </div>
);

ProjectGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

/**
 * Export
 */
export default ProjectGallery;
