/**
 * NPM import
 */
import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import { MdHttp } from 'react-icons/md';

/**
 * Local import
 */
// Components

// Styles
import './project.scss';

/**
 * Code
 */
const ProjectLink = () => (
  <div id="project-link" className="bg-project-darker d-flex flex-column justify-content-center align-items-center">
    <h1>Découvrez-en plus !</h1>
    <div id="project-link-icons" className="m-4">
      <a href="http://www.productize.com" className="text-white m-4"><MdHttp /></a>
      <a href="http://www.youtube.com" className="text-white m-4"><FaYoutube /></a>
    </div>

  </div>
);

/**
 * Export
 */
export default ProjectLink;
