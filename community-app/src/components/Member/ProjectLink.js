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
import { API_URL } from '../../configuration';

// Styles
import './member.scss';

/**
 * Code
 */
const ProjectLink = ({
  projectName,
  projectImages,
  projectSlug,
}) => {
  if (projectImages != null) {
    // Récupération de l'image principale du projet grâce à la fonction filter
    const heroImage = projectImages.filter(projectImage => projectImage.isHero === true);

    return (
      <section id="member-projectlink" className="bg-member d-flex align-items-center flex-column">
        <h2>Mon Projet <br />de fin d'étude</h2>
        <h3>{projectName}</h3>
        <NavLink exact to={''.concat('/projects/', projectSlug)} className="no-blue-on-link d-flex flex-column align-items-center">
          <div id="member-project-pc">
            <div id="member-project-pc-screen">
              <img src={`${API_URL}/img/projects/${heroImage[0].contentUrl}`} alt="" />
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
  projectName: PropTypes.string,
  projectImages: PropTypes.arrayOf(PropTypes.object),
  projectSlug: PropTypes.string,
};

ProjectLink.defaultProps = {
  projectName: '',
  projectImages: [{
    id: '/images/909',
    type: 'Image',
    contentUrl: 'https://testinsane.com',
    isHero: true,
  }],
  projectSlug: '',
};

/**
 * Export
 */
export default ProjectLink;
