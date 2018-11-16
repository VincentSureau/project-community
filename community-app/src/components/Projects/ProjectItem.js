/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components

// Styles
import './projects.scss';

/**
 * Code
 */
const ProjectItem = () => (
  <div id="projectitem" className="col-6">
    <img id="projectitem-photo" src="/src/images/project1.png" alt="" />
    <h1 id="projectitem-title" className="text-uppercase">Productize</h1>
    <p id="projectitem-prom" className="text-uppercase">#Krypton</p>
    <span className="projectitem-tag">Wordpress</span><span className="projectitem-tag">Symfony</span><span className="projectitem-tag">React</span>
  </div>
);

/**
 * Export
 */
export default ProjectItem;
