/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components
import SingleMember from '../SingleMember';

// Styles
import './project.scss';

/**
 * Code
 */
const ProjectDescription = () => (
  <div id="project-teamtech" className="bg-project-darker">
    <section id="project-team">
      <img id="project-team-logo" src="/src/images/user-astronaut-solid.png" alt="" />
      <h1 className="text-uppercase text-white">La team</h1>
      <div id="project-team-list" className="row">
        <SingleMember />
        <SingleMember />
        <SingleMember />
        <SingleMember />
      </div>
    </section>
    <section id="project-tech">
      <h3 id="project-tech-title" className="text-uppercase">Technologies utilisées</h3>
      <div className="mt-3 d-flex flex-wrap justify-content-center">
        <span className="project-tech-tag">HTML5</span>
        <span className="project-tech-tag">CSS</span>
        <span className="project-tech-tag">Bootstrap</span>
        <span className="project-tech-tag">Git</span>
        <span className="project-tech-tag">Javascript</span>
        <span className="project-tech-tag">PHP</span>
      </div>
    </section>
  </div>


);

/**
 * Export
 */
export default ProjectDescription;
