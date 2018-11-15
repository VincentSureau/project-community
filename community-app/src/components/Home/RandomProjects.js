/**
 * NPM import
 */
import React from 'react';

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
const RandomProjects = () => (
  <section id="home-projects" className="d-flex flex-column justify-content-center align-items-center full-height bg-home">
    <h2 id="home-projects-title" className="text-uppercase">Leurs projets <br /> de fin d'étude</h2>
    <h3 id="home-projects-subtitle" className="text-uppercase">En un mois, on obtient cela !</h3>
    <ProjectsCarousel />
    <button type="button" className="btn btn-lg bg-custom-button text-uppercase mt-7">Voir tous les projets</button>
  </section>
);

/**
 * Export
 */
export default RandomProjects;
