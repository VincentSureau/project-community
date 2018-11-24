/**
 * NPM import
 */
import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import { MdHttp } from 'react-icons/md';
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
const ProjectLink = ({ projectLink, projectVideo }) => (
  <div id="project-link" className="bg-project-darker d-flex flex-column justify-content-center align-items-center">
    <h1>Découvrez-en plus !</h1>
    <div id="project-link-icons" className="m-4">
      {/* Les icones ne sont affichées que si les membres ont renseigné les champs correspondants */}
      {projectLink !== '' && <a href={projectLink} className="text-white m-4"><MdHttp /></a>}
      {projectVideo !== '' && <a href={projectVideo} className="text-white m-4"><FaYoutube /></a>}
    </div>
  </div>
);

ProjectLink.propTypes = {
  projectLink: PropTypes.string.isRequired,
  projectVideo: PropTypes.string.isRequired,
};

/**
 * Export
 */
export default ProjectLink;
