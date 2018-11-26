/**
 * NPM import
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Components

// Styles
import './home.scss';
import ProjectsCarousel from './ProjectsCarousel';

/**
 * Code
 */
const RandomProjects = ({ projects }) => (
  <section id="home-projects" className="d-flex flex-column justify-content-center align-items-center full-height bg-home">
    <h2 id="home-projects-title">Leurs projets <br /> de fin d'étude</h2>
    <h3 id="home-projects-subtitle">En un mois, on obtient cela !</h3>
    <div id="home-projects-pc">
      <ProjectsCarousel projects={projects} />
    </div>
    <NavLink
      className="btn btn-outline-white m-5 btn-border-radius text-uppercase"
      exact
      to="/projects"
    >
      Voir tous les projets
    </NavLink>
  </section>
);

RandomProjects.propTypes = {
  projects: PropTypes.array.isRequired,
};


/**
 * Export
 */
export default RandomProjects;
