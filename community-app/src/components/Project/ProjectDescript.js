/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Components

// Styles
import './project.scss';

/**
 * Code
 */
const ProjectDescript = ({ description }) => (
  <div id="project-descript" className="bg-project">
    <section id="project-description">
      <h1 className="text-uppercase text-white">Description</h1>
      <div id="project-description-paragraphe">
        <p>{description}</p>
      </div>
    </section>
  </div>
);

ProjectDescript.propTypes = {
  description: PropTypes.string.isRequired,
};

/**
 * Export
 */
export default ProjectDescript;
