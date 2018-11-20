/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

/**
 * Local import
 */
// Components

// Styles
import './member.scss';

/**
 * Code
 */
const ProjectLink = ({
  projectName,
  projectId,
  projectImages,
}) => {
  if (projectImages != null) {
    const heroImage = projectImages.filter(projectImage => projectImage.isHero === true);

    return (
      <section id="member-projectlink" className="bg-member d-flex align-items-center flex-column">
        <h2>Mon Projet <br />de fin d'étude</h2>
        <h3>{projectName}</h3>
        <NavLink exact to={projectId} className="no-blue-on-link d-flex flex-column align-items-center">
          <div id="member-project-pc">
            <div id="member-project-pc-screen">
              <img src={heroImage[0].imageLink} alt="" />
            </div>
          </div>
          <button type="button" className="btn btn-outline-white mx-3 btn-border-radius text-uppercase mt-7">C'est par ici</button>
        </NavLink>
      </section>
    );
  }
  return (
    <p>Loading</p>
  );
};

ProjectLink.propTypes = {
  projectName: PropTypes.string.isRequired,
  projectId: PropTypes.string.isRequired,
  projectImages: PropTypes.array.isRequired,
};

/**
 * Export
 */
export default ProjectLink;
